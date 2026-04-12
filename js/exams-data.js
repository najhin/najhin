// js/exams-data.js - With SEPARATE exercises and corrections

const EXAMS_DATA = {
  2024: {
    normale: {
      titleFr: "Examen National 2024 - Session Normale",
      titleAr: "الامتحان الوطني 2024 - الدورة العادية",
      fullExamUrl: "https://drive.google.com/file/d/1XxXxXxXxX/view",
      exercises: [
        { 
          num: 1, 
          lessonFr: "Suites numériques", 
          lessonAr: "المتتاليات العددية",
          // Different PDF for each exercise
          enonce: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Ex1-Suites-2024.pdf",
          correction: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Corrige-Ex1-Suites-2024.pdf"
        },
        { 
          num: 2, 
          lessonFr: "Nombres complexes", 
          lessonAr: "الأعداد العقدية",
          enonce: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Ex2-Complexes-2024.pdf",
          correction: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Corrige-Ex2-Complexes-2024.pdf"
        },
        { 
          num: 3, 
          lessonFr: "Fonction exponentielle", 
          lessonAr: "الدالة الأسية",
          enonce: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Ex3-Exponentielle-2024.pdf",
          correction: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Corrige-Ex3-Exponentielle-2024.pdf"
        },
        { 
          num: 4, 
          lessonFr: "Probabilités", 
          lessonAr: "الاحتمالات",
          enonce: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Ex4-Probabilites-2024.pdf",
          correction: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Corrige-Ex4-Probabilites-2024.pdf"
        }
      ]
    },
    rattrapage: {
      titleFr: "Examen National 2024 - Session Rattrapage",
      titleAr: "الامتحان الوطني 2024 - الدورة الاستدراكية",
      fullExamUrl: "https://drive.google.com/file/d/1YyYyYyYyY/view",
      exercises: [
        { 
          num: 1, 
          lessonFr: "Limites et continuité", 
          lessonAr: "النهايات والاستمرارية",
          enonce: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Ex1-Limites-2024-Ratt.pdf",
          correction: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Corrige-Ex1-Limites-2024-Ratt.pdf"
        },
        { 
          num: 2, 
          lessonFr: "Dérivation", 
          lessonAr: "الاشتقاق",
          enonce: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Ex2-Derivation-2024-Ratt.pdf",
          correction: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Corrige-Ex2-Derivation-2024-Ratt.pdf"
        },
        { 
          num: 3, 
          lessonFr: "Fonction logarithme", 
          lessonAr: "الدالة اللوغاريتمية",
          enonce: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Ex3-Logarithme-2024-Ratt.pdf",
          correction: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Corrige-Ex3-Logarithme-2024-Ratt.pdf"
        },
        { 
          num: 4, 
          lessonFr: "Géométrie dans l'espace", 
          lessonAr: "الهندسة في الفضاء",
          enonce: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Ex4-Geometrie-2024-Ratt.pdf",
          correction: "https://www.maths-france.fr/Terminale/TerminaleS/Annales-Bac/2024/Corrige-Ex4-Geometrie-2024-Ratt.pdf"
        }
      ]
    }
  }
};

// Current selected exam
let currentExam = null;

// Function to get current language
function getCurrentLangForExams() {
  return window.getCurrentLang ? window.getCurrentLang() : 'fr';
}

// Load exam function
function loadExam() {
  const year = document.getElementById('year-filter').value;
  const type = document.getElementById('type-filter').value;
  
  const exam = EXAMS_DATA[year]?.[type];
  if (!exam) {
    document.getElementById('exam-container').innerHTML = `
      <div class="exam-placeholder">
        <i class="fas fa-exclamation-triangle"></i>
        <h3>${getCurrentLangForExams() === 'fr' ? 'Examen non disponible' : 'الامتحان غير متوفر'}</h3>
        <p>${getCurrentLangForExams() === 'fr' ? 'Veuillez sélectionner une autre année' : 'الرجاء اختيار سنة أخرى'}</p>
      </div>
    `;
    return;
  }
  
  currentExam = { year, type, ...exam };
  displayExam(exam);
}

