@echo off
title Frontend Dashboard - Sistema Empresarial de Gestion Logistica
echo ================================================================
echo  FRONTEND DASHBOARD - SISTEMA EMPRESARIAL
echo  Puerto: 3000
echo  Framework: Next.js 14 con App Router
echo  Conecta con: Componente A (8080) y Componente B (8081)
echo ================================================================
echo.

echo [INFO] Iniciando Frontend Dashboard...
cd /d "C:\Users\Manuel\Desktop\segunda_serie\nextjs-dashboard"

echo [INFO] Verificando dependencias...
if not exist node_modules (
    echo [INFO] Instalando dependencias...
    call pnpm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Error instalando dependencias
        pause
        exit /b 1
    )
)

echo [INFO] Iniciando servidor de desarrollo Next.js...
call pnpm run dev

pause
