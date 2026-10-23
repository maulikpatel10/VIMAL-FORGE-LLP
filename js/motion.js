/* ========================================================
   MOTION.JS — Vimal Forge LLP Global Motion System v2.0
   Lenis + GSAP integration | Page Transitions | Entrances
   ======================================================== */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  let lenis = null;

  /* ── 1. Lenis Smooth Scroll ─────────────────────────── */
  function initLenis() {
    if (prefersReduced || typeof Lenis === 'undefined') return;

    lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isMobile,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
      ScrollTrigger.normalizeScroll(false);
    } else {
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
    }
  }

  /* ── 2. Header Scroll Class ─────────────────────────── */
  function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;
    const threshold = 60;
    if (lenis) {
      lenis.on('scroll', ({ scroll }) => {
        header.classList.toggle('header-scrolled', scroll > threshold);
      });
    } else {
      window.addEventListener('scroll', () => {
        header.classList.toggle('header-scrolled', window.scrollY > threshold);
      }, { passive: true });
    }
  }

  /* ── 3. Section Entrance Animations (IntersectionObserver) */
  function initSectionAnims() {
    if (prefersReduced) {
      document.querySelectorAll('[data-anim]').forEach(el => el.classList.add('in-view'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const delay = parseFloat(entry.target.dataset.animDelay || 0);
        setTimeout(() => entry.target.classList.add('in-view'), delay * 1000);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('[data-anim]').forEach(el => io.observe(el));

    /* Stagger children */
    const ioStagger = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const children = [...entry.target.children];
        children.forEach((child, i) => {
          setTimeout(() => {
            child.style.transitionDelay = (i * 0.1) + 's';
            child.style.opacity = '1';
            child.style.transform = 'none';
          }, i * 80);
        });
        ioStagger.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-anim-stagger]').forEach(el => ioStagger.observe(el));
  }

  /* ── 4. Page Transition Curtain ─────────────────────── */
  function initPageTransitions() {
    if (prefersReduced) return;

    const curtain = document.createElement('div');
    curtain.id = 'page-transition-curtain';
    document.body.appendChild(curtain);

    /* Arriving from a transition — slide curtain out */
    if (sessionStorage.getItem('vf-transition') === '1') {
      sessionStorage.removeItem('vf-transition');
      curtain.style.transform = 'translateX(0%)';
      requestAnimationFrame(() => {
        curtain.style.transition = 'transform 0.6s cubic-bezier(0.77,0,0.175,1)';
        curtain.style.transform = 'translateX(100%)';
      });
    }

    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') ||
          href.startsWith('mailto') || href.startsWith('tel') ||
          href.startsWith('https://wa.me') || link.target === '_blank') return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      e.preventDefault();
      sessionStorage.setItem('vf-transition', '1');

      curtain.style.transition = 'none';
      curtain.style.transform = 'translateX(-100%)';
      curtain.style.pointerEvents = 'all';

      requestAnimationFrame(() => {
        curtain.style.transition = 'transform 0.52s cubic-bezier(0.77,0,0.175,1)';
        curtain.style.transform = 'translateX(0%)';
      });

      setTimeout(() => { window.location.href = href; }, 540);
    });
  }

  /* ── 5. Button Ripple Effect ─────────────────────────── */
  function initRipple() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      ripple.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${e.clientX - rect.left - size/2}px;
        top: ${e.clientY - rect.top - size/2}px;
      `;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  }

  /* ── 6. Table Row Stagger ────────────────────────────── */
  function initTableRows() {
    const rows = document.querySelectorAll('.comparison-table tbody tr');
    if (!rows.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const idx = [...rows].indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('row-visible'), idx * 90);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.2 });
    rows.forEach(r => io.observe(r));
  }

  /* ── 7. Hero Scroll Indicator click ─────────────────── */
  function initScrollIndicator() {
    const hero = document.querySelector('.hero') || 
                 document.querySelector('.industry-hero-section') || 
                 document.querySelector('.contact-hero');
    if (!hero) return;

    // Check if one already exists or inject it dynamically
    let indicator = hero.querySelector('.hero-scroll-indicator');
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.className = 'hero-scroll-indicator';
      
      let scrollText = 'Scroll Down';
      if (window.location.pathname.includes('about')) {
        scrollText = 'Scroll to Explore';
      }
      
      indicator.innerHTML = `
        <span>${scrollText}</span>
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
      `;
      hero.appendChild(indicator);
    } else {
      // Standardize to use scroll-wheel for keyframe animation compatibility
      const mouse = indicator.querySelector('.scroll-mouse');
      if (mouse && !mouse.querySelector('.scroll-wheel') && mouse.querySelector('.scroll-dot')) {
        mouse.querySelector('.scroll-dot').className = 'scroll-wheel';
      }
    }

    indicator.addEventListener('click', () => {
      const nextSection = hero.nextElementSibling || 
                          document.querySelector('section:nth-of-type(2)');
      if (nextSection) {
        if (lenis) {
          lenis.scrollTo(nextSection, { duration: 1.2 });
        } else {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    });
  }

  /* ── 8. Active Nav Highlights ────────────────────────── */
  function initNavActiveState() {
    const navItems = document.querySelectorAll('.nav-item, .dropdown-menu li a');
    const path = window.location.pathname;
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (!href) return;
      
      const cleanPath = path.replace(/\/$/, '') || '/index.html';
      const cleanHref = href.replace(/^\./, '').replace(/\/$/, '') || '/index.html';
      
      const isHome = (cleanPath === '/' || cleanPath.endsWith('index.html')) && cleanHref.endsWith('index.html');
      const isMatch = isHome || (cleanHref !== '/index.html' && cleanPath.endsWith(cleanHref.replace(/^\//, '')));
      
      item.classList.toggle('active', isMatch);
      if (isMatch && item.closest('.dropdown-menu')) {
        const parentNavItem = item.closest('.has-dropdown').querySelector('.nav-item');
        if (parentNavItem) parentNavItem.classList.add('active');
      }
    });
  }

  /* ── Init ────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    initHeaderScroll();
    initSectionAnims();
    initPageTransitions();
    initRipple();
    initTableRows();
    initScrollIndicator();
    initNavActiveState();
  });

  /* Expose for main.js */
  window.VimalMotion = {
    getLenis: () => lenis,
    isMobile: () => isMobile,
    prefersReduced: () => prefersReduced,
  };
})();
