@echo off
setlocal
cd /d "%~dp0"
title CMZ Fitness - Reinstalacao

echo Removendo cache e pacotes antigos...
if exist ".next" rmdir /s /q ".next"
if exist "node_modules" rmdir /s /q "node_modules"
if exist "package-lock.json" del /q "package-lock.json"

echo Instalando uma copia limpa dos pacotes...
call npm install
if errorlevel 1 goto :erro

echo.
echo Instalacao concluida. Agora abra INICIAR-SITE.bat
pause
exit /b 0

:erro
echo.
echo A instalacao falhou. Confirme sua internet e a instalacao do Node.js.
pause
exit /b 1
