# Vercel deployment and submission

These steps are performed by the repository owner. No deployment URL exists in this document until the first deployment succeeds.

## 1. Review and save checkpoint 4

Run from `C:\xampp\htdocs\portfolio` on `feature/cv-refresh`:

```powershell
git status
git diff
git add README.md docs/vercel-deployment.md vite.config.js package.json vercel.json .gitignore .github/workflows/deploy.yml
git diff --cached --stat
git commit -m "Prepare README and Vercel deployment configuration"
git push origin feature/cv-refresh
```

Use the explicit file list rather than `git add .`: the old repository still tracks some generated `dist` files. Vercel rebuilds from source, so generated build changes do not need to be included in this checkpoint.

## 2. Merge the feature branch into main

1. Open https://github.com/ainzekiel/portfolio/compare/main...feature/cv-refresh.
2. Confirm **base: main** and **compare: feature/cv-refresh**.
3. Create a pull request titled **Refresh personal CV and prepare Vercel deployment**.
4. Suggested description:

   > Completes the personal CV sections, adds CampusBorrow and Timpla Campus Café, improves responsive galleries and keyboard navigation, and prepares the site for Vercel. Local production builds and responsive/gallery checks passed; see docs/checkpoint-3-qa.md for coverage and limitations.

5. Review the changed files and any checks. Select **Create a merge commit** from the merge options, then merge. This keeps the checkpoint commits visible in the development history. Do not squash them into one commit.
6. Update your local main branch:

```powershell
git switch main
git pull --ff-only origin main
```

If Git reports uncommitted changes, stop and inspect `git status`; do not discard work to force the switch.

## 3. Import into Vercel

1. Open https://vercel.com/new and sign in with the GitHub account **ainzekiel**.
2. Under **Import Git Repository**, locate `ainzekiel/portfolio` and select **Import**.
3. If the repository is missing, use the GitHub connection's repository-access settings to allow Vercel access to this repository, then return to the import screen.
4. Choose a project name, such as `arnel-dalogdog-cv` if available. The final generated domain may differ.
5. Confirm these settings (the included `vercel.json` defines the build values):

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Root directory | `./` (repository root, not `src` or `public`) |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Environment variables | Leave empty |

6. Select **Deploy** and wait for the deployment to become **Ready**.
7. Confirm the production deployment uses `main` and includes your checkpoint 4 commit. If needed, set the production branch to `main` in the project's production environment settings and redeploy.
8. Open the project's assigned production domain. Copy the actual URL; do not assume the suggested project name was available.

Vercel's Git integration builds new deployments from connected repository changes. After this setup, commits merged into the production branch update the production site.

## 4. Verify the public site

- Open the production domain in a private/signed-out window. It must not require Vercel or GitHub sign-in. If it does, inspect **Settings → Deployment Protection** and ensure the intended public production domain is not protected. Preview deployment protection can remain enabled.
- Verify the profile photo, all CV sections, certificates, and social links.
- Open each project gallery, select screenshots, use thumbnails and arrow keys, and close using Escape.
- Test the filters and mobile menu. Check desktop, tablet, and mobile widths (including 320px).
- Confirm email and phone link destinations. Opening an email/phone app does not prove delivery or call completion.
- Refresh the homepage and a section URL such as `/#projects`.
- Check for failed image requests or console errors using browser developer tools.
- Confirm the GitHub repository is accessible to the evaluator in a signed-out window.

## 5. Record the real Vercel link

After verification, replace both pending Vercel URL entries in `README.md` with the actual production URL. Do not submit the README with those entries still pending.

On your updated local `main` branch:

```powershell
git switch -c docs/live-vercel-link
# Edit the two pending entries in README.md before running the next commands.
git add README.md
git commit -m "Document verified live Vercel URL"
git push -u origin docs/live-vercel-link
```

Create and merge a small pull request from that branch into `main`. Wait for the resulting Vercel deployment to finish, then check the production domain again.

## 6. Submit to the LMS

```text
Vercel Link: <your verified production URL>
GitHub Repository: https://github.com/ainzekiel/portfolio
```

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Old portfolio appears | Confirm `main` contains the merged refresh and Vercel is deploying that commit. |
| Blank page or asset 404s | Build with `npm run build`, not `npm run build:github`; Vercel must use `/` as the asset base. |
| No output directory | Root should be the repository root, build command `npm run build`, output `dist`. |
| Repository not listed | Confirm the connected GitHub account and Vercel's repository access. |
| Sign-in required for evaluator | Use the production domain and review its deployment protection. |
| Build fails | Open the deployment build log and read the first error. Share that error before changing settings at random. |

## Official references

- [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite)
- [Vercel Git integration](https://vercel.com/docs/git)
- [Deployment environments](https://vercel.com/docs/deployments/environments)
- [Deployment protection](https://vercel.com/docs/deployment-protection)
- [Vite static deployment guide](https://vite.dev/guide/static-deploy)
