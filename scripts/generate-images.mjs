// Genera imágenes con Gemini (Nano Banana).
// Uso: node --env-file=.env.local scripts/generate-images.mjs [nombre ...]
import { mkdir, writeFile } from 'node:fs/promises'

const MODEL = process.env.GEMINI_IMAGE_MODEL || 'gemini-2.5-flash-image'
const key = process.env.GEMINI_API_KEY
if (!key) {
  console.error('Falta GEMINI_API_KEY en .env.local')
  process.exit(1)
}

const STYLE =
  'Dark near-black UI (#0c0d0b), single orange accent (#ff5b1f), crisp thin lines, flat modern SaaS product design, no stock-photo look, no people, no watermark.'

const images = {
  'medicitas-dashboard': `Full-bleed screenshot of a clean medical appointment scheduling web app dashboard, 16:10. Left sidebar (Agenda, Pacientes, Historias, Recordatorios), main area with a day calendar with appointment blocks, a small patient list. Spanish UI text. ${STYLE}`,
  'hero-texture': `Abstract technical background: faint isometric wireframe grid fading into darkness, a few thin orange circuit-like traces, very subtle, wide 16:9, large empty space on the left for text. ${STYLE}`,
  'og-image': `Open Graph banner 1200x630: minimal dark composition, bold white sans-serif headline "Software que se queda en producción" with the word "producción" in orange, small monospace line "Héctor Castillo · Full Stack Developer", subtle grid. ${STYLE}`,
}

const wanted = process.argv.slice(2)
const names = wanted.length ? wanted : Object.keys(images)
await mkdir('public/generated', { recursive: true })

for (const name of names) {
  if (!images[name]) {
    console.error(`Desconocida: ${name}`)
    continue
  }
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({ contents: [{ parts: [{ text: images[name] }] }] }),
    },
  )
  const json = await res.json()
  if (!res.ok) {
    console.error(`${name}: HTTP ${res.status} ${json?.error?.message ?? ''}`)
    continue
  }
  const part = json.candidates?.[0]?.content?.parts?.find((p) => p.inlineData)
  if (!part) {
    console.error(`${name}: sin imagen en la respuesta`)
    continue
  }
  await writeFile(`public/generated/${name}.png`, Buffer.from(part.inlineData.data, 'base64'))
  console.log(`${name}: ok`)
}
