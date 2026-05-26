# Moire Tech Website Deployment Guide

## 📋 Project Overview

We've built a production-ready website for Moire Tech with:
- **Next.js 14** (App Router) with TypeScript
- **Tailwind CSS** with custom futuristic design system
- **Framer Motion** for advanced animations
- **Dark Cyberpunk Aesthetic** (Bloomberg Terminal meets Cyberpunk)
- **Vultr Deployment Ready** with Docker + Nginx

## 🏗️ What We've Built

### ✅ Completed Components
1. **Navbar** - Glass morphism navigation with scroll effects
2. **Hero** - Full-viewport particle background with typewriter animation
3. **About** - Animated counters for stats + company story
4. **Services** - Three pillar cards with 3D tilt hover effects
5. **Products** - Showcase carousel with shimmer badges
6. **Training** - Terminal-style cybersecurity training section
7. **Why Us** - Feature grid with staggered animations
8. **Contact** - Form with validation + contact info
9. **Footer** - Complete with social links and navigation
10. **AI Concierge** - Ruflo AI assistant placeholder (Phase 2)

### ✅ Technical Features
- **Responsive Design** - Mobile-first, hamburger navigation
- **Performance Optimized** - Code splitting, image optimization
- **SEO Ready** - Metadata, sitemap.xml, robots.txt
- **Accessibility** - Semantic HTML, ARIA labels
- **TypeScript** - Full type safety
- **Animations** - Scroll-triggered, hover effects, particle systems

## 🚀 Quick Start Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🐳 Docker Deployment (Vultr)

### Option 1: Docker Compose (Recommended)
```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Option 2: Manual Docker
```bash
# Build the image
docker build -t moiretech-website .

# Run the container
docker run -d -p 3000:3000 --name moiretech moiretech-website
```

### Option 3: With Nginx Reverse Proxy
```bash
# Create SSL directory (if using SSL)
mkdir -p ssl

# Update nginx.conf with your domain
# Uncomment SSL section if using HTTPS

# Start with docker-compose
docker-compose -f docker-compose.yml up -d
```

## 🔧 Environment Configuration

1. Copy `.env.example` to `.env`
2. Configure required variables:
   ```env
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://moire.tech
   # Add other API keys as needed
   ```

## 📈 Production Deployment Checklist

### Before Deployment
- [ ] Set up domain DNS (moire.tech)
- [ ] Obtain SSL certificates
- [ ] Configure environment variables
- [ ] Set up monitoring (optional)
- [ ] Configure backup strategy

### Deployment Steps
1. **Push code to Vultr** or deploy via Docker
2. **Build Docker image** or use pre-built
3. **Configure Nginx** with SSL certificates
4. **Start containers** with docker-compose
5. **Test everything**:
   - SSL/HTTPS
   - Form submissions
   - Mobile responsiveness
   - Performance (Lighthouse)

### Post-Deployment
- [ ] Set up analytics (Google Analytics)
- [ ] Configure error monitoring (Sentry)
- [ ] Set up backup automation
- [ ] Monitor performance metrics
- [ ] Regular security updates

## 🛡️ Security Considerations

### Required
- ✅ SSL/TLS encryption
- ✅ Secure headers (CSP, HSTS)
- ✅ Environment variable protection
- ✅ Docker security best practices
- ✅ Regular dependency updates

### Recommended
- WAF (Web Application Firewall)
- DDoS protection
- Regular security audits
- Automated vulnerability scanning

## 📊 Performance Optimization

### Built-in Optimizations
- ✅ Image optimization (Next.js Image)
- ✅ Code splitting (automatic)
- ✅ Minification (production builds)
- ✅ Caching headers (Nginx)
- ✅ Gzip compression

### Further Optimization
- CDN for static assets
- Database optimization (if added)
- Edge deployment (Vercel/Netlify option)
- Monitoring with performance metrics

## 🔄 CI/CD (Optional)

### GitHub Actions Example
```yaml
name: Deploy to Vultr
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v0.1.4
        with:
          host: ${{ secrets.VULTR_HOST }}
          username: ${{ secrets.VULTR_USERNAME }}
          key: ${{ secrets.VULTR_SSH_KEY }}
          script: |
            cd /opt/moiretech-website
            git pull
            docker-compose down
            docker-compose build
            docker-compose up -d
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules .next
   npm install
   npm run build
   ```

2. **Docker Issues**
   ```bash
   # Check logs
   docker-compose logs app
   
   # Rebuild
   docker-compose build --no-cache
   ```

3. **Nginx Issues**
   ```bash
   # Test configuration
   docker exec moiretech-nginx nginx -t
   
   # Reload Nginx
   docker exec moiretech-nginx nginx -s reload
   ```

4. **Port Conflicts**
   ```bash
   # Check what's using port 80/443
   netstat -tulpn | grep :80
   
   # Or change ports in docker-compose.yml
   ```

### Monitoring Commands
```bash
# Check container status
docker ps

# View application logs
docker-compose logs -f app

# View Nginx logs
docker-compose logs -f nginx

# Check disk space
df -h

# Monitor resource usage
docker stats
```

## 📞 Support & Maintenance

### Regular Maintenance
- Weekly: Check logs for errors
- Monthly: Update dependencies
- Quarterly: Security audit
- Yearly: Design/feature review

### Getting Help
- **GitHub Issues**: Report bugs/features
- **Email**: tech@moire.tech
- **Documentation**: docs.moire.tech

## 🎉 Deployment Complete!

Once deployed, your Moire Tech website will be:
- ✅ Visually stunning with cyberpunk aesthetic
- ✅ Fully responsive on all devices
- ✅ SEO optimized for search engines
- ✅ Secure with HTTPS and best practices
- ✅ Scalable with Docker containerization
- ✅ Maintainable with clear code structure

**Next Steps:**
1. Deploy to Vultr using Docker
2. Configure domain and SSL
3. Set up analytics and monitoring
4. Begin marketing and promotion
5. Plan Phase 2 features (AI Concierge integration)

---

**Moire Tech** - Where Code Meets Defence 🛡️