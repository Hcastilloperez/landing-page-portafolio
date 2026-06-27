# Deploy Landing Page - Proxmox LXC

## Requisitos Previos
- LXC Debian/Ubuntu
- Domain o IP pública
- Nginx
- Node.js 20+
- pnpm

---

## 1. Preparación del Sistema

```bash
# Actualizar sistema
apt update && apt upgrade -y

# Instalar dependencias
apt install -y curl git nginx certbot python3-certbot-nginx
```

## 2. Instalar Node.js

```bash
# Instalar Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verificar instalación
node -v  # v20.x.x
npm -v
```

## 3. Instalar pnpm

```bash
npm install -g pnpm
pnpm -v
```

## 4. Clonar Repositorio

```bash
# Crear directorio para la app
mkdir -p /var/www/landing-page
cd /var/www/landing-page

# Clonar (usar tu usuario si es diferente)
git clone https://github.com/Hcastilloperez/landing-page-portafolio.git .

# Instalar dependencias
pnpm install
```

## 5. Build de Producción

```bash
pnpm build
```

Esto genera la carpeta `.next/` con los archivos optimizados.

## 6. Instalar PM2 para Gestión de Procesos

```bash
npm install -g pm2

# Iniciar la app
pm2 start pnpm --name "landing-page" -- start

# Guardar configuración de auto-inicio
pm2 startup
pm2 save
```

### Comandos PM2 útiles
```bash
pm2 status              # Ver estado
pm2 logs landing-page   # Ver logs
pm2 restart landing-page # Reiniciar
pm2 stop landing-page   # Detener
```

## 7. Configurar Nginx

```bash
# Crear archivo de configuración
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
# Habilitar sitio
ln -s /etc/nginx/sites-available/landing-page /etc/nginx/sites-enabled/

# Verificar configuración
nginx -t

# Recargar Nginx
systemctl reload nginx
```

## 8. SSL con Let's Encrypt

```bash
# SSL: Solo si tienes dominio. Let's Encrypt no funciona con IP pública.
# certbot --nginx -d TU_DOMINIO
```

Seguir las instrucciones interactivas. Certbot renovará automáticamente.

## 9. Verificar Deploy

```bash
# Reiniciar todo
systemctl restart nginx
pm2 restart landing-page

# Verificar estado
pm2 status
curl -I http://localhost:3000
```

---

## Comandos de Mantenimiento

```bash
# Actualizar código
cd /var/www/landing-page
git pull origin main
pnpm install
pnpm build
pm2 restart landing-page

# Renovación automática de SSL
certbot renew --dry-run
```

---

## Notas
- El puerto de la app es 3000
- Next.js usa `.next/` para archivos compilados
- No requiere base de datos
- Los assets estáticos se sirven desde `.next/static/`