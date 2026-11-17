/* Drumindo Makmur: data produk, carousel produk, dan tautan WhatsApp.
   Untuk mengganti produk, foto, atau nomor WhatsApp, cukup ubah bagian "Data" di bawah ini. */

/* ============================== Data ============================== */

const WHATSAPP_NUMBER = '6285801281069'; // 0858-0128-1069

/* Isi spesifikasi:
   - teks biasa          : data dari brosur, ditampilkan apa adanya
   - PENDING             : data belum ada di brosur, tampil "Menunggu konfirmasi"
   - konfirmasi('120 L') : data brosur saling bertentangan, tampil apa adanya + "Perlu konfirmasi"
   Kalau data final dari pemilik sudah ada, ganti PENDING / konfirmasi(...) dengan teks biasa. */
const PENDING = { status: 'pending' };
const konfirmasi = (value) => ({ value, status: 'check' });

/* Satu produk = satu slide di carousel + satu panel informasi.
   image       : foto produk (rasio 5:4, 800 x 640 px)
   variants    : pilihan ukuran/tipe; spesifikasinya berganti saat dipilih
   features    : daftar keunggulan (boleh dihapus)
   specTitle   : judul spesifikasi (boleh dihapus, bawaan "Spesifikasi") */
const products = [
  {
    name: 'Jerigen 30 & 35 Liter Paragon',
    image: 'images/product-1.jpg',
    alt: 'Dua jerigen biru: 30 L bertutup hitam dan 35 L bertutup merah',
    description: 'Jerigen plastik biru ukuran 30 liter dan 35 liter.',
    variantLabel: 'Ukuran',
    variants: [
      {
        name: '30 L',
        specs: [
          ['Kapasitas', '30 L'],
          ['Material', 'HDPE'],
          ['Kondisi', 'Baru'],
          ['Tinggi', PENDING],
          ['Panjang', '305 mm'],
          ['Lebar', '280 mm'],
          ['Berat', '1.400 g'],
        ],
      },
      {
        name: '35 L',
        specs: [
          ['Kapasitas', '35 L'],
          ['Material', 'HDPE'],
          ['Kondisi', 'Baru'],
          ['Tinggi', '535 mm'],
          ['Panjang', '305 mm'],
          ['Lebar', '280 mm'],
          ['Berat', '1.500 g'],
        ],
      },
    ],
  },
  {
    name: 'Drum Open Top',
    image: 'images/product-2.jpg',
    alt: 'Empat drum open top biru: 60 L, 120 L, 150 L, dan 200 L',
    description: 'Drum plastik open top dari HDPE dalam empat tipe: O.T. 60, O.T. 120, O.T. 150, dan O.T. 200.',
    variantLabel: 'Tipe',
    variants: [
      {
        name: 'O.T. 60',
        specs: [
          ['Kapasitas', '60 L'],
          ['Material', 'HDPE'],
          ['Kondisi', 'Baru'],
          ['Berat', '2.080 g'],
          ['Tinggi', '625 mm'],
          ['Diameter', '400 mm'],
          ['Warna', 'Biru'],
        ],
      },
      {
        name: 'O.T. 120',
        specs: [
          ['Kapasitas', '120 L'],
          ['Material', 'HDPE'],
          ['Kondisi', 'Baru'],
          ['Berat', '5.000 g'],
          ['Tinggi', '785 mm'],
          ['Diameter', '493 mm'],
          ['Warna', 'Biru'],
        ],
      },
      {
        name: 'O.T. 150',
        specs: [
          ['Kapasitas', konfirmasi('120 L')],
          ['Material', 'HDPE'],
          ['Kondisi', 'Baru'],
          ['Berat', '6.100 g'],
          ['Tinggi', '975 mm'],
          ['Diameter', '493 mm'],
          ['Warna', 'Biru'],
        ],
        note: 'Pada brosur, kapasitas O.T. 150 tertulis 120 L, tidak sama dengan nama tipenya.',
      },
      {
        name: 'O.T. 200',
        specs: [
          ['Kapasitas', '200 L'],
          ['Material', 'HDPE'],
          ['Kondisi', 'Baru'],
          ['Berat', '10.000 g'],
          ['Tinggi', '994 mm'],
          ['Diameter', '580 mm'],
          ['Warna', 'Biru'],
        ],
      },
    ],
    features: ['Tidak mudah pecah', 'Kapasitas besar', 'Dapat dibuka/tutup dengan mekanisme sederhana'],
  },
  {
    name: 'Drum 200 L Double Ring & Singel Ring',
    image: 'images/product-3.jpg',
    alt: 'Dua drum biru 200 L: Singel Ring dan Double Ring',
    description: 'Drum plastik 200 liter dari HDPE, tersedia model Singel Ring dan Double Ring.',
    variantLabel: 'Model',
    specTitle: 'Spesifikasi Drum 200L Non UN/KW',
    variants: [
      {
        name: 'Singel Ring',
        specs: [
          ['Kapasitas', '200 L'],
          ['Material', 'HDPE'],
          ['Kondisi', 'Baru'],
          ['Tinggi', '936 mm'],
          ['Diameter body', '581 mm'],
          ['Diameter tutup', '73 mm'],
          ['Berat', '7,6 kg'],
        ],
      },
      {
        name: 'Double Ring',
        specs: [
          ['Kapasitas', '200 L'],
          ['Material', 'HDPE'],
          ['Kondisi', 'Baru'],
          ['Tinggi', '936 mm'],
          ['Diameter body', '581 mm'],
          ['Diameter tutup', '73 mm'],
          ['Berat', '8,6 kg'],
        ],
      },
    ],
  },
  {
    name: 'IBC Tank / Bulk Tank 1000 Liter',
    image: 'images/product-4.jpg',
    alt: 'IBC tank 1000 liter dengan rangka besi dan palet, lengkap dengan ukuran',
    description: 'IBC tank 1000 liter dari HDPE dengan rangka besi dan tutup atas yang bisa dibuka.',
    variantLabel: 'Tipe',
    variants: [
      {
        name: '1000 L (open lid)',
        specs: [
          ['Kapasitas', '1000 L'],
          ['Material', 'HDPE'],
          ['Kondisi', 'Baru'],
          ['Panjang', '1200 mm'],
          ['Lebar', '1000 mm'],
          ['Tinggi', '1150 mm'],
          ['Diameter lubang isi', '150 mm'],
          ['Berat wadah dalam', '25 kg ±1'],
          ['Berat total', '67 kg'],
        ],
      },
    ],
  },
];

