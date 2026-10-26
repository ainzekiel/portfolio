const education = [
  { dates: '2023 – 2027', school: 'Davao del Norte State College', program: 'Bachelor of Science in Information Technology', note: '4th Year BSIT · Expected graduation: 2027' },
  { dates: '2021 – 2023', school: 'Panabo City National High School', program: 'Senior High School · Technical-Vocational-Livelihood Track — Information and Communication Technology (TVL-ICT)', note: 'Graduated with High Honors' },
  { dates: '2017 – 2021', school: 'Panabo National High School', program: 'Junior High School · Basic Education Curriculum — Information and Communication Technology (BEC-ICT)' },
  { dates: '2010 – 2017', school: 'San Francisco Elementary School', program: 'Elementary Education' },
];

export default function Education() {
  return (
    <section id="education" className="section-anchor mt-6 rounded-[2rem] border border-white/10 bg-white/[0.02] px-6 py-14 sm:px-10">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-textMuted">02 / Education</p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">A foundation for what comes next.</h2>
      <ol className="mt-9 space-y-8 border-l border-white/20 pl-6">
        {education.map((item) => (
          <li key={item.school} className="relative grid gap-2 md:grid-cols-[150px_1fr]">
            <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-[#83cba5]" />
            <p className="font-mono text-sm text-textMuted">{item.dates}</p>
            <div><h3 className="font-display text-xl font-semibold">{item.school}</h3><p className="mt-2 leading-7 text-textMuted">{item.program}</p>{item.note && <p className="mt-3 text-sm text-[#83cba5]">{item.note}</p>}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
