@echo off
title Day Website 20/10 Len GitHub Pages
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy-github.ps1"
