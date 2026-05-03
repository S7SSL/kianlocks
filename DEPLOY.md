# Deploying kianlocks.com to GitHub Pages

End-to-end walkthrough. Read top to bottom — about 30 minutes start to finish, most of which is waiting for DNS.

---

## Before you start

You will need:

- A **GitHub** account (free is fine). Sign up at <https://github.com/signup>.
- **Git** installed locally. On macOS: open Terminal and run `git --version`. If it says "command not found", install Xcode Command Line Tools with `xcode-select --install`.
- A few minutes of access to **Squarespace's domain DNS panel** at <https://account.squarespace.com> (where `kianlocks.com` is registered).

---

## Step 1 — Fill in your real contact details

Before anything goes live, swap the placeholders in `src/consts.ts`:

```ts
phone: '07700 900123',                     // your real number
phoneHref: 'tel:+447700900123',            // same, in international format
email: 'info@kianlocks.com',               // your real address
address: {
  streetAddress: '...',                    // optional — can leave generic
  addressLocality: 'London',
  addressRegion: 'Greater London',
  postalCode: 'N1 0AA',                    // closest legitimate postcode
  addressCountry: 'GB',
},
```

Also drop an Open Graph image at `public/og-default.png` (1200×630 px, JPG or PNG). This is what shows when someone shares your link on WhatsApp, Twitter, LinkedIn, Slack, etc. If you don't, the link previews will be plain.

> **Tip:** an OG image with a navy background, white "Kian Locks — North & Central London Locksmith", and "TS007 3-star ABS" badge takes 5 minutes in Canva or Figma.

---

## Step 2 — Create the GitHub repository

1. Go to <https://github.com/new>.
2. Repository name: **`kianlocks-website`** (or `kianlocks.com` — anything you like).
3. Description: "kianlocks.com — North & Central London ABS locksmith".
4. Visibility: **Public**. (GitHub Pages on the free tier requires public repos. Paid GitHub Pro can use private.)
5. **Do NOT** tick "Add a README", "Add .gitignore", or "Choose a license" — we already have those locally.
6. Click **Create repository**.

GitHub will show you a screen with setup instructions. Keep that tab open — you'll need the URL near the bottom that looks like `git@github.com:YOURUSERNAME/kianlocks-website.git`.

---

## Step 3 — Push the website to GitHub

Open Terminal, navigate to the website folder, and run:

```bash
cd "/Users/satlally/Library/CloudStorage/OneDrive-Personal/Kianlocks Ltd/website"

# One-time: tell git who you are (use the email tied to your GitHub account)
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Initialize the repo and push it
git init
git add .
git commit -m "Initial commit — kianlocks.com Astro site"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/kianlocks-website.git
git push -u origin main
```

