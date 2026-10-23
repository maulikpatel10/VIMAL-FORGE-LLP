/* Vimal Forge LLP — Qubic-style prototype behaviour. No external libraries. */
document.documentElement.classList.add('js');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const saveData = navigator.connection && navigator.connection.saveData;

/* ── Prototype banner: hide / show "to confirm" marks ── */
const tbcBtn = document.getElementById('tbc-toggle');
if (tbcBtn) {
  tbcBtn.addEventListener('click', () => {
    const hidden = document.body.classList.toggle('hide-tbc');
    tbcBtn.textContent = hidden ? 'Show "to confirm" marks' : 'Hide "to confirm" marks';
  });
}

/* ── Mobile menu ── */
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('site-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.addEventListener('click', e => {
    if (e.target.closest('a')) { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  });
}

/* ── Videos: play only while visible; poster only for reduced motion / data saver ── */
function setupVideo(v) {
  if (reduceMotion || saveData) { v.removeAttribute('autoplay'); v.pause(); return; }
  const io = new IntersectionObserver(([entry]) => {
    const panel = v.closest('[role="tabpanel"]');
    const active = !panel || !panel.hidden;
    if (entry.isIntersecting && active) {
      if (v.preload === 'none') { v.preload = 'auto'; }
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, { threshold: 0.25 });
  io.observe(v);
}
document.querySelectorAll('video[data-auto]').forEach(setupVideo);

/* ── Accessible tabs (process finder, quote type, spec tabs) ── */
document.querySelectorAll('[role="tablist"]').forEach(list => {
  const tabs = [...list.querySelectorAll('[role="tab"]')];
  const select = tab => {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) {
        panel.hidden = !on;
        panel.querySelectorAll('video').forEach(v => on && !reduceMotion && !saveData ? v.play().catch(() => {}) : v.pause());
      }
    });
    list.dispatchEvent(new CustomEvent('tabchange', { detail: tab }));
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', e => {
      const k = e.key;
      let n = null;
      if (k === 'ArrowRight' || k === 'ArrowDown') n = tabs[(i + 1) % tabs.length];
      if (k === 'ArrowLeft' || k === 'ArrowUp') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (k === 'Home') n = tabs[0];
      if (k === 'End') n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); n.focus(); select(n); }
    });
  });
});

/* ── Reveal on scroll (content is visible if JS fails; skipped for reduced motion) ── */
if (!reduceMotion && 'IntersectionObserver' in window) {
  const rio = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.rv').forEach(el => rio.observe(el));
} else {
  document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
}

/* ── Gauge: draw arc to value ── */
document.querySelectorAll('[data-gauge]').forEach(g => {
  const arc = g.querySelector('.arc-val');
  if (!arc) return;
  const len = arc.getTotalLength();
  const frac = Number(g.dataset.gauge);
  arc.style.strokeDasharray = `${len}`;
  arc.style.strokeDashoffset = reduceMotion ? `${len * (1 - frac)}` : `${len}`;
  if (reduceMotion) return;
  arc.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.2,.7,.1,1)';
  new IntersectionObserver(([e], o) => {
    if (e.isIntersecting) { arc.style.strokeDashoffset = `${len * (1 - frac)}`; o.disconnect(); }
  }, { threshold: .4 }).observe(g);
});

/* ── Product gallery + zoom ── */
const gMain = document.querySelector('.gallery .main');
if (gMain) {
  const mainImg = gMain.querySelector('img');
  const thumbs = [...document.querySelectorAll('.gallery .strip button')];
  thumbs.forEach(b => b.addEventListener('click', () => {
    thumbs.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    mainImg.src = b.dataset.src;
    mainImg.alt = b.dataset.alt;
    mainImg.classList.toggle('photo', b.dataset.kind === 'photo');
  }));
  const dlg = document.getElementById('zoom');
  if (dlg && dlg.showModal) {
    gMain.addEventListener('click', () => {
      dlg.querySelector('img').src = mainImg.src;
      dlg.querySelector('img').alt = mainImg.alt;
      dlg.showModal();
    });
    dlg.querySelector('button').addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  }
}

/* ── Related rail arrows ── */
document.querySelectorAll('[data-rail]').forEach(ctrl => {
  const rail = document.getElementById(ctrl.dataset.rail);
  ctrl.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    const card = rail.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 20 : 300;
    rail.scrollBy({ left: b.dataset.dir === 'next' ? step : -step, behavior: reduceMotion ? 'auto' : 'smooth' });
  }));
});

/* ── Quote form: upload list + validation. NOT connected to a backend yet. ── */
document.querySelectorAll('form[data-quote]').forEach(form => {
  const fileInput = form.querySelector('input[type="file"]');
  const drop = form.querySelector('.drop');
  const list = form.querySelector('.files');
  const MAX = 25 * 1024 * 1024;
  const OK = ['pdf', 'step', 'stp', 'igs', 'iges', 'dwg', 'dxf', 'zip'];
  let files = [];

  const render = () => {
    list.innerHTML = '';
    files.forEach((f, i) => {
      const li = document.createElement('li');
      const name = document.createElement('span');
      name.textContent = `${f.name} · ${(f.size / 1048576).toFixed(1)} MB`;
      const rm = document.createElement('button');
      rm.type = 'button';
      rm.textContent = 'Remove';
      rm.setAttribute('aria-label', `Remove ${f.name}`);
      rm.addEventListener('click', () => { files.splice(i, 1); render(); });
      li.append(name, rm);
      list.append(li);
    });
  };
  const add = incoming => {
    const msg = form.querySelector('.drop-err');
    msg.textContent = '';
    [...incoming].forEach(f => {
      const ext = f.name.split('.').pop().toLowerCase();
      if (!OK.includes(ext)) { msg.textContent = `${f.name}: use PDF, STEP, IGES, DWG, DXF or ZIP.`; return; }
      if (f.size > MAX) { msg.textContent = `${f.name} is larger than 25 MB.`; return; }
      if (files.length >= 5) { msg.textContent = 'Up to 5 files per request.'; return; }
      files.push(f);
    });
    render();
  };
  if (fileInput) {
    fileInput.addEventListener('change', () => { add(fileInput.files); fileInput.value = ''; });
    ['dragenter', 'dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('over'); }));
    ['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('over'); }));
    drop.addEventListener('drop', e => add(e.dataTransfer.files));
  }

  const rules = {
    name: v => v.trim().length >= 2 || 'Enter your name.',
    company: v => v.trim().length >= 2 || 'Enter your company name.',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter a valid business email.',
    phone: v => v.replace(/\D/g, '').length >= 7 || 'Enter a phone or WhatsApp number with country code.'
  };
  form.querySelectorAll('input').forEach(inp => inp.addEventListener('input', () => inp.closest('.field')?.classList.remove('invalid')));

  form.addEventListener('submit', e => {
    e.preventDefault();
    let first = null;
    Object.entries(rules).forEach(([key, test]) => {
      const inp = form.elements[key];
      if (!inp) return;
      const res = test(inp.value);
      const field = inp.closest('.field');
      if (res !== true) {
        field.classList.add('invalid');
        field.querySelector('.err').textContent = res;
        first = first || inp;
      }
    });
    if (first) { first.focus(); return; }
    const note = form.querySelector('.notice');
    note.hidden = false;
    note.textContent = `Prototype: this form is not connected yet, so nothing was sent. When it goes live it will send your details${files.length ? ` and ${files.length} file${files.length > 1 ? 's' : ''}` : ''} to the Vimal Forge sales team.`;
    note.focus();
  });
});