// Display exam with current language - FIXED VERSION
function displayExam(exam) {
  const container = document.getElementById('exam-container');
  const lang = getCurrentLangForExams();
  const title = lang === 'fr' ? exam.titleFr : exam.titleAr;
  
  container.innerHTML = `
    <div class="exam-card">
      <div class="exam-header">
        <h2><i class="fas fa-graduation-cap"></i> ${title}</h2>
        <button class="btn-full-exam" onclick="openFullExam()">
          <i class="fas fa-file-pdf"></i> ${lang === 'fr' ? 'Sujet complet' : 'الموضوع الكامل'}
        </button>
      </div>
      
      <div class="exercises-grid">
        ${exam.exercises.map(ex => {
          const lesson = lang === 'fr' ? ex.lessonFr : ex.lessonAr;
          const enonceText = lang === 'fr' ? 'Énoncé' : 'السؤال';
          const correctionText = lang === 'fr' ? 'Correction' : 'التصحيح';
          
          return `
            <div class="exercise-card">
              <div class="exercise-header">
                <span class="exercise-number">${lang === 'fr' ? 'Exercice' : 'تمرين'} ${ex.num}</span>
                <span class="exercise-lesson">${lesson}</span>
              </div>
              <div class="exercise-buttons">
                <button class="btn-enonce" onclick="openPDFModal('${ex.enonce}', '${enonceText} ${ex.num} - ${lesson}')">
                  <i class="fas fa-eye"></i> ${enonceText}
                </button>
                <button class="btn-correction" onclick="openPDFModal('${ex.correction}', '${correctionText} ${ex.num} - ${lesson}')">
                  <i class="fas fa-check-circle"></i> ${correctionText}
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// Open PDF in modal
function openPDFModal(url, title) {
  // For Google Drive links, convert to direct view
  let directUrl = url;
  if (url.includes('drive.google.com')) {
    const fileId = url.match(/[-\w]{25,}/)?.[0];
    if (fileId) {
      directUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    }
  }
  
  const encodedUrl = encodeURIComponent(directUrl);
  const viewerUrl = `https://docs.google.com/viewer?url=${encodedUrl}&embedded=true`;
  const lang = getCurrentLangForExams();
  
  const existingModal = document.getElementById('pdf-modal-container');
  if (existingModal) existingModal.remove();
  
  const modalContainer = document.createElement('div');
  modalContainer.id = 'pdf-modal-container';
  modalContainer.className = 'pdf-modal-container';
  modalContainer.innerHTML = `
    <div class="pdf-modal-overlay" onclick="closePDFModal()"></div>
    <div class="pdf-modal">
      <div class="pdf-modal-header">
        <h3><i class="fas fa-file-pdf"></i> ${title}</h3>
        <button class="pdf-modal-close" onclick="closePDFModal()">&times;</button>
      </div>
      <div class="pdf-modal-body">
        <iframe src="${viewerUrl}" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="pdf-modal-footer">
        <a href="${directUrl}" target="_blank" class="btn-download">
          <i class="fas fa-download"></i> ${lang === 'fr' ? 'Télécharger le PDF' : 'تحميل PDF'}
        </a>
        <button class="btn-close" onclick="closePDFModal()">${lang === 'fr' ? 'Fermer' : 'إغلاق'}</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modalContainer);
  document.body.style.overflow = 'hidden';
  
  const escapeHandler = (e) => {
    if (e.key === 'Escape') {
      closePDFModal();
      document.removeEventListener('keydown', escapeHandler);
    }
  };
  document.addEventListener('keydown', escapeHandler);
}

function closePDFModal() {
  const modalContainer = document.getElementById('pdf-modal-container');
  if (modalContainer) modalContainer.remove();
  document.body.style.overflow = '';
}

function openFullExam() {
  if (currentExam && currentExam.fullExamUrl) {
    const lang = getCurrentLangForExams();
    const title = lang === 'fr' ? currentExam.titleFr : currentExam.titleAr;
    openPDFModal(currentExam.fullExamUrl, title);
  } else {
    // If no full exam URL, show message
    alert(getCurrentLangForExams() === 'fr' ? 'Sujet complet non disponible' : 'الموضوع الكامل غير متوفر');
  }
}

// Refresh page when language changes
function refreshExamDisplay() {
  const normaleOption = document.querySelector('#type-filter option[value="normale"]');
  const rattrapageOption = document.querySelector('#type-filter option[value="rattrapage"]');
  const loadButtonSpan = document.querySelector('#load-exam span');
  const lang = getCurrentLangForExams();
  
  if (normaleOption) {
    normaleOption.textContent = lang === 'fr' ? 'Session Normale' : 'الدورة العادية';
  }
  if (rattrapageOption) {
    rattrapageOption.textContent = lang === 'fr' ? 'Session Rattrapage' : 'الدورة الاستدراكية';
  }
  if (loadButtonSpan) {
    loadButtonSpan.textContent = lang === 'fr' ? 'Charger l\'examen' : 'تحميل الامتحان';
  }
  
  if (currentExam) {
    displayExam(currentExam);
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const loadBtn = document.getElementById('load-exam');
  if (loadBtn) loadBtn.addEventListener('click', loadExam);
  
  window.addEventListener('languageChanged', () => {
    refreshExamDisplay();
  });
  
  loadExam();
});

window.openPDFModal = openPDFModal;
window.closePDFModal = closePDFModal;
window.openFullExam = openFullExam;
window.loadExam = loadExam;
window.refreshExamDisplay = refreshExamDisplay;
