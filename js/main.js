// js/main.js - Updated with language support
/**
 * Najhin - نجحين
 * Main JavaScript File
 */

/* ==========================================
   LESSONS DATABASE
   ========================================== */
const LESSONS = [
  /* ---- TRONC COMMUN ---- */
  {
    id: 1,
    slug: 'inequations',
    title: 'Inéquations et Équations',
    titleAr: 'المتراجحات والمعادلات',
    description: 'Étude complète des inéquations et équations dans l\'ensemble des nombres réels.',
    descriptionAr: 'دراسة شاملة للمتراجحات والمعادلات في مجموعة الأعداد الحقيقية.',
    level: 'tronc',
    levelLabel: 'Tronc commun',
    levelLabelAr: 'جذع مشترك',
    youtubeId: 'VIDEO_ID_1',
    pdfPath: 'assets/pdfs/tronc/inequations.pdf',
    topics: ['Inéquations linéaires', 'Équations quadratiques', 'Discussion des solutions'],
    topicsAr: ['المتراجحات الخطية', 'المعادلات التربيعية', 'مناقشة الحلول']
  },
  {
    id: 2,
    slug: 'functions',
    title: 'Fonctions de Référence',
    titleAr: 'الدوال المرجعية',
    description: 'Exploration des fonctions de base : fonction quadratique, racine carrée et fonction inverse.',
    descriptionAr: 'استكشاف الدوال الأساسية: الدالة التربيعية، الدالة الجذرية، والدالة العكسية.',
    level: 'tronc',
    levelLabel: 'Tronc commun',
    levelLabelAr: 'جذع مشترك',
    youtubeId: 'VIDEO_ID_2',
    pdfPath: 'assets/pdfs/tronc/functions.pdf',
    topics: ['Fonction quadratique', 'Fonction racine carrée', 'Représentation graphique'],
    topicsAr: ['الدالة التربيعية', 'الدالة الجذرية', 'التمثيل البياني']
  },
  {
    id: 3,
    slug: 'geometry',
    title: 'Géométrie Plane',
    titleAr: 'الهندسة المستوية',
    description: 'Principes de géométrie plane : triangles, cercles, théorèmes de parallélisme et perpendicularité.',
    descriptionAr: 'مبادئ الهندسة المستوية: المثلثات، الدوائر، ومبرهنات التوازي والتعامد.',
    level: 'tronc',
    levelLabel: 'Tronc commun',
    levelLabelAr: 'جذع مشترك',
    youtubeId: 'VIDEO_ID_3',
    pdfPath: 'assets/pdfs/tronc/geometry.pdf',
    topics: ['Théorème de Pythagore', 'Transformations géométriques', 'Symétrie axiale'],
    topicsAr: ['مبرهنة فيثاغورث', 'التحويلات الهندسية', 'التناظر المحوري']
  },
  {
    id: 4,
    slug: 'arithmetic',
    title: 'Arithmétique',
    titleAr: 'الحساب العددي',
    description: 'Fondamentaux de l\'arithmétique : division euclidienne, nombres premiers, PGCD et PPCM.',
    descriptionAr: 'أسس الحساب العددي: القسمة الإقليدية، الأعداد الأولية، PGCD وPPCM.',
    level: 'tronc',
    levelLabel: 'Tronc commun',
    levelLabelAr: 'جذع مشترك',
    youtubeId: 'VIDEO_ID_4',
    pdfPath: 'assets/pdfs/tronc/arithmetic.pdf',
    topics: ['Division euclidienne', 'Nombres premiers', 'PGCD et PPCM'],
    topicsAr: ['القسمة الإقليدية', 'الأعداد الأولية', 'PGCD و PPCM']
  },

  /* ---- 1ÈRE BAC ---- */
  {
    id: 5,
    slug: 'derivation',
    title: 'Dérivation',
    titleAr: 'الاشتقاق',
    description: 'Concept de dérivation et ses applications : règles de dérivation, dérivée des fonctions composées.',
    descriptionAr: 'مفهوم الاشتقاق وتطبيقاته: قواعد الاشتقاق، اشتقاق الدوال المركبة.',
    level: '1bac',
    levelLabel: '1ère Bac',
    levelLabelAr: 'أولى باك',
    youtubeId: 'VIDEO_ID_5',
    pdfPath: 'assets/pdfs/1bac/derivation.pdf',
    topics: ['Définition de la dérivée', 'Règles de dérivation', 'Étude complète'],
    topicsAr: ['تعريف المشتقة', 'قواعد الاشتقاق', 'الدراسة الكاملة']
  },
  {
    id: 6,
    slug: 'limits',
    title: 'Limites',
    titleAr: 'النهايات',
    description: 'Concept de limites : calcul des limites, limites à l\'infini, continuité des fonctions.',
    descriptionAr: 'مفهوم النهايات: حساب نهايات الدوال، النهايات في اللانهاية، واستمرارية الدوال.',
    level: '1bac',
    levelLabel: '1ère Bac',
    levelLabelAr: 'أولى باك',
    youtubeId: 'VIDEO_ID_6',
    pdfPath: 'assets/pdfs/1bac/limits.pdf',
    topics: ['Limites finies', 'Limites infinies', 'Continuité'],
    topicsAr: ['النهايات المتناهية', 'النهايات اللانهائية', 'الاستمرارية']
  },
  {
    id: 7,
    slug: 'sequences',
    title: 'Suites Numériques',
    titleAr: 'المتتاليات العددية',
    description: 'Étude des suites arithmétiques et géométriques : définition, propriétés et applications.',
    descriptionAr: 'دراسة المتتاليات الحسابية والهندسية: تعريفها، خواصها وتطبيقاتها.',
    level: '1bac',
    levelLabel: '1ère Bac',
    levelLabelAr: 'أولى باك',
    youtubeId: 'VIDEO_ID_7',
    pdfPath: 'assets/pdfs/1bac/sequences.pdf',
    topics: ['Suites arithmétiques', 'Suites géométriques', 'Termes des suites'],
    topicsAr: ['المتتاليات الحسابية', 'المتتاليات الهندسية', 'حدود المتتاليات']
  },
  {
    id: 8,
    slug: 'probability',
    title: 'Probabilités',
    titleAr: 'الاحتمالات',
    description: 'Introduction à la théorie des probabilités : espace probabilisé, règles de calcul et probabilité conditionnelle.',
    descriptionAr: 'مقدمة في نظرية الاحتمالات: فضاء الاحتمالات، قواعد الحساب الاحتمالي والاحتمال الشرطي.',
    level: '1bac',
    levelLabel: '1ère Bac',
    levelLabelAr: 'أولى باك',
    youtubeId: 'VIDEO_ID_8',
    pdfPath: 'assets/pdfs/1bac/probability.pdf',
    topics: ['Espace probabilisé', 'Probabilité conditionnelle', 'Indépendance'],
    topicsAr: ['فضاء الاحتمالات', 'الاحتمال الشرطي', 'الاستقلالية']
  },

  /* ---- 2ÈME BAC ---- */
  {
    id: 9,
    slug: 'logarithms',
    title: 'Fonction Logarithme',
    titleAr: 'الدالة اللوغاريتمية',
    description: 'Étude de la fonction logarithme népérien et ses propriétés.',
    descriptionAr: 'دراسة الدالة اللوغاريتمية النيبيرية وخصائصها.',
    level: '2bac',
    levelLabel: '2ème Bac',
    levelLabelAr: 'ثانية باك',
    youtubeId: 'yK0c3Wf3M4o',
    pdfPath: 'assets/pdfs/2bac/logarithms.pdf',
    topics: ['Définition et propriétés', 'Équations logarithmiques', 'Inéquations logarithmiques'],
    topicsAr: ['تعريف وخصائص', 'المعادلات اللوغاريتمية', 'المتراجحات اللوغاريتمية']
  },
  {
    id: 10,
    slug: 'exponential',
    title: 'Fonction Exponentielle',
    titleAr: 'الدالة الأسية',
    description: 'Étude de la fonction exponentielle et ses applications.',
    descriptionAr: 'دراسة الدالة الأسية وتطبيقاتها.',
    level: '2bac',
    levelLabel: '2ème Bac',
    levelLabelAr: 'ثانية باك',
    youtubeId: '5Jp0w9y1G8A',
    pdfPath: 'assets/pdfs/2bac/exponential.pdf',
    topics: ['Définition et propriétés', 'Équations exponentielles', 'Croissances comparées'],
    topicsAr: ['تعريف وخصائص', 'المعادلات الأسية', 'النمو المقارن']
  },
  {
    id: 11,
    slug: 'complex',
    title: 'Nombres Complexes',
    titleAr: 'الأعداد العقدية',
    description: 'Introduction aux nombres complexes, formes algébrique et trigonométrique.',
    descriptionAr: 'مقدمة في الأعداد العقدية، الشكل الجبري والمثلثي.',
    level: '2bac',
    levelLabel: '2ème Bac',
    levelLabelAr: 'ثانية باك',
    youtubeId: '4k6Xq7e7N3U',
    pdfPath: 'assets/pdfs/2bac/complex.pdf',
    topics: ['Forme algébrique', 'Forme trigonométrique', 'Représentation géométrique'],
    topicsAr: ['الشكل الجبري', 'الشكل المثلثي', 'التمثيل الهندسي']
  },
  {
    id: 12,
    slug: 'sequences-logic',
    title: 'Suites et Logique',
    titleAr: 'المتتاليات والمنطق',
    description: 'Étude des suites numériques et notions de logique mathématique.',
    descriptionAr: 'دراسة المتتاليات العددية ومفاهيم المنطق الرياضي.',
    level: '2bac',
    levelLabel: '2ème Bac',
    levelLabelAr: 'ثانية باك',
    youtubeId: '0oF5WQYkX8g',
    pdfPath: 'assets/pdfs/2bac/sequences-logic.pdf',
    topics: ['Suites convergentes', 'Raisonnement par récurrence', 'Quantificateurs'],
    topicsAr: ['المتتاليات المتقاربة', 'الاستدلال بالترجع', 'المحددات']
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

  document.addEventListener('click', (e) => {
    if (!input.closest('.search-container').contains(e.target)) {
      resultsBox.classList.remove('show');
    }
  });

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
  const currentLang = getCurrentLang();
  
  return LESSONS.filter(lesson => {
    const title = currentLang === 'ar' ? lesson.titleAr : lesson.title;
    const description = currentLang === 'ar' ? lesson.descriptionAr : lesson.description;
    const topics = currentLang === 'ar' ? lesson.topicsAr : lesson.topics;
    
    return title.toLowerCase().includes(q) ||
      description.toLowerCase().includes(q) ||
      (topics && topics.some(t => t.toLowerCase().includes(q)));
  });
}

function renderSearchResults(results, box, query) {
  const currentLang = getCurrentLang();
  const noResultsText = t('error.noResults');
  
  if (results.length === 0) {
    box.innerHTML = `<div class="no-results"><i class="fas fa-search"></i> ${noResultsText} "${query}"</div>`;
    box.classList.add('show');
    return;
  }

  box.innerHTML = results.slice(0, 6).map(lesson => {
    const title = currentLang === 'ar' ? lesson.titleAr : lesson.title;
    const levelLabel = currentLang === 'ar' ? lesson.levelLabelAr : lesson.levelLabel;
    
    return `
      <div class="search-result-item" onclick="window.location='lesson.html?slug=${lesson.slug}'">
        <div class="result-icon"><i class="fas fa-book-open"></i></div>
        <div class="result-info">
          <div class="result-title">${title}</div>
          <div class="result-level">${levelLabel}</div>
        </div>
      </div>
    `;
  }).join('');
  box.classList.add('show');
}

/* ==========================================
   RENDER LESSON CARDS
   ========================================== */
function renderLessonCards(lessons, container) {
  if (!container) return;

  const currentLang = getCurrentLang();
  const viewText = t('lesson.view');
  const downloadText = t('lesson.download');

  if (lessons.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <i class="fas fa-book-open"></i>
        <h3>${currentLang === 'ar' ? 'لا توجد دروس متاحة' : 'Aucun cours disponible'}</h3>
        <p>${currentLang === 'ar' ? 'سيتم إضافة دروس قريباً' : 'Des cours seront ajoutés prochainement'}</p>
      </div>`;
    return;
  }

  container.innerHTML = lessons.map((lesson, index) => {
    const title = currentLang === 'ar' ? lesson.titleAr : lesson.title;
    const description = currentLang === 'ar' ? lesson.descriptionAr : lesson.description;
    const levelLabel = currentLang === 'ar' ? lesson.levelLabelAr : lesson.levelLabel;
    
    return `
      <div class="lesson-card">
        <div class="lesson-card-header">
          <div class="lesson-number">${String(index + 1).padStart(2, '0')}</div>
          <span class="lesson-badge badge-${lesson.level}">${levelLabel}</span>
        </div>
        <h3>${title}</h3>
        <p>${description.substring(0, 100)}${description.length > 100 ? '...' : ''}</p>
        <div class="lesson-card-footer">
          <a href="lesson.html?slug=${lesson.slug}" class="btn btn-primary btn-sm">
            <i class="fas fa-play-circle"></i> ${viewText}
          </a>
          <div class="lesson-icon-group">
            <a href="${lesson.pdfPath}" download class="lesson-icon-btn" title="${downloadText}">
              <i class="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================
   HOMEPAGE SPECIFIC
   ========================================== */
function initHomepage() {
  const latestContainer = document.getElementById('latest-lessons');
  if (latestContainer) {
    renderLessonCards(LESSONS.slice(0, 6), latestContainer);
  }

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
    el.textContent = Math.floor(eased * target);
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
  renderExercises(slug);

  const related = LESSONS.filter(l => l.level === lesson.level && l.slug !== slug).slice(0, 3);
  const relatedContainer = document.getElementById('related-lessons');
  if (relatedContainer) {
    renderLessonCards(related, relatedContainer);
  }
}

function renderLessonContent(lesson) {
  const currentLang = getCurrentLang();
  const title = currentLang === 'ar' ? lesson.titleAr : lesson.title;
  const description = currentLang === 'ar' ? lesson.descriptionAr : lesson.description;
  const levelLabel = currentLang === 'ar' ? lesson.levelLabelAr : lesson.levelLabel;
  const topics = currentLang === 'ar' ? lesson.topicsAr : lesson.topics;
  
  document.title = title + ' - Najhin';

  const levelPageMap = { tronc: 'tronc.html', '1bac': '1bac.html', '2bac': '2bac.html' };
  document.querySelectorAll('.lesson-level-link').forEach(el => {
    el.href = levelPageMap[lesson.level];
    el.textContent = levelLabel;
  });

  const titleEl = document.getElementById('lesson-title');
  if (titleEl) titleEl.textContent = title;

  const descEl = document.getElementById('lesson-description');
  if (descEl) descEl.textContent = description;

  const badgeEl = document.getElementById('lesson-badge');
  if (badgeEl) {
    badgeEl.textContent = levelLabel;
    badgeEl.className = `lesson-badge badge-${lesson.level}`;
  }

  const videoContainer = document.getElementById('video-container');
  const videoComingText = t('lesson.videoComing');
  
  if (videoContainer) {
    if (lesson.youtubeId && lesson.youtubeId !== 'VIDEO_ID') {
      videoContainer.innerHTML = `
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/${lesson.youtubeId}?rel=0"
            title="${title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>`;
    } else {
      videoContainer.innerHTML = `
        <div class="video-placeholder">
          <i class="fab fa-youtube"></i>
          <p>${videoComingText}</p>
        </div>`;
    }
  }

  const pdfDownload = document.getElementById('pdf-download');
  const pdfView = document.getElementById('pdf-view');
  const downloadText = t('lesson.downloadPdf');
  const viewText = t('lesson.viewPdf');
  
  if (pdfDownload) {
    pdfDownload.href = lesson.pdfPath;
    pdfDownload.innerHTML = `<i class="fas fa-download"></i> ${downloadText}`;
  }
  if (pdfView) {
    pdfView.href = lesson.pdfPath;
    pdfView.innerHTML = `<i class="fas fa-eye"></i> ${viewText}`;
  }

  const topicsEl = document.getElementById('lesson-topics');
  if (topicsEl && topics) {
    topicsEl.innerHTML = topics.map(t =>
      `<li><i class="fas fa-check-circle text-primary"></i>${t}</li>`
    ).join('');
  }
}

function showLessonError() {
  const main = document.querySelector('.lesson-page');
  const errorText = t('error.lessonNotFound');
  const homeText = t('nav.home');
  
  if (main) {
    main.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-exclamation-circle"></i>
        <h3>${errorText}</h3>
        <a href="index.html" class="btn btn-primary mt-3">
          <i class="fas fa-home"></i> ${homeText}
        </a>
      </div>`;
  }
}

/* ==========================================
   RENDER EXERCISES
   ========================================== */
function renderExercises(lessonSlug) {
  const container = document.getElementById('exercises-container');
  if (!container) return;
  
  const exercises = window.EXERCISES ? window.EXERCISES[lessonSlug] : null;
  const noExercisesText = t('error.noExercises');
  const clickToViewText = t('lesson.clickToView');
  const correctionText = t('lesson.correction');
  
  if (!exercises || exercises.length === 0) {
    container.innerHTML = `
      <div style="padding: 2rem; text-align: center;">
        <i class="fas fa-dumbbell" style="font-size: 2rem; color: var(--text-muted);"></i>
        <p style="margin-top: 0.5rem; color: var(--text-muted); font-size: 0.9rem;">${noExercisesText}</p>
      </div>
    `;
    return;
  }
  
  let html = '';
  for (let i = 0; i < exercises.length; i++) {
    const ex = exercises[i];
    const difficultyText = ex.difficulty === 'easy' ? t('difficulty.easy') : 
                          (ex.difficulty === 'medium' ? t('difficulty.medium') : t('difficulty.hard'));
    
    html += `
      <div class="exercise-item">
        <div class="exercise-question" onclick="toggleExercise(this)">
          <div class="exercise-info">
            <div class="exercise-number">${i + 1}</div>
            <div class="exercise-title">${ex.title}</div>
            <span class="exercise-difficulty ${ex.difficulty}">${difficultyText}</span>
          </div>
          <div class="toggle-icon">
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <div class="exercise-content">
          <div class="exercise-image">
            <img src="${ex.exerciseImage}" 
                 alt="Exercice ${i + 1}"
                 onclick="openLightbox(this.src)"
                 onerror="this.src='https://placehold.co/600x400/ef4444/white?text=Image+not+found'">
            <div class="image-caption">${clickToViewText}</div>
          </div>
          <div class="correction-header" onclick="toggleCorrection(this)">
            <i class="fas fa-chevron-left"></i>
            <span>${correctionText}</span>
          </div>
          <div class="correction-content">
            <div class="correction-image">
              <img src="${ex.correctionImage}" 
                   alt="Correction exercice ${i + 1}"
                   onclick="openLightbox(this.src)"
                   onerror="this.src='https://placehold.co/600x400/ef4444/white?text=Correction+not+found'">
              <div class="image-caption">${clickToViewText}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  container.innerHTML = html;
}

window.toggleExercise = function(element) {
  const parent = element.closest('.exercise-item');
  const content = parent.querySelector('.exercise-content');
  element.classList.toggle('open');
  content.classList.toggle('open');
};

window.toggleCorrection = function(element) {
  const content = element.nextElementSibling;
  element.classList.toggle('open');
  content.classList.toggle('open');
};

window.openLightbox = function(src) {
  let lightbox = document.querySelector('.image-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = `
      <div class="close-lightbox">✕</div>
      <img src="">
    `;
    document.body.appendChild(lightbox);
    
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox || e.target.classList.contains('close-lightbox')) {
        lightbox.classList.remove('active');
      }
    });
  }
  
  lightbox.querySelector('img').src = src;
  lightbox.classList.add('active');
};

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
  initLanguageSwitcher();

  document.querySelectorAll('.btn-theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  const body = document.body;
  if (body.classList.contains('page-home')) initHomepage();
  if (body.classList.contains('page-tronc')) initLevelPage('tronc');
  if (body.classList.contains('page-1bac')) initLevelPage('1bac');
  if (body.classList.contains('page-2bac')) initLevelPage('2bac');
  if (body.classList.contains('page-lesson')) initLessonPage();

  window.addEventListener('languageChanged', () => {
    if (body.classList.contains('page-home')) initHomepage();
    if (body.classList.contains('page-tronc')) initLevelPage('tronc');
    if (body.classList.contains('page-1bac')) initLevelPage('1bac');
    if (body.classList.contains('page-2bac')) initLevelPage('2bac');
    if (body.classList.contains('page-lesson')) initLessonPage();
  });
});
