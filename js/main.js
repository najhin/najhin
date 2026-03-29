/**
 * Najhin - نجحين
 * Main JavaScript File
 *
 * PDF Folder Structure (place your PDF files here):
 * /assets/pdfs/tronc/inequations.pdf
 * /assets/pdfs/tronc/functions.pdf
 * /assets/pdfs/tronc/geometry.pdf
 * /assets/pdfs/tronc/arithmetic.pdf
 * /assets/pdfs/1bac/derivation.pdf
 * /assets/pdfs/1bac/limits.pdf
 * /assets/pdfs/1bac/sequences.pdf
 * /assets/pdfs/1bac/probability.pdf
 * /assets/pdfs/2bac/logarithms.pdf
 * /assets/pdfs/2bac/exponential.pdf
 * /assets/pdfs/2bac/complex.pdf
 * /assets/pdfs/2bac/sequences-logic.pdf
 */

/* ==========================================
   LESSONS DATABASE
   ========================================== */
const LESSONS = [
  /* ---- TRONC COMMUN ---- */
  {
    id: 1,
    slug: 'inequations',
    title: 'المتراجحات والمعادلات',
    titleFr: 'Inéquations et Équations',
    description: 'دراسة شاملة للمتراجحات والمعادلات في مجموعة الأعداد الحقيقية، مع تطبيقات وتمارين متنوعة.',
    level: 'tronc',
    levelLabel: 'جذع مشترك',
    youtubeId: 'VIDEO_ID_1',
    pdfPath: 'assets/pdfs/tronc/inequations.pdf',
    topics: ['المتراجحات الخطية', 'المعادلات التربيعية', 'مناقشة الحلول']
  },
  {
    id: 2,
    slug: 'functions',
    title: 'الدوال المرجعية',
    titleFr: 'Fonctions de Référence',
    description: 'استكشاف الدوال الأساسية: الدالة التربيعية، الدالة الجذرية، والدالة العكسية مع رسومها البيانية.',
    level: 'tronc',
    levelLabel: 'جذع مشترك',
    youtubeId: 'VIDEO_ID_2',
    pdfPath: 'assets/pdfs/tronc/functions.pdf',
    topics: ['الدالة التربيعية', 'الدالة الجذرية', 'التمثيل البياني']
  },
  {
    id: 3,
    slug: 'geometry',
    title: 'الهندسة المستوية',
    titleFr: 'Géométrie Plane',
    description: 'مبادئ الهندسة المستوية: المثلثات، الدوائر، ومبرهنات التوازي والتعامد.',
    level: 'tronc',
    levelLabel: 'جذع مشترك',
    youtubeId: 'VIDEO_ID_3',
    pdfPath: 'assets/pdfs/tronc/geometry.pdf',
    topics: ['مبرهنة فيثاغورث', 'التحويلات الهندسية', 'التناظر المحوري']
  },
  {
    id: 4,
    slug: 'arithmetic',
    title: 'الحساب العددي',
    titleFr: 'Arithmétique',
    description: 'أسس الحساب العددي: القسمة الإقليدية، الأعداد الأولية، PGCD وPPCM.',
    level: 'tronc',
    levelLabel: 'جذع مشترك',
    youtubeId: 'VIDEO_ID_4',
    pdfPath: 'assets/pdfs/tronc/arithmetic.pdf',
    topics: ['القسمة الإقليدية', 'الأعداد الأولية', 'PGCD و PPCM']
  },

  /* ---- 1ÈRE BAC ---- */
  {
    id: 5,
    slug: 'derivation',
    title: 'الاشتقاق',
    titleFr: 'Dérivation',
    description: 'مفهوم الاشتقاق وتطبيقاته: قواعد الاشتقاق، اشتقاق الدوال المركبة، ودراسة الاتجاهات.',
    level: '1bac',
    levelLabel: 'أولى باك',
    youtubeId: 'VIDEO_ID_5',
    pdfPath: 'assets/pdfs/1bac/derivation.pdf',
    topics: ['تعريف المشتقة', 'قواعد الاشتقاق', 'الدراسة الكاملة']
  },
  {
    id: 6,
    slug: 'limits',
    title: 'النهايات',
    titleFr: 'Limites',
    description: 'مفهوم النهايات: حساب نهايات الدوال، النهايات في اللانهاية، واستمرارية الدوال.',
    level: '1bac',
    levelLabel: 'أولى باك',
    youtubeId: 'VIDEO_ID_6',
    pdfPath: 'assets/pdfs/1bac/limits.pdf',
    topics: ['النهايات المتناهية', 'النهايات اللانهائية', 'الاستمرارية']
  },
  {
    id: 7,
    slug: 'sequences',
    title: 'المتتاليات العددية',
    titleFr: 'Suites Numériques',
    description: 'دراسة المتتاليات الحسابية والهندسية: تعريفها، خواصها وتطبيقاتها.',
    level: '1bac',
    levelLabel: 'أولى باك',
    youtubeId: 'VIDEO_ID_7',
    pdfPath: 'assets/pdfs/1bac/sequences.pdf',
    topics: ['المتتاليات الحسابية', 'المتتاليات الهندسية', 'حدود المتتاليات']
  },
  {
    id: 8,
    slug: 'probability',
    title: 'الاحتمالات',
    titleFr: 'Probabilités',
    description: 'مقدمة في نظرية الاحتمالات: فضاء الاحتمالات، قواعد الحساب الاحتمالي والاحتمال الشرطي.',
    level: '1bac',
    levelLabel: 'أولى باك',
    youtubeId: 'VIDEO_ID_8',
    pdfPath: 'assets/pdfs/1bac/probability.pdf',
    topics: ['فضاء الاحتمالات', 'الاحتمال الشرطي', 'الاستقلالية']
  },

  /* ---- 2ÈME BAC ---- */
  {
    id: 9,
    slug: 'logarithms',
    title: 'الدوال اللوغاريتمية',
    titleFr: 'Fonctions Logarithmiques',
    description: 'دراسة اللوغاريتم الطبيعي وخواصه الأساسية: الاشتقاق، النهايات، والدراسة الكاملة.',
    level: '2bac',
    levelLabel: 'ثانية باك',
    youtubeId: 'VIDEO_ID_9',
    pdfPath: 'assets/pdfs/2bac/logarithms.pdf',
    topics: ['خواص ln', 'اشتقاق ln', 'حل المعادلات']
  },
  {
    id: 10,
    slug: 'exponential',
    title: 'الدوال الأسية',
    titleFr: 'Fonctions Exponentielles',
    description: 'الدالة الأسية وخواصها: العلاقة مع اللوغاريتم، الاشتقاق، والتطبيقات.',
    level: '2bac',
    levelLabel: 'ثانية باك',
    youtubeId: 'VIDEO_ID_10',
    pdfPath: 'https://drive.google.com/file/d/1mJI0PI6sQWVIx5ib-j3tmNfVZlt4UQa3/view?usp=sharing',
    topics: ['الدالة e^x', 'خواص الأس', 'معادلات أسية']
  },
  {
    id: 11,
    slug: 'complex',
    title: 'الأعداد العقدية',
    titleFr: 'Nombres Complexes',
    description: 'مدخل إلى الأعداد العقدية: الشكل الجبري، الشكل المثلثي، وتطبيقات في الهندسة.',
    level: '2bac',
    levelLabel: 'ثانية باك',
    youtubeId: 'VIDEO_ID_11',
    pdfPath: 'assets/pdfs/2bac/complex.pdf',
    topics: ['الشكل الجبري', 'الشكل المثلثي', 'الشكل الأسي']
  },
  {
    id: 12,
    slug: 'sequences-logic',
    title: 'المتتاليات والمنطق',
    titleFr: 'Suites et Logique',
    description: 'دراسة متقدمة للمتتاليات مع مدخل إلى المنطق الرياضي: التقاربية، البرهان بالتحريض.',
    level: '2bac',
    levelLabel: 'ثانية باك',
    youtubeId: 'VIDEO_ID_12',
    pdfPath: 'assets/pdfs/2bac/sequences-logic.pdf',
    topics: ['تقارب المتتاليات', 'البرهان بالاستدلال', 'التحريض الرياضي']
  }
,
   {
    id: 13,
    slug: 'integrale',
    title: 'calcule integrale',
    titleFr: 'calcule integrale',
    description: 'calcule integrale d une fonction continue sur un segment.',
    level: '2bac',
    levelLabel: 'ثانية باك',
    youtubeId: 'VIDEO_ID_14',
    pdfPath: 'assets/pdfs/2bac/inequations.pdf',
    topics: ['fonction', 'primitive dune fonction', 'calcule integrale']
  }
];

