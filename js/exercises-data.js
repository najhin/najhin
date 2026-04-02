// Exercises Database - Easy to add new exercises
window.EXERCISES = {
  // 1ère BAC - Derivation
  derivation: [
    {
      id: 1,
      title: "التمرين 1: حساب المشتقة",
      difficulty: "easy",
      exerciseImage: "https://placehold.co/600x400/2563eb/white?text=التمرين+1:+f(x)=3x²-5x+2",
      correctionImage: "https://placehold.co/600x400/10b981/white?text=الحل:+f'(x)=6x-5"
    },
    {
      id: 2,
      title: "التمرين 2: معادلة المماس",
      difficulty: "medium",
      exerciseImage: "https://placehold.co/600x400/2563eb/white?text=التمرين+2:+f(x)=x³-2x+1+عند+x=1",
      correctionImage: "https://placehold.co/600x400/10b981/white?text=الحل:+y+=+x+-+1"
    }
  ],
  
  // 1ère BAC - Limits
  limits: [
    {
      id: 1,
      title: "التمرين 1: حساب النهاية",
      difficulty: "easy",
      exerciseImage: "https://placehold.co/600x400/2563eb/white?text=lim(x→2)+(x²-4)/(x-2)",
      correctionImage: "https://placehold.co/600x400/10b981/white?text=النهاية+=+4"
    }
  ],
  
  // 2ème BAC - Logarithms
  logarithms: [
    {
      id: 1,
      title: "التمرين 1: معادلة لوغاريتمية",
      difficulty: "medium",
      exerciseImage: "https://drive.google.com/file/d/1k_JCh8mr0887GgN6-mGSHpLMJZwRln9C/view?usp=drive_link",
      correctionImage: "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.math-exercises.com%2Falgebraic-expressions-and-polynomials%2Fformulas-for-algebraic-expressions-expending-factoring-and-grouping-the-terms&ved=0CBYQjRxqFwoTCPD4pOnbzZMDFQAAAAAdAAAAABAH&opi=89978449"
    },
 {
      id: 2,
      title: "التمرين 2: معادلة لوغاريتمية",
      difficulty: "hard",
      exerciseImage: "https://placehold.co/600x400/2563eb/white?text=ln(x²-4)+=+ln(3x-6)",
      correctionImage: "https://placehold.co/600x400/10b981/white?text=لا+يوجد+حل"
    }
  ]
};

console.log("✅ Exercises loaded:", Object.keys(window.EXERCISES));
