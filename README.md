# Mike's Plumbing & Drains - Professional Website

A modern, mobile-first single-page website for Mike's Plumbing & Drains, a local Chicago plumbing company.

## 🚀 Quick Start

This is a pure HTML/CSS/JS website. No build tools required.

1. Clone the repository
2. Open `index.html` in your browser, or
3. Serve with any static file server (recommended for development)

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

## 📁 Project Structure

```
mikes-plumbing-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # JavaScript functionality
├── assets/             # Image assets (create this folder for images)
│   ├── og-image.jpg
│   ├── favicon-32x32.png
│   └── favicon-16x16.png
└── README.md
```

## 🎨 Brand Colors

- **Primary (Trust Blue):** `#1F5E9C` - Logo, buttons, headers
- **Accent (Safety Orange):** `#F26A21` - Emergency CTAs, badges, urgent highlights
- **Base (Clean White):** `#FFFFFF` - Backgrounds
- **Support (Charcoal):** `#1F2937` - Body text, icons, outlines

## 📱 Mobile-First Design

This website is built mobile-first with responsive breakpoints:
- **Mobile:** < 768px (default)
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

## 🔍 SEO Features

- Semantic HTML5 structure
- Meta tags (description, keywords, Open Graph, Twitter Card)
- Local business focus keywords
- Accessible markup (ARIA labels, skip links, focus management)
- Fast loading (no external dependencies except Google Fonts)

## 🖼️ Image Placeholders

The website includes styled placeholder blocks for images. To replace them:

1. Add your images to the `assets/` folder
2. Replace the `.image-placeholder` divs with `<img>` tags
3. Update the `src` attributes to point to your images

**Recommended images to add:**
- Hero image (branded truck or team photo)
- About section photo (Mike/team headshot)
- Service area or Chicago neighborhood photo
- Before/after work photos (optional)

## 🔧 Customization

### Contact Information
Replace all placeholder values marked with `[BRACKETS]`:
- `[PHONE]` - Business phone number
- `[EMAIL]` - Business email
- `[ADDRESS]` - Business address
- `[HOURS]` - Business hours
- `[SERVICE AREA]` - Service area description

### Form Handling
The contact form currently shows a placeholder alert. To make it functional:

1. **Option A:** Use a form service like Formspree, Netlify Forms, or Google Forms
2. **Option B:** Add your own backend endpoint
3. **Option C:** Use a third-party CRM with form integration

Update the form submission logic in `js/main.js`.

## 🌐 Deployment

This website is ready to deploy to Cloudflare Pages:

1. Push to GitHub
2. Connect repository to Cloudflare Pages
3. Set build command to `None` (static site)
4. Set build output directory to `/`
5. Deploy!

## 📄 License

© 2025 Mike's Plumbing & Drains. All rights reserved.
