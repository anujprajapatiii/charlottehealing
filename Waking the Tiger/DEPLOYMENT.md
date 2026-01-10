# Deployment Guide

## GitHub Setup

1. **Create a new repository on GitHub**
   - Go to github.com and create a new repository
   - Name it something like `waking-the-tiger` or `trauma-healing-gallery`
   - Don't initialize with README (we already have one)

2. **Push your code to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the settings (no build configuration needed)
5. Click "Deploy"
6. Your site will be live in seconds!

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Deploy from your project directory:
   ```bash
   cd "/Users/anujprajapati/Desktop/Claude Code/Waking the Tiger"
   vercel
   ```

3. Follow the prompts - it will deploy instantly

## Custom Domain (Optional)

Once deployed on Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Updates

To update your deployed site:
1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
3. Vercel will automatically redeploy (if auto-deploy is enabled)

## Notes

- The site is a static HTML/CSS/JS app - no build process needed
- All audio files are included in the repository
- The app works offline once loaded (browser cache)
- Optimized for performance with minimal dependencies
