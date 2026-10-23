/* ========================================================
   ABOUT-SCROLL.JS — Custom GSAP Motion Design for About Page
   ======================================================== */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded. Animations skipped.');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Section Video Parallax & Content Fade Out
  const heroVideo = document.querySelector('.hero-about .video-background-element');
  if (heroVideo) {
    gsap.to(heroVideo, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-about',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  const heroContent = document.querySelector('.hero-about .hero-content');
  if (heroContent) {
    gsap.to(heroContent, {
      opacity: 0,
      y: -50,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: '.hero-about',
        start: 'top top',
        end: 'bottom 40%',
        scrub: true
      }
    });
  }

  // 2. Section: Story Parallax & Statistics Counters
  const storyImg = document.querySelector('.about-story-section .parallax-img');
  if (storyImg) {
    gsap.to(storyImg, {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: {
        trigger: '.about-story-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // Count up animation for story statistics
  const storyStats = document.querySelectorAll('.story-stat-number');
  storyStats.forEach(stat => {
    const targetVal = parseInt(stat.getAttribute('data-target-val'), 10);
    if (isNaN(targetVal)) return;

    gsap.fromTo(stat, 
      { textContent: '0' },
      {
        textContent: targetVal,
        duration: 2,
        ease: 'power3.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        onUpdate: function() {
          // Add formatting for large numbers if needed (e.g. 50,000)
          const val = parseInt(stat.textContent, 10);
          if (val >= 1000) {
            stat.textContent = val.toLocaleString();
          }
        }
      }
    );
  });

  // Story text fade-up reveal
  const storyContentBlock = document.querySelector('.story-left-content');
  if (storyContentBlock) {
    gsap.from(storyContentBlock.children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: storyContentBlock,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }

  // 3. Section: Growth Timeline Slide-in
  const timelineItems = document.querySelectorAll('.timeline-milestone-item');
  timelineItems.forEach(item => {
    const card = item.querySelector('.milestone-card');
    const isLeft = item.classList.contains('left-item');
    const xOffset = isLeft ? -80 : 80;

    gsap.fromTo(card,
      { x: xOffset, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // 4. Section: Vision • Mission • Core Values (Glass Cards Stagger)
  const vmSection = document.querySelector('.vision-mission-values-section');
  const vmCards = document.querySelectorAll('.vm-card');
  if (vmSection && vmCards.length) {
    gsap.from(vmCards, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.18,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: vmSection,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
  }

  // 5. Section: Leadership Mask Reveal & Text Stagger
  const leadershipLeft = document.querySelector('.leadership-left-content');
  if (leadershipLeft) {
    gsap.from(leadershipLeft.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: leadershipLeft,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
  }

  const leadershipImage = document.querySelector('.leadership-right-visual .reveal-img');
  const imageFrame = document.querySelector('.leadership-right-visual .image-reveal-container');
  if (imageFrame && leadershipImage) {
    // Reveal animation using a CSS clip-path or scale overlay
    gsap.fromTo(imageFrame,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: imageFrame,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(leadershipImage,
      { scale: 1.15 },
      {
        scale: 1,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageFrame,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // 6. Section: Why Customers Trust Us Grid Reveal
  const trustSection = document.querySelector('.trust-cards-section');
  const trustCards = document.querySelectorAll('.trust-card');
  if (trustSection && trustCards.length) {
    gsap.from(trustCards, {
      y: 40,
      opacity: 0,
      scale: 0.95,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trustSection,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
  }

  // 7. Section: Facility Highlights & Media Gallery Reveal
  const showcaseHighlightsGrid = document.querySelector('.highlights-grid');
  if (showcaseHighlightsGrid) {
    const cards = showcaseHighlightsGrid.querySelectorAll('.highlight-card');
    gsap.set(cards, { autoAlpha: 0, y: 30 });
    
    ScrollTrigger.create({
      trigger: showcaseHighlightsGrid,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(cards, {
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

  const showcaseGalleryGrid = document.querySelector('.gallery-grid');
  if (showcaseGalleryGrid) {
    const cards = showcaseGalleryGrid.querySelectorAll('.gallery-card');
    gsap.set(cards, { autoAlpha: 0, y: 30 });
    
    ScrollTrigger.create({
      trigger: showcaseGalleryGrid,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(cards, {
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
});
