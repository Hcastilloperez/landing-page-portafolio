# Deploy Landing Page - Proxmox LXC

## Requisitos Previos
- LXC Debian/Ubuntu (CT **107**)
- IP: **192.168.1.59**
- Nginx
- Node.js 20+
- pnpm
- PM2

---

## ⚡ Deploy instantáneo (método recomendado)

> El LXC solo tiene **512 MiB RAM y 1 vCPU**. Compilar Next.js 16 allí tarda ~10 min
> y se cuelga por swap. La solución es **compilar en la máquina local (2s) y subir
> solo el build standalone**.

Desde la máquina local (Windows/PowerShell):

```powershell
# Compila localmente, empaqueta .next/standalone, lo sube y reinicia PM2
.\deploy.ps1
```

Qué hace `deploy.ps1`:
1. `pnpm build` local (usa `output: 'standalone'` en `next.config.mjs`)
2. Copia `.next/static` y `public/` dentro del standalone
3. Empaqueta `standalone/` (~50 MB) y lo sube por scp
4. En el LXC: `pm2 delete` → extrae en `.next/standalone` → `pm2 start server.js` → verifica

El servidor **nunca compila**: solo descomprime y reinicia. Deploy total ~15s.

> Nota: el standalone se compila en Windows y corre en Linux porque el output de
> Next.js es neutral de plataforma. `next.config.mjs` define `output: 'standalone'`.

## Setup inicial (una sola vez)

Si el servidor se reconfigura desde cero:

```bash
# Preparación
apt update && apt upgrade -y
apt install -y curl git nginx
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
npm install -g pnpm pm2
```

### En el LXC: PM2 con standalone

```bash
mkdir -p /var/www/hectorcastillo/landing-page
# (opcional) clonar el repo para tener el código fuente
cd /var/www/hectorcastillo/landing-page
# El deploy de .next/standalone se hace con deploy.ps1 desde la máquina local
```

## Configurar Nginx

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

## Verificar Deploy

```bash
curl -I http://localhost:3000      # Desde el LXC
curl -I http://192.168.1.59        # Desde cualquier equipo de la red
```

---

## Comandos de Mantenimiento

```bash
# Reiniciar solo la app
pm2 restart landing-page

# Reiniciar todo
systemctl restart nginx
pm2 restart landing-page

# Ver estado / logs
pm2 status
pm2 logs landing-page
```

---

## Notas
- El puerto de la app es **3000**
- El proyecto vive en `/var/www/hectorcastillo/landing-page`
- El runtime corre como `node .next/standalone/server.js` (no `next start`)
- La RAM del proceso es ~70 MB (vs 90+ MB con `next start`)
- El build se hace **localmente**; el servidor solo descomprime y reinicia
- La variable `RESEND_API_KEY` viaja dentro del standalone (`.env.local` copiado)
- No requiere base de datos
- Acceso SSH: `ssh -i ~/.ssh/id_ed25519 root@192.168.1.59`
- Si el LXC se queda colgado en un deploy: `pkill -f 'next build'` en el servidor
