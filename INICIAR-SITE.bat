@echo off
setlocal
cd /d "%~dp0"
title CMZ Fitness - Landing Page

echo.
echo ==============================================
echo         CMZ FITNESS - INICIANDO SITE
echo ==============================================
echo.

if exist ".next" (
  echo Limpando cache antigo do Next.js...
  rmdir /s /q ".next"
)

if not exist "node_modules\next" (
  echo Dependencias nao encontradas. Instalando automaticamente...
  call npm install
  if errorlevel 1 goto :erro
)

echo.
echo Site disponivel em http://localhost:3000
echo Mantenha esta janela aberta enquanto estiver usando o site.
echo.
start "" "http://localhost:3000"
call npm run dev
exit /b 0

:erro
echo.
echo Nao foi possivel instalar as dependencias.
echo Confirme se o Node.js esta instalado e tente novamente.
pause
exit /b 1
