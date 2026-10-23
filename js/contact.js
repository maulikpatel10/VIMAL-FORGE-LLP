/* ========================================================
   CONTACT.JS — Contact Page Animations & Functionality v1.0
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Floating Particles Canvas ──────────────────── */
  const canvas = document.getElementById('contact-particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const COUNT = window.innerWidth < 768 ? 15 : 35;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x = Math.random() * canvas.width;
        this.y = init ? Math.random() * canvas.height : canvas.height + 10;
        this.size = Math.random() * 2 + 0.4;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = -(Math.random() * 1.0 + 0.3); // Rising
        this.opacity = Math.random() * 0.6 + 0.15;
        this.fade = Math.random() * 0.003 + 0.0008;
        const r = Math.random();
        this.color = r > 0.65 ? '#F47A35' : r > 0.2 ? '#FFAA4D' : '#FFF3D1';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.fade;
        if (this.opacity <= 0 || this.x < -10 || this.x > canvas.width + 10 || this.y < -10) {
          this.reset();
        }
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

    for (let i = 0; i < COUNT; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      requestAnimationFrame(animate);
    };
    animate();
  }

  /* ── 2. Manufacturing Network Showcase Tab Controller ── */
  const facilityData = {
    'tab-office': {
      name: 'Corporate Office',
      label: 'Global Headquarters',
      desc: 'Located in the commercial heart of Rajkot, our Corporate Office coordinates international sales, export shipping logistics, and full OEM supplier support. It serves as the primary hub for customer onboarding, RFQ feasibility, and global quality audits.',
      capabilities: [
        'OEM Account Management',
        'Design & Feasibility Analysis',
        'Export Logistics Coordination',
        'Quality Documentation Desk'
      ],
      contacts: [
        { type: 'phone', label: 'Sourcing Desk: Dhaval Daraniya', value: '+91 99797 77787', url: 'tel:+919979777787' },
        { type: 'email', label: 'International Sales', value: 'info@vimalsteelforge.com', url: 'mailto:info@vimalsteelforge.com' }
      ],
      stats: [
        { val: '17+', label: 'Years Experience' },
        { val: '< 24h', label: 'RFQ Response' },
        { val: '4 Zones', label: 'Global Exports' }
      ],
      media: {
        type: 'image',
        src: '/assets/images/about_leadership.png',
        fallback: '/assets/images/about_leadership.png'
      },
      mapUrl: 'https://maps.google.com/?q=Yagnik+Road+Rajkot+Gujarat',
      highlights: [
        {
          title: 'Supply Planning',
          desc: 'Global logistics & client coordination for custom seamless ring orders.'
        },
        {
          title: 'Design Feasibility',
          desc: 'Detailed 3D CAD modeling, material spec checks, and mold design feasibility.'
        },
        {
          title: 'Sourcing Audits',
          desc: 'Ensuring dimensional precision protocols and coordinate measuring alignment sheets.'
        },
        {
          title: 'Quality Assurance',
          desc: 'Comprehensive metallurgy verification, documentation review, and ISO compliance audits.'
        }
      ],
      gallery: [
        { src: '/assets/images/about_leadership.png', tag: 'Team', title: 'Leadership & Engineering' },
        { src: '/assets/images/timeline_2026.png', tag: 'Facility', title: 'Corporate Headquarters' },
        { src: '/assets/images/about_story_factory.png', tag: 'Logistics', title: 'Global Sourcing Center' }
      ]
    },
    'tab-shapar': {
      name: 'Shapar Plant',
      label: 'Vimal Steel Forge',
      desc: 'Our advanced Shapar industrial plant focuses on high-precision radial-axial ring rolling. Operating state-of-the-art ring rollers, this facility outputs seamless rings and bearing races that power heavy equipment and transmission systems around the world.',
      capabilities: [
        'Radial-Axial Ring Rolling',
        'CNC Finish Machining',
        'Spheroidizing Annealing',
        'Bearing Component Production'
      ],
      contacts: [
        { type: 'phone', label: 'Plant Manager Office', value: '+91 99797 77787', url: 'tel:+919979777787' },
        { type: 'email', label: 'Plant Sales Desk', value: 'info@vimalsteelforge.com', url: 'mailto:info@vimalsteelforge.com' }
      ],
      stats: [
        { val: '500mm', label: 'Max Ring OD' },
        { val: '10,000 T', label: 'Annual Capacity' },
        { val: '2.5 min', label: 'Forging Cycle Time' }
      ],
      media: {
        type: 'video',
        src: '/assets/videos/ring_rolling_loop.mp4',
        fallback: '/assets/images/rolled_rings_showcase.png'
      },
      mapUrl: 'https://maps.google.com/?q=Vimal+Steel+Forge+Shapar+Rajkot',
      highlights: [
        {
          title: 'Seamless Rolling',
          desc: 'AJIT CNC radial-axial mills producing seamless rings up to 500mm OD.'
        },
        {
          title: 'Billet Preforming',
          desc: 'Induction heating of raw billets ensuring uniform grain flow and thermal consistency.'
        },
        {
          title: 'Precision Turning',
          desc: 'High-speed CNC lathes executing rough and finish turning for outer & inner races.'
        },
        {
          title: 'Hardness Metrology',
          desc: 'In-house Rockwell and Brinell hardness testing, and microstructural analysis.'
        }
      ],
      gallery: [
        { src: '/assets/images/rolled_rings_showcase.png', tag: 'Machinery', title: 'Ring Rolling Mill' },
        { src: '/assets/images/bearing_rings.png', tag: 'Product', title: 'Rolled Ring Blanks' },
        { src: '/assets/images/gear_blanks_showcase.png', tag: 'Machining', title: 'CNC Turning Section' }
      ]
    },
    'tab-gondal': {
      name: 'Gondal Plant',
      label: 'Vimal Forge LLP',
      desc: 'Our heavy forging and machining plant houses high-tonnage drop hammers, friction screw presses, and precision Vertical Machining Centers (VMC). It specializes in producing robust net-shape closed-die forgings for demanding automotive, oil & gas, and hydraulic components.',
      capabilities: [
        'Closed Die Hot Forging',
        'Induction Billet Heating',
        'CNC VMC Milling',
        'Ultrasonic Metrology Checks'
      ],
      contacts: [
        { type: 'phone', label: 'Technical Director', value: '+91 99797 77787', url: 'tel:+919979777787' },
        { type: 'email', label: 'Engineering Desk', value: 'dhaval@vimalsteelforge.com', url: 'mailto:dhaval@vimalsteelforge.com' }
      ],
      stats: [
        { val: '1.5 Ton', label: 'Drop Hammer' },
        { val: '400T', label: 'Friction Press' },
        { val: '800 Tons', label: 'Monthly Output' }
      ],
      media: {
        type: 'video',
        src: '/assets/videos/forging_loop.mp4',
        fallback: '/assets/images/custom_forgings_showcase.png'
      },
      mapUrl: 'https://maps.google.com/?q=Vimal+Forge+LLP+Pipadiya+Gondal',
      highlights: [
        {
          title: 'Forged Ring Blanks',
          desc: 'Heavy pre-forged ring blanks prepared for high load applications.'
        },
        {
          title: 'Closed Die Hammer',
          desc: '1.5-Ton drop hammers and 400T friction screw presses for net-shape components.'
        },
        {
          title: 'VMC Machining',
          desc: 'Haas Vertical Machining Centers producing complex geared shapes and contours.'
        },
        {
          title: 'Non-Destructive Testing',
          desc: 'Ultrasonic flaw detection, magnetic particle inspection, and GNR spectrometer analysis.'
        }
      ],
      gallery: [
        { src: '/assets/images/about_story_factory.png', tag: 'Machinery', title: 'Forging Hammer Line' },
        { src: '/assets/images/gear_blanks_showcase.png', tag: 'Product', title: 'Forged Gear Blanks' },
        { src: '/assets/images/custom_forgings_showcase.png', tag: 'Machining', title: 'Haas VMC Centers' }
      ]
    }
  };

  const showcaseTabBtns = document.querySelectorAll('.showcase-tab-btn');
  const showcaseTabsBar = document.querySelector('.showcase-tabs-bar');
  const showcaseMediaCol = document.querySelector('.showcase-media-column');
  const showcaseDetailsCol = document.querySelector('.showcase-details-column');
  const showcaseHighlightsGrid = document.querySelector('.highlights-grid');
  const showcaseGalleryGrid = document.querySelector('.gallery-grid');
  const directionsLinkBtn = document.getElementById('btn-showcase-directions');

  let showcaseIndicator = document.querySelector('.showcase-tab-indicator');
  if (showcaseTabsBar && !showcaseIndicator) {
    showcaseIndicator = document.createElement('div');
    showcaseIndicator.className = 'showcase-tab-indicator';
    showcaseTabsBar.appendChild(showcaseIndicator);
  }

  const moveShowcaseIndicator = (activeBtn) => {
    if (!showcaseIndicator || !activeBtn || !showcaseTabsBar) return;
    const barRect = showcaseTabsBar.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    const left = btnRect.left - barRect.left;
    const width = btnRect.width;

    if (window.gsap) {
      gsap.to(showcaseIndicator, {
        left: left,
        width: width,
        duration: 0.5,
        ease: 'power3.out'
      });
    } else {
      showcaseIndicator.style.left = `${left}px`;
      showcaseIndicator.style.width = `${width}px`;
    }
  };

  if (showcaseTabBtns.length && showcaseTabsBar) {
    const activeBtn = document.querySelector('.showcase-tab-btn.active');
    if (activeBtn) {
      showcaseTabsBar.classList.add('has-active');
      setTimeout(() => moveShowcaseIndicator(activeBtn), 150);
    }

    window.addEventListener('resize', () => {
      const activeBtn = document.querySelector('.showcase-tab-btn.active');
      if (activeBtn) moveShowcaseIndicator(activeBtn);
    });

    showcaseTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const currentActive = document.querySelector('.showcase-tab-btn.active');
        if (currentActive === btn) return;

        showcaseTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        moveShowcaseIndicator(btn);

        const tabKey = btn.getAttribute('data-tab');
        const data = facilityData[tabKey];
        if (data) {
          transitionShowcase(data);
        }
      });
    });
  }

  function transitionShowcase(data) {
    if (!window.gsap) {
      updateShowcaseDOM(data);
      return;
    }

    const fadeOutTimeline = gsap.timeline();
    const mediaVisual = showcaseMediaCol.querySelector('.showcase-visual');
    const detailsChildren = showcaseDetailsCol.children;
    const highlightCards = showcaseHighlightsGrid.querySelectorAll('.highlight-card');
    const galleryCards = showcaseGalleryGrid.querySelectorAll('.gallery-card');

    fadeOutTimeline.to([mediaVisual, detailsChildren, highlightCards, galleryCards], {
      autoAlpha: 0,
      y: 15,
      duration: 0.35,
      stagger: 0.05,
      ease: 'power2.in',
      onComplete: () => {
        updateShowcaseDOM(data);
        fadeInShowcase(data);
      }
    });
  }

  function updateShowcaseDOM(data) {
    showcaseMediaCol.innerHTML = '';
    let visualElement;

    if (data.media.type === 'video') {
      visualElement = document.createElement('video');
      visualElement.className = 'showcase-visual';
      visualElement.autoplay = true;
      visualElement.loop = true;
      visualElement.muted = true;
      visualElement.playsInline = true;
      
      const source = document.createElement('source');
      source.src = data.media.src;
      source.type = 'video/mp4';
      visualElement.appendChild(source);
      visualElement.poster = data.media.fallback;
    } else {
      visualElement = document.createElement('img');
      visualElement.className = 'showcase-visual';
      visualElement.src = data.media.src;
      visualElement.alt = data.name;
    }

    showcaseMediaCol.appendChild(visualElement);
    
    const overlay = document.createElement('div');
    overlay.className = 'showcase-media-overlay';
    showcaseMediaCol.appendChild(overlay);

    showcaseDetailsCol.querySelector('.facility-label').innerText = data.label;
    showcaseDetailsCol.querySelector('.facility-name').innerText = data.name;
    showcaseDetailsCol.querySelector('.facility-desc').innerText = data.desc;

    const capList = showcaseDetailsCol.querySelector('.capabilities-list');
    capList.innerHTML = '';
    data.capabilities.forEach(cap => {
      const li = document.createElement('li');
      li.innerText = cap;
      capList.appendChild(li);
    });

    const contactsList = showcaseDetailsCol.querySelector('.contacts-list-container');
    contactsList.innerHTML = '';
    data.contacts.forEach(c => {
      const div = document.createElement('div');
      div.className = 'contact-meta-item';
      const svgHTML = c.type === 'phone' 
        ? `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
        : `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;
      div.innerHTML = `${svgHTML} <span>${c.label}: <a href="${c.url}">${c.value}</a></span>`;
      contactsList.appendChild(div);
    });

    const statsStrip = showcaseDetailsCol.querySelector('.stats-strip');
    statsStrip.innerHTML = '';
    data.stats.forEach(st => {
      const div = document.createElement('div');
      div.className = 'quick-stat-card';
      div.innerHTML = `<span class="quick-stat-num">${st.val}</span><span class="quick-stat-label">${st.label}</span>`;
      statsStrip.appendChild(div);
    });

    showcaseHighlightsGrid.innerHTML = '';
    const iconSVGs = [
      `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle></svg>`,
      `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20M5 17V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12M9 10h6"></path></svg>`,
      `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
      `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v8L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14 10V2zM6 2h12M10 12h4"></path></svg>`
    ];

    data.highlights.forEach((hl, i) => {
      const card = document.createElement('div');
      card.className = 'highlight-card glass-panel';
      card.style.opacity = '0';
      card.style.transform = 'translateY(15px)';
      card.innerHTML = `
        <div class="hl-icon-wrap">${iconSVGs[i]}</div>
        <h3 class="hl-title">${hl.title}</h3>
        <p class="hl-desc">${hl.desc}</p>
      `;
      showcaseHighlightsGrid.appendChild(card);
    });

    showcaseGalleryGrid.innerHTML = '';
    data.gallery.forEach(gal => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.style.opacity = '0';
      card.style.transform = 'translateY(15px)';
      card.innerHTML = `
        <img class="gallery-img" src="${gal.src}" alt="${gal.title}">
        <div class="gallery-overlay">
          <span class="gallery-tag">${gal.tag}</span>
          <h4 class="gallery-title">${gal.title}</h4>
        </div>
      `;
      showcaseGalleryGrid.appendChild(card);
    });

    if (directionsLinkBtn) {
      directionsLinkBtn.href = data.mapUrl;
    }
  }

  function fadeInShowcase(data) {
    const fadeInTimeline = gsap.timeline();
    const mediaVisual = showcaseMediaCol.querySelector('.showcase-visual');
    const detailsChildren = showcaseDetailsCol.children;
    const highlightCards = showcaseHighlightsGrid.querySelectorAll('.highlight-card');
    const galleryCards = showcaseGalleryGrid.querySelectorAll('.gallery-card');

    if (mediaVisual) {
      gsap.fromTo(mediaVisual, 
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.15 },
        { clipPath: 'inset(0% 0% 0% 0%)', scale: 1.0, duration: 1.0, ease: 'power3.out' }
      );
      
      if (window.ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === showcaseMediaCol) trigger.kill();
        });

        gsap.to(mediaVisual, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: showcaseMediaCol,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }

    gsap.set([detailsChildren, highlightCards, galleryCards], { autoAlpha: 0, y: 20 });

    fadeInTimeline.to(detailsChildren, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out'
    })
    .to(highlightCards, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out'
    }, '-=0.4')
    .to(galleryCards, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out'
    }, '-=0.4');
  }

  const initShowcaseScrollTriggers = () => {
    if (!window.ScrollTrigger) return;

    if (showcaseHighlightsGrid) {
      ScrollTrigger.create({
        trigger: showcaseHighlightsGrid,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(showcaseHighlightsGrid.querySelectorAll('.highlight-card'), {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        }
      });
    }

    if (showcaseGalleryGrid) {
      ScrollTrigger.create({
        trigger: showcaseGalleryGrid,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(showcaseGalleryGrid.querySelectorAll('.gallery-card'), {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        }
      });
    }

    const initialMedia = showcaseMediaCol ? showcaseMediaCol.querySelector('.showcase-visual') : null;
    if (initialMedia && showcaseMediaCol) {
      gsap.to(initialMedia, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: showcaseMediaCol,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  };

  initShowcaseScrollTriggers();

  /* ── 3. GSAP Entrance and ScrollTrigger Animations ── */
  const initAnimations = () => {
    if (!window.gsap) return;

    // Hero Entrance
    const heroTl = gsap.timeline({ delay: 0.35 });
    heroTl.from('.contact-hero .hero-tagline', { y: 25, autoAlpha: 0, duration: 0.7, ease: 'power3.out' })
          .from('.contact-hero .hero-title', { y: 35, autoAlpha: 0, duration: 0.85, ease: 'power4.out' }, '-=0.45')
          .from('.contact-hero .hero-subtitle', { y: 20, autoAlpha: 0, filter: 'blur(3px)', duration: 0.7, ease: 'power3.out' }, '-=0.5')
          .from('.contact-hero .hero-ctas .btn', { y: 15, autoAlpha: 0, stagger: 0.12, duration: 0.6, ease: 'back.out(1.4)' }, '-=0.4');

    // Hero Video Parallax Scroll
    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      const heroBg = document.querySelector('.hero-video-local') || document.querySelector('.video-background-iframe');
      if (heroBg && document.querySelector('.contact-hero')) {
        gsap.to(heroBg, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: '.contact-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        });
      }

      // Schedule Visit CTA Parallax
      const ctaBg = document.querySelector('.visit-cta-bg');
      if (ctaBg) {
        gsap.fromTo(ctaBg, 
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: '.contact-visit-cta',
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      }
      
      ScrollTrigger.refresh();
    }
  };

  // Run animations after load to get proper element dimensions and positions
  if (document.readyState === 'complete') {
    initAnimations();
  } else {
    window.addEventListener('load', initAnimations);
  }

  /* ── 4. Scroll To Action Helpers ────────────────────── */
  window.scrollToContactForm = function() {
    const target = document.querySelector('.contact-form-section');
    if (target) {
      const lenis = window.VimalMotion?.getLenis();
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  window.scrollToVisitCta = function() {
    const target = document.querySelector('.contact-visit-cta');
    if (target) {
      const lenis = window.VimalMotion?.getLenis();
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  window.scrollToLocations = function() {
    const target = document.querySelector('.contact-locations-section');
    if (target) {
      const lenis = window.VimalMotion?.getLenis();
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  /* ── 5. Visit CTA Particles Canvas ────────────────── */
  const visitCanvas = document.getElementById('visit-particles');
  if (visitCanvas) {
    const ctx = visitCanvas.getContext('2d');
    let particles = [];
    const COUNT = window.innerWidth < 768 ? 10 : 25;

    const resize = () => {
      const rect = visitCanvas.parentElement.getBoundingClientRect();
      visitCanvas.width = rect.width;
      visitCanvas.height = rect.height;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x = Math.random() * visitCanvas.width;
        this.y = init ? Math.random() * visitCanvas.height : visitCanvas.height + 10;
        this.size = Math.random() * 2.2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 1.0;
        this.speedY = -(Math.random() * 1.2 + 0.4); // Rising
        this.opacity = Math.random() * 0.5 + 0.1;
        this.fade = Math.random() * 0.0025 + 0.0006;
        const r = Math.random();
        this.color = r > 0.6 ? '#F47A35' : r > 0.25 ? '#FFAA4D' : '#FFF5E0';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.fade;
        if (this.opacity <= 0 || this.x < -10 || this.x > visitCanvas.width + 10 || this.y < -10) {
          this.reset();
        }
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

    for (let i = 0; i < COUNT; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, visitCanvas.width, visitCanvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      requestAnimationFrame(animate);
    };
    animate();
  }

  /* ── 6. 3D Tilt Animation for Location Cards ─────── */
  const init3dTilt = () => {
    const cards = document.querySelectorAll('.location-card');
    if (!cards.length) return;

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Tilt amount: max 8 degrees
        const rotateX = ((centerY - y) / centerY) * 8; 
        const rotateY = ((x - centerX) / centerX) * 8; 

        // Apply scale, lift, and dynamic rotation
        card.style.transform = `perspective(1000px) translateY(-12px) scale(1.015) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        // Reset card back to flat state smoothly
        card.style.transform = `perspective(1000px) translateY(0) scale(1) rotateX(0deg) rotateY(0deg)`;
      });
    });
  };

  init3dTilt();

});
