# Checkpoint 3 — responsive and functional QA

Test date: 2026-10-26 (Asia/Shanghai).
Environment: local Vite development server, Chromium-based in-app browser. Production build also passed. This is a manual browser and DOM audit, not an automated WCAG certification.

## Responsive checks

| Viewport | Result |
| --- | --- |
| Desktop: 1440 × 900 | No horizontal overflow; two-column project cards and gallery layout |
| Laptop: 1024 × 768 | No horizontal overflow; project cards remain in two columns |
| Tablet: 768 × 1024 | No horizontal overflow; gallery details stack below screenshots |
| Mobile: 390 × 844 | No horizontal overflow; cards and gallery use one column |
| Small mobile: 320 × 568 | No horizontal overflow; longest gallery title and controls fit |
| Landscape: 844 × 390 | Gallery fits viewport and scrolls internally |

## Functional and accessibility results

- All 8 project galleries opened; all 42 screenshot selections loaded successfully.
- Filters returned 3 web apps, 2 mobile projects, 3 desktop/tools projects, and 8 total projects.
- Previous/next and arrow keys wrap between first and last screenshots.
- Escape closes the modal, restores opening-button focus, and restores page scrolling.
- Keyboard focus remains inside the native modal while it is open.
- Skip link is visible on keyboard focus; Enter moves focus to the main content.
- Mobile navigation focuses its destination and closes after selection.
- An open mobile menu closes on entry to the desktop breakpoint.
- One h1, no duplicate IDs, no missing image alt attributes, no unnamed links/buttons, and no broken internal anchors found.
- New-tab links include noreferrer. Repository URLs and mailto/tel destinations match the supplied information.
- No browser console warnings or errors during the tested flows.
- Production build and git diff whitespace check passed.

## Fixes made

- Preserve keyboard focus when mobile navigation links unmount.
- Reset the mobile menu when entering desktop layout.
- Bound menu height to the available viewport for short screens.
- Use lighter hover colors on the dark background.
- Replace unsupported border opacity classes with valid Tailwind arbitrary values.
- Disable initial reveal animations for users requesting reduced motion.
- Give project repository links at least 44px of target height.
- Avoid aria-controls pointing to a nonexistent closed menu.

## Limits and next checks

- Viewports were emulated; physical iOS/Android devices and Safari/Firefox were not tested.
- Reduced-motion behavior was reviewed in source; OS preference switching was not exercised.
- No dedicated screen-reader or automated axe audit was run.
- External account availability, sign-in prompts, email delivery, and phone calling were not exercised. No messages were sent.
- Vercel production URL and deployment checks belong to checkpoint 4.

## Repeat before submission

1. Run npm run dev and open the printed URL.
2. Check the viewport sizes above in browser responsive mode.
3. Use Tab and Enter to test skip navigation, menus, filters, and gallery opening; use Escape and arrow keys in a gallery.
4. Open every project and select each screenshot. Check the certificates and external profile links.
5. Run npm run build.
6. Repeat the navigation/image checks on the final public Vercel deployment.
