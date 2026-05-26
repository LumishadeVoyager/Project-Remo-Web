/* =========================================================================
   Project Remo — minimal, intentional motion
   Five behaviors only:
     1. Topbar scroll state
     2. Reveal observer (single entrance per element)
     3. Hero title word-by-word entrance
     4. Counter numbers on first scroll-in
     5. GAN before/after slider
   ========================================================================= */

(() => {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ─── 1. Topbar scroll state ───────────────────────────────────────── */
  const topbar = document.getElementById("topbar");
  if (topbar) {
    const onScroll = () => {
      topbar.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ─── 2. Reveal observer ───────────────────────────────────────────── */
  const reveals = document.querySelectorAll(".reveal, .eyebrow");
  if (prefersReduced) {
    reveals.forEach((el) => el.classList.add("in-view"));
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in-view"));
  }

  /* ─── 3. Hero title word-by-word entrance ──────────────────────────── */
  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    requestAnimationFrame(() => {
      window.setTimeout(() => heroTitle.classList.add("in"), 200);
    });
  }

  /* ─── 4. Counter numbers ───────────────────────────────────────────── */
  const counterEls = document.querySelectorAll("[data-count]");
  if (counterEls.length && "IntersectionObserver" in window && !prefersReduced) {
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.count, 10);
      if (Number.isNaN(target)) return;
      const span = el.querySelector(".num-val");
      if (!span) return;

      const duration = target > 1000 ? 1600 : 1100;
      const startTime = performance.now();
      const startVal = 0;

      const tick = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        const v = Math.round(startVal + (target - startVal) * eased);
        span.textContent = v;
        if (t < 1) requestAnimationFrame(tick);
        else span.textContent = target;
      };
      requestAnimationFrame(tick);
    };

    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counterEls.forEach((el) => counterIO.observe(el));
  }

  /* ─── 5. GAN before/after slider ───────────────────────────────────── */
  const slider = document.getElementById("color-slider");
  const restored = document.getElementById("color-restored");
  const handle = document.getElementById("color-handle");

  const updateColorCompare = (value) => {
    const v = Math.max(0, Math.min(100, Number(value)));
    // Drag right = reveal more RESTORED (right side). Clip restored from left by v%.
    if (restored) restored.style.clipPath = `inset(0 0 0 ${v}%)`;
    if (handle) handle.style.left = `${v}%`;
  };

  if (slider) {
    updateColorCompare(slider.value);
    slider.addEventListener("input", (e) => updateColorCompare(e.target.value));
  }

  /* ─── Smooth scroll for anchor links ───────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    });
  });

  /* ─── Hero product subtle parallax on scroll ───────────────────────── */
  const heroProduct = document.querySelector(".hero-product");
  if (heroProduct && !prefersReduced) {
    let scrollY = 0;
    let ticking = false;
    const update = () => {
      const y = scrollY * 0.18;
      const rot = -6 + scrollY * 0.012;
      const img = heroProduct.querySelector("img");
      if (img) img.style.transform = `rotate(${rot}deg) translateY(${-y}px)`;
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ─── 6. Tech specs tab switcher ───────────────────────────────────── */
  const tabs = document.querySelectorAll(".specs-tabs .tab");
  const panels = document.querySelectorAll(".specs-panel");
  if (tabs.length && panels.length) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        tabs.forEach((t) => {
          const on = t === tab;
          t.classList.toggle("active", on);
          t.setAttribute("aria-selected", on ? "true" : "false");
        });
        panels.forEach((p) => {
          p.classList.toggle("active", p.dataset.panel === target);
        });
      });
    });
  }

  /* ─── 7. Sticky pre-order bar (appear after hero) ──────────────────── */
  const stickyBar = document.getElementById("sticky-bar");
  const hero = document.querySelector(".hero");
  if (stickyBar && hero) {
    const onScrollSticky = () => {
      const heroHeight = hero.offsetHeight;
      const docHeight = document.documentElement.scrollHeight;
      const viewport = window.innerHeight;
      const scrolled = window.scrollY;
      // Show after hero scrolled past 70%; hide near footer to avoid overlap
      const passedHero = scrolled > heroHeight * 0.7;
      const nearBottom = scrolled + viewport > docHeight - 240;
      stickyBar.classList.toggle("show", passedHero && !nearBottom);
      stickyBar.setAttribute("aria-hidden", (passedHero && !nearBottom) ? "false" : "true");
    };
    window.addEventListener("scroll", onScrollSticky, { passive: true });
    window.addEventListener("resize", onScrollSticky);
    onScrollSticky();
  }
})();
