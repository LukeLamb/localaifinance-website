# Gaia Financial Assistant - Website Server Setup Guide

## Quick Start - Host from Your PC

### Option 1: Python HTTP Server (Simplest)

1. **Open Command Prompt as Administrator**
2. **Navigate to your website folder:**

   ```cmd
   cd "C:\Users\infob\Desktop\gaia_website"
   ```

3. **Start the server:**

   ```cmd
   python -m http.server 8080
   ```

4. **Access your site:**
   - Local: <http://localhost:8080>
   - Network: http://YOUR_PC_IP:8080

### Option 2: Node.js Server (Better Performance)

1. **Install Node.js** (if not already installed)
   - Download from: <https://nodejs.org>

2. **Install http-server globally:**

   ```cmd
   npm install -g http-server
   ```

3. **Navigate to website folder and start:**

   ```cmd
   cd "C:\Users\infob\Desktop\gaia_website"
   http-server -p 8080
   ```

### Option 3: Nginx (Production-Ready)

1. **Download Nginx for Windows:**
   - Download from: <http://nginx.org/en/download.html>

2. **Extract to C:\nginx**

3. **Configure nginx.conf:**

   ```nginx
   server {
       listen 80;
       server_name localhost;
       root C:/Users/infob/Desktop/gaia_website;
       index index.html;
       
       location / {
           try_files $uri $uri/ =404;
       }
   }
   ```

4. **Start Nginx:**

   ```cmd
   cd C:\nginx
   start nginx
   ```

## Making Your Site Accessible from Internet

### 1. Router Configuration

- **Port Forwarding:** Forward port 80 (HTTP) or 443 (HTTPS) to your PC
- **Internal IP:** Find your PC's IP: `ipconfig` in Command Prompt
- **External IP:** Check at <https://whatismyipaddress.com>

### 2. Dynamic DNS Setup (Recommended)

- **No-IP:** <https://www.noip.com> (Free)
- **DuckDNS:** <https://www.duckdns.org> (Free)
- **Cloudflare:** <https://www.cloudflare.com> (Free tier + CDN)

### 3. SSL Certificate (HTTPS)

```cmd
# Using Certbot (Let's Encrypt)
# Download from: https://certbot.eff.org/
certbot certonly --standalone -d yourdomain.com
```

## Recommended Setup for Your Use Case

### Step-by-Step Production Setup

1. **Use Cloudflare for DNS + CDN (Free)**
   - Sign up at <https://cloudflare.com>
   - Add your domain
   - Point DNS to your home IP
   - Enable CDN and security features

2. **Use Nginx for web server**
   - Better performance than Python server
   - Built-in gzip compression
   - Easy SSL configuration

3. **Windows Service Setup**

   ```cmd
   # Make Nginx start automatically
   sc create "Nginx" binPath="C:\nginx\nginx.exe" start=auto
   sc start "Nginx"
   ```

## Security Considerations

### Firewall Rules

```cmd
# Allow HTTP (port 80)
netsh advfirewall firewall add rule name="HTTP Inbound" dir=in action=allow protocol=TCP localport=80

# Allow HTTPS (port 443)
netsh advfirewall firewall add rule name="HTTPS Inbound" dir=in action=allow protocol=TCP localport=443
```

### Basic Security Headers (Add to nginx.conf)

```nginx
server {
    # ... existing config ...
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

## Performance Optimization

### Enable Gzip Compression (nginx.conf)

```nginx
http {
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
}
```

### Browser Caching (nginx.conf)

```nginx
location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## Monitoring and Analytics

### Simple Log Analysis

```cmd
# View Nginx access logs
type C:\nginx\logs\access.log | findstr "GET"

# Monitor real-time
powershell Get-Content C:\nginx\logs\access.log -Wait -Tail 10
```

### Free Analytics Options

- **Google Analytics** (most comprehensive)
- **Cloudflare Analytics** (privacy-friendly)
- **Simple Analytics** (paid but privacy-focused)

## Backup Strategy

### Automated Backup Script (PowerShell)

```powershell
# backup-website.ps1
$source = "C:\Users\infob\Desktop\gaia_website"
$destination = "C:\Backups\website-$(Get-Date -Format 'yyyy-MM-dd')"
Copy-Item -Path $source -Destination $destination -Recurse
```

### Schedule with Task Scheduler

```cmd
schtasks /create /tn "Website Backup" /tr "powershell.exe -File C:\Scripts\backup-website.ps1" /sc daily /st 02:00
```

## Cost Estimation

### Free Option

- **Hosting:** $0 (your PC)
- **Domain:** $10-15/year
- **SSL:** $0 (Let's Encrypt)
- **CDN:** $0 (Cloudflare free tier)
- **Total:** ~$15/year

### If Traffic Grows

- **Shared Hosting:** $50-100/year
- **VPS:** $60-240/year
- **Dedicated Server:** $600+/year

## Quick Start Commands (Copy & Paste)

```cmd
# 1. Navigate to website folder
cd "C:\Users\infob\Desktop\gaia_website"

# 2. Start Python server (immediate)
python -m http.server 8080

# 3. Check if accessible
start http://localhost:8080
```

## Troubleshooting

### Common Issues

1. **Port already in use:** Try different port (8081, 8082, etc.)
2. **Firewall blocking:** Check Windows Firewall settings
3. **Router issues:** Verify port forwarding configuration
4. **DNS problems:** Use IP address instead of domain name

### Check if website is accessible

```cmd
# Local test
curl http://localhost:8080

# External test (from another device)
curl http://YOUR_PC_IP:8080
```

## Next Steps

1. **Start with Python server** for immediate testing
2. **Set up domain name** with dynamic DNS
3. **Configure router** for external access
4. **Add Cloudflare** for CDN and security
5. **Monitor traffic** and upgrade if needed

Your website is now ready to be hosted from your PC! Start with the Python server to test everything works, then move to Nginx for better performance when you're ready.
