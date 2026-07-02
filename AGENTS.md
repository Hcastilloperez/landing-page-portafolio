# Agents

## Dev Commands
- `npm run dev` - Start dev server at localhost:3000
- `npm run build` - Production build
- `npm run lint` - ESLint (no typecheck script)

## Architecture
- Next.js App Router project (app/page.tsx is the entrypoint)
- Path alias: `@/*` maps to project root
- Components live in `components/`, UI primitives in `components/ui/`
- No tests configured

## Notable Config
- `next.config.mjs`: `ignoreBuildErrors: true` - TypeScript errors do not block builds
- `tsconfig.json`: Strict mode enabled
- `pnpm` with `hono` override to `4.12.25`
- Tailwind CSS v4 (uses `@tailwindcss/postcss`)

## v0 Integration
- Linked to v0 (v0.app/chat/projects/prj_WrQNdDImHuKwTXCNM0cLQiRKIqBU)
- Every merge to `main` auto-deploys