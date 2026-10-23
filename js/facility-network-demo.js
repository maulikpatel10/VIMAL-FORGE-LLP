/* ========================================================
   FACILITY-NETWORK-DEMO.JS — GSAP Animation Engine
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Check if GSAP is available
  if (typeof gsap === 'undefined') {
    console.error('GSAP is not loaded. Please ensure CDN scripts are available.');
    return;
  }

  // Register ScrollTrigger plugin if available
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // --- Dynamic Content Data ---
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

  // --- Element Selectors ---
  const tabButtons = document.querySelectorAll('.showcase-tab-btn');
  const tabsBar = document.querySelector('.showcase-tabs-bar');
  const mediaCol = document.querySelector('.showcase-media-column');
  const detailsCol = document.querySelector('.showcase-details-column');
  const highlightsGrid = document.querySelector('.highlights-grid');
  const galleryGrid = document.querySelector('.gallery-grid');

  // Action buttons
  const rfqBtn = document.getElementById('btn-showcase-rfq');
  const directionsBtn = document.getElementById('btn-showcase-directions');
  const contactBtn = document.getElementById('btn-showcase-contact');

  // Let's create an indicator dynamically
  let indicator = document.querySelector('.showcase-tab-indicator');
  if (tabsBar && !indicator) {
    indicator = document.createElement('div');
    indicator.className = 'showcase-tab-indicator';
    tabsBar.appendChild(indicator);
  }

  // --- Set active tab sliding indicator ---
  const moveIndicator = (activeBtn) => {
    if (!indicator || !activeBtn || !tabsBar) return;
    const barRect = tabsBar.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    const left = btnRect.left - barRect.left;
    const width = btnRect.width;

    gsap.to(indicator, {
      left: left,
      width: width,
      duration: 0.5,
      ease: 'power3.out'
    });
  };

  // --- Initial animations on load ---
  const initPageEntrance = () => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from('.showcase-tagline', { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out' })
      .from('.showcase-title', { y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .from('.showcase-subtitle', { y: 15, autoAlpha: 0, duration: 0.6, ease: 'power2.out' }, '-=0.5')
      .from('.showcase-tabs-container', { y: 25, autoAlpha: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .from('.showcase-panel', { y: 35, autoAlpha: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3');

    // Move indicator to active tab
    const activeBtn = document.querySelector('.showcase-tab-btn.active');
    if (activeBtn) {
      if (tabsBar) tabsBar.classList.add('has-active');
      setTimeout(() => moveIndicator(activeBtn), 150);
    }
  };

  // Run initial entrance
  initPageEntrance();

  // Resize listener for indicator
  window.addEventListener('resize', () => {
    const activeBtn = document.querySelector('.showcase-tab-btn.active');
    if (activeBtn) moveIndicator(activeBtn);
  });

  // --- Tab click handler ---
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeBtn = document.querySelector('.showcase-tab-btn.active');
      if (activeBtn === btn) return;

      // Update button active state
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      moveIndicator(btn);

      const targetTabId = btn.getAttribute('data-tab');
      const data = facilityData[targetTabId];
      if (!data) return;

      // Animate transition using GSAP
      transitionShowcase(data);
    });
  });

  // --- Core Transition Engine ---
  function transitionShowcase(data) {
    // 1. Fade out current content elements
    const fadeOutTimeline = gsap.timeline();
    
    // Select elements to fade out
    const mediaVisual = mediaCol.querySelector('.showcase-visual');
    const detailsChildren = detailsCol.children;
    const highlightCards = highlightsGrid.querySelectorAll('.highlight-card');
    const galleryCards = galleryGrid.querySelectorAll('.gallery-card');

    fadeOutTimeline.to([mediaVisual, detailsChildren, highlightCards, galleryCards], {
      autoAlpha: 0,
      y: 15,
      duration: 0.35,
      stagger: 0.05,
      ease: 'power2.in',
      onComplete: () => {
        // Update DOM Content in the background once elements are invisible
        updateDOMContent(data);
        
        // 2. Fade in and reveal new content
        fadeInContent(data);
      }
    });
  }

  // --- Update DOM elements ---
  function updateDOMContent(data) {
    // A. Update Media Column
    mediaCol.innerHTML = '';
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
      
      // Fallback poster/background
      visualElement.poster = data.media.fallback;
    } else {
      visualElement = document.createElement('img');
      visualElement.className = 'showcase-visual';
      visualElement.src = data.media.src;
      visualElement.alt = data.name;
    }

    mediaCol.appendChild(visualElement);
    
    const overlay = document.createElement('div');
    overlay.className = 'showcase-media-overlay';
    mediaCol.appendChild(overlay);

    // B. Update Details Column
    detailsCol.querySelector('.facility-label').innerText = data.label;
    detailsCol.querySelector('.facility-name').innerText = data.name;
    detailsCol.querySelector('.facility-desc').innerText = data.desc;

    // Capabilities List
    const capList = detailsCol.querySelector('.capabilities-list');
    capList.innerHTML = '';
    data.capabilities.forEach(cap => {
      const li = document.createElement('li');
      li.innerText = cap;
      capList.appendChild(li);
    });

    // Contacts
    const contactsList = detailsCol.querySelector('.contacts-list-container');
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

    // Statistics
    const statsStrip = detailsCol.querySelector('.stats-strip');
    statsStrip.innerHTML = '';
    data.stats.forEach(st => {
      const div = document.createElement('div');
      div.className = 'quick-stat-card';
      div.innerHTML = `<span class="quick-stat-num">${st.val}</span><span class="quick-stat-label">${st.label}</span>`;
      statsStrip.appendChild(div);
    });

    // C. Update Section 3 Highlights
    highlightsGrid.innerHTML = '';
    const iconSVGs = [
      // Ring Rolling (Outer Race/Circle)
      `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle></svg>`,
      // Forging (Anvil/Hammer/Structure)
      `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20M5 17V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12M9 10h6"></path></svg>`,
      // CNC (Gears/Axes)
      `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
      // Laboratory (Test Tube/Flask)
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
      highlightsGrid.appendChild(card);
    });

    // D. Update Section 4 Gallery
    galleryGrid.innerHTML = '';
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
      galleryGrid.appendChild(card);
    });

    // E. Action buttons update
    if (directionsBtn) {
      directionsBtn.href = data.mapUrl;
    }
  }

  // --- Fade in new content ---
  function fadeInContent(data) {
    const fadeInTimeline = gsap.timeline();
    const mediaVisual = mediaCol.querySelector('.showcase-visual');
    const detailsChildren = detailsCol.children;
    const highlightCards = highlightsGrid.querySelectorAll('.highlight-card');
    const galleryCards = galleryGrid.querySelectorAll('.gallery-card');

    // Reveal Image/Video using a slide clip-path mask for a luxury touch
    if (mediaVisual) {
      gsap.fromTo(mediaVisual, 
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.15 },
        { clipPath: 'inset(0% 0% 0% 0%)', scale: 1.0, duration: 1.0, ease: 'power3.out' }
      );
      
      // Also register a ScrollTrigger parallax for the active media visual
      if (typeof ScrollTrigger !== 'undefined') {
        // Kill existing triggers on media column to avoid memory leak
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === mediaCol) trigger.kill();
        });

        gsap.to(mediaVisual, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: mediaCol,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }

    // Set initial states for elements
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

  // --- ScrollTrigger Scroll Reveal Setup ---
  const initScrollTriggerAnimations = () => {
    if (typeof ScrollTrigger === 'undefined') return;

    // Stagger animate highlights on scroll
    ScrollTrigger.create({
      trigger: highlightsGrid,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(highlightsGrid.querySelectorAll('.highlight-card'), {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    });

    // Stagger animate gallery on scroll
    ScrollTrigger.create({
      trigger: galleryGrid,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(galleryGrid.querySelectorAll('.gallery-card'), {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    });

    // Add parallax ScrollTrigger to the initial visual media element
    const initialVisual = mediaCol.querySelector('.showcase-visual');
    if (initialVisual) {
      gsap.to(initialVisual, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: mediaCol,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  };

  // Run ScrollTrigger hooks
  initScrollTriggerAnimations();

  // Scroll to RFQ functionality for local button
  if (rfqBtn) {
    rfqBtn.addEventListener('click', (e) => {
      // In the real page this will scroll to the contact/RFQ section.
      // In this demo, we will output an alert or smoothly scroll down if a footer/mock form exists.
      const mockForm = document.getElementById('demo-mock-rfq');
      if (mockForm) {
        const lenis = window.VimalMotion?.getLenis();
        if (lenis) {
          lenis.scrollTo(mockForm, { duration: 1.2 });
        } else {
          mockForm.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        alert('RFQ Requested! In the final Contact Page implementation, this button will scroll directly to the RFQ form.');
      }
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      alert('Contacting Plant Sourcing Desk... Tel: +91 99797 77787');
    });
  }
});
