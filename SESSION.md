# SESSION — Landing page Héctor Castillo

**Repo:** `D:\Proyectos\React\02-landing-page-portafolio`
**Sitio en vivo:** https://hectorcastillo.net
**Servidor:** LXC Proxmox · PM2 `landing-page` · Nginx · Cloudflare delante
**Rama:** `design/editorial-light` (commit `b5ba583`, ya subida a `origin`)

---

## Sesión 2 (8 de noviembre de 2026): rediseño oscuro + Homelab

### Estado actual
- ✅ Rediseño completo desplegado en producción con `.\deploy.ps1`. Verificado por HTTPS: `/`, `/privacidad`, `/terminos`, `/eliminacion-de-datos`, `/og-image.png` → 200.
- ✅ Commit `b5ba583` hecho y rama subida a GitHub.
- ⏳ **PR no abierto**: `gh` no está instalado. Abrir en
  https://github.com/Hcastilloperez/landing-page-portafolio/pull/new/design/editorial-light (base `main`),
  o `winget install GitHub.cli` + `gh auth login`.
  El PR incluye 6 commits (también los rediseños anteriores, productos, legales y ESLint).
- ⚠️ **Merge a `main` despliega solo (v0).** El servidor ya tiene este código por `deploy.ps1`.

### Qué se hizo
- **Dirección visual nueva:** tema oscuro (`#0c0d0b`), Geist + JetBrains Mono, acento naranja `#ff5b1f`. Tokens en `app/globals.css` (`paper`, `panel`, `ink`, `soft`, `signal`).
- **Hero:** titular «Software que se queda en producción», panel de productos en vivo (MediCitas, BarberControl, Soter), trazos SVG de circuito. **Se quitó el bloque de estadísticas** (+5 años / 3 SaaS / LATAM): el usuario lo consideró «humo».
- **Trabajo (01):** Portafolio + Productos unidos en `components/work.tsx`. BarberControl y Soter con capturas reales; MediCitas con pantalla dibujada en código (no hay captura real).
- **Servicios (02)**, **Homelab (03, nueva)**, **Sobre mí y stack (04)**, **Proceso (05)**, **WhatsApp (06)**, **Contacto (07)**.
- **Homelab** (`components/homelab.tsx`): solo datos reales de `DEPLOY_PROXMOX.md` y `deploy.ps1` (LXC, 1 vCPU, 512 MiB, Nginx, PM2, Cloudflare, flujo de deploy). Sin IPs ni número de contenedor.
- **Nombre legal:** `site.name` = «Héctor Rafael Castillo Pérez» (con tildes; la cédula va en mayúsculas sin tildes por convención). `site.brand` = «Héctor Castillo» para menú, logotipo, títulos y Open Graph. El nombre completo sale en privacidad, contacto, pie y metadatos (autor/creador/publicador).
- **`public/og-image.png`:** regenerada desde HTML con Chrome headless (tema oscuro).
- Contacto, WhatsApp, pie y legales: **texto intacto**, solo restilizados con los tokens nuevos. Se eliminó la marquesina del pie.
- Meta description: se quitó «+5 años de experiencia».

### Nano Banana / Gemini
- Hay `GEMINI_API_KEY` en `.env.local` (ignorado por Git) y `scripts/generate-images.mjs`
  (`node --env-file=.env.local scripts/generate-images.mjs [nombre]`).
- La clave es válida, **pero el plan gratis tiene cuota 0 para todos los modelos de imagen**
  (`gemini-2.5-flash-image`, `gemini-3.1-flash-image`, `gemini-3.1-flash-lite-image`, `gemini-3-pro-image`).
  Hace falta facturación activa en el proyecto de Google. Las imágenes se hicieron sin IA (SVG/CSS/HTML).
- ⚠️ La clave se pegó en el chat y `deploy.ps1` copia `.env.local` al servidor: **regenerarla**.

### Pendiente / siguiente sesión
1. **Abrir el PR** (ver arriba).
2. **Athena** — el usuario quiere darle una sección propia («mi agente de IA y orquestador de toda mi plataforma»), pero lo dejó **para después**. Para hacerla sin inventar necesito: qué orquesta, por qué canal se habla con ella, stack (modelo/framework/MCP) y si hay algo mostrable. Plan: bloque grande con diagrama de arquitectura en SVG, después de Trabajo.
   - ⚠️ El 8-nov se quitó «Athena» del sitio público por la revisión de WhatsApp Business de Meta; confirmar el estado de esa revisión antes de volver a nombrarla.
