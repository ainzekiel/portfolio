export default function Footer() {
  return (
    <footer id="contact" className="section-anchor mx-auto mt-6 max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/6 bg-white/[0.03] px-6 py-8 sm:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-textMuted">Contact</p>
            <a href="mailto:arneldalogdog3@gmail.com" className="mt-3 block break-all font-display text-xl font-semibold text-textPrimary transition hover:underline sm:text-2xl">
              arneldalogdog3@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="https://www.instagram.com/ain_thunder22/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-3 text-sm transition hover:border-white/40">Instagram</a>
            <a
              href="https://github.com/ainzekiel"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-textPrimary transition hover:border-emeraldAccent/60 hover:text-emeraldAccent"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.38-3.37-1.38-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.89 1.56 2.33 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.23 9.23 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.41.21 2.46.1 2.72.64.72 1.02 1.64 1.02 2.76 0 3.94-2.35 4.81-4.58 5.07.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.49A10.31 10.31 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/arnel-dalogdog-42b883382"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-textPrimary transition hover:border-emeraldAccent/60 hover:text-emeraldAccent"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8a2.5 2.5 0 0 0 0-4.5Zm.02 4.48h-.04a1.98 1.98 0 0 1-1.98-1.98V6a1.98 1.98 0 0 1 1.98-1.98h.04A1.98 1.98 0 0 1 7 6v.02A1.98 1.98 0 0 1 5 7.98Zm-1.98 2.5H6.9V20H3.02V10.48Zm7.34 0h3.72v1.42h.05c.52-.98 1.79-2.02 3.68-2.02 3.94 0 4.66 2.59 4.66 5.95V20h-3.88v-4.62c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.21-1.79 2.44V20h-3.9V10.48Z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/arneldalogdog22"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-textPrimary transition hover:border-emeraldAccent/60 hover:text-emeraldAccent"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6v1.8H7v3.1h2.6v8h3.9Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="text-center text-sm text-textMuted">© 2026 Arnel Dalogdog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
