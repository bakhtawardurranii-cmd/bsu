# BSUPrints.com – static site

Plain HTML/CSS/JS version of bsuprints.com (no PHP, no database). Hosted on GitHub Pages.

## Deploy
1. Create a GitHub repo, upload **the contents of this folder** to the repo root (not the folder itself).
2. Repo → Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.
3. Custom domain (bsuprints.com): add a file named `CNAME` containing `bsuprints.com`, then point DNS to GitHub Pages.

## Notes
- Page URLs are extension-less (`/about-us`), same as the old site. GitHub Pages serves `about-us.html` there automatically.
- Contact form opens the visitor's email app (no server needed). Swap for Formspree/Web3Forms if you want direct submissions.
- Canonical URLs and sitemap.xml use https://bsuprints.com – change if your final domain differs.