Replace `YOURUSERNAME` with your actual GitHub username. On the first push, GitHub will ask you to authenticate — the easiest path is to install [GitHub CLI](https://cli.github.com) (`brew install gh`, then `gh auth login`), or use a personal access token (Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token with `repo` scope).

After the push completes, refresh your repository page on GitHub — you should see all the files.

---

## Step 4 — Enable GitHub Pages

1. On your repository page, go to **Settings** (top tab) → **Pages** (left sidebar).
2. Under **Build and deployment**:
   - **Source**: select **GitHub Actions** (NOT "Deploy from a branch").
3. That's it. Save automatically.

The GitHub Actions workflow at `.github/workflows/deploy.yml` is already in your repo — it will run automatically on every push to `main`. Go to the **Actions** tab to watch the first build. It takes ~60 seconds.

When it finishes, the green check at the top of the workflow page will link to your live site at `https://YOURUSERNAME.github.io/kianlocks-website/`. **It will look broken** — links and CSS will appear missing, because the site is hard-coded to expect to live at `kianlocks.com`, not at the github.io subdomain. That's expected. The next step fixes it.

---

## Step 5 — Point kianlocks.com at GitHub Pages (DNS)

1. Log in to Squarespace at <https://account.squarespace.com>.
2. Click **Domains** → click **kianlocks.com**.
3. In the left sidebar click **DNS** (sometimes labelled "DNS settings" or "Advanced DNS").
4. **Remove** any existing A records, CNAME records for `@` or `www`, and any Wix-related records (the current `ns6.wixdns.net` / `ns7.wixdns.net` setup will be replaced by Squarespace's own DNS once we go this route — confirm with Squarespace support if unsure, but typically you can just edit DNS in Squarespace and it takes precedence).
5. **Add the following records** (click "Add Custom Record" or similar):

| Type | Host / Name | Value | TTL |
|---|---|---|---|
| A | @ | `185.199.108.153` | Auto |
| A | @ | `185.199.109.153` | Auto |
| A | @ | `185.199.110.153` | Auto |
| A | @ | `185.199.111.153` | Auto |
| CNAME | www | `YOURUSERNAME.github.io.` | Auto |

(These are GitHub's official Pages IPs, current as of 2026. If GitHub changes them, [their docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) always have the latest.)

> If Squarespace will not let you change nameservers and refuses to accept these A records, you may need to call Squarespace support and ask them to switch DNS management away from the previous Wix configuration. They do this for free.

Save the changes. **DNS propagation usually takes 10–30 minutes**, occasionally up to 24 hours.

---

## Step 6 — Tell GitHub about the domain

1. Back on your GitHub repo → **Settings** → **Pages**.
2. Under **Custom domain**, enter `kianlocks.com` and click **Save**.
3. GitHub will run a DNS check — it may say "Domain's DNS record could not be retrieved" for the first few minutes. Wait, then click **Refresh**.
4. Once GitHub recognises the domain, **tick the "Enforce HTTPS" box**. (May take an additional 15 minutes after the DNS check passes — GitHub provisions a Let's Encrypt certificate behind the scenes.)

The `public/CNAME` file in your repo already contains `kianlocks.com`, which is what GitHub Pages needs to handle the custom domain after a redeploy. You don't need to touch it.

---

## Step 7 — Verify

Open <https://kianlocks.com>. You should see your new site with full styling.

Then run these checks:

- **Mobile** — pull it up on your phone. Header, hero, FAQ, contact CTA should all work cleanly.
- **Sitemap** — visit <https://kianlocks.com/sitemap-index.xml>. Should list all 16 pages.
- **Schema** — paste your homepage URL into <https://search.google.com/test/rich-results>. Should show LocalBusiness, FAQPage, and BreadcrumbList all valid.
- **Lighthouse** — Chrome DevTools → Lighthouse → Run. Aim for 95+ on every score.

---

## Step 8 — Submit to Google

1. Set up [**Google Search Console**](https://search.google.com/search-console) for `kianlocks.com`. Verify ownership via DNS TXT record (Squarespace DNS panel again).
2. Submit your sitemap: in Search Console, go to **Sitemaps** → enter `sitemap-index.xml` → Submit.
3. Set up a [**Google Business Profile**](https://www.google.com/business) for Kian Locks — this is the single biggest local-SEO move you can make. The map pack listings for "locksmith near me" are 90% Business Profile, not website. Verify by postcard or video.
4. Once you have Google reviews accumulating, update `social.google` in `src/consts.ts` with the review-link URL — schema picks it up as a `sameAs` reference.

---

## Making changes later

The site rebuilds and redeploys **automatically every time you push to `main`**.

```bash
cd "/Users/satlally/Library/CloudStorage/OneDrive-Personal/Kianlocks Ltd/website"
# edit files...
git add .
git commit -m "Update phone number"
git push
```

The Actions tab on GitHub will show the build in progress; it's live within ~60 seconds.

---

## Troubleshooting

**The site shows the GitHub Pages "404" page when I visit kianlocks.com.**
DNS hasn't propagated yet. Try `dig kianlocks.com` from Terminal — if it resolves to one of the four `185.199.*` IPs, you're set; if not, wait. You can also check propagation status at <https://www.whatsmydns.net>.

**The site loads but the CSS is missing / pages look unstyled.**
The `public/CNAME` file got overwritten or never made it into the build. Confirm `dist/CNAME` is being created (it's copied from `public/`). Check Settings → Pages → Custom domain shows `kianlocks.com`.

**HTTPS won't enable.**
Wait 30 minutes after the custom domain check passes — GitHub provisions the cert in the background. If it still won't enable after an hour, remove the custom domain in Settings → Pages, save, then add it back.

**The build fails on GitHub Actions.**
Click into the failed workflow → expand the "Install, build, and upload your site" step. Most failures are missing/broken Astro syntax in a recently-edited page; the error message points to the file and line.

**OneDrive locks files when I run `npm run build` locally.**
Pause OneDrive sync (menu bar → OneDrive icon → Pause), run the build, then resume. Or just rely on GitHub Actions — it builds the production version on every push.

---

## Total effort to launch (after DNS is sorted)

- Replace placeholders in `consts.ts`: 2 minutes
- Create OG image: 5 minutes
- Push to GitHub + enable Pages: 5 minutes
- DNS edit at Squarespace: 5 minutes
- Wait for DNS: 10–30 minutes
- Submit to Google Search Console: 5 minutes

**Total active time: ~25 minutes. Most of the elapsed time is waiting for DNS.**