/* ============================== Kode ============================== */

(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  const orderText = (label) => `Halo, saya tertarik dengan ${label} dari Drumindo Makmur.`;

  const root = document.querySelector('[data-catalog]');
  if (root && products.length) initCatalog(root);

  /* Pembuat elemen kecil: teks selalu lewat node teks, jadi "&" dan tanda lain aman */
  function h(tag, attrs = {}, ...kids) {
    const node = document.createElement(tag);
    for (const [key, val] of Object.entries(attrs)) {
      if (val === false || val == null) continue;
      node.setAttribute(key, val === true ? '' : val);
    }
    node.append(...kids.flat().filter((k) => k != null && k !== false));
    return node;
  }

  function icon(id) {
    const NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'icon');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    const use = document.createElementNS(NS, 'use');
    use.setAttribute('href', `#${id}`);
    svg.append(use);
    return svg;
  }

  function buildSlide(p, i) {
    const img = h('img', { src: p.image, width: 800, height: 640, alt: p.alt, loading: 'lazy', draggable: 'false' });
    return h('div', {
      class: 'slide',
      role: 'group',
      'aria-roledescription': 'slide',
      'aria-label': `${p.name}, ${i + 1} dari ${products.length}`,
    }, h('div', { class: 'slide__plate' }, img));
  }

  function buildDot(p, i) {
    return h('button', { class: 'dot', type: 'button', 'aria-label': `Produk ${i + 1}: ${p.name}` });
  }

  function specRow(label, val) {
    let dd;
    if (typeof val === 'string') dd = h('dd', {}, val);
    else if (val.status === 'pending') dd = h('dd', { class: 'is-pending' }, 'Menunggu konfirmasi');
    else dd = h('dd', {}, val.value, h('span', { class: 'tag' }, 'Perlu konfirmasi'));
    return h('div', {}, h('dt', {}, label), dd);
  }

  /* Panel informasi: nama, deskripsi, pilihan ukuran/tipe, spesifikasi, tombol Order now.
     Nama varian baru masuk ke pesan WhatsApp setelah pengunjung memilihnya sendiri. */
  function buildPanel(p, i, announce) {
    const id = `produk-${i + 1}`;
    const state = { variant: 0, picked: false };

    const chips = p.variants.map((v, vi) =>
      h('button', { class: 'variant', type: 'button', 'aria-pressed': String(vi === 0) }, v.name));
    const specs = h('dl', { class: 'spec' });
    const note = h('p', { class: 'detail__note' });
    const cta = h('a', { class: 'btn', target: '_blank', rel: 'noopener' },
      icon('i-wa'),
      'Order now',
      h('span', { class: 'sr-only' }, `: ${p.name} lewat WhatsApp`));

    const panel = h('article', { class: 'detail__item', id, 'aria-labelledby': `${id}-nama` },
      h('h3', { class: 'detail__name', id: `${id}-nama` }, p.name),
      h('p', { class: 'detail__text' }, p.description),
      p.variants.length > 1 && h('div', { class: 'variants', role: 'group', 'aria-labelledby': `${id}-varian` },
        h('p', { class: 'variants__label', id: `${id}-varian` }, p.variantLabel),
        h('div', { class: 'variants__list' }, chips)),
      h('h4', { class: 'spec__title' }, p.specTitle || 'Spesifikasi'),
      specs,
      note,
      p.features && h('div', { class: 'features' },
        h('h4', { class: 'features__title' }, 'Keunggulan'),
        h('ul', {}, p.features.map((f) => h('li', {}, f)))),
      cta);

    function update() {
      const v = p.variants[state.variant];
      chips.forEach((chip, ci) => chip.setAttribute('aria-pressed', String(ci === state.variant)));
      specs.replaceChildren(...v.specs.map(([label, val]) => specRow(label, val)));
      note.textContent = v.note || '';
      note.hidden = !v.note;
      cta.href = waLink(orderText(state.picked ? `${p.name} (${v.name})` : p.name));
    }

    chips.forEach((chip, ci) => {
      chip.addEventListener('click', () => {
        state.variant = ci;
        state.picked = true;
        update();
        announce(`${p.name}, ${p.variants[ci].name}`);
      });
    });

    update();
    return panel;
  }

  /* Katalog: carousel loop (Produk 1 > 2 > 3 > 1). Produk aktif di tengah; sebelum/sesudahnya
     terlihat sebagian di kiri dan kanan, lebih kecil, lebih pudar, dan sedikit blur. */
  function initCatalog(root) {
    const stage = root.querySelector('.stage');
    const list = root.querySelector('.stage__list');
    const dotsBox = root.querySelector('.dots');
    const detail = root.querySelector('.detail');
    const status = root.querySelector('[data-status]');
    const announce = (text) => { if (status) status.textContent = text; };

    products.forEach((p, i) => {
      list.append(buildSlide(p, i));
      dotsBox.append(buildDot(p, i));
      detail.append(buildPanel(p, i, announce));
    });

    const slides = [...list.children];
    const items = [...detail.children];
    const dots = [...dotsBox.children];
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
        slide.style.setProperty('--lift', (1 - side).toFixed(3)); // bayangan hanya di produk aktif
      });
    }

    function setCurrent(index, say) {
      current = index;
      items.forEach((item, i) => item.classList.toggle('is-active', i === index));
      dots.forEach((dot, i) => {
        if (i === index) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
      if (say) announce(`${products[index].name}, ${index + 1} dari ${count}`);
    }

    function goTo(target, say = true) {
      cancelAnimationFrame(frame);
      const index = mod(Math.round(target));
      if (index !== current) setCurrent(index, say);

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
})();
