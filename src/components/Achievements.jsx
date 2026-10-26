const credentials = [
  { title: 'Advanced Seminar', type: 'Seminar certificate', image: 'Set D - Dalogdog, A.png' },
  { title: 'CCNA: Switching, Routing, and Wireless Essentials', type: 'Course certificate', image: 'cisco-networking-cert.png' },
  { title: 'CCNA: Switching, Routing, and Wireless Essentials', type: 'Course badge', image: 'ccna-badge.png' },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-anchor mt-6 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-14 sm:px-10">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-textMuted">05 / Achievements & certifications</p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Learning beyond the classroom.</h2>
      <p className="mt-4 leading-7 text-textMuted">Senior High School graduate with High Honors, with continued learning through technical courses and seminars.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {credentials.map((item) => (
          <a key={item.image} href={`${import.meta.env.BASE_URL}images/${encodeURIComponent(item.image)}`} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 p-4 transition hover:-translate-y-1 hover:border-white/30">
            <img src={`${import.meta.env.BASE_URL}images/${encodeURIComponent(item.image)}`} alt={item.title + ' ' + item.type} loading="lazy" className="aspect-[4/3] w-full rounded-xl bg-white object-contain" />
            <p className="mt-5 text-xs uppercase tracking-wider text-textMuted">{item.type}</p>
            <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
            <p className="mt-4 text-sm text-[#83cba5]">View credential ↗<span className="sr-only"> (opens in a new tab)</span></p>
          </a>
        ))}
      </div>
    </section>
  );
}
