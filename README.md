# Valerie Singleton — Portfolio Website

**Live URL:** [https://portfolio.vsingleton.com](https://portfolio.vsingleton.com)

A professional, responsive single-page portfolio for **Valerie Singleton**, Senior Marketing Manager, built with Astro and vanilla CSS.

---

## 🛠 Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Framework    | [Astro](https://astro.build) v4     |
| Styling      | Vanilla CSS (custom design system)  |
| Forms        | Netlify Forms (built-in)            |
| Deployment   | Netlify (auto-deploy via GitHub)    |
| Version Control | GitHub                           |
| SEO          | Schema.org, Open Graph, sitemap     |

---

## 📁 Project Structure

```
valerie-singleton-portfolio/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Base HTML shell, SEO meta, global scripts
│   ├── components/
│   │   ├── Navigation.astro      # Sticky nav + mobile hamburger
│   │   ├── Hero.astro            # Full-viewport hero section
│   │   ├── About.astro           # Summary, expertise cards, skills
│   │   ├── CaseStudy.astro       # All 5 case studies (data-driven)
│   │   └── Contact.astro         # Contact form + info
│   ├── pages/
│   │   ├── index.astro           # Main SPA page
│   │   ├── privacy-policy.astro  # Privacy policy
│   │   └── terms.astro           # Terms of use
│   └── styles/
│       └── global.css            # Full design system
├── public/
│   ├── images/                   # Add headshot + case study screenshots here
│   ├── resume.pdf                # Upload Valerie's resume PDF here
│   └── favicon.svg               # Site favicon
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/valerie-singleton-portfolio.git
cd valerie-singleton-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:4321
```

### Build for Production
```bash
npm run build
# Output in ./dist/
```

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment to Netlify

### Initial Setup
1. Push repository to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Connect GitHub → select `valerie-singleton-portfolio`
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `18`
5. Click **Deploy site**

### Enable Netlify Forms
Forms are pre-configured with `data-netlify="true"`. After first deploy:
- Go to **Site → Forms** in Netlify dashboard
- The `contact` form should appear automatically

### Configure Custom Subdomain (`portfolio.vsingleton.com`)
1. **Netlify dashboard** → your new portfolio site → **Domain Management**
2. Click **Add custom domain** → enter `portfolio.vsingleton.com`
3. In your DNS registrar (or Netlify DNS), add:
   - **Type:** `CNAME`
   - **Name:** `portfolio`
   - **Value:** `your-site-name.netlify.app`
4. Wait 5–60 minutes for DNS propagation
5. Netlify auto-provisions HTTPS

---

## 📸 Adding Images

Replace image placeholders by adding files to `public/images/`:

| Placeholder                          | Recommended File Name               |
|--------------------------------------|-------------------------------------|
| Professional headshot                | `headshot.jpg` (min 400×400px)      |
| CS1: HubSpot dashboard               | `cs1-dashboard.png`                 |
| CS2: ABM campaign visuals            | `cs2-abm-campaign.png`              |
| CS3: Analytics traffic chart         | `cs3-seo-analytics.png`             |
| CS4: Campaign performance dashboard  | `cs4-campaigns.png`                 |
| CS5: Executive dashboard overview    | `cs5-executive-dashboard.png`       |
| CS5: Performance metrics detail      | `cs5-metrics-detail.png`            |

Then update `src/components/Hero.astro` and `src/components/CaseStudy.astro`
to replace `<div class="cs-img-placeholder">` with `<img>` tags.

**Resume:** Place PDF at `public/resume.pdf` — the nav "Download Resume" button
will automatically work.

---

## 🔗 Cross-Linking with vsingleton.com

After deployment, add this to your main `vsingleton.com` site:
```html
<a href="https://portfolio.vsingleton.com" class="btn">View Portfolio →</a>
```

---

## 📐 Design System

| Token              | Value       | Use                         |
|--------------------|-------------|---------------------------  |
| `--color-primary`  | `#2c3e50`   | Headings, nav, footer       |
| `--color-accent`   | `#3498db`   | CTAs, links, highlights     |
| `--color-bg-alt`   | `#f0f4f8`   | Section alternates, cards   |
| `--color-text`     | `#444444`   | Body text                   |

---

## ✅ Checklist

- [x] Responsive (mobile, tablet, desktop)
- [x] Sticky navigation with mobile hamburger
- [x] Smooth scroll navigation
- [x] Animated counter metrics
- [x] Fade-in scroll animations
- [x] 5 full case studies with placeholders
- [x] Netlify Forms with honeypot spam protection
- [x] SEO meta tags + Schema.org structured data
- [x] Open Graph tags for social sharing
- [x] XML sitemap via @astrojs/sitemap
- [x] WCAG 2.1 AA accessible markup
- [x] Keyboard navigable
- [x] Privacy Policy + Terms of Use pages
- [ ] Add professional headshot
- [ ] Add case study screenshots
- [ ] Upload resume PDF
- [ ] Update LinkedIn URL
- [ ] Configure portfolio.vsingleton.com DNS
- [ ] Add Google Analytics (optional)

---

## 📞 Contact

**Valerie Singleton**
- 📧 valerie.singleton07@gmail.com
- 📱 240.462.6019
- 📍 Washington, DC
