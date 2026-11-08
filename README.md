# BSUPrints.com: static site

Plain HTML/CSS/JS (no PHP, no database) for GitHub Pages.

## Deploy
1. Create a GitHub repo and upload the contents of this folder to the repo root.
2. Settings > Pages > Deploy from a branch > main / root.
3. Custom domain: add a `CNAME` file containing `bsuprints.com` and point DNS to GitHub Pages.
4. Submit https://bsuprints.com/sitemap.xml in Google Search Console.

## Notes
- URLs are extension-less (`/about-us`); GitHub Pages serves `about-us.html` there.
- Moved pages (`posters-printing`, `sticker-printing`, `stationery-printing`, `catalogs-printing`, `vinyles`) are small redirect stubs with canonicals.
- Contact form sends via WhatsApp or the visitor's email app (no server).
