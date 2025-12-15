# CALDON™ Website Migration Guide
## GitHub Pages → Netlify + Decap CMS

This guide walks you through migrating your static site to a CMS-powered setup while keeping your exact design.

---

## Overview

**What you're getting:**
- ✅ Visual CMS editor at `yoursite.com/admin`
- ✅ Add/edit projects without touching code
- ✅ Automatic image optimization
- ✅ Form handling built-in
- ✅ Free SSL certificate
- ✅ Automatic deployments from Git
- ✅ Same design, same performance

**Stack:**
- **Hosting:** Netlify (free tier)
- **CMS:** Decap CMS (free, open-source)
- **Framework:** Astro (generates static HTML)
- **Content:** Markdown files in your repo

---

## Step 1: Set Up Netlify Account

1. Go to [netlify.com](https://netlify.com) and sign up (use GitHub)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repo
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**

Your site will be live at a random Netlify URL (you can add your custom domain later).

---

## Step 2: Enable Netlify Identity (for CMS login)

1. In Netlify dashboard, go to **Site settings** → **Identity**
2. Click **"Enable Identity"**
3. Under **Registration preferences**, select **"Invite only"**
4. Under **External providers**, enable **"Google"** (optional but convenient)
5. Go to **Identity** → **Invite users** → Add your email
6. Under **Services** → **Git Gateway**, click **"Enable Git Gateway"**

---

## Step 3: Replace Your Repo Contents

Replace your current GitHub Pages files with the new Astro structure:

```
your-repo/
├── admin/
│   ├── index.html          # CMS admin page
│   └── config.yml          # CMS configuration
├── public/
│   ├── logo.png            # Your logo
│   ├── favicon.ico
│   └── images/
│       └── projects/       # Project images
├── src/
│   ├── content/
│   │   ├── config.ts       # Content schema
│   │   └── projects/       # Markdown files (your projects)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro     # Homepage
│       ├── development.astro
│       └── projects/
│           ├── index.astro # Projects listing
│           └── [slug].astro # Dynamic project pages
├── astro.config.mjs
├── package.json
└── netlify.toml
```

---

## Step 4: Add Netlify Configuration

Create `netlify.toml` in your repo root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

# Redirects for clean URLs
[[redirects]]
  from = "/admin"
  to = "/admin/index.html"
  status = 200

# SPA fallback for admin
[[redirects]]
  from = "/admin/*"
  to = "/admin/index.html"
  status = 200
```

---

## Step 5: Access Your CMS

1. Go to `yoursite.com/admin`
2. Click **"Login with Netlify Identity"**
3. Complete the signup process via email
4. You're in! 🎉

---

## Using the CMS

### Adding a New Project

1. Go to `/admin`
2. Click **"Projects"** in the sidebar
3. Click **"New Project"**
4. Fill in the fields:
   - **Title:** Project name
   - **Location:** City, NSW
   - **Status:** Completed / In Progress / DA Approved
   - **Thumbnail:** Upload image for grid
   - **Hero Image:** Upload large header image
   - **Overview:** Write project description (supports formatting)
   - **Highlights:** Add bullet points
5. Click **"Publish"**

The site automatically rebuilds and deploys (~1 minute).

### Editing a Project

1. Go to `/admin`
2. Click **"Projects"**
3. Click the project to edit
4. Make changes
5. Click **"Publish"**

### Adding Images

- Drag and drop into the image fields
- Images are automatically saved to `/public/images/projects/`
- Recommended sizes:
  - Thumbnail: 800×500px
  - Hero: 1920×1080px
  - Gallery: 1200×900px

---

## Custom Domain Setup

1. In Netlify: **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter `caldon.com.au`
4. Update your DNS:
   - If using Netlify DNS: Follow their nameserver instructions
   - If keeping current DNS: Add a CNAME record pointing to your Netlify URL

Netlify automatically provisions an SSL certificate.

---

## Folder Structure Explained

```
src/content/projects/
├── merton-residences.md      # Each file = one project
├── victoria-street.md
└── manning-point-road.md
```

Each `.md` file contains:
- **Frontmatter** (YAML between `---`): Metadata like title, status, images
- **Body** (Markdown): The main project description

Example:
```markdown
---
title: "Merton Residences"
location: "Taree, NSW"
status: "completed"
thumbnail: "/images/projects/merton.jpg"
---

Project description goes here...
```

---

## Comparison: Before vs After

| Feature | GitHub Pages | Netlify + CMS |
|---------|--------------|---------------|
| Add project | Edit HTML file | Visual editor |
| Add images | Upload via Git | Drag & drop |
| Preview changes | Deploy first | Live preview |
| Build time | Instant | ~1 minute |
| Forms | Need 3rd party | Built-in |
| Cost | Free | Free |

---

## Troubleshooting

### CMS won't load
- Check Identity is enabled in Netlify
- Check Git Gateway is enabled
- Clear browser cache

### Changes not appearing
- Check Netlify deploy logs for errors
- Ensure you clicked "Publish" (not just "Save")
- Wait 1-2 minutes for build

### Images not showing
- Check file path starts with `/images/projects/`
- Check image was uploaded to correct folder
- Check for typos in filename

---

## Alternative: Simpler Migration with CloudCannon

If you want an even easier setup, [CloudCannon](https://cloudcannon.com) offers:
- Visual editing of your existing HTML
- No framework migration needed
- ~$45/month for CMS features

They can import your GitHub Pages site directly.

---

## Need Help?

The migration can be done in a few hours. If you'd like assistance:
1. The Astro files provided are ready to use
2. Just copy them into your repo
3. Connect to Netlify
4. Enable Identity

Your existing design is preserved—the CMS is just a layer on top.
