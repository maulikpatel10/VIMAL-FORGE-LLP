/* =========================================================
   PRODUCT-V5.JS — Immersive Storytelling Controller
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Make sure GSAP and ScrollTrigger are registered
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ==========================================
     1. IMMERSIVE EXPLORER DATABASE
     ========================================== */
  const explorerDatabase = {
    'bearing': {
      title: 'Bearing Industry',
      overview: 'Supplying high-cleanliness chrome steel outer and inner races to global top-tier bearing manufacturers. Custom radial-axial rolling controls grain structure orientation, multiplying mechanical fatigue limits under continuous anti-friction wear.',
      applications: ['Deep Groove Ball Bearings', 'Cylindrical Roller Bearings', 'Tapered Roller Assemblies', 'Industrial Swivel Bearings'],
      image: '/assets/images/bearing_races_showcase.png'
    },
    'automotive': {
      title: 'Automotive Industry',
      overview: 'High-precision closed-die engine and transmission forgings. Continuous grain lines prevent fracture under intense torsional vibration, securing steering columns, universal yokes, and axle shafts.',
      applications: ['Planetary Gearing Sets', 'Universal Joint Yokes', 'Axel Hub Spindles', 'Brake Actuation linkages'],
      image: '/assets/images/gear_blanks_showcase.png'
    },
    'oilgas': {
      title: 'Oil & Gas Pipelines',
      overview: 'Corrosion-resistant forged adaptors and piping flanges meeting strict pressure ratings to prevent hazardous leaks in high-salinity offshore and onshore oilfield manifolds.',
      applications: ['Drilling Manifolds', 'High-Pressure Gas Lines', 'Offshore Riser Adapters', 'Wellhead Valves'],
      image: 'https://vimalsteelforge.com/wp-content/uploads/2024/09/FORGE-HOUSING.jpg'
    },
    'hydraulic': {
      title: 'Hydraulic Industry',
      overview: 'Leak-free forged cylinder ends and bushings. Fully dense microstructure eliminates micro-voids, preventing hydraulic fluid weeping at working pressures exceeding 350 bar.',
      applications: ['Industrial Actuators', 'Swivel Manifolds', 'Pivot Linkages', 'Gland Cover Rings'],
      image: '/assets/images/cylinder_ends_showcase.png'
    },
    'construction': {
      title: 'Construction Equipment',
      overview: 'High-tensile drop-forged structural linkages and joints designed to operate under continuous vibration and heavy variable payloads in harsh job site conditions.',
      applications: ['Excavator Arm Knuckles', 'Crane Swivel Nodes', 'Mixer Gearing Rings', 'Track Articulation Ends'],
      image: '/assets/images/custom_forgings_showcase.png'
    },
    'heavy-engineering': {
      title: 'Heavy Engineering',
      overview: 'Custom-sized rolled rings and large machined blanks up to 500mm OD, optimized for heavy rotation, high-pressure sealing, and power transmission loads.',
      applications: ['Processing Line Rollers', 'Turbine Flange Rings', 'Heavy Gear Blanks', 'Thick Wall Sleeves'],
      image: 'https://vimalsteelforge.com/wp-content/uploads/2021/04/costmise-forged-ring.png'
    }
  };

  const materialsDatabase = {
    'bearing': [
      {
        tag: 'SAE 52100',
        family: 'Bearing Steel',
        title: 'SAE 52100 / 100Cr6 Chrome Steel',
        components: 'Precision Bearing Races, Inner/Outer Rings, Washer Sleeves',
        apps: 'High-cleanliness anti-friction roller and ball bearings',
        process: 'Spheroidize Annealed to maximize machineability and minimize wear',
        industries: 'Anti-Friction Bearing Manufacturers, Gearboxes'
      },
      {
        tag: '100Cr6',
        family: 'Bearing Steel',
        title: '100Cr6 Hardened Chrome Steel',
        components: 'Tapered outer rings, high load roller races, structural wear rings',
        apps: 'Wind turbine pitch bearings, railway infrastructure hubs',
        process: 'Forced oil-quenching checks to control grain boundaries',
        industries: 'Heavy Machinery, Renewables, Transport'
      }
    ],
    'alloy': [
      {
        tag: '20MnCr5',
        family: 'Alloy Case Hardening',
        title: '20MnCr5 Case Hardening Steel',
        components: 'Gear Ring Blanks, Flange Yoke Couplers, planetary shaft blanks',
        apps: 'Industrial power transmission gear boxes, truck differentials',
        process: 'Isothermal Annealed for high-density grain and case hardening predictability',
        industries: 'Gear Transmission, Automotive Drivetrains'
      },
      {
        tag: 'EN 19',
        family: 'Alloy Structural Steel',
        title: 'EN19 / AISI 4140 Chrome-Moly',
        components: 'Multi-throw crankshafts, axel hub spindles, piston connecting rods',
        apps: 'High torque crankshaft webs, pump shafts, structural connectors',
        process: 'Quenched & Tempered to 280-320 BHN to secure massive wear resistance',
        industries: 'Construction Machinery, Oilfield Manifolds, Engine Parts'
      }
    ],
    'carbon': [
      {
        tag: 'C45 Carbon',
        family: 'Medium Carbon Steel',
        title: 'C45 / EN8 Medium Carbon',
        components: 'Seamless ring spacers, wear track links, large flanges',
        apps: 'Excavator conveyor chain links, pipeline connector blocks',
        process: 'Normalized at 860°C to eliminate residual forging stresses',
        industries: 'Oil & Gas Pipelines, Mining Elevators, Structural Engineering'
      }
    ],
    'stainless': [
      {
        tag: 'SS 316',
        family: 'Austenitic Stainless',
        title: 'SS 316 / Grade 1.4401 Molybdenum Alloy',
        components: 'High pressure acid elbows, wellhead valve adaptors, structural rings',
        apps: 'Offshore drilling manifolds, chemical fertilizer processors, marine valve grids',
        process: 'Solution heat-treated for maximum pitting and crevice corrosion immunity',
        industries: 'Petrochemical Pipelines, Acid Wash Lines, Marine Equipment'
      }
    ]
  };

  /* ==========================================
     2. HERO PARTICLES SYSTEM
     ========================================== */
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 35;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 80;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = Math.random() * 0.5 + 0.15;
        this.opacity = Math.random() * 0.35 + 0.1;
        this.waveSpeed = Math.random() * 0.01 + 0.005;
        this.waveStep = Math.random() * 100;
      }
      update() {
        this.y -= this.speedY;
        this.waveStep += this.waveSpeed;
        this.x += Math.sin(this.waveStep) * 0.08;
        if (this.y < -10) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `rgba(244, 122, 53, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
      particles[i].y = Math.random() * canvas.height;
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  }

  /* ==========================================
     3. HERO MOUSE PARALLAX
     ========================================== */
  const heroSection = document.querySelector('.hero-v5');
  const heroImageWrap = document.querySelector('.hero-v5-image-wrap');
  if (heroSection && heroImageWrap) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(heroImageWrap, {
        x: x * 0.03,
        y: y * 0.03,
        rotationY: x * 0.008,
        rotationX: -y * 0.008,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

    heroSection.addEventListener('mouseleave', () => {
      gsap.to(heroImageWrap, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    });
  }

  /* ==========================================
     4. IMMERSIVE INDUSTRY EXPLORER
     ========================================== */
  const menuButtons = document.querySelectorAll('.explorer-menu-item');
  const bgLayers = document.querySelectorAll('.explorer-bg-layer');
  const expTitle = document.getElementById('exp-title');
  const expDesc = document.getElementById('exp-desc');
  const expAppsBox = document.getElementById('exp-apps-box');

  function swapIndustryContent(indKey) {
    const data = explorerDatabase[indKey];
    if (!data) return;

    // Swap active backgrounds
    bgLayers.forEach(layer => {
      if (layer.getAttribute('data-ind') === indKey) {
        layer.classList.add('active');
      } else {
        layer.classList.remove('active');
      }
    });

    // Swap text fields with GSAP animations
    if (expTitle && expDesc && expAppsBox) {
      gsap.to([expTitle, expDesc, expAppsBox], {
        opacity: 0,
        y: 8,
        duration: 0.2,
        stagger: 0.02,
        onComplete: () => {
          expTitle.textContent = data.title;
          expDesc.textContent = data.overview;
          
          expAppsBox.innerHTML = data.applications.map(app => `
            <div class="explorer-app-item">${app}</div>
          `).join('');

          gsap.to([expTitle, expDesc, expAppsBox], {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.02
          });
        }
      });
    }
  }

  menuButtons.forEach(btn => {
    const handleTrigger = () => {
      if (btn.classList.contains('active')) return;
      menuButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const indKey = btn.getAttribute('data-ind');
      swapIndustryContent(indKey);
    };

    btn.addEventListener('click', handleTrigger);
    btn.addEventListener('mouseenter', handleTrigger);
  });

  // Init Bearing
  swapIndustryContent('bearing');

  /* ==========================================
     5. GSAP MANUFACTURING JOURNEY (Horizontal scroll pinning)
     ========================================== */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      const pinContainer = document.querySelector('.journey-pin-section');
      const horizontalTrack = document.querySelector('.journey-horizontal-track');
      
      if (pinContainer && horizontalTrack) {
        gsap.to(horizontalTrack, {
          xPercent: -80, // Since there are 5 stages, slide by 4 segments (80%)
          ease: 'none',
          scrollTrigger: {
            trigger: pinContainer,
            start: 'top top',
            end: '+=400%', // Scroll height multiplier
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true
          }
        });
      }
    });
  }

  /* ==========================================
     6. METALLURGY INTERACTIVE PANELS
     ========================================== */
  const gradeCatBtns = document.querySelectorAll('.alloy-cat-btn');
  const gradeTagsBox = document.getElementById('alloy-tags-wrapper');
  
  const mFamily = document.getElementById('meta-family');
  const mTitle = document.getElementById('meta-title');
  const mComponents = document.getElementById('meta-components');
  const mApps = document.getElementById('meta-apps');
  const mProcess = document.getElementById('meta-process');
  const mIndustries = document.getElementById('meta-industries');

  function renderAlloyDetails(alloyObj) {
    if (!alloyObj || !mTitle) return;
    const fields = [mFamily, mTitle, mComponents, mApps, mProcess, mIndustries];

    gsap.to(fields, {
      opacity: 0,
      y: 6,
      duration: 0.15,
      stagger: 0.01,
      onComplete: () => {
        mFamily.textContent = alloyObj.family;
        mTitle.textContent = alloyObj.title;
        mComponents.textContent = alloyObj.components;
        mApps.textContent = alloyObj.apps;
        mProcess.textContent = alloyObj.process;
        mIndustries.textContent = alloyObj.industries;

        gsap.to(fields, {
          opacity: 1,
          y: 0,
          duration: 0.25,
          stagger: 0.01
        });
      }
    });
  }

  function renderAlloyTags(catKey) {
    if (!gradeTagsBox) return;
    const grades = materialsDatabase[catKey];
    if (!grades || !grades.length) return;

    gradeTagsBox.innerHTML = '';
    
    grades.forEach((grade, idx) => {
      const tagBtn = document.createElement('button');
      tagBtn.className = `alloy-tag-btn ${idx === 0 ? 'active' : ''}`;
      tagBtn.textContent = grade.tag;
      
      tagBtn.addEventListener('click', () => {
        gradeTagsBox.querySelectorAll('.alloy-tag-btn').forEach(t => t.classList.remove('active'));
        tagBtn.classList.add('active');
        renderAlloyDetails(grade);
      });

      gradeTagsBox.appendChild(tagBtn);
    });

    renderAlloyDetails(grades[0]);
  }

  if (gradeCatBtns.length) {
    gradeCatBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) return;
        gradeCatBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const catKey = btn.getAttribute('data-alloy');
        renderAlloyTags(catKey);
      });
    });

    // Init
    renderAlloyTags('bearing');
  }

  /* ==========================================
     7. FILE UPLOADER FOR DRAWINGS
     ========================================== */
  const dropZone = document.getElementById('drawing-upload-zone');
  const fileInput = document.getElementById('rfq-file-input');
  const fileDisplay = document.getElementById('file-list-display');

  if (dropZone && fileInput && fileDisplay) {
    dropZone.addEventListener('click', () => {
      fileInput.click();
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--color-accent)';
        dropZone.style.background = 'rgba(244, 122, 53, 0.05)';
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'rgba(255, 255, 255, 0.12)';
        dropZone.style.background = 'rgba(0, 0, 0, 0.15)';
      }, false);
    });

    dropZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      if (dt.files.length) {
        handleUploadedFile(dt.files[0]);
      }
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length) {
        handleUploadedFile(fileInput.files[0]);
      }
    });

    function handleUploadedFile(file) {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
      const uploadText = dropZone.querySelector('.box-text');
      if (uploadText) {
        uploadText.innerHTML = `File Chosen: <strong style="color:var(--color-accent);">${file.name}</strong>`;
      }

      fileDisplay.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-top: 1rem; padding: 0.8rem; background: rgba(244,122,53,0.06); border-radius: var(--border-radius-sm); border: 1px solid rgba(244,122,53,0.2); text-align:left;">
          <span style="color:#fff; font-size:0.85rem; display:flex; align-items:center; gap:8px;">
            <span>📄</span> ${file.name} (${sizeMb} MB)
          </span>
          <span style="color:#4caf50; font-size:0.75rem; font-weight:800; text-transform:uppercase; letter-spacing:1px;">Ready</span>
        </div>
      `;
      fileDisplay.style.display = 'block';
    }
  }

  /* ==========================================
     8. GSAP INTRO REVEALS
     ========================================== */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    // Hero load
    gsap.from('.hero-v5-eyebrow, .hero-v5-heading, .hero-v5-subtext, .hero-v5-actions', {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });

    gsap.from('.hero-v5-image-wrap', {
      opacity: 0,
      scale: 0.82,
      duration: 1.4,
      ease: 'power3.out',
      delay: 0.4
    });

    // Story blocks triggers
    const storyBlocks = gsap.utils.toArray('.story-product-block');
    storyBlocks.forEach(block => {
      const img = block.querySelector('.story-prod-media img');
      const textFields = block.querySelectorAll('.story-prod-tag, h3, p, .story-prod-specs, .btn');

      gsap.from(img, {
        scrollTrigger: {
          trigger: block,
          start: 'top 75%'
        },
        opacity: 0,
        scale: 0.85,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.from(textFields, {
        scrollTrigger: {
          trigger: block,
          start: 'top 75%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });
    });
  }

});
