$ErrorActionPreference = "Stop"
$SSH_KEY = "$env:USERPROFILE\.ssh\id_ed25519"
$SERVER = "root@192.168.1.59"
$REMOTE_DIR = "/var/www/hectorcastillo/landing-page"
$PROJECT = "D:\Proyectos\React\02-landing-page-portafolio"
$TEMP = "$env:TEMP\opencode"

Write-Host "== 1/5 Build local ==" -ForegroundColor Cyan
Set-Location $PROJECT
# pnpm escribe advertencias en stderr; con ErrorActionPreference=Stop eso se
# interpreta como error. cmd /c evita el falso positivo.
cmd /c "pnpm build"
if ($LASTEXITCODE -ne 0) { throw "Build falló" }

Write-Host "== 2/5 Preparar standalone ==" -ForegroundColor Cyan
$STANDALONE = "$PROJECT\.next\standalone"
$STATIC_DST = "$STANDALONE\.next\static"
$PUBLIC_DST = "$STANDALONE\public"

if (Test-Path $STATIC_DST) { Remove-Item $STATIC_DST -Recurse -Force }
Copy-Item "$PROJECT\.next\static" $STATIC_DST -Recurse
if (Test-Path "$PROJECT\public") {
    if (Test-Path $PUBLIC_DST) { Remove-Item $PUBLIC_DST -Recurse -Force }
    Copy-Item "$PROJECT\public" $PUBLIC_DST -Recurse
}
Copy-Item "$PROJECT\.env.local" "$STANDALONE\.env.local" -Force -ErrorAction SilentlyContinue

Write-Host "== 3/5 Empaquetar ==" -ForegroundColor Cyan
$TARBALL = "$TEMP\landing-standalone.tar.gz"
if (Test-Path $TARBALL) { Remove-Item $TARBALL -Force }
tar -czf $TARBALL -C $PROJECT\.next standalone
"{0:N1} MB" -f ((Get-Item $TARBALL).Length / 1MB)

Write-Host "== 4/5 Subir al servidor ==" -ForegroundColor Cyan
scp -i $SSH_KEY $TARBALL "${SERVER}:/tmp/"

Write-Host "== 5/5 Desplegar y reiniciar ==" -ForegroundColor Cyan
$remoteCmd = @"
set -e
cd $REMOTE_DIR
pm2 delete landing-page 2>/dev/null || true
rm -rf .next/standalone
tar -xzf /tmp/landing-standalone.tar.gz -C .next
cd .next/standalone
PORT=3000 HOSTNAME=0.0.0.0 pm2 start server.js --name landing-page
pm2 save
sleep 3
curl -sI http://localhost:3000 | head -n 1
curl -sI http://192.168.1.59 | head -n 1
"@
ssh -i $SSH_KEY $SERVER $remoteCmd
Write-Host "Deploy completado." -ForegroundColor Green