/* ========================================================
   MAIN.JS — Vimal Forge LLP v3.0
   Preloader | Hero | Particles | Counters | Capabilities
   Product Showcase | Industries Scroll | Process | Forms
   ======================================================== */

/* ── PRELOADER (IIFE — runs immediately) ──────────────── */
(function injectPreloader() {
  if (document.getElementById('preloader')) return;

  const isFirstVisit = !sessionStorage.getItem('vf-visited');
  if (!isFirstVisit) return;
  sessionStorage.setItem('vf-visited', '1');

  const preloader = document.createElement('div');
  preloader.id = 'preloader';

  /* Split brand name into animated chars */
  const brand = 'VIMAL FORGE LLP';
  const chars = brand.split('').map((ch, i) => {
    const isSpace = ch === ' ';
    const color = (i >= 6 && i <= 10) ? 'color:#F47A35;' : '';
    const delay = `animation-delay:${0.05 + i * 0.055}s;`;
    return isSpace
      ? '<span style="display:inline-block;width:0.5em;"> </span>'
      : `<span class="preloader-char" style="${color}${delay}">${ch}</span>`;
  }).join('');

  preloader.innerHTML = `
    <div class="preloader-door-left"></div>
    <div class="preloader-door-right"></div>
    <svg class="preloader-ring-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" stroke="rgba(244,122,53,0.12)" stroke-width="3"/>
      <path d="M50 6 A44 44 0 0 1 94 50" stroke="#F47A35" stroke-width="3" stroke-linecap="round"/>
      <path d="M50 94 A44 44 0 0 1 6 50" stroke="rgba(244,122,53,0.3)" stroke-width="3" stroke-linecap="round"/>
      <rect x="48" y="2" width="4" height="9" rx="1.5" fill="rgba(244,122,53,0.5)"/>
      <rect x="48" y="2" width="4" height="9" rx="1.5" fill="rgba(244,122,53,0.5)" transform="rotate(60 50 50)"/>
      <rect x="48" y="2" width="4" height="9" rx="1.5" fill="rgba(244,122,53,0.5)" transform="rotate(120 50 50)"/>
      <rect x="48" y="2" width="4" height="9" rx="1.5" fill="rgba(244,122,53,0.5)" transform="rotate(180 50 50)"/>
      <rect x="48" y="2" width="4" height="9" rx="1.5" fill="rgba(244,122,53,0.5)" transform="rotate(240 50 50)"/>
      <rect x="48" y="2" width="4" height="9" rx="1.5" fill="rgba(244,122,53,0.5)" transform="rotate(300 50 50)"/>
    </svg>
    <div class="preloader-content">
      <div style="font-family:'Outfit',sans-serif;font-weight:800;font-size:2.2rem;letter-spacing:5px;">${chars}</div>
      <div class="preloader-bar-container">
        <div class="preloader-bar"></div>
      </div>
      <div class="preloader-status">Precision Engineering since 2009</div>
    </div>
  `;

  const attach = () => document.body.prepend(preloader);
  if (document.body) attach();
  else document.addEventListener('DOMContentLoaded', attach);

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('preloader-hidden');
      setTimeout(() => preloader.remove(), 900);
    }, 500);
  });
})();

/* ── DOM READY ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Mobile Nav Toggle ─────────────────────────────── */
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileNavToggle && navLinks) {
    mobileNavToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const expanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
      mobileNavToggle.setAttribute('aria-expanded', !expanded);
      mobileNavToggle.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });
  }

  /* ── Tab Functionality (Products / Facilities pages) ── */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels  = document.querySelectorAll('.product-tab-panel');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── File Upload Drag & Drop ───────────────────────── */
  const dropzones = document.querySelectorAll('.upload-dropzone, .drawing-upload-box, #drawing-upload-zone, #rfq-upload-zone, .rfq-upload-zone');
  dropzones.forEach(zone => {
    const fileInput = zone.querySelector('input[type="file"]') || document.getElementById('drawing') || document.getElementById('rfq-file-input');
    const parentGroup = zone.closest('.form-group, .rfq-form-group');
    const previewEl = parentGroup ? parentGroup.querySelector('.file-preview, #file-list-display, #rfq-file-preview, .rfq-file-preview') : null;
    
    if (!fileInput || !previewEl) return;

    zone.addEventListener('click', (e) => {
      if (e.target !== fileInput) {
        fileInput.click();
      }
    });
    ['dragenter','dragover'].forEach(ev => zone.addEventListener(ev, e => { e.preventDefault(); zone.classList.add('dragover'); }, false));
    ['dragleave','drop'].forEach(ev => zone.addEventListener(ev, e => { e.preventDefault(); zone.classList.remove('dragover'); }, false));
    zone.addEventListener('drop', e => { 
      fileInput.files = e.dataTransfer.files; 
      handleFiles(e.dataTransfer.files, previewEl, fileInput); 
    });
    fileInput.addEventListener('change', function () { 
      handleFiles(this.files, previewEl, fileInput); 
    });
  });

  function handleFiles(files, previewEl, fileInput) {
    if (!files.length || !previewEl) return;
    previewEl.innerHTML = '';
    
    Array.from(files).forEach((file, index) => {
      // Check maximum file size (25MB)
      if (file.size > 25 * 1024 * 1024) {
        alert(`File "${file.name}" exceeds the 25MB limit.`);
        if (fileInput) fileInput.value = '';
        return;
      }
      
      const card = document.createElement('div');
      card.className = 'rfq-uploaded-file-card';
      card.style.marginTop = index > 0 ? '0.5rem' : '0';
      card.innerHTML = `
        <div class="rfq-uploaded-file-info">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <span style="word-break: break-all;">${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)</span>
        </div>
        <button type="button" class="rfq-uploaded-file-remove" data-index="${index}" aria-label="Remove file">✕</button>
      `;
      
      const removeBtn = card.querySelector('.rfq-uploaded-file-remove');
      if (removeBtn) {
        removeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          // Create a new DataTransfer object to remove the file from input list
          if (fileInput && fileInput.files.length > 1) {
            const dt = new DataTransfer();
            Array.from(fileInput.files).forEach((f, idx) => {
              if (idx !== index) dt.items.add(f);
            });
            fileInput.files = dt.files;
            handleFiles(fileInput.files, previewEl, fileInput);
          } else {
            if (fileInput) fileInput.value = '';
            previewEl.innerHTML = '';
            previewEl.style.display = 'none';
          }
        });
      }
      
      previewEl.appendChild(card);
    });
    
    previewEl.style.display = 'block';
  }

  /* ── RFQ Form Submission ───────────────────────────── */
  /* ── Form Error Validation in Site Theme ───────────── */
  function showError(inputEl, message) {
    inputEl.classList.add('is-invalid');
    const parent = inputEl.closest('.rfq-form-group, .form-group');
    if (!parent) return;
    
    let errorEl = parent.querySelector('.rfq-error-message');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'rfq-error-message';
      parent.appendChild(errorEl);
    }
    errorEl.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 14px; height: 14px; flex-shrink:0;">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <span>${message}</span>
    `;
    errorEl.style.display = 'flex';
  }

  function clearError(inputEl) {
    inputEl.classList.remove('is-invalid');
    const parent = inputEl.closest('.rfq-form-group, .form-group');
    if (parent) {
      const errorEl = parent.querySelector('.rfq-error-message');
      if (errorEl) errorEl.remove();
    }
  }

  // Clear errors dynamically as the user types/inputs
  document.querySelectorAll('.rfq-form-input, .form-control').forEach(input => {
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) {
        clearError(input);
      }
    });
  });

  /* ── RFQ Form Submission ───────────────────────────── */
  document.querySelectorAll('#rfqForm, #rfq-main-form').forEach(form => {
    form.setAttribute('novalidate', '');
    
    form.addEventListener('submit', e => {
      e.preventDefault();
      
      // Clear all existing errors
      form.querySelectorAll('.is-invalid').forEach(el => clearError(el));
      
      let isValid = true;
      
      const nameEl  = form.querySelector('#name, #rfq-name');
      const companyEl  = form.querySelector('#company, #rfq-company');
      const emailEl = form.querySelector('#email, #rfq-email');
      const phoneEl = form.querySelector('#phone, #rfq-phone');
      
      if (nameEl && !nameEl.value.trim()) {
        showError(nameEl, 'Please fill in this field.');
        isValid = false;
      }
      
      if (companyEl && !companyEl.value.trim()) {
        showError(companyEl, 'Please fill in this field.');
        isValid = false;
      }
      
      if (emailEl) {
        const emailVal = emailEl.value.trim();
        if (!emailVal) {
          showError(emailEl, 'Please fill in this field.');
          isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
          showError(emailEl, 'Please enter a valid email address.');
          isValid = false;
        }
      }
      
      if (phoneEl) {
        const phoneVal = phoneEl.value.trim();
        if (!phoneVal) {
          showError(phoneEl, 'Please fill in this field.');
          isValid = false;
        } else if (phoneVal.replace(/\D/g, '').length < 7) {
          showError(phoneEl, 'Please enter a valid phone number.');
          isValid = false;
        }
      }
      
      if (!isValid) {
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      
      const successMsg = document.querySelector('#rfq-success');
      if (successMsg) { form.style.display = 'none'; successMsg.style.display = 'block'; successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      else {
        const card = form.closest('.rfq-form-card') || form.closest('.rfq-portal-card') || form.parentElement;
        if (card) {
          card.innerHTML = `
            <div style="text-align:center;padding:3rem 1rem;">
              <div style="font-size:4rem;color:var(--color-accent);margin-bottom:1.5rem;">✓</div>
              <h3 style="font-size:1.8rem;color:#ffffff;margin-bottom:1rem;font-family:var(--font-heading);font-weight:700;">Inquiry Submitted</h3>
              <p style="color:#cbd5e1;font-size:1.1rem;max-width:500px;margin:0 auto 2rem;line-height:1.6;">Thank you for your inquiry. Our engineering team will review your requirement and contact you shortly.</p>
              <button onclick="window.location.reload()" class="btn-rfq-submit" style="max-width: 260px; margin: 0 auto;">Submit Another RFQ</button>
            </div>`;
        }
      }
    });
  });

  /* ── RFQ Sourcing Portal Tab Switching ─────────────── */
  const rfqTabButtons = document.querySelectorAll('.rfq-tab-btn');
  const rfqTabPanels = document.querySelectorAll('.rfq-panel-content');
  if (rfqTabButtons.length && rfqTabPanels.length) {
    rfqTabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-rfq-tab');
        rfqTabButtons.forEach(b => b.classList.remove('active'));
        rfqTabPanels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = document.getElementById(`rfq-panel-${target}`);
        if (panel) panel.classList.add('active');
      });
    });
  }

  /* ── RFQ Sparks Canvas Background ──────────────────── */
  const rfqCanvas = document.getElementById('rfq-sparks');
  if (rfqCanvas) {
    const ctx = rfqCanvas.getContext('2d');
    let particles = [];
    const COUNT = window.innerWidth < 768 ? 15 : 45;

    const resize = () => {
      const r = rfqCanvas.parentElement.getBoundingClientRect();
      rfqCanvas.width = r.width;
      rfqCanvas.height = r.height;
    };
    window.addEventListener('resize', resize);
    resize();

    class Spark {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x = Math.random() * rfqCanvas.width;
        this.y = init ? Math.random() * rfqCanvas.height : rfqCanvas.height + 10;
        this.size = Math.random() * 2 + 0.4;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = -(Math.random() * 0.5 + 0.2); // Slow rising
        this.opacity = Math.random() * 0.4 + 0.1; // Subtle opacity
        
        // Extend particle lifespan: calculate fade so it survives to the top (y = 0)
        const lifespan = Math.max(50, this.y / Math.abs(this.speedY));
        this.fade = this.opacity / (lifespan * (Math.random() * 0.5 + 0.85));
        
        const r = Math.random();
        this.color = r > 0.6 ? '#F47A35' : r > 0.2 ? '#FFAA4D' : '#FFF3D1';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.fade;
        if (this.opacity <= 0 || this.x < -10 || this.x > rfqCanvas.width + 10 || this.y < -10) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = this.size * 2.5;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < COUNT; i++) particles.push(new Spark());

    const animate = () => {
      ctx.clearRect(0, 0, rfqCanvas.width, rfqCanvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      requestAnimationFrame(animate);
    };
    animate();
  }

  /* ── Contact Form ──────────────────────────────────── */
  const contactForm = document.querySelector('#contact-main-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const successMsg = document.querySelector('#contact-success');
      if (successMsg) { contactForm.style.display = 'none'; successMsg.style.display = 'block'; successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    });
  }

  /* ── Hero Particles Canvas ─────────────────────────── */
  const heroCanvas = document.getElementById('hero-particles');
  if (heroCanvas) {
    const ctx = heroCanvas.getContext('2d');
    let particles = [];
    const COUNT = window.innerWidth < 768 ? 12 : 28; // Reduced particle count for minimalism

    const resize = () => {
      const r = heroCanvas.parentElement.getBoundingClientRect();
      heroCanvas.width = r.width; heroCanvas.height = r.height;
    };
    window.addEventListener('resize', resize); resize();

    class Spark {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x = init ? Math.random() * heroCanvas.width : Math.random() * heroCanvas.width * 0.7;
        this.y = init ? Math.random() * heroCanvas.height : heroCanvas.height + 10;
        this.size = Math.random() * 1.8 + 0.4;
        this.speedX = Math.random() * 0.7 + 0.1; // Slower speed
        this.speedY = -(Math.random() * 1.0 + 0.3); // Slower rise
        this.opacity = Math.random() * 0.6 + 0.2;
        this.fade = Math.random() * 0.004 + 0.001;
        const r = Math.random();
        this.color = r > 0.6 ? '#F47A35' : r > 0.2 ? '#FFAA4D' : '#FFF3D1';
      }
      update() {
        this.x += this.speedX; this.y += this.speedY; this.opacity -= this.fade;
        if (this.opacity <= 0 || this.x > heroCanvas.width || this.y < -10) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = this.size * 3;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < COUNT; i++) particles.push(new Spark());

    const animate = () => {
      ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      ctx.globalAlpha = 1; ctx.shadowBlur = 0;
      requestAnimationFrame(animate);
    };
    animate();
  }

  /* ── Stats Counter Animation (Odometer-style) ──────── */
  const counters = document.querySelectorAll('.counter-val');
  if (counters.length) {
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    const runCounter = (el) => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 1800;
      const start = performance.now();
      const statCard = el.closest('.stat-card, .contact-stat-card');

      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOut(progress);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
        else { el.textContent = target; if (statCard) statCard.classList.add('counted'); }
      };
      requestAnimationFrame(tick);
    };

    const counterIO = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        runCounter(e.target);
        obs.unobserve(e.target);
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterIO.observe(c));
  }

  /* ── General Dynamic Lightbox ──────────────────────── */
  document.querySelectorAll('.btn-watch-tour, [data-lightbox]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const mediaUrl = btn.getAttribute('data-lightbox') || 'https://www.youtube.com/embed/TgZ5iCxFOb0';
      const type = btn.getAttribute('data-media-type') || 'video'; // 'video', 'local-video', or 'image'

      let innerContent = '';
      if (type === 'image') {
        innerContent = `
          <div class="lightbox-image-wrapper" style="text-align:center;">
            <img src="${mediaUrl}" style="max-width:100%; max-height:85vh; border-radius:var(--border-radius-sm); box-shadow:0 10px 30px rgba(0,0,0,0.5); object-fit:contain;">
          </div>`;
      } else if (type === 'local-video') {
        innerContent = `
          <div class="lightbox-video-wrapper" style="padding-bottom:56.25%; height:0; position:relative;">
            <video src="${mediaUrl}" autoplay controls playsinline style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; border-radius:var(--border-radius-sm);"></video>
          </div>`;
      } else {
        const embedUrl = mediaUrl.includes('embed') ? mediaUrl : `https://www.youtube.com/embed/${mediaUrl.split('/').pop()}`;
        innerContent = `
          <div class="lightbox-video-wrapper">
            <iframe src="${embedUrl}?autoplay=1&rel=0&modestbranding=1"
              frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>`;
      }

      const modal = document.createElement('div');
      modal.className = 'lightbox-modal';
      modal.innerHTML = `
        <div class="lightbox-content" style="max-width: ${type === 'image' ? '1000px' : '900px'};">
          <button class="lightbox-close" aria-label="Close">&times;</button>
          ${innerContent}
        </div>`;
      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';

      const close = () => {
        modal.classList.add('lightbox-closing');
        setTimeout(() => { modal.remove(); document.body.style.overflow = ''; }, 300);
      };
      modal.querySelector('.lightbox-close').addEventListener('click', close);
      modal.addEventListener('click', ev => { if (ev.target === modal) close(); });
      document.addEventListener('keydown', function esc(ev) {
        if (ev.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
      });
    });
  });

  /* ── Capabilities Showcase ─────────────────────────── */
  function initCapabilities() {
    const tabs    = document.querySelectorAll('.cap-tab');
    const panels  = document.querySelectorAll('.cap-panel');
    const indicator = document.querySelector('.cap-active-indicator');
    if (!tabs.length || !panels.length) return;

    function getActiveIndex() {
      return [...tabs].findIndex(t => t.classList.contains('active'));
    }

    function moveIndicator(tab) {
      if (!indicator) return;
      const parentRect = tab.parentElement.getBoundingClientRect();
      const tabRect    = tab.getBoundingClientRect();
      indicator.style.top    = (tabRect.top - parentRect.top) + 'px';
      indicator.style.height = tabRect.height + 'px';
    }

    function switchTo(index) {
      const prevPanel = document.querySelector('.cap-panel.active');
      const nextPanel = panels[index];
      if (!nextPanel) return;

      if (nextPanel === prevPanel) {
        moveIndicator(tabs[index]);
        return;
      }

      tabs.forEach((t,i) => t.classList.toggle('active', i === index));

      if (window.gsap && prevPanel) {
        const tl = gsap.timeline();
        // Fade out previous panel over 0.25s
        tl.to(prevPanel, { autoAlpha: 0, y: -10, duration: 0.25, ease: 'power2.in' })
          .call(() => {
            prevPanel.classList.remove('active');
            nextPanel.classList.add('active');
            
            // Play next video from start
            const nextVideo = nextPanel.querySelector('video');
            if (nextVideo) {
              nextVideo.currentTime = 0;
              nextVideo.play().catch(() => {});
            }
          })
          // Fade in new panel over 0.4s (total transition: 650ms)
          .fromTo(nextPanel,
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' }
          );
      } else {
        if (prevPanel) prevPanel.classList.remove('active');
        nextPanel.classList.add('active');
        const nextVideo = nextPanel.querySelector('video');
        if (nextVideo) {
          nextVideo.currentTime = 0;
          nextVideo.play().catch(() => {});
        }
      }

      moveIndicator(tabs[index]);
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => switchTo(i));
    });

    /* Init indicator on load */
    const activeTab = document.querySelector('.cap-tab.active');
    if (activeTab) {
      setTimeout(() => moveIndicator(activeTab), 100);
    }

    /* Keep indicator aligned on resize */
    window.addEventListener('resize', () => {
      const currentActive = document.querySelector('.cap-tab.active');
      if (currentActive) moveIndicator(currentActive);
    });

    /* Auto-cycle on desktop when visible */
    if (window.innerWidth > 991) {
      const showcaseSection = document.querySelector('.capabilities-showcase');
      if (showcaseSection) {
        let autoCycle = null;

        const startCycle = () => {
          if (autoCycle) return;
          autoCycle = setInterval(() => {
            const next = (getActiveIndex() + 1) % tabs.length;
            switchTo(next);
          }, 5000);
        };

        const stopCycle = () => {
          if (autoCycle) {
            clearInterval(autoCycle);
            autoCycle = null;
          }
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              switchTo(0); // Always start from ring rolling when scrolled into view
              startCycle();
            } else {
              stopCycle();
            }
          });
        }, { threshold: 0.15 });

        observer.observe(showcaseSection);

        showcaseSection.addEventListener('mouseenter', stopCycle);
        showcaseSection.addEventListener('mouseleave', startCycle);
      }
    }
  }

  initCapabilities();

  /* ── GSAP Animations ─────────────────────────────── */
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    /* ─── Hero Word-by-Word Reveal ─────────────────────── */
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      const words = heroTitle.textContent.trim().split(/\s+/);
      heroTitle.innerHTML = words.map(w =>
        `<span class="word-reveal-wrap"><span class="word-reveal-inner">${w}</span></span>`
      ).join(' ');

      const tl = gsap.timeline({ delay: 0.3 });
      tl.from('.hero .hero-tagline',          { y: 28, autoAlpha: 0, duration: 0.75, ease: 'power3.out' })
        .from('.hero .word-reveal-inner',     { y: '110%', duration: 0.9, stagger: 0.06, ease: 'power4.out' }, '-=0.4')
        .from('.hero .hero-subtitle',         { y: 22, autoAlpha: 0, filter: 'blur(4px)', duration: 0.75, ease: 'power3.out' }, '-=0.5')
        .from('.hero .hero-ctas .btn',        { y: 18, autoAlpha: 0, stagger: 0.12, duration: 0.65, ease: 'back.out(1.5)' }, '-=0.45');
    }

    /* Hero video parallax */
    const heroBg = document.querySelector('.video-background-iframe');
    if (heroBg && document.querySelector('.hero')) {
      gsap.to(heroBg, {
        yPercent: 15, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
      });
    }

    /* ─── Industries Horizontal Scroll ─────────────────── */
    function initIndustriesScroll() {
      if (!window.matchMedia('(min-width: 992px)').matches) return;
      const section = document.getElementById('industries-horizontal');
      const track   = document.querySelector('.horizontal-scroll-track');
      const wrapper = document.querySelector('.horizontal-scroll-wrapper');
      if (!section || !track || !wrapper) return;

      ScrollTrigger.getAll().forEach(st => { if (st.vars && st.vars.trigger === section) st.kill(); });

      const getScrollAmount = () => {
        const paddingLeft = parseFloat(window.getComputedStyle(wrapper).paddingLeft) || 0;
        return track.scrollWidth - wrapper.clientWidth + paddingLeft;
      };

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true, anticipatePin: 1, scrub: 0.8, invalidateOnRefresh: true,
        }
      });
    }

    /* ─── Product Showcase Horizontal Scroll ───────────── */
    function initProductShowcase() {
      if (!window.matchMedia('(min-width: 992px)').matches) return;
      const section = document.getElementById('product-showcase');
      const track   = document.querySelector('.product-showcase-track');
      const wrapper = document.querySelector('.product-showcase-wrapper');
      const cards   = document.querySelectorAll('.product-showcase-card');
      if (!section || !track || !wrapper) return;

      const total = cards.length;
      cards[0]?.classList.add('psc-active');

      const updateActive = (progress) => {
        const idx = Math.min(Math.floor(progress * total), total - 1);
        cards.forEach((c, i) => c.classList.toggle('psc-active', i === idx));
      };

      const getScrollAmount = () => {
        const paddingLeft = parseFloat(window.getComputedStyle(wrapper).paddingLeft) || 0;
        return track.scrollWidth - wrapper.clientWidth + paddingLeft;
      };

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true, anticipatePin: 1, scrub: 1, invalidateOnRefresh: true,
          onUpdate: self => updateActive(self.progress),
        }
      });
    }

    /* ─── Manufacturing Process Storytelling ────────────── */
    function initProcessStory() {
      const steps       = document.querySelectorAll('.story-step');
      const activeNumEl = document.getElementById('active-step-num');
      const svgPath     = document.querySelector('.svg-progress-path');
      const connectors  = document.querySelectorAll('.step-connector');
      const totalSteps  = steps.length;
      const totalDash   = 251.2;
      if (!steps.length) return;

      function activateStep(index) {
        steps.forEach((s, i) => {
          s.classList.toggle('active', i === index);
        });
        connectors.forEach((c, i) => {
          c.classList.toggle('active', i < index);
        });
        if (activeNumEl) activeNumEl.textContent = String(index + 1).padStart(2, '0');
        if (svgPath && totalSteps > 0) {
          const offset = totalDash - (totalDash * (index + 1)) / totalSteps;
          gsap.to(svgPath, { strokeDashoffset: offset, duration: 0.55, ease: 'power2.inOut' });
          const gearEl = document.querySelector('.gear-spinner');
          if (gearEl) gsap.to(gearEl, { rotation: (index / totalSteps) * 360, duration: 0.55, ease: 'power2.inOut' });
        }
      }

      activateStep(0);

      const stepIO = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = [...steps].indexOf(entry.target);
            if (idx !== -1) activateStep(idx);
          }
        });
      }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

      steps.forEach(s => stepIO.observe(s));
    }

    /* ─── Interactive Timeline Drawing ────────────────── */
    function initInteractiveTimeline() {
      const section = document.querySelector('.interactive-timeline-section');
      const lineProgress = document.querySelector('.timeline-line-progress');
      const items = document.querySelectorAll('.timeline-milestone-item');
      if (!section || !lineProgress || !items.length) return;

      gsap.to(lineProgress, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-interactive-wrapper',
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: true,
        }
      });

      items.forEach(item => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top 65%',
          end: 'bottom 65%',
          onEnter: () => item.classList.add('active'),
          onEnterBack: () => item.classList.add('active'),
          onLeave: () => item.classList.remove('active'),
          onLeaveBack: () => item.classList.remove('active'),
        });
      });
    }

    /* Interactive Tour Scroll Pin */
    function initTourScroll() {
      if (!window.matchMedia('(min-width: 992px)').matches) return;
      const section = document.getElementById('tour');
      const track   = document.getElementById('tour-scroll-track');
      const wrapper = document.querySelector('.horizontal-scroll-wrapper');
      if (!section || !track || !wrapper) return;

      gsap.to(track, {
        x: () => -(track.scrollWidth - wrapper.clientWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${track.scrollWidth - wrapper.clientWidth}`,
          pin: true,
          anticipatePin: 1,
          scrub: 0.8,
          invalidateOnRefresh: true,
        }
      });
    }

    /* Sticky Dot Section Sub-Navigation */
    function initStickyDotNav() {
      const dots = document.querySelectorAll('.dot-nav-item');
      if (!dots.length) return;

      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          const targetId = dot.getAttribute('data-target');
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            const lenis = window.VimalMotion?.getLenis();
            if (lenis) {
              lenis.scrollTo(targetEl, { duration: 1.2 });
            } else {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      });

      const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
      };

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            dots.forEach(dot => {
              dot.classList.toggle('active', dot.getAttribute('data-target') === id);
            });
          }
        });
      }, observerOptions);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(sec => observer.observe(sec));
    }

    /* Interactive Size & Capacity Visualizer */
    function initSizeVisualizer() {
      const sliderOd = document.getElementById('slider-od');
      const sliderWt = document.getElementById('slider-wt');
      const sliderFh = document.getElementById('slider-fh');
      const valOd = document.getElementById('val-od');
      const valWt = document.getElementById('val-wt');
      const valFh = document.getElementById('val-fh');
      const lblOd = document.getElementById('lbl-od');
      const lblWt = document.getElementById('lbl-wt');
      const visualRing = document.getElementById('visual-ring');
      const auditText = document.getElementById('visualizer-audit-text');

      if (!sliderOd || !sliderWt || !sliderFh || !visualRing) return;

      function updateVisualizer() {
        const od = parseInt(sliderOd.value, 10);
        const wt = parseInt(sliderWt.value, 10);
        const fh = parseInt(sliderFh.value, 10);

        valOd.textContent = `${od} mm`;
        valWt.textContent = `${wt} mm`;
        valFh.textContent = `${fh} mm`;
        if (lblOd) lblOd.textContent = `${od}mm`;
        if (lblWt) lblWt.textContent = `${wt}mm`;

        const maxAllowedWt = Math.floor(od / 2.5);
        if (wt > maxAllowedWt) {
          sliderWt.value = maxAllowedWt;
          valWt.textContent = `${maxAllowedWt} mm`;
          if (lblWt) lblWt.textContent = `${maxAllowedWt}mm`;
        }

        const minPixels = 60;
        const maxPixels = 240;
        const ringSize = ((od - 50) / 450) * (maxPixels - minPixels) + minPixels;
        visualRing.style.width = `${ringSize}px`;
        visualRing.style.height = `${ringSize}px`;

        const minBorder = 3;
        const maxBorder = 35;
        const borderSize = ((wt - 8) / 72) * (maxBorder - minBorder) + minBorder;
        visualRing.style.borderWidth = `${borderSize}px`;

        if (od > 450) {
          auditText.textContent = `Ring OD is ${od}mm. This will be routed to the AJIT 500mm Ring Roller. Note: custom setups required for OD > 450mm.`;
          auditText.style.color = '#FFAA4D';
        } else if (wt < 10) {
          auditText.textContent = `Ring WT is ${wt}mm. Minimum rolling thickness is ideally 10mm. Quality check tolerances will be tightened for thin walls.`;
          auditText.style.color = '#FFAA4D';
        } else {
          auditText.textContent = `Sizing parameters lie within Vimal Steel Forge Shapar unit's standard CNC radial-axial ring rolling limits.`;
          auditText.style.color = '#cbd5e1';
        }
      }

      sliderOd.addEventListener('input', updateVisualizer);
      sliderWt.addEventListener('input', updateVisualizer);
      sliderFh.addEventListener('input', updateVisualizer);

      updateVisualizer();
    }

    /* Ecosystem Switching Panels */
    function initEcosystemDiagram() {
      const nodeButtons = document.querySelectorAll('.eco-node-btn');
      const ecoTitle = document.getElementById('eco-title');
      const ecoDesc = document.getElementById('eco-desc');
      const ecoEquipment = document.getElementById('eco-equipment');
      const ecoCapacity = document.getElementById('eco-capacity');
      const ecoApplications = document.getElementById('eco-applications');
      const ecoDetails = document.getElementById('eco-details');
      const ecoVideo = document.getElementById('eco-video');

      if (!nodeButtons.length || !ecoTitle || !ecoDesc) return;

      const ecoData = {
        "ring-rolling": {
          title: "Ring Rolling Facility",
          desc: "Equipped with automatic radial-axial CNC ring rolling machines. Suitable for bearing race and planetary transmission blanks.",
          equipment: "AJIT 500mm & 300mm CNC lines",
          capacity: "Outer Diameter: 50 mm to 450 mm",
          applications: "Bearings & Gear Rings",
          details: "Radial-axial grain flow control",
          video: "/assets/videos/ring_rolling_loop"
        },
        "forging": {
          title: "Closed Die Forging Facility",
          desc: "Houses our 1.5T drop hammers and 400T screw presses in Gondal. Perfect for high-strength automotive and transmission parts.",
          equipment: "1.5T Drop Hammer & 400T Press",
          capacity: "Weight: 0.5 Kg to 20 Kg",
          applications: "Hitch Pins, Hubs &\nGears",
          details: "Closed-die hot forming",
          video: "/assets/videos/forging_loop"
        },
        "machining": {
          title: "Precision Machining Shop",
          desc: "Features vertical machining VMC lines and 24 turning lathe centers to supply complete plug-and-play components.",
          equipment: "Haas VMC & 24 CNC Lathe lines",
          capacity: "Outer Diameter up to 300 mm",
          applications: "Finished Races & Gear Blanks",
          details: "Tolerance limit +/- 10μm",
          video: "/assets/videos/machining_loop"
        },
        "inspection": {
          title: "Quality Metrology & NDT Lab",
          desc: "Operating GNR Italy Spectrometer, wet MPI, and sub-surface Ultrasonic crack checks to ensure zero-defect logs.",
          equipment: "GNR Spectro, MPI &\nUT Lab",
          capacity: "100% UT & MPI testing",
          applications: "Alloy & sub-surface\ncheck",
          details: "ISO 9001:2015\nProcedures",
          video: "/assets/videos/quality_loop"
        },
        "packaging": {
          title: "VCI Anti-Rust Packaging",
          desc: "Finished parts are oil-dipped, moisture protected, and boxed inside VCI barrier bags for sea freight shipping.",
          equipment: "In-house Die Shop & Packing station",
          capacity: "VCI moisture-barrier protection",
          applications: "Export & logistics rust control",
          details: "Anti-corrosion surface care",
          video: "/assets/videos/hero_loop"
        }
      };

      nodeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const key = btn.getAttribute('data-eco');
          const data = ecoData[key];
          if (!data) return;

          nodeButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          if (window.gsap) {
            gsap.to('#eco-detail-card', {
              opacity: 0.6,
              y: -5,
              duration: 0.15,
              onComplete: () => {
                ecoTitle.textContent = data.title;
                ecoDesc.textContent = data.desc;
                if (ecoEquipment) ecoEquipment.textContent = data.equipment;
                if (ecoCapacity) ecoCapacity.textContent = data.capacity;
                if (ecoApplications) ecoApplications.textContent = data.applications;
                if (ecoDetails) ecoDetails.textContent = data.details;
                
                if (ecoVideo) {
                  ecoVideo.innerHTML = `
                    <source src="${data.video}.webm" type="video/webm">
                    <source src="${data.video}.mp4" type="video/mp4">
                  `;
                  ecoVideo.load();
                  ecoVideo.play().catch(() => {});
                }
                
                gsap.to('#eco-detail-card', { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
              }
            });
          } else {
            ecoTitle.textContent = data.title;
            ecoDesc.textContent = data.desc;
            if (ecoEquipment) ecoEquipment.textContent = data.equipment;
            if (ecoCapacity) ecoCapacity.textContent = data.capacity;
            if (ecoApplications) ecoApplications.textContent = data.applications;
            if (ecoDetails) ecoDetails.textContent = data.details;
            if (ecoVideo) {
              ecoVideo.innerHTML = `
                <source src="${data.video}.webm" type="video/webm">
                <source src="${data.video}.mp4" type="video/mp4">
              `;
              ecoVideo.load();
              ecoVideo.play().catch(() => {});
            }
          }
        });
      });
    }

    /* Scroll-Driven Equipment Showcase */
    function initEquipmentShowcase() {
      const showcaseSection = document.getElementById('equipment');
      const slides = gsap.utils.toArray('.equipment-slide');
      
      if (!showcaseSection || !slides.length) return;

      const mm = gsap.matchMedia();

      // Desktop layout: pin and cross-fade/stack transitions
      mm.add("(min-width: 992px)", () => {
        // Set initial state: Card 1 is active & positioned at CSS top, others start below the screen & scaled down
        gsap.set(slides, { xPercent: -50, yPercent: 120, scale: 0.94, opacity: 0, autoAlpha: 0 });
        gsap.set(slides[0], { xPercent: -50, yPercent: 0, scale: 1, opacity: 1, autoAlpha: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: showcaseSection,
            start: 'top top',
            end: '+=400%', // Duration of scroll transitions
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true
          }
        });

        // Loop through slides to add stacking transitions
        slides.forEach((slide, index) => {
          if (index === 0) return;

          const activeIndex = index;

          // Scale down, fade, and blur previous cards in the stack
          tl.to(slides.slice(0, activeIndex), {
            scale: (i) => 1 - (activeIndex - i) * 0.06,
            yPercent: (i) => 0 - (activeIndex - i) * 6, // shift slightly upward in depth from base yPercent: 0
            opacity: (i) => 1 - (activeIndex - i) * 0.5,
            filter: (i) => `blur(${(activeIndex - i) * 2}px)`,
            duration: 1,
            ease: 'power1.out'
          }, `slide-${index}`)
          
          // Animate next card up from below
          .fromTo(slide, {
            yPercent: 120,
            scale: 0.94,
            opacity: 0,
            autoAlpha: 0
          }, {
            yPercent: 0, // lock to top: 260px
            scale: 1,
            opacity: 1,
            autoAlpha: 1,
            duration: 1,
            ease: 'power2.out'
          }, `slide-${index}`)
          
          // Hold the current slide active for a brief scroll segment
          .to({}, { duration: 0.5 });
        });

        return () => {
          // Cleanup on window resize / layout change
          slides.forEach(slide => {
            gsap.killTweensOf(slide);
            gsap.set(slide, { clearProps: "all" });
          });
        };
      });

      // Mobile layout: ensure clean state
      mm.add("(max-width: 991px)", () => {
        slides.forEach(slide => {
          gsap.killTweensOf(slide);
          gsap.set(slide, { clearProps: "all" });
        });
      });
      
    }

    /* Traceability Step Highlighters */
    function initTraceabilityJourney() {
      const steps = document.querySelectorAll('.traceability-step');
      if (!steps.length) return;

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.5 });

      steps.forEach(step => observer.observe(step));
    }

    /* Initialization */
    const runAnimations = () => {
      initProductShowcase();
      initIndustriesScroll();
      initProcessStory();
      initInteractiveTimeline();
      initTourScroll();
      initStickyDotNav();
      initSizeVisualizer();
      initEcosystemDiagram();
      initEquipmentShowcase();
      initTraceabilityJourney();
      ScrollTrigger.refresh();
    };

    if (document.readyState === 'complete') {
      runAnimations();
    } else {
      window.addEventListener('load', runAnimations);
    }
  }

}); // end DOMContentLoaded