3. **Datos del homelab** para ampliar la ficha: hardware físico, almacenamiento, red, nº de contenedores/VMs, uptime publicable.
4. **Revisión visual** completa en escritorio y móvil: las capturas headless salieron a medio animar. Revisar sobre todo el titular del hero (3 líneas en 1440 px) y que el menú, ahora con 6 enlaces + «Hablemos», no quede apretado.
5. **Afirmaciones sin verificar** que quedan en el sitio: «Respuesta en menos de 24h» y «Lunes a viernes · LATAM / USA / EU» (contacto). Quitar si no son ciertas.
6. **Términos y eliminación de datos** no nombran al responsable en el texto; añadirlo si Meta lo pide.
7. Decidir si se borra `scripts/generate-images.mjs` si no se activa facturación.
8. **Cloudflare:** si un deploy no se ve, purgar caché (`s-maxage` de un año).
9. Archivos sin trackear que ya estaban: `SESSION.md`, `start.log`, `tsconfig.tsbuildinfo`. `next-env.d.ts` aparece modificado porque lo regenera Next.

### Notas técnicas de esta sesión
- El dev server servía CSS viejo (Turbopack); reiniciarlo lo arregló. Matar procesos requiere permiso explícito del usuario.
- `deploy.ps1` falla si se ejecuta con `2>&1` desde PowerShell (el warning de pnpm se vuelve error). Ejecutarlo sin redirección.
- Capturas con Chrome headless: `--virtual-time-budget=40000` para esperar las animaciones de framer-motion.
- No hay `gh` en el equipo.

---

## Sesión 1 (8 de noviembre de 2026): preparación para la revisión de Meta ✅

Productos, sección de WhatsApp con consentimiento y baja, páginas legales (`/privacidad`, `/terminos`, `/eliminacion-de-datos`), `sitemap.ts`, `robots.ts`, `og-image.png`, etiqueta `facebook-domain-verification` por variable de entorno, ESLint con flat config, formulario de contacto probado con Resend.

Reglas respetadas: no nombrar «Athena», no inventar datos, no dejar corchetes, todo accesible desde fuera de la red.

### Código de verificación de Meta (cuando Meta lo entregue)
1. Añadir a `.env.local`: `META_DOMAIN_VERIFICATION=<código>`.
2. Reconstruir y desplegar: `.\deploy.ps1` (el valor se lee en build).
3. Verificar: `curl.exe -s https://hectorcastillo.net | findstr facebook-domain`.
4. Pulsar «Verificar dominio» en Meta Business Manager.

---

## Comandos útiles

```powershell
pnpm dev            # local en http://localhost:3000
pnpm build          # build de producción (standalone)
npx tsc --noEmit    # typecheck real (el build ignora errores TS)
npm run lint
.\deploy.ps1        # build local + scp + PM2 restart (sin 2>&1)
```

Reinicio manual en el servidor:

```bash
cd /var/www/hectorcastillo/landing-page
pm2 delete landing-page
rm -rf .next/standalone
tar -xzf /tmp/landing-standalone.tar.gz -C .next
cd .next/standalone && PORT=3000 HOSTNAME=0.0.0.0 pm2 start server.js --name landing-page
pm2 save
```

---

## Datos y decisiones

- **Fuente única de datos:** `lib/site.ts` (`name` legal, `brand`, contacto, productos, enlaces legales).
- **Contacto:** Barranquilla, Colombia · +57 318 159 9454 (llamadas y WhatsApp) · contacto@hectorcastillo.net.
- **Numeración de secciones:** 01 Trabajo · 02 Servicios · 03 Homelab · 04 Sobre mí y stack · 05 Proceso · 06 WhatsApp · 07 Contacto.
- **Componentes compartidos:** `components/section-header.tsx` (encabezado de sección), `components/legal-page.tsx` (páginas legales).
- **Verificación Meta:** variable de entorno; sin variable, el sitio compila sin la etiqueta.
- **Eliminación de datos:** BAJA por WhatsApp, correo con asunto «Eliminación de datos» y teléfono; plazo de 15 días hábiles (Ley 1581 de 2012).
