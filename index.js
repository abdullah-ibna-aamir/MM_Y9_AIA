// Animate hero image: fade-in from left
function animateHero() {
  const heroImg = document.querySelector('.hero-img');
  const heroContent = document.querySelector('.hero-content');
  if (heroImg && heroContent) {
    heroImg.style.opacity = 0;
    heroImg.style.transform = 'translateX(-60px)';
    heroContent.style.opacity = 0;
    heroContent.style.transform = 'translateY(40px)';
    setTimeout(() => {
      heroImg.style.transition = 'opacity 1s, transform 1s cubic-bezier(.77,0,.18,1)';
      heroImg.style.opacity = 1;
      heroImg.style.transform = 'translateX(0)';
    }, 200);
    setTimeout(() => {
      heroContent.style.transition = 'opacity 1.1s, transform 1.1s cubic-bezier(.77,0,.18,1)';
      heroContent.style.opacity = 1;
      heroContent.style.transform = 'translateY(0)';
    }, 600);
  }
}

// Scroll animation for cards
function animateCards() {
  const cards = document.querySelectorAll('.card');
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < trigger) {
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateCards);
window.addEventListener('DOMContentLoaded', animateCards);

// Fade-in for sections
function animateSections() {
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      section.style.transition = 'opacity 0.7s, transform 0.7s';
    } else {
      section.style.opacity = 0;
      section.style.transform = 'translateY(40px)';
    }
  });
}
window.addEventListener('scroll', animateSections);
window.addEventListener('DOMContentLoaded', animateSections);

// Animate social media section: fade-in up, image scale, text slide in
function animateSocialMedia() {
  const smSection = document.querySelector('.social-media');
  const smImg = document.querySelector('.sm-img');
  const smText = document.querySelector('.sm-text');
  if (smSection && smImg && smText) {
    smSection.style.opacity = 0;
    smSection.style.transform = 'translateY(40px)';
    smImg.style.transform = 'scale(0.8)';
    smImg.style.opacity = 0;
    smText.style.opacity = 0;
    smText.style.transform = 'translateX(-40px)';
    setTimeout(() => {
      smSection.style.transition = 'opacity 1s, transform 1s cubic-bezier(.77,0,.18,1)';
      smSection.style.opacity = 1;
      smSection.style.transform = 'translateY(0)';
    }, 1100);
    setTimeout(() => {
      smImg.style.transition = 'opacity 0.8s, transform 0.8s cubic-bezier(.77,0,.18,1)';
      smImg.style.opacity = 1;
      smImg.style.transform = 'scale(1)';
    }, 1500);
    setTimeout(() => {
      smText.style.transition = 'opacity 0.8s, transform 0.8s cubic-bezier(.77,0,.18,1)';
      smText.style.opacity = 1;
      smText.style.transform = 'translateX(0)';
    }, 1700);
  }
}

// Animate header: slide down and fade in
function animateHeader() {
  const header = document.querySelector('.header');
  if (header) {
    header.style.opacity = 0;
    header.style.transform = 'translateY(-40px)';
    setTimeout(() => {
      header.style.transition = 'opacity 0.9s, transform 0.9s cubic-bezier(.77,0,.18,1)';
      header.style.opacity = 1;
      header.style.transform = 'translateY(0)';
    }, 100);
  }
}

// Animate info-leak section: fade-in up, cards staggered
function animateInfoLeak() {
  const infoSection = document.querySelector('.info-leak');
  const cards = document.querySelectorAll('.info-leak .card');
  if (infoSection) {
    infoSection.style.opacity = 0;
    infoSection.style.transform = 'translateY(40px)';
    setTimeout(() => {
      infoSection.style.transition = 'opacity 1s, transform 1s cubic-bezier(.77,0,.18,1)';
      infoSection.style.opacity = 1;
      infoSection.style.transform = 'translateY(0)';
    }, 1800);
  }
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.8s, transform 0.8s cubic-bezier(.77,0,.18,1)';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, 2000 + i * 200);
  });
}

// Animate publicity section: fade-in from right
function animatePublicity() {
  const pubSection = document.querySelector('.publicity');
  if (pubSection) {
    pubSection.style.opacity = 0;
    pubSection.style.transform = 'translateX(60px)';
    setTimeout(() => {
      pubSection.style.transition = 'opacity 1s, transform 1s cubic-bezier(.77,0,.18,1)';
      pubSection.style.opacity = 1;
      pubSection.style.transform = 'translateX(0)';
    }, 2600);
  }
}

// Animate footer: fade-in up
function animateFooter() {
  const footer = document.querySelector('footer');
  if (footer) {
    footer.style.opacity = 0;
    footer.style.transform = 'translateY(40px)';
    setTimeout(() => {
      footer.style.transition = 'opacity 1s, transform 1s cubic-bezier(.77,0,.18,1)';
      footer.style.opacity = 1;
      footer.style.transform = 'translateY(0)';
    }, 3200);
  }
}

// Animate subtitles (section titles): fade-in and slight upward motion
function animateSubtitles() {
  const subtitles = document.querySelectorAll('.sm-title, .info-title, .publicity-title');
  subtitles.forEach((subtitle, i) => {
    subtitle.style.opacity = 0;
    subtitle.style.transform = 'translateY(30px)';
    setTimeout(() => {
      subtitle.style.transition = 'opacity 0.7s, transform 0.7s cubic-bezier(.77,0,.18,1)';
      subtitle.style.opacity = 1;
      subtitle.style.transform = 'translateY(0)';
    }, 900 + i * 300);
  });
}

// Animate companies page hero title
function animateCompaniesHero() {
  const hero = document.querySelector('.companies-hero');
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(-40px)';
    setTimeout(() => {
      hero.style.transition = 'opacity 1s, transform 1s cubic-bezier(.77,0,.18,1)';
      hero.style.opacity = 1;
      hero.style.transform = 'translateY(0)';
    }, 200);
  }
}

