// ── SKILLS DATA ──
const skills = [
  { name: 'HTML',       pct: 90, label: 'Advanced' },
  { name: 'CSS',        pct: 85, label: 'Advanced' },
  { name: 'JavaScript', pct: 70, label: 'Intermediate' },
  { name: 'PHP',        pct: 62, label: 'Intermediate' },
  { name: 'MySQL',      pct: 68, label: 'Intermediate' },
];

// ── RENDER SKILLS ──
const wrap = document.getElementById('skillsWrap');
skills.forEach(s => {
  wrap.innerHTML += `
    <div class="skill-row">
      <span class="skill-name">${s.name}</span>
      <div class="skill-track">
        <div class="skill-fill" data-p="${s.pct}"></div>
      </div>
      <span class="skill-tag">${s.label}</span>
    </div>`;
});

// ── SCROLL REVEAL + SKILL BAR ANIMATION ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in');
    // animate skill bars if inside this element
    entry.target.querySelectorAll('.skill-fill').forEach(bar => {
      bar.style.width = bar.dataset.p + '%';
    });
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
