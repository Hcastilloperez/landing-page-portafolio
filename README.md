# landing-page-portafolio

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_WrQNdDImHuKwTXCNM0cLQiRKIqBU)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

## Verificación de dominio en Meta

El sitio queda preparado para el código que entrega Meta (Business Manager →
Configuración del dominio → Verificación). La etiqueta se inyecta en el `<head>`
de todas las páginas cuando existe la variable:

```
META_DOMAIN_VERIFICATION=el_codigo_que_entrega_meta
```

1. Añade la variable a `.env.local`.
2. Reconstruye y despliega (`.\deploy.ps1`). El código se lee en tiempo de build,
   así que un cambio de valor requiere un nuevo build.
3. Verifica que aparezca `<meta name="facebook-domain-verification" ...>` en el
   HTML público (`curl https://hectorcastillo.net | findstr facebook-domain`).
4. Vuelve a Meta y pulsa «Verificar dominio».

Sin la variable el sitio se construye normalmente, solo que sin esa etiqueta.

## Páginas legales

- `/privacidad`
- `/terminos`
- `/eliminacion-de-datos`

Las tres están enlazadas desde el pie de página y desde la sección de WhatsApp.
Los datos de contacto y los enlaces legales viven en `lib/site.ts`.
