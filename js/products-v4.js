/* =========================================================
   PRODUCTS-V3.JS — Interactive flagship scripts
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Make sure GSAP and ScrollTrigger are registered
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ==========================================
     SECTION 4: INTERACTIVE INDUSTRY EXPLORER
     ========================================== */
  const industryDatabase = {
    'bearing': {
      title: 'Bearing Industry',
      desc: 'Supplying high-cleanliness chrome steel outer/inner races to global top-tier bearing manufacturers. Custom radial-axial rolling controls grain structure orientation, multiplying mechanical fatigue limits under continuous pressure.',
      components: 'Bearing Races, Bearing Sleeves, Thrust Washers',
      apps: 'Deep groove ball bearings, tapered roller bearing packs, cylindrical thrust units',
      image: '/assets/images/bearing_races_showcase.png'
    },
    'automotive': {
      title: 'Automotive Industry',
      desc: 'High-precision closed-die engine and transmission blanks. Continuous grain lines prevent fracture under intense torsional vibration, securing steering columns, universal couplers, and transmission shafts.',
      components: 'Axel Hub Spindles, Flange Yoke Couplers, Cam Shafts',
      apps: 'Commercial utility trucks, passenger cars, off-highway power take-off (PTO) assemblies',
      image: '/assets/images/gear_blanks_showcase.png'
    },
    'agriculture': {
      title: 'Agriculture Industry',
      desc: 'Engineered harvester gear rings and load-bearing linkages designed to withstand abrasive mud, dust, and continuous mechanical shock in modern farming implements.',
      components: 'Gear Ring Blanks, Axel Spindles, Connectors',
      apps: 'Heavy duty tractors, rotavators, harvesting machinery transmissions, soil tillers',
      image: '/assets/images/rolled_rings_showcase.png'
    },
    'construction': {
      title: 'Construction Equipment',
      desc: 'High-tensile closed-die forgings for heavy structural joints, structural columns, and articulation nodes operating under continuous vibration and variable loading.',
      components: 'Heavy Connecting Rods, Spindle Sets, Forged Brackets',
      apps: 'Transit mixers, backhoe loaders, soil compactors, tower crane swivel joints',
      image: '/assets/images/custom_forgings_showcase.png'
    },
    'hydraulic': {
      title: 'Hydraulic Industry',
      desc: 'Leak-free forged cylinder ends and bushings. Fully dense microstructure eliminates micro-voids, preventing hydraulic fluid weeping at working pressures exceeding 350 bar.',
      components: 'Hydraulic Cylinder Ends, Bushings, Covers, Flange Joints',
      apps: 'Industrial actuators, hydraulic cranes, dump truck lifters, scissor platforms',
      image: '/assets/images/cylinder_ends_showcase.png'
    },
    'earthmoving': {
      title: 'Earth Moving Machinery',
      desc: 'Heavy track links and sprocket rings forged with targeted heat treatment (Quenched & Tempered) for high impact resistance and abrasive wear tolerance in rock and granite quarries.',
      components: 'Chain Links, Large Rolled Spacers, Gear Ring Blanks',
      apps: 'Track excavators, crawler dozers, off-highway mining trucks, quarry breakers',
      image: 'https://vimalsteelforge.com/wp-content/uploads/2024/09/Chain-Link.jpg'
    },
    'oilgas': {
      title: 'Oil & Gas Pipelines',
      desc: 'Corrosion-resistant forged adaptors and piping flanges. Meets strict ASTM pressure ratings to prevent hazardous leaks in high-salinity offshore and onshore oilfield manifolds.',
      components: 'Adeptor Housing, Forged Elbows, Gasket Rings',
      apps: 'Drilling manifolds, high-pressure processing lines, gas flow loops, wellhead valves',
      image: 'https://vimalsteelforge.com/wp-content/uploads/2024/09/FORGE-HOUSING.jpg'
    },
    'transmission': {
      title: 'Gear Transmission',
      desc: 'Planetary and bevel gear ring blanks rolled with uniform grain boundary structures, resulting in lower noise levels and higher teeth cutting accuracy during final gear-hobbing.',
      components: 'Gear Ring Blanks, Seamless Rolled Rings, Sleeves',
      apps: 'Industrial gearboxes, wind turbine pitch gears, speed reducers, cooling towers',
      image: 'https://vimalsteelforge.com/wp-content/uploads/2024/09/Flange-Yoke.jpg'
    },
    'engineering': {
      title: 'Heavy Engineering',
      desc: 'Custom drawing-based forged rings and structural blanks up to 500mm OD. Supported by in-house VMC die shops for rapid tooling development and physical sample prototypes.',
      components: 'Seamless Rolled Rings, Customized Forgings, Covers',
      apps: 'Industrial compressors, heavy metal processing lines, turbine casings, paper mills',
      image: 'https://vimalsteelforge.com/wp-content/uploads/2021/04/costmise-forged-ring.png'
    }
  };

  const explorerButtons = document.querySelectorAll('.explorer-btn');
  const hudImg = document.getElementById('ind-hud-img');
  const hudTitle = document.getElementById('ind-hud-title');
  const hudDesc = document.getElementById('ind-hud-desc');
  const hudComponents = document.getElementById('ind-hud-components');
  const hudApps = document.getElementById('ind-hud-apps');

  if (explorerButtons.length && hudImg) {
    explorerButtons.forEach(btn => {
      const updateExplorer = () => {
        if (btn.classList.contains('active')) return;

        explorerButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const indKey = btn.getAttribute('data-ind');
        const data = industryDatabase[indKey];
        if (!data) return;

        // Animate out
        gsap.to([hudImg, hudTitle, hudDesc, hudComponents, hudApps], {
          opacity: 0,
          y: 8,
          duration: 0.2,
          stagger: 0.02,
          onComplete: () => {
            // Swap values
            hudImg.src = data.image;
            hudImg.alt = data.title;
            hudTitle.textContent = data.title;
            hudDesc.textContent = data.desc;
            hudComponents.textContent = data.components;
            hudApps.textContent = data.apps;

            // Animate in
            gsap.to([hudImg, hudTitle, hudDesc, hudComponents, hudApps], {
              opacity: 1,
              y: 0,
              duration: 0.3,
              stagger: 0.02
            });
          }
        });
      };

      btn.addEventListener('click', updateExplorer);
      btn.addEventListener('mouseenter', updateExplorer);
    });
  }



  /* ==========================================
     SECTION 6: INTERACTIVE MATERIAL SELECTOR
     ========================================== */
  const materialDatabase = {
    'bearing': [
      {
        tag: 'SAE 52100',
        family: 'Bearing Steel',
        title: 'SAE 52100 / 100Cr6',
        products: 'Precision Bearing Races, Inner/Outer Rings, Tapered Bearing Washer Sleeves',
        apps: 'High-cleanliness anti-friction roller and ball bearing sets, industrial spindles',
        process: 'Spheroidize Annealed to secure uniform carbide distributions for machineability',
        industries: 'Anti-Friction Bearing Manufacturers, Automotive Gearboxes, Heavy Machinery'
      },
      {
        tag: '100Cr6',
        family: 'Bearing Steel',
        title: '100Cr6 Chrome Bearing Steel',
        products: 'Tapered outer rings, high load roller races, structural wear rings',
        apps: 'High-stress heavy duty machinery rotation nodes, railway wagon bearing modules',
        process: 'Forced oil-quenching checks to control grain boundaries and secure structural hardening consistency',
        industries: 'Wind Turbine Bearings, Railway Infrastructure, Earth Moving Machinery'
      }
    ],
    'alloy': [
      {
        tag: '20MnCr5',
        family: 'Alloy Case Hardening',
        title: '20MnCr5 Alloy Steel',
        products: 'Gear Ring Blanks, Flange Yoke Couplers, planetary shaft blanks',
        apps: 'Industrial power transmission gear boxes, utility truck differential gearing sets',
        process: 'Isothermal Annealed for high-density grain structure and case hardening predictability',
        industries: 'Gear Transmission, Automotive Drivetrains, Agricultural Implements'
      },
      {
        tag: '16MnCr5',
        family: 'Alloy Case Hardening',
        title: '16MnCr5 Case Hardening Steel',
        products: 'Pinions, selector sleeves, planetary hubs, light gear rings',
        apps: 'High efficiency speed reducers, transmission gearpacks, tractor auxiliary gears',
        process: 'Normalized and shot-blasted for surface machining scalability',
        industries: 'Automotive Assemblies, Power Transmission, Tooling Machinery'
      },
      {
        tag: 'EN 19',
        family: 'Alloy Structural Steel',
        title: 'EN19 / AISI 4140 Chrome-Moly',
        products: 'Multi-throw crankshafts, axel hub spindles, piston connecting rods',
        apps: 'High torque crankshaft webs, agricultural soil tiller couplers, hydraulic pumps',
        process: 'Quenched & Tempered to 280-320 BHN (HRC 28-32) to secure massive wear resistance',
        industries: 'Construction Machinery, Oilfield Manifolds, Engine Parts'
      },
      {
        tag: 'EN 24',
        family: 'High-Tensile Alloy',
        title: 'EN24 / AISI 4340 Nickel-Chrome-Moly',
        products: 'High-torque steering columns, axle drive couplers, mining track gear blanks',
        apps: 'Heavy duty commercial vehicle axles, quarry crushing shafts, aerospace structural nodes',
        process: 'Double tempering heat checks to obtain critical fracture toughness limits',
        industries: 'Earth Moving Excavators, Commercial Truck PTOs, Wind Energy'
      },
      {
        tag: 'SAE 8620',
        family: 'Alloy Case Hardening',
        title: 'SAE 8620 Case Hardening Alloy',
        products: 'Flange yokes, crown gears, pinion shafts, cardan joint couplers',
        apps: 'Utility commercial trucks, universal propshafts, tractor differential transmissions',
        process: 'Gas carburized to secure a hard-surface case shell (HRC 58-62) with high core ductility',
        industries: 'Automotive Transmission, Agricultural Vehicles'
      }
    ],
    'carbon': [
      {
        tag: 'C45',
        family: 'Medium Carbon Steel',
        title: 'C45 / EN8 Medium Carbon',
        products: 'Adeptor Housing, seamless ring spacers, wear track links, flange plates',
        apps: 'Pipeline connector blocks, crane load hooks, excavator conveyor chain structures',
        process: 'Normalized at 860°C to eliminate residual forging stresses and secure reliable turning properties',
        industries: 'Oil & Gas Pipelines, Mining Elevators, Structural Engineering'
      },
      {
        tag: 'C20',
        family: 'Low Carbon Steel',
        title: 'C20 / EN3 Low Carbon',
        products: 'Lock nuts, thrust washers, weldable sleeves, protective pipeline covers',
        apps: 'Gearbox washer columns, low-pressure plumbing pipe manifolds, custom brackets',
        process: 'Stress-relieved for excellent welding yield and high ductility',
        industries: 'Hydraulic Cylinder Components, Light Engineering'
      },
      {
        tag: 'EN 9',
        family: 'High Carbon Steel',
        title: 'EN9 / C55 Carbon Steel',
        products: 'Heavy conveyor rollers, brake cams, wear slides, hammer dies',
        apps: 'Truck and trailer brake actuator linkages, mineral conveyor chains',
        process: 'Surface induction hardened to optimize abrasion resistance limits',
        industries: 'Mining Machinery, Heavy Transport Axles'
      }
    ],
    'stainless': [
      {
        tag: 'SS 304',
        family: 'Austenitic Stainless',
        title: 'SS 304 / Grade 1.4301',
        products: 'Chemical fluid elbows, sanitary piping flanges, wear bushes',
        apps: 'Acid handling pipeline networks, pharmaceutical mixing vessels, marine sleeves',
        process: 'Solution Annealed (Carbide Dissolution) to maximize corrosion resistance index',
        industries: 'Food & Dairy Processing, Oil & Gas Offshore, Chemical Plants'
      },
      {
        tag: 'SS 316',
        family: 'Austenitic Stainless',
        title: 'SS 316 / Grade 1.4401 Molybdenum Alloy',
        products: 'High pressure acid elbows, wellhead valve adaptors, structural rings',
        apps: 'Offshore drilling manifolds, chemical fertilizer processors, marine valve grids',
        process: 'Solution heat-treated for maximum pitting and crevice corrosion immunity',
        industries: 'Petrochemical Pipelines, Acid Wash Lines, Marine Equipment'
      },
      {
        tag: 'SS 410',
        family: 'Martensitic Stainless',
        title: 'SS 410 / Grade 1.4006',
        products: 'Steam turbine blades, valve stems, pump shafts, coupling sleeves',
        apps: 'High friction steam turbine valves, hydraulic pump sleeves, chemical shafts',
        process: 'Hardened & Tempered to HRC 35-42 to optimize surface shear limit and hardness',
        industries: 'Hydraulics, Heavy Industrial Turbines, Oilfield Pumps'
      }
    ]
  };

  const gradeCatButtons = document.querySelectorAll('.grade-cat-btn');
  const gradeTagsContainer = document.getElementById('grade-tags-container');

  // Detail panel elements
  const gdBadge = document.getElementById('gd-family-badge');
  const gdTitle = document.getElementById('gd-title');
  const gdProducts = document.getElementById('gd-products');
  const gdApps = document.getElementById('gd-apps');
  const gdProcess = document.getElementById('gd-process');
  const gdIndustries = document.getElementById('gd-industries');

  function renderGradeDetails(gradeObj) {
    if (!gradeObj || !gdTitle) return;

    const items = [gdBadge, gdTitle, gdProducts, gdApps, gdProcess, gdIndustries];

    // Fade out
    gsap.to(items, {
      opacity: 0,
      y: 6,
      duration: 0.15,
      stagger: 0.02,
      onComplete: () => {
        // Swap content
        gdBadge.textContent = gradeObj.family;
        gdTitle.textContent = gradeObj.title;
        gdProducts.textContent = gradeObj.products;
        gdApps.textContent = gradeObj.apps;
        gdProcess.textContent = gradeObj.process;
        gdIndustries.textContent = gradeObj.industries;

        // Fade in
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.25,
          stagger: 0.02
        });
      }
    });
  }

  function renderGradeTags(catKey) {
    if (!gradeTagsContainer) return;
    const grades = materialDatabase[catKey];
    if (!grades || !grades.length) return;

    gradeTagsContainer.innerHTML = '';
    
    grades.forEach((grade, idx) => {
      const tagBtn = document.createElement('button');
      tagBtn.className = 'grade-tag';
      if (idx === 0) tagBtn.classList.add('active');
      tagBtn.textContent = grade.tag;
      
      tagBtn.addEventListener('click', () => {
        document.querySelectorAll('.grade-tag').forEach(t => t.classList.remove('active'));
        tagBtn.classList.add('active');
        renderGradeDetails(grade);
      });

      gradeTagsContainer.appendChild(tagBtn);
    });

    // Auto load first item details
    renderGradeDetails(grades[0]);
  }

  if (gradeCatButtons.length) {
    gradeCatButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) return;
        gradeCatButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const catKey = btn.getAttribute('data-alloy-type');
        renderGradeTags(catKey);
      });
    });

    // Init first category bearing steel tags
    renderGradeTags('bearing');
  }

  /* ==========================================
     SECTION 9: B2B CAD DRAWING PORTAL
     ========================================== */
  const dropZone = document.getElementById('drawing-upload-zone');
  const fileInput = document.getElementById('rfq-file-input');
  const fileDisplay = document.getElementById('file-list-display');

  if (dropZone && fileInput && fileDisplay) {
    // Open file manager on click
    dropZone.addEventListener('click', () => {
      fileInput.click();
    });

    // Handle drag states
    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--color-accent)';
        dropZone.style.background = 'rgba(244, 122, 53, 0.04)';
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'rgba(255, 255, 255, 0.12)';
        dropZone.style.background = 'rgba(0, 0, 0, 0.15)';
      }, false);
    });

    // File dropped
    dropZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files.length) {
        handleUploadedFile(files[0]);
      }
    });

    // File selected via click
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length) {
        handleUploadedFile(fileInput.files[0]);
      }
    });

    function handleUploadedFile(file) {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
      
      // Update upload box text
      const boxText = dropZone.querySelector('.box-text');
      if (boxText) {
        boxText.innerHTML = `File Selected: <strong style="color:var(--color-accent);">${file.name}</strong>`;
      }

      // Display Preview Info Block
      fileDisplay.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-top: 1rem; padding: 0.8rem; background: rgba(244,122,53,0.06); border-radius: 4px; border: 1px solid rgba(244,122,53,0.2);">
          <span style="color:#fff; font-size:0.85rem; display:flex; align-items:center; gap:8px;">
            <span style="font-size:1.1rem;">📁</span> ${file.name} (${sizeMb} MB)
          </span>
          <span style="color:#4caf50; font-size:0.75rem; font-weight:800; text-transform:uppercase; letter-spacing:1px;">File Ready</span>
        </div>
      `;
      fileDisplay.style.display = 'block';
    }
  }



  // Smooth scroll links inside family categories
  const familyCards = document.querySelectorAll('.family-grid a[href^="#"]');
  familyCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = card.getAttribute('href');
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        const lenisInst = window.VimalMotion ? window.VimalMotion.getLenis() : null;
        if (lenisInst) {
          lenisInst.scrollTo(targetElem, { offset: -60, duration: 1.5 });
        } else {
          const offsetTop = targetElem.getBoundingClientRect().top + window.scrollY - 60;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }
    });
  });

  /* ==========================================
     V4 PREMIUM MICRO-INTERACTIONS & MOTIONS
     ========================================== */

  // 3D Card Tilt
  const tiltCards = document.querySelectorAll('.showcase-story-card, .family-card');
  if (tiltCards.length && typeof gsap !== 'undefined') {
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const angleX = (yc - y) / 20; // adjust sensitivity
        const angleY = (x - xc) / 20; // adjust sensitivity
        
        gsap.to(card, {
          rotateX: angleX,
          rotateY: angleY,
          ease: 'power1.out',
          duration: 0.35,
          transformPerspective: 1000
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          ease: 'power2.out',
          duration: 0.6
        });
      });
    });
  }

  // Magnetic Buttons
  const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .explorer-btn, .btn-rfq-submit');
  if (magneticButtons.length && typeof gsap !== 'undefined') {
    magneticButtons.forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
          x: x * 0.35,
          y: y * 0.35,
          duration: 0.3,
          ease: 'power1.out'
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });
  }

});

