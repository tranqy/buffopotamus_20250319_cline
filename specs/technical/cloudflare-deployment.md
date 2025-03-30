# Cloudflare Deployment Specifications

## Cloudflare Pages Setup

### Prerequisites
- Cloudflare account
- GitHub repository with the Astro project
- Git installed locally

### Deployment Process

1. **Connect GitHub Repository to Cloudflare Pages**
   - Log in to Cloudflare dashboard
   - Navigate to Pages
   - Click "Create a project"
   - Select "Connect to Git"
   - Authorize Cloudflare to access your GitHub account
   - Select the buffopotamus repository

2. **Configure Build Settings**
   - Set build settings:
     - Production branch: `main`
     - Build command: `npm run build`
     - Build output directory: `dist`
     - Node.js version: 16 (or latest LTS)

3. **Environment Variables**
   - No specific environment variables required for basic setup
   - For future integrations (e.g., API keys), add them in the Cloudflare dashboard

4. **Deploy Site**
   - Click "Save and Deploy"
   - Wait for the build and deployment process to complete
   - Cloudflare will provide a subdomain (e.g., `buffopotamus.pages.dev`)

## Custom Domain Setup (Optional)

1. **Add Custom Domain**
   - In the Cloudflare Pages project, go to "Custom domains"
   - Click "Set up a custom domain"
   - Enter your domain (e.g., `buffopotamus.com`)
   - Follow the verification process

2. **DNS Configuration**
   - If the domain is already on Cloudflare:
     - DNS records will be configured automatically
   - If the domain is managed elsewhere:
     - Add CNAME record pointing to `buffopotamus.pages.dev`

3. **SSL/TLS Configuration**
   - Cloudflare automatically provisions SSL certificates
   - Set SSL/TLS encryption mode to "Full" in the Cloudflare dashboard

## Performance Optimization

### Caching Strategy
- Cloudflare automatically caches static assets
- Configure additional caching rules in `_headers` file:

```
# public/_headers
/*
  Cache-Control: public, max-age=3600
  
/images/*
  Cache-Control: public, max-age=86400
```

### Image Optimization
- Utilize Cloudflare's Polish feature for automatic image optimization
- Enable WebP conversion in the Cloudflare dashboard

### Asset Optimization
- Enable Auto Minify for HTML, CSS, and JavaScript in the Cloudflare dashboard
- Configure Brotli compression for better performance

## Continuous Deployment

### Automated Workflow
1. Push changes to the GitHub repository
2. Cloudflare automatically detects changes and triggers a new build
3. New version is deployed to production or preview environment

### Preview Deployments
- All pull requests automatically get preview deployments
- Preview URLs follow the format: `https://pr-{number}.buffopotamus.pages.dev`
- Use these for testing before merging to main branch

## Monitoring and Analytics

### Cloudflare Analytics
- Monitor site traffic and performance in the Cloudflare dashboard
- Track:
  - Requests
  - Bandwidth usage
  - Cache performance
  - Status codes

### Web Analytics
- Enable Cloudflare Web Analytics for visitor insights
- No additional JavaScript required
- Privacy-focused analytics without cookies

## Rollback Procedure

If issues are detected after deployment:

1. In the Cloudflare Pages dashboard, go to "Deployments"
2. Find the last working deployment
3. Click the three-dot menu and select "Rollback to this deployment"
4. Confirm the rollback

## Security Considerations

### Cloudflare Security Features
- Enable Cloudflare security features:
  - WAF (Web Application Firewall)
  - Bot Management
  - Rate Limiting

### Content Security Policy
- Implement CSP headers in `_headers` file:

```
# public/_headers
/*
  Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; script-src 'self'
```

## Maintenance

### Regular Tasks
- Monitor Cloudflare dashboard for any issues
- Check for Astro framework updates
- Review analytics for performance bottlenecks
- Test site functionality after major updates

### Troubleshooting
- Check build logs in Cloudflare dashboard for errors
- Verify local build works before pushing to repository
- Test in multiple browsers and devices
