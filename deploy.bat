@echo off
echo Deploiement sur Netlify...

echo.
echo [1/4] Ajout des fichiers...
git add .

echo.
echo [2/4] Commit des changements...
set /p message="Message de commit (ou Enter pour message par defaut): "
if "%message%"=="" set message=Update: nouvelles fonctionnalites

git commit -m "%message%"

echo.
echo [3/4] Push vers GitHub...
git push origin main

echo.
echo [4/4] Netlify va deployer automatiquement dans 1-2 minutes
echo Visite: https://ani-dianda.netlify.app
echo.
pause