/* ==========================================
   THEME MANAGEMENT
   ========================================== */
function initTheme() {
  const saved = localStorage.getItem('najhin-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('najhin-theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icons = document.querySelectorAll('.theme-icon');
  icons.forEach(icon => {
    icon.className = theme === 'dark'
      ? 'fas fa-sun theme-icon'
      : 'fas fa-moon theme-icon';
  });
}

/* ==========================================
   MOBILE MENU
   ========================================== */
function initMobileMenu() {
  const btn = document.querySelector('.btn-menu');
  const menu = document.querySelector('.mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    const icon = btn.querySelector('i');
    if (menu.classList.contains('open')) {
      icon.className = 'fas fa-times';
    } else {
      icon.className = 'fas fa-bars';
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      const icon = btn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    }
  });
}

/* ==========================================
   ACTIVE NAV LINK
   ========================================== */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ==========================================
   SEARCH FUNCTIONALITY
   ========================================== */
function initSearch() {
  const input = document.querySelector('.search-input');
  const resultsBox = document.querySelector('.search-results');
  if (!input || !resultsBox) return;

  input.addEventListener('input', debounce(function () {
    const query = this.value.trim();
    if (!query) {
      resultsBox.classList.remove('show');
      return;
    }
    const results = searchLessons(query);
    renderSearchResults(results, resultsBox, query);
  }, 250));

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!input.closest('.search-container').contains(e.target)) {
      resultsBox.classList.remove('show');
    }
  });

  // Keyboard: Enter navigates to first result
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const first = resultsBox.querySelector('.search-result-item');
      if (first) first.click();
    }
    if (e.key === 'Escape') {
      resultsBox.classList.remove('show');
      input.blur();
    }
  });
}

