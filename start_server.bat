@echo off
echo.
echo ============================================
echo   🚀 Gaia Financial Assistant Website
echo   Starting local web server...
echo ============================================
echo.

cd /d "%~dp0"

echo 📁 Current directory: %CD%
echo.

echo 🌐 Starting Python HTTP server on port 8080...
echo 📱 Access your website at: http://localhost:8080
echo 🌍 Network access at: http://%COMPUTERNAME%:8080
echo.
echo ⚠️  Press Ctrl+C to stop the server
echo.

python -m http.server 8080

pause
