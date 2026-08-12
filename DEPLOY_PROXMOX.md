# Deploy Landing Page - Proxmox LXC

## Requisitos Previos
- LXC Debian/Ubuntu (CT **107**)
- IP: **192.168.1.59**
- Nginx
- Node.js 20+
- pnpm
- PM2

---

## 1. Preparación del Sistema

```bash
# Actualizar sistema
apt update && apt upgrade -y

# Instalar dependencias
apt install -y curl git nginx
```

## 2. Instalar Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

node -v  # v20.x.x
```

## 3. Instalar pnpm y PM2

```bash
npm install -g pnpm pm2
pnpm -v
```

## 4. Clonar Repositorio (una sola vez)

```bash
mkdir -p /var/www/hectorcastillo
cd /var/www/hectorcastillo
git clone https://github.com/Hcastilloperez/landing-page-portafolio.git landing-page

cd landing-page
pnpm install
```

## 5. Build de Producción

```bash
cd /var/www/hectorcastillo/landing-page
pnpm build
```

## 6. Arrancar con PM2

```bash
pm2 start pnpm --name "landing-page" -- start
pm2 startup
pm2 save
```

### Comandos PM2 útiles
```bash
pm2 status               # Ver estado
pm2 logs landing-page    # Ver logs
pm2 restart landing-page # Reiniciar
pm2 stop landing-page    # Detener
```

## 7. Configurar Nginx

```bash
nano /etc/nginx/sites-available/landing-page
```

```nginx
server {
    listen 80;
    server_name 192.168.1.59;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
ln -s /etc/nginx/sites-available/landing-page /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

## 8. Desplegar una versión local (sin pasar por git/GitHub)

Este es el método usado para publicar versiones que no están en `main`
(por ejemplo, ramas de diseño experimentales). Se empaqueta el código
fuente desde la máquina de desarrollo y se publica en el LXC.

### Desde la máquina local (Windows/PowerShell)

```powershell
# Empaquetar el código fuente (excluye node_modules, .next y .git)
tar -czf landing-src.tar.gz --exclude=node_modules --exclude=.next --exclude=.git -C "D:\Proyectos\React\02-landing-page-portafolio" .

# Copiar al LXC
scp -i "$env:USERPROFILE\.ssh\id_ed25519" landing-src.tar.gz root@192.168.1.59:/tmp/
```

### En el LXC

```bash
cd /var/www/hectorcastillo/landing-page

# Extraer la versión sobre el código actual
tar -xzf /tmp/landing-src.tar.gz

# Limpiar build anterior e instalar dependencias
rm -rf .next
pnpm install        # si pnpm se queja por el lockfile, no usar --frozen-lockfile

# Build y reinicio
pnpm build
pm2 restart landing-page --update-env

# Verificar
curl -I http://localhost:3000
```

## 9. Verificar Deploy

```bash
curl -I http://localhost:3000      # Desde el LXC
curl -I http://192.168.1.59        # Desde cualquier equipo de la red
```

---

## Comandos de Mantenimiento

```bash
# Actualizar código (cuando la versión está en main)
cd /var/www/hectorcastillo/landing-page
git pull origin main
pnpm install
pnpm build
pm2 restart landing-page

# Reiniciar todo
systemctl restart nginx
pm2 restart landing-page
```

---

## Notas
- El puerto de la app es **3000**
- El proyecto vive en `/var/www/hectorcastillo/landing-page`
- Next.js usa `.next/` para archivos compilados
- No requiere base de datos
- Los assets estáticos se sirven desde `.next/static/`
- Acceso SSH: `ssh -i ~/.ssh/id_ed25519 root@192.168.1.59`