// Animate company blocks
function animateCompanyBlocks() {
  const blocks = document.querySelectorAll('.company-block');
  blocks.forEach((block, i) => {
    block.style.opacity = 0;
    block.style.transform = 'translateY(40px)';
    setTimeout(() => {
      block.style.transition = 'opacity 0.9s, transform 0.9s cubic-bezier(.77,0,.18,1)';
      block.style.opacity = 1;
      block.style.transform = 'translateY(0)';
    }, 600 + i * 400);
  });
}

// Animate signup button
function animateSignupBtn() {
  const btn = document.querySelector('.signup-btn');
  if (btn) {
    btn.style.opacity = 0;
    btn.style.transform = 'scale(0.8)';
    setTimeout(() => {
      btn.style.transition = 'opacity 0.7s, transform 0.7s cubic-bezier(.77,0,.18,1)';
      btn.style.opacity = 1;
      btn.style.transform = 'scale(1)';
    }, 1600);
  }
}

// Animate breach page hero title
function animateBreachHero() {
  const hero = document.querySelector('.breach-hero');
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(-40px)';
    setTimeout(() => {
      hero.style.transition = 'opacity 1s, transform 1s cubic-bezier(.77,0,.18,1)';
      hero.style.opacity = 1;
      hero.style.transform = 'translateY(0)';
    }, 200);
  }
}

// Animate breach examples section
function animateBreachExamples() {
  const examples = document.querySelector('.breach-examples');
  const steps = document.querySelectorAll('.step');
  const details = document.querySelectorAll('.example-detail');
  if (examples) {
    examples.style.opacity = 0;
    examples.style.transform = 'translateY(40px)';
    setTimeout(() => {
      examples.style.transition = 'opacity 1s, transform 1s cubic-bezier(.77,0,.18,1)';
      examples.style.opacity = 1;
      examples.style.transform = 'translateY(0)';
    }, 600);
  }
  steps.forEach((step, i) => {
    step.style.opacity = 0;
    step.style.transform = 'scale(0.7)';
    setTimeout(() => {
      step.style.transition = 'opacity 0.7s, transform 0.7s cubic-bezier(.77,0,.18,1)';
      step.style.opacity = 1;
      step.style.transform = 'scale(1)';
    }, 900 + i * 200);
  });
  details.forEach((detail, i) => {
    detail.style.opacity = 0;
    detail.style.transform = 'translateY(30px)';
    setTimeout(() => {
      detail.style.transition = 'opacity 0.7s, transform 0.7s cubic-bezier(.77,0,.18,1)';
      detail.style.opacity = 1;
      detail.style.transform = 'translateY(0)';
    }, 1400 + i * 200);
  });
}

// Animate breach safety section
function animateBreachSafety() {
  const safety = document.querySelector('.breach-safety');
  const img = document.querySelector('.safety-img img');
  const info = document.querySelector('.safety-info');
  const btn = document.querySelector('.safety-signup .signup-btn');
  if (safety) {
    safety.style.opacity = 0;
    safety.style.transform = 'translateY(40px)';
    setTimeout(() => {
      safety.style.transition = 'opacity 1s, transform 1s cubic-bezier(.77,0,.18,1)';
      safety.style.opacity = 1;
      safety.style.transform = 'translateY(0)';
    }, 2000);
  }
  if (img) {
    img.style.opacity = 0;
    img.style.transform = 'scale(0.8)';
    setTimeout(() => {
      img.style.transition = 'opacity 0.8s, transform 0.8s cubic-bezier(.77,0,.18,1)';
      img.style.opacity = 1;
      img.style.transform = 'scale(1)';
    }, 2200);
  }
  if (info) {
    info.style.opacity = 0;
    info.style.transform = 'translateX(-40px)';
    setTimeout(() => {
      info.style.transition = 'opacity 0.8s, transform 0.8s cubic-bezier(.77,0,.18,1)';
      info.style.opacity = 1;
      info.style.transform = 'translateX(0)';
    }, 2400);
  }
  if (btn) {
    btn.style.opacity = 0;
    btn.style.transform = 'scale(0.8)';
    setTimeout(() => {
      btn.style.transition = 'opacity 0.7s, transform 0.7s cubic-bezier(.77,0,.18,1)';
      btn.style.opacity = 1;
      btn.style.transform = 'scale(1)';
    }, 2600);
  }
}

// Animate contact page: form and info block
function animateContactPage() {
  const form = document.querySelector('.contact-form');
  const info = document.querySelector('.contact-info-block');
  if (form) {
    form.style.opacity = 0;
    form.style.transform = 'translateX(-40px)';
    setTimeout(() => {
      form.style.transition = 'opacity 1s, transform 1s cubic-bezier(.77,0,.18,1)';
      form.style.opacity = 1;
      form.style.transform = 'translateX(0)';
    }, 300);
  }
  if (info) {
    info.style.opacity = 0;
    info.style.transform = 'translateX(40px)';
    setTimeout(() => {
      info.style.transition = 'opacity 1s, transform 1s cubic-bezier(.77,0,.18,1)';
      info.style.opacity = 1;
      info.style.transform = 'translateX(0)';
    }, 700);
  }
}

window.addEventListener('DOMContentLoaded', function() {
  animateHeader();
  animateHero();
  animateSubtitles();
  animateSocialMedia();
  animateInfoLeak();
  animatePublicity();
  animateFooter();
  animateCards();
  animateSections();
  animateCompaniesHero();
  animateCompanyBlocks();
  animateSignupBtn();
  animateBreachHero();
  animateBreachExamples();
  animateBreachSafety();
  animateContactPage();
});
