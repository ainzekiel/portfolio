export default function ProfileDetails() {
  return (
    <section id="profile" className="section-anchor mt-6 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-14 sm:px-10">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-textMuted">01 / About me</p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Curiosity into practical solutions.</h2>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6 text-textMuted leading-8">
          <p>I am a fourth-year Bachelor of Science in Information Technology student at Davao del Norte State College. I am developing my skills in programming, web development, databases, and system analysis to understand how technology can solve real-world problems.</p>
          <div>
            <h3 className="font-display text-xl font-semibold text-textPrimary">Career objective</h3>
            <p className="mt-2">To pursue an internship or entry-level opportunity where I can apply my web development and data analysis skills, learn from experienced professionals, and contribute to useful, user-friendly digital solutions.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-textPrimary">Career interests</h3>
            <p className="mt-2">Data Analyst · System Analyst · Web Developer · Full Stack Developer</p>
          </div>
        </div>
        <dl className="space-y-5 rounded-3xl border border-white/10 bg-forestAccent/20 p-6">
          <div><dt className="text-sm text-textMuted">Location</dt><dd className="mt-1 leading-7">Purok 4-A, Barangay San Francisco, Panabo City, Davao del Norte, Philippines</dd></div>
          <div><dt className="text-sm text-textMuted">Email</dt><dd className="mt-1 break-words"><a className="hover:underline" href="mailto:arneldalogdog3@gmail.com">arneldalogdog3@gmail.com</a></dd></div>
          <div><dt className="text-sm text-textMuted">Phone</dt><dd className="mt-1"><a className="hover:underline" href="tel:+639693056594">0969 305 6594</a></dd></div>
          <div><dt className="text-sm text-textMuted">Currently</dt><dd className="mt-1">4th Year BSIT · Learning, building, and collaborating</dd></div>
        </dl>
      </div>
    </section>
  );
}
