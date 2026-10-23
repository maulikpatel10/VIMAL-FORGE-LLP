/* =========================================================
   PRODUCTS-V2.JS — Modern Product Catalog Scripts
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --- 1. Product Mock Database --- */
  const productDatabase = {
    '1': {
      title: 'Precision Bearing Races (Inner/Outer)',
      category: 'Bearing Components',
      image: 'https://images.unsplash.com/photo-1610557892470-76d740220a3f?q=80&w=600&auto=format&fit=crop',
      desc: 'Inner and outer bearing rings built for maximum fatigue life. Grain lines are oriented dynamically during axial-radial ring rolling processes to maximize shear resistance.',
      products: 'Inner & Outer Bearing Rings, Races, Washers',
      grades: 'SAE 52100 / 100Cr6 (Chrome bearing steel)',
      size: '80 mm to 500 mm Outer Diameter',
      process: 'Forging → Ring Rolling → Spheroidize Annealing → Machining',
      app: 'Deep groove ball bearings, tapered roller bearing systems'
    },
    '2': {
      title: 'Clutch Release Bearing Rings',
      category: 'Bearing Components',
      image: 'https://images.unsplash.com/photo-1610557892470-76d740220a3f?q=80&w=600&auto=format&fit=crop',
      desc: 'Clutch rings forged in high-carbon bearing steel. Heat treatment guarantees optimal surface wear resistance under cyclic release stresses.',
      products: 'Clutch Release assemblies, custom spacers',
      grades: 'SAE 52100, High Carbon Steel',
      size: '50 mm to 200 mm Outer Diameter',
      process: 'Hot Punching → Radial Rolling → Spheroidizing',
      app: 'Automotive clutch release systems, mechanical gear connections'
    },
    '3': {
      title: 'Thrust Washers & Lock Nuts',
      category: 'Bearing Components',
      image: 'https://images.unsplash.com/photo-1610557892470-76d740220a3f?q=80&w=600&auto=format&fit=crop',
      desc: 'Lock and groove nuts forged to secure bearings on heavy industrial shafts. Resists loosening under constant high torque load.',
      products: 'Lock Nuts, Groove Nuts, Thrust Washers',
      grades: 'EN8, C45 Medium Carbon Steel',
      size: '40 mm to 300 mm Outer Diameter',
      process: 'Closed-Die Drop Forging → Normalizing → Precision Machining',
      app: 'Heavy Engineering, Axle Gearboxes, Transmission Units'
    },
    '4': {
      title: 'Seamless Gear Ring Blanks',
      category: 'Seamless Rolled Rings',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop',
      desc: 'Gear ring blanks shaped in radial-axial ring rolling machines. Near-net shape configurations decrease costly secondary machining metal loss by 30%.',
      products: 'Gear Rings, Ring Blanks, Slewing Rings',
      grades: '20MnCr5, 16MnCr5, AISI 8620 Alloy Steel',
      size: '100 mm to 450 mm Outer Diameter',
      process: 'Induction Heating → Press Punching → CNC Radial-Axial Ring Rolling',
      app: 'Planetary gear assemblies, heavy industrial machinery'
    },
    '5': {
      title: 'Seamless Rolled Spacers & Sleeves',
      category: 'Seamless Rolled Rings',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop',
      desc: 'Thick spacer rings designed to bridge high-integrity shaft gaps in chemical, hydraulic, and pipeline assemblies.',
      products: 'Spacers, Large Sleeves, Structural Flanges',
      grades: 'EN8, C45, C20 Carbon Steels, Stainless Steel',
      size: '80 mm to 400 mm Outer Diameter',
      process: 'Forging → Radial Ring Rolling → Normalizing',
      app: 'Heavy hydraulic cylinders, pipeline connections, gearbox blocks'
    },
    '6': {
      title: 'Transmission Gear Blanks',
      category: 'Automotive Forgings',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop',
      desc: 'Closed-die drop forged gear blanks with optimized internal density. Forged with highly aligned fiber lines to maximize impact tolerance.',
      products: 'Gear Blanks, Transmission Hubs',
      materials: 'Alloy Steel 20MnCr5, 8620, EN19',
      grades: 'Alloy Steel 20MnCr5, 8620, EN19',
      size: 'Weight: 1.0 kg to 15 kg per piece',
      process: 'Closed-Die Drop Forging → Isothermal Annealing → Shot Blasting',
      app: 'Automotive transmission gear blocks, planetary drivetrains'
    },
    '7': {
      title: 'Precision Turned Wheel Hubs',
      category: 'Automotive Forgings',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop',
      desc: 'Wheel hub assemblies machined on advanced CNC lathes within a 15-micron tolerance. Clean dimensional alignment ready for bearing assemblies.',
      products: 'Axle Hubs, Brake Drums, Wheel Sleeves',
      grades: 'EN24, EN19 Alloy Steel, C45 Carbon Steel',
      size: 'Tolerances: Within 15 Microns',
      process: 'Drop Hammer Forging → CNC Turning → VMC Keyway Milling',
      app: 'Commercial vehicle axle assemblies, heavy machinery wheels'
    },
    '8': {
      title: 'Heavy Forged Suspension Pins',
      category: 'Automotive Forgings',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop',
      desc: 'High-load suspension pivot pins built to secure excavator linkages and dump truck suspension modules under cyclic shock.',
      products: 'Suspension Pins, Excavator Joint Pins',
      grades: 'AISI 8620, 20MnCr5 Case Hardening Alloys',
      size: 'Weight: 1.5 kg to 8 kg per piece',
      process: 'Closed-Die Forging → Induction Hardening → Precision Grinding',
      app: 'Construction Machinery, Suspension linkages'
    },
    '9': {
      title: 'Custom High-Pressure Valve Bodies',
      category: 'Custom Forgings',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
      desc: 'Specialty high-pressure valve bodies forged in anti-corrosive stainless steels to resist chemical process deterioration.',
      products: 'Custom Valve Bodies, High-Pressure Couplings',
      grades: 'Stainless Steel SS 316, SS 304, SS 410',
      size: 'Forging: Closed Die Process',
      process: 'Tool Development → Die Simulation → Forging → IGC Testing',
      app: 'Oil & Gas manifolds, chemical flow lines, process plant valves'
    },
    '10': {
      title: 'Specialty Hydraulic Cylinder Bushings',
      category: 'Custom Forgings',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
      desc: 'Custom drawing bushings detailing oil lubrication channels and internal retention grooves. Machined accurately from client STEP drawings.',
      products: 'Hydraulic Cylinder Bushings, Structural Adapters',
      grades: 'Medium Carbon Steel EN8, Structural Alloys',
      size: 'Tooling In-House: 15 Days development',
      process: 'CAD Review → Die Simulation → Die Machining → Forging → CNC Turning',
      app: 'Excavator bucket cylinders, heavy hydraulic joints'
    }
  };

  /* --- 2. Interactive Filtering and Search System --- */
  let activeCategory = 'all';
  let activeGrade = 'all';
  let searchQuery = '';

  const searchInput = document.getElementById('catalog-search');
  const catFilterContainer = document.getElementById('category-filters');
  const gradeFilterContainer = document.getElementById('grade-filters');
  const catalogGrid = document.getElementById('catalog-grid');
  const visibleCountEl = document.getElementById('visible-count');
  
  // Category quick links at top
  const categoryQuickLinks = document.querySelectorAll('[data-cat-link]');

  function updateVisibleItems() {
    const cards = catalogGrid.querySelectorAll('.product-item-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardGrades = card.getAttribute('data-grade').split(' ');
      const cardKeywords = card.getAttribute('data-keywords').toLowerCase();

      // Check Category match
      const categoryMatch = (activeCategory === 'all' || cardCategory === activeCategory);

      // Check Grade match
      const gradeMatch = (activeGrade === 'all' || cardGrades.includes(activeGrade));

      // Check Search text match
      const textMatch = (searchQuery === '' || cardKeywords.includes(searchQuery));

      if (categoryMatch && gradeMatch && textMatch) {
        card.classList.remove('hidden-filter');
        visibleCount++;
      } else {
        card.classList.add('hidden-filter');
      }
    });

    if (visibleCountEl) {
      visibleCountEl.textContent = visibleCount;
    }
  }

  // Bind Category Filters
  if (catFilterContainer) {
    const buttons = catFilterContainer.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-category');
        updateVisibleItems();
      });
    });
  }

  // Bind Grade Filters
  if (gradeFilterContainer) {
    const buttons = gradeFilterContainer.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeGrade = btn.getAttribute('data-grade');
        updateVisibleItems();
      });
    });
  }

  // Bind Category Quick Links
  categoryQuickLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetCat = link.getAttribute('data-cat-link');
      
      // Update filter bar buttons states
      if (catFilterContainer) {
        const buttons = catFilterContainer.querySelectorAll('.filter-btn');
        buttons.forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-category') === targetCat);
        });
      }

      activeCategory = targetCat;
      updateVisibleItems();

      // Smooth scroll to catalog main grid section
      const catalogSection = document.querySelector('.catalog-main-section');
      if (catalogSection) {
        const scrollInstance = window.VimalMotion ? window.VimalMotion.getLenis() : null;
        if (scrollInstance) {
          scrollInstance.scrollTo(catalogSection, { duration: 1.0 });
        } else {
          catalogSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Bind Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      updateVisibleItems();
    });
  }

  /* --- 3. Specifications Quick View Modal Logic --- */
  const modalOverlay = document.getElementById('quickview-modal');
  const qvCloseBtn = document.querySelector('.quickview-close-btn');
  const specTriggers = document.querySelectorAll('.btn-specs-trigger');
  
  // Modal Fields
  const qvImg = document.getElementById('qv-img');
  const qvTitle = document.getElementById('qv-title');
  const qvDesc = document.getElementById('qv-desc');
  const qvCategoryBadge = document.getElementById('qv-category-badge');
  const qvParamProducts = document.getElementById('qv-param-products');
  const qvParamGrades = document.getElementById('qv-param-grades');
  const qvParamSize = document.getElementById('qv-param-size');
  const qvParamProcess = document.getElementById('qv-param-process');
  const qvParamApp = document.getElementById('qv-param-app');
  const qvInquireBtn = document.getElementById('qv-inquire-btn');

  function openQuickView(productId) {
    const product = productDatabase[productId];
    if (!product || !modalOverlay) return;

    // Populate Fields
    if (qvImg) {
      qvImg.src = product.image;
      qvImg.alt = product.title;
    }
    if (qvTitle) qvTitle.textContent = product.title;
    if (qvDesc) qvDesc.textContent = product.desc;
    if (qvCategoryBadge) qvCategoryBadge.textContent = product.category;
    if (qvParamProducts) qvParamProducts.textContent = product.products;
    if (qvParamGrades) qvParamGrades.textContent = product.grades;
    if (qvParamSize) qvParamSize.textContent = product.size;
    if (qvParamProcess) qvParamProcess.textContent = product.process;
    if (qvParamApp) qvParamApp.textContent = product.app;
    
    // Set inquiry button href to pass product name to RFQ page
    if (qvInquireBtn) {
      qvInquireBtn.href = `/rfq.html?product=${encodeURIComponent(product.title)}`;
    }

    // Show Modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }

  function closeQuickView() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // restore scrolling
  }

  // Bind Spec Triggers
  specTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const productId = trigger.getAttribute('data-product-id');
      openQuickView(productId);
    });
  });

  // Bind Close Elements
  if (qvCloseBtn) {
    qvCloseBtn.addEventListener('click', closeQuickView);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeQuickView();
      }
    });
  }

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuickView();
    }
  });

});
