/* Drumindo Makmur: carousel produk dan animasi muncul saat scroll. */

(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  initCarousel(document.querySelector('[data-carousel]'));
  initReveal(document.querySelectorAll('[data-reveal]'));

  /* Carousel loop 3 produk. Produk aktif di tengah; sebelum/sesudahnya terlihat sebagian
     di kiri dan kanan, lebih kecil, lebih pudar, dan sedikit blur. */
  function initCarousel(root) {
    if (!root) return;

    const stage = root.querySelector('.stage');
    const slides = [...root.querySelectorAll('.slide')];
    const items = [...root.querySelectorAll('.detail__item')];
    const dots = [...root.querySelectorAll('.dot')];
    const status = root.querySelector('[data-status]');
    const count = slides.length;

    const SPREAD = 0.8;        // jarak antar pusat slide, dalam satuan lebar slide
    const SIDE_SCALE = 0.86;   // ukuran slide di samping
    const SIDE_OPACITY = 0.55; // kejelasan slide di samping
    const SIDE_BLUR = 2;       // px
    const DURATION = 520;      // ms

    let pos = 0;        // posisi carousel; pecahan saat sedang di-drag
    let current = 0;    // indeks produk aktif
    let slideWidth = 0;
    let frame = 0;
    let drag = null;

    const mod = (n) => ((n % count) + count) % count;

    // Jarak bertanda slide i dari posisi p, dibungkus supaya carousel berputar.
    const offset = (i, p) => {
      const d = mod(i - p);
      return d > count / 2 ? d - count : d;
    };

    function render() {
      slides.forEach((slide, i) => {
        const d = offset(i, pos);
        const side = Math.min(Math.abs(d), 1);               // 0 = aktif, 1 = samping
        const exit = Math.max(Math.abs(d) - 1, 0) * 2;       // memudar saat pindah sisi
        const scale = 1 - (1 - SIDE_SCALE) * side;
        const opacity = 1 - (1 - SIDE_OPACITY) * side - exit * SIDE_OPACITY;

        slide.style.transform = `translate3d(${d * SPREAD * slideWidth}px, 0, 0) scale(${scale})`;
        slide.style.opacity = Math.max(0, opacity);
        slide.style.filter = side > 0.01 ? `blur(${(SIDE_BLUR * side).toFixed(2)}px)` : 'none';
        slide.style.zIndex = Math.round(10 - Math.abs(d) * 4);
      });
    }

    function setCurrent(index, announce) {
      current = index;
      items.forEach((item, i) => item.classList.toggle('is-active', i === index));
      dots.forEach((dot, i) => {
        if (i === index) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
      if (announce && status) {
        const name = items[index].querySelector('.detail__name').textContent.trim();
        status.textContent = `${name}, ${index + 1} dari ${count}`;
      }
    }

    function goTo(target, announce = true) {
      cancelAnimationFrame(frame);
      const index = mod(Math.round(target));
      if (index !== current) setCurrent(index, announce);

      const from = pos;
      const start = performance.now();
      const duration = reduceMotion.matches ? 0 : DURATION;

      const tick = (now) => {
        const t = duration ? Math.min((now - start) / duration, 1) : 1;
        pos = from + (target - from) * (1 - Math.pow(1 - t, 3));
        render();
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }

    const step = (n) => goTo(Math.round(pos) + n);

    /* Drag / swipe: sentuhan di mobile, mouse di desktop */
    const stepPx = () => SPREAD * slideWidth;

    stage.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      cancelAnimationFrame(frame);
      drag = { id: e.pointerId, startX: e.clientX, startPos: pos, lastX: e.clientX, lastT: e.timeStamp, velocity: 0, moved: false };
    });

    stage.addEventListener('pointermove', (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.startX;
      if (!drag.moved) {
        if (Math.abs(dx) < 6) return;
        drag.moved = true;
        stage.setPointerCapture(e.pointerId);
        stage.classList.add('is-dragging');
      }
      const dt = e.timeStamp - drag.lastT;
      if (dt > 0) drag.velocity = (e.clientX - drag.lastX) / dt;
      drag.lastX = e.clientX;
      drag.lastT = e.timeStamp;
      pos = drag.startPos - dx / stepPx();
      render();
    });

    function endDrag(e) {
      if (!drag || e.pointerId !== drag.id) return;
      const { moved, startPos, velocity } = drag;
      drag = null;
      stage.classList.remove('is-dragging');

      if (moved) {
        // Lemparan cepat ikut dihitung; paling jauh satu produk per gesekan.
        const projected = pos - (velocity * 180) / stepPx();
        const base = Math.round(startPos);
        goTo(Math.max(base - 1, Math.min(base + 1, Math.round(projected))));
        return;
      }

      // Ketukan pada produk di samping memindahkannya ke tengah.
      const slide = e.type === 'pointerup' ? e.target.closest('.slide') : null;
      goTo(slide ? Math.round(pos) + offset(slides.indexOf(slide), Math.round(pos)) : Math.round(pos));
    }
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);
    stage.addEventListener('dragstart', (e) => e.preventDefault());

    /* Tombol, indikator, keyboard */
    root.querySelectorAll('[data-step]').forEach((btn) => {
      btn.addEventListener('click', () => step(Number(btn.dataset.step)));
    });
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const base = Math.round(pos);
        goTo(base + offset(i, base));
      });
    });
    root.querySelector('.catalog__media').addEventListener('keydown', (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    });

    const measure = () => {
      slideWidth = slides[0].offsetWidth;
      render();
    };
    new ResizeObserver(measure).observe(stage);
    measure();
    setCurrent(0, false);
  }

  /* Muncul halus saat section masuk layar. Kelas ditambahkan di sini supaya
     konten tetap terlihat kalau script tidak jalan. */
  function initReveal(targets) {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    targets.forEach((el) => {
      el.classList.add('will-reveal');
      observer.observe(el);
    });
  }
})();
