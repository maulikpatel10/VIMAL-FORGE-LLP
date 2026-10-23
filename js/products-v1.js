/* =========================================================
   PRODUCTS-V1.JS — OEM Manufacturing Experience Scripts
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --- 1. GSAP Horizontal Pin Scrolling --- */
  function initHorizontalScroll() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.matchMedia('(max-width: 991px)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobile || prefersReduced) return;

    const wrapper = document.querySelector('.horizontal-pin-wrapper');
    const track = document.querySelector('.horizontal-track');
    const intro = document.querySelector('.horizontal-section-intro');

    if (!wrapper || !track || !intro) return;

    // Calculate total horizontal track scroll distance
    // Total distance is track width plus spacing, minus remaining screen width
    const trackWidth = track.scrollWidth;
    const remainingWidth = window.innerWidth - intro.offsetWidth;
    const scrollDistance = trackWidth - remainingWidth + 96; // 96px safety offset

    gsap.to(track, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
  }

  /* --- 2. Interactive Product Explorer Spec Dictionary --- */
  const specDatabase = {
    'bearing-races': {
      title: 'Bearing Components Specification',
      products: 'Inner & Outer races, Clutch bearing rings, Thrust washers, Lock & groove nuts',
      grades: 'SAE 52100 / 100Cr6 (Chrome bearing steel), High Carbon Steel',
      process: 'Billet Shearing → Induction Heating → Press Punching → Ring Rolling → Spheroidize Annealing → Rough Machining',
      applications: 'Deep groove ball bearings, tapered roller bearings, clutch release assemblies',
      industries: 'Bearing Manufacturers, Automotive OEMs, Industrial Gearbox Makers',
      rfqText: 'Request Bearing Component RFQ',
      odLabel: 'OD: 80 - 500 mm',
      idLabel: 'ID: Spec-based',
      outerScale: 'scale(1)',
      innerScale: 'scale(1)'
    },
    'rolled-rings': {
      title: 'Seamless Rolled Rings Specification',
      products: 'Seamless rolled rings, Gear ring blanks, Large spacers, Custom flanges',
      grades: 'Carbon Steel (EN8, C45, C20), Alloy Steel (20MnCr5, 16MnCr5, 8620), Stainless Steel',
      process: 'Induction Billet Heating → Ring Rolling → Normalizing/Annealing → CNC Turning',
      applications: 'Industrial gears, slewing rings, pipe fittings, heavy valves',
      industries: 'Heavy Engineering, Hydraulics, Power Transmission, Oil & Gas',
      rfqText: 'Request Ring Rolling RFQ',
      odLabel: 'OD: 100 - 450 mm',
      idLabel: 'WT: 10 - 80 mm',
      outerScale: 'scale(0.92)',
      innerScale: 'scale(0.85)'
    },
    'automotive-forgings': {
      title: 'Automotive Components Specification',
      products: 'Gear blanks, Clutch hubs, Axle hubs, Brake drums, Connecting rods, Forge pins',
      grades: '20MnCr5, 8620, EN19, EN24, Case Hardening Steel Grades',
      process: 'Closed Die Drop Hammer Forging → Isothermal Annealing → CNC Turning → Keyway VMC Milling',
      applications: 'Transmission gear systems, differential assemblies, steering joints',
      industries: 'Automotive, Agriculture, Material Handling, Power Transmission',
      rfqText: 'Request Automotive Forging RFQ',
      odLabel: 'Tolerances: 15 microns',
      idLabel: 'Complex Geometry',
      outerScale: 'scale(0.86)',
      innerScale: 'scale(0.72)'
    },
    'custom-forgings': {
      title: 'Custom Forgings Specification',
      products: 'Custom valves, Structural flanges, Hydraulic bushings, Mechanical seal rings, Specialty spacers',
      grades: 'Stainless Steel (304, 316, 410), Carbon Steel, Structural Alloys',
      process: 'Die Simulation → Prototyping → Hammer/Press Forging → Heat Treatment → Finished Turning',
      applications: 'High-pressure valves, machinery joints, hydraulic cylinders, custom couplings',
      industries: 'Hydraulics, Oil & Gas, Construction Equipment, OEM Machinery Makers',
      rfqText: 'Request Custom Component RFQ',
      odLabel: 'Development: 15 Days',
      idLabel: 'Drawing-to-Part',
      outerScale: 'scale(0.8)',
      innerScale: 'scale(0.6)'
    }
  };

  function initBlueprintExplorer() {
    const explorerCards = document.querySelectorAll('.explorer-card');
    const bpTitle = document.getElementById('bp-active-title');
    const bpProducts = document.getElementById('bp-products');
    const bpGrades = document.getElementById('bp-grades');
    const bpProcess = document.getElementById('bp-process');
    const bpApplications = document.getElementById('bp-applications');
    const bpIndustries = document.getElementById('bp-industries');
    const bpRfqLink = document.getElementById('bp-rfq-link');
    
    // Blueprint Canvas elements
    const bpOuterCircle = document.querySelector('.bp-circle.bp-outer');
    const bpInnerCircle = document.querySelector('.bp-circle.bp-inner');
    const bpOdLabel = document.querySelector('.bp-dim-od span');
    const bpIdLabel = document.querySelector('.bp-dim-id span');

    if (!explorerCards.length) return;

    explorerCards.forEach(card => {
      card.addEventListener('click', () => {
        // Toggle active classes on cards
        explorerCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // Fetch specs key
        const key = card.getAttribute('data-exp');
        const specs = specDatabase[key];
        if (!specs) return;

        // Animate specs text updates (simple slide-fade)
        const textElements = [bpTitle, bpProducts, bpGrades, bpProcess, bpApplications, bpIndustries];
        textElements.forEach(el => {
          if (el) el.classList.add('fade-out');
        });

        setTimeout(() => {
          if (bpTitle) bpTitle.textContent = specs.title;
          if (bpProducts) bpProducts.textContent = specs.products;
          if (bpGrades) bpGrades.textContent = specs.grades;
          if (bpProcess) bpProcess.textContent = specs.process;
          if (bpApplications) bpApplications.textContent = specs.applications;
          if (bpIndustries) bpIndustries.textContent = specs.industries;
          if (bpRfqLink) {
            bpRfqLink.textContent = specs.rfqText;
          }

          // Update Blueprint Drawing attributes
          if (bpOdLabel) bpOdLabel.textContent = specs.odLabel;
          if (bpIdLabel) bpIdLabel.textContent = specs.idLabel;
          if (bpOuterCircle) bpOuterCircle.style.transform = specs.outerScale;
          if (bpInnerCircle) bpInnerCircle.style.transform = specs.innerScale;

          // Fade back in
          textElements.forEach(el => {
            if (el) el.classList.remove('fade-out');
          });
        }, 300);
      });
    });
  }

  /* --- 3. Material Specification Tabs --- */
  function initMaterialTabs() {
    const matBtns = document.querySelectorAll('.mat-btn');
    const matPanels = document.querySelectorAll('.mat-panel');

    if (!matBtns.length) return;

    matBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-mat');
        
        matBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        matPanels.forEach(panel => {
          panel.classList.remove('active');
          if (panel.id === `mat-panel-${key}`) {
            panel.classList.add('active');
          }
        });
      });
    });
  }

  // Run initializations
  initHorizontalScroll();
  initBlueprintExplorer();
  initMaterialTabs();
});