function searchLessons(query) {
  const q = query.toLowerCase();
  return LESSONS.filter(lesson =>
    lesson.title.includes(query) ||
    lesson.titleFr.toLowerCase().includes(q) ||
    lesson.description.includes(query) ||
    lesson.levelLabel.includes(query) ||
    (lesson.topics && lesson.topics.some(t => t.includes(query)))
  );
}

function renderSearchResults(results, box, query) {
  if (results.length === 0) {
    box.innerHTML = `<div class="no-results"><i class="fas fa-search" style="margin-left:0.5rem"></i>لا توجد نتائج لـ "${query}"</div>`;
    box.classList.add('show');
    return;
  }

  box.innerHTML = results.slice(0, 6).map(lesson => `
    <div class="search-result-item" onclick="window.location='lesson.html?slug=${lesson.slug}'">
      <div class="result-icon"><i class="fas fa-book-open"></i></div>
      <div class="result-info">
        <div class="result-title">${lesson.title}</div>
        <div class="result-level">${lesson.levelLabel} &bull; ${lesson.titleFr}</div>
      </div>
    </div>
  `).join('');
  box.classList.add('show');
}

/* ==========================================
   RENDER LESSON CARDS
   ========================================== */
function renderLessonCards(lessons, container) {
  if (!container) return;

  if (lessons.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <i class="fas fa-book-open"></i>
        <h3>لا توجد دروس متاحة</h3>
        <p>سيتم إضافة دروس قريباً</p>
      </div>`;
    return;
  }

  container.innerHTML = lessons.map((lesson, index) => `
    <div class="lesson-card">
      <div class="lesson-card-header">
        <div class="lesson-number">${String(index + 1).padStart(2, '0')}</div>
        <span class="lesson-badge badge-${lesson.level}">${lesson.levelLabel}</span>
      </div>
      <h3>${lesson.title}</h3>
      <p>${lesson.description}</p>
      <div class="lesson-card-footer">
        <a href="lesson.html?slug=${lesson.slug}" class="btn btn-primary btn-sm">
          <i class="fas fa-play-circle"></i> عرض الدرس
        </a>
        <div class="lesson-icon-group">
          <a href="${lesson.pdfPath}" download class="lesson-icon-btn" title="تحميل PDF">
            <i class="fas fa-download"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================
   HOMEPAGE SPECIFIC
   ========================================== */
function initHomepage() {
  // Latest lessons (last 6)
  const latestContainer = document.getElementById('latest-lessons');
  if (latestContainer) {
    renderLessonCards(LESSONS.slice(0, 6), latestContainer);
  }

  // Stats counter animation
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'));
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + (el.getAttribute('data-suffix') || '');
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

/* ==========================================
   LEVEL PAGE SPECIFIC
   ========================================== */
function initLevelPage(level) {
  const container = document.getElementById('lessons-grid');
  if (!container) return;

  const filtered = LESSONS.filter(l => l.level === level);
  renderLessonCards(filtered, container);
}

/* ==========================================
   LESSON PAGE SPECIFIC
   ========================================== */
function initLessonPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');

  if (!slug) {
    showLessonError();
    return;
  }

  const lesson = LESSONS.find(l => l.slug === slug);
  if (!lesson) {
    showLessonError();
    return;
  }

  renderLessonContent(lesson);

  // Related lessons (same level, different lesson)
  const related = LESSONS.filter(l => l.level === lesson.level && l.slug !== slug).slice(0, 3);
  const relatedContainer = document.getElementById('related-lessons');
  if (relatedContainer) {
    renderLessonCards(related, relatedContainer);
  }
}

function renderLessonContent(lesson) {
  // Page title
  document.title = lesson.title + ' - Najhin نجحين';

  // Breadcrumb
  const levelPageMap = { tronc: 'tronc.html', '1bac': '1bac.html', '2bac': '2bac.html' };
  document.querySelectorAll('.lesson-level-link').forEach(el => {
    el.href = levelPageMap[lesson.level];
    el.textContent = lesson.levelLabel;
  });

  // Title & meta
  const titleEl = document.getElementById('lesson-title');
  if (titleEl) titleEl.textContent = lesson.title;

  const titleFrEl = document.getElementById('lesson-title-fr');
  if (titleFrEl) titleFrEl.textContent = lesson.titleFr;

  const descEl = document.getElementById('lesson-description');
  if (descEl) descEl.textContent = lesson.description;

  const badgeEl = document.getElementById('lesson-badge');
  if (badgeEl) {
    badgeEl.textContent = lesson.levelLabel;
    badgeEl.className = `lesson-badge badge-${lesson.level}`;
  }

  // YouTube embed
  const videoContainer = document.getElementById('video-container');
  if (videoContainer) {
    if (lesson.youtubeId && lesson.youtubeId !== 'VIDEO_ID') {
      videoContainer.innerHTML = `
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/${lesson.youtubeId}?rel=0"
            title="${lesson.title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>`;
    } else {
      videoContainer.innerHTML = `
        <div class="video-placeholder">
          <i class="fab fa-youtube"></i>
          <p>سيتم إضافة الفيديو قريباً</p>
          <p style="font-size:0.85rem;margin-top:0.5rem;opacity:0.7">Replace VIDEO_ID in main.js with the YouTube video ID</p>
        </div>`;
    }
  }

  // PDF buttons
  const pdfDownload = document.getElementById('pdf-download');
  const pdfView = document.getElementById('pdf-view');
  if (pdfDownload) pdfDownload.href = lesson.pdfPath;
  if (pdfView) pdfView.href = lesson.pdfPath;

  // Topics list
  const topicsEl = document.getElementById('lesson-topics');
  if (topicsEl && lesson.topics) {
    topicsEl.innerHTML = lesson.topics.map(t =>
      `<li><i class="fas fa-check-circle text-primary" style="margin-left:0.5rem"></i>${t}</li>`
    ).join('');
  }
}

function showLessonError() {
  const main = document.querySelector('.lesson-page');
  if (main) {
    main.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-exclamation-circle"></i>
        <h3>الدرس غير موجود</h3>
        <p>الدرس الذي تبحث عنه غير متاح</p>
        <a href="index.html" class="btn btn-primary mt-3">
          <i class="fas fa-home"></i> العودة للرئيسية
        </a>
      </div>`;
  }
}

/* ==========================================
   SCROLL TO TOP
   ========================================== */
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================
   UTILITY: DEBOUNCE
   ========================================== */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* ==========================================
   INIT
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  setActiveNav();
  initSearch();
  initScrollTop();

  // Wire theme toggle button(s)
  document.querySelectorAll('.btn-theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // Page-specific init
  const body = document.body;
  if (body.classList.contains('page-home')) initHomepage();
  if (body.classList.contains('page-tronc')) initLevelPage('tronc');
  if (body.classList.contains('page-1bac')) initLevelPage('1bac');
  if (body.classList.contains('page-2bac')) initLevelPage('2bac');
  if (body.classList.contains('page-lesson')) initLessonPage();
});
