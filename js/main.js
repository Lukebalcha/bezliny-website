/* ============================================
   BezLiny Cleaning Cooperation — Main JS
   ============================================ */

(function () {
  'use strict';

  /* ---------- Translations ---------- */
  const translations = {
    pl: {
      'nav-services': 'Usługi',
      'nav-how': 'Jak działamy',
      'nav-benefits': 'Dlaczego my',
      'nav-testimonials': 'Opinie',
      'nav-contact': 'Kontakt',
      'nav-cta': 'Bezpłatna wycena',
      'hero-badge': 'Innowacyjne czyszczenie dronami',
      'hero-title-1': 'Rewolucja w',
      'hero-title-2': 'czyszczeniu budynków',
      'hero-title-3': 'z użyciem dronów',
      'hero-desc': 'Czyścimy elewacje, panele solarne, turbiny wiatrowe i konstrukcje przemysłowe na wysokościach do 100 metrów — bez rusztowań, szybciej i taniej.',
      'hero-btn-1': 'Zamów wycenę',
      'hero-btn-2': 'Jak to działa?',
      'badge1-title': '100m zasięgu',
      'badge1-sub': 'Bez rusztowań',
      'badge2-title': '3× szybciej',
      'badge2-sub': 'Niż tradycyjne metody',
      'badge3-title': 'Eko-friendly',
      'badge3-sub': 'Mniej wody i chemii',
      'trusted-label': 'Zaufali nam zarządcy nieruchomości w całej Polsce',
      'section-services-label': 'Nasze usługi',
      'section-services-title': 'Kompleksowe czyszczenie dronami',
      'section-services-subtitle': 'Oferujemy profesjonalne usługi mycia i czyszczenia z wykorzystaniem nowoczesnych dronów przemysłowych.',
      'svc1-title': 'Elewacje budynków',
      'svc1-desc': 'Mycie fasad budynków mieszkalnych i biurowych bez rusztowań i podnośników.',
      'svc2-title': 'Turbiny wiatrowe',
      'svc2-desc': 'Czyszczenie łopat turbin wiatrowych na wysokościach do 100 metrów.',
      'svc3-title': 'Panele solarne',
      'svc3-desc': 'Profesjonalne mycie fotowoltaiki zwiększające wydajność paneli nawet o 30%.',
      'svc4-title': 'Mosty i wiadukty',
      'svc4-desc': 'Czyszczenie konstrukcji mostowych i wiaduktów bez zamykania ruchu.',
      'svc5-title': 'Zabytki i pomniki',
      'svc5-desc': 'Delikatne czyszczenie obiektów zabytkowych z zachowaniem ich struktury.',
      'svc6-title': 'Kominy przemysłowe',
      'svc6-desc': 'Mycie kominów i wież przemysłowych bez narażania pracowników.',
      'svc7-title': 'Wieże telekomunikacyjne',
      'svc7-desc': 'Czyszczenie masztów i wież bez przerw w łączności.',
      'svc8-title': 'Centra handlowe',
      'svc8-desc': 'Mycie przeszkleń i elewacji galerii handlowych na dużych wysokościach.',
      'svc9-title': 'Hale magazynowe',
      'svc9-desc': 'Czyszczenie dachów i elewacji hal produkcyjnych i logistycznych.',
      'svc10-title': 'Porządki pobudowlane',
      'svc10-desc': 'Szybkie i dokładne sprzątanie po pracach budowlanych i remontowych.',
      'section-how-label': 'Jak działamy',
      'section-how-title': 'Prosty proces, spektakularne efekty',
      'section-how-subtitle': 'Od pierwszego kontaktu do lśniąco czystej powierzchni — trzy proste kroki.',
      'step1-title': 'Kontakt i wycena',
      'step1-desc': 'Skontaktuj się z nami, opisz obiekt — przygotujemy bezpłatną wycenę w 24h.',
      'step2-title': 'Inspekcja dronem',
      'step2-desc': 'Nasz dron przeprowadza szczegółową inspekcję obiektu i planuje trasę czyszczenia.',
      'step3-title': 'Czyszczenie dronem',
      'step3-desc': 'Precyzyjne mycie pod wysokim ciśnieniem — szybko, bezpiecznie i bez rusztowań.',
      'section-benefits-label': 'Dlaczego my',
      'section-benefits-title': 'Przewaga technologii dronowej',
      'section-benefits-subtitle': 'Nasze drony to nie gadżet — to profesjonalne narzędzie, które zmienia reguły gry.',
      'ben1-title': 'Bezpieczeństwo',
      'ben1-desc': 'Zero pracowników na wysokości. Eliminujemy ryzyko wypadków przy pracy na dużych wysokościach.',
      'ben2-title': '3× szybciej',
      'ben2-desc': 'Nasze drony kończą pracę trzy razy szybciej niż tradycyjne metody alpinistyczne.',
      'ben3-title': '40% oszczędności',
      'ben3-desc': 'Brak rusztowań i podnośników oznacza znacznie niższe koszty dla Twojej firmy.',
      'ben4-title': 'Ekologia',
      'ben4-desc': 'Zużywamy do 80% mniej wody i stosujemy biodegradowalne środki czyszczące.',
      'ben5-title': 'Zasięg 100m',
      'ben5-desc': 'Nasze drony docierają tam, gdzie tradycyjne metody zawodzą — do 100 metrów.',
      'ben6-title': 'Dokumentacja',
      'ben6-desc': 'Każde zlecenie dokumentujemy zdjęciami i filmem z drona — przed i po czyszczeniu.',
      'section-stats-label': 'W liczbach',
      'section-stats-title': 'BezLiny w liczbach',
      'stat1-suffix': 'm',
      'stat1-label': 'Zasięg wysokości',
      'stat2-suffix': '×',
      'stat2-label': 'Szybciej niż tradycyjne metody',
      'stat3-suffix': '%',
      'stat3-label': 'Tańsze od metod tradycyjnych',
      'stat4-suffix': '',
      'stat4-label': 'Pracowników na wysokości',
      'section-testimonials-label': 'Opinie klientów',
      'section-testimonials-title': 'Co mówią nasi klienci',
      'section-testimonials-subtitle': 'Dołącz do rosnącego grona zadowolonych zarządców nieruchomości i firm.',
      'test1-text': 'BezLiny wyczyścili nasz 15-piętrowy biurowiec w jeden dzień. Bez rusztowań, bez hałasu — rewelacja!',
      'test1-name': 'Marek Kowalski',
      'test1-role': 'Zarządca nieruchomości, Warszawa',
      'test2-text': 'Panele solarne po czyszczeniu dronami dają 28% więcej energii. Polecam każdej farmie PV.',
      'test2-name': 'Anna Nowak',
      'test2-role': 'Właścicielka farmy PV, Kraków',
      'test3-text': 'Profesjonalizm na najwyższym poziomie. Dokumentacja foto i video z drona — bezcenna.',
      'test3-name': 'Tomasz Wiśniewski',
      'test3-role': 'Dyrektor techniczny, Gdańsk',
      'section-contact-label': 'Kontakt',
      'section-contact-title': 'Zamów bezpłatną wycenę',
      'section-contact-subtitle': 'Napisz do nas lub zadzwoń — odpowiadamy w ciągu 24 godzin.',
      'contact-card1-title': 'Telefon',
      'contact-card2-title': 'Email',
      'contact-card3-title': 'Adres',
      'contact-card4-title': 'Godziny pracy',
      'contact-card4-line1': 'Pon–Pt: 8:00–18:00',
      'contact-card4-line2': 'Sob: 9:00–14:00',
      'form-name-label': 'Imię i nazwisko',
      'form-email-label': 'Adres email',
      'form-phone-label': 'Numer telefonu',
      'form-service-label': 'Interesująca usługa',
      'form-service-default': 'Wybierz usługę...',
      'form-message-label': 'Wiadomość',
      'form-message-placeholder': 'Opisz swój obiekt i zakres prac...',
      'form-submit': 'Wyślij zapytanie',
      'form-success-title': 'Wiadomość wysłana!',
      'form-success-desc': 'Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin.',
      'error-required': 'To pole jest wymagane',
      'error-email': 'Podaj poprawny adres email',
      'error-phone': 'Podaj poprawny numer telefonu',
      'footer-desc': 'Profesjonalne czyszczenie dronami przemysłowymi. Bezpiecznie, szybko i ekologicznie.',
      'footer-services': 'Usługi',
      'footer-company': 'Firma',
      'footer-company-about': 'O nas',
      'footer-company-career': 'Kariera',
      'footer-company-blog': 'Blog',
      'footer-company-privacy': 'Polityka prywatności',
      'footer-contact-title': 'Kontakt',
      'footer-copy': '© 2025 BezLiny Cleaning Cooperation. Wszelkie prawa zastrzeżone.',
      'footer-nip': 'NIP: 5214130837',
    },
    en: {
      'nav-services': 'Services',
      'nav-how': 'How It Works',
      'nav-benefits': 'Why Us',
      'nav-testimonials': 'Testimonials',
      'nav-contact': 'Contact',
      'nav-cta': 'Free Quote',
      'hero-badge': 'Innovative Drone Cleaning',
      'hero-title-1': 'Revolution in',
      'hero-title-2': 'building cleaning',
      'hero-title-3': 'powered by drones',
      'hero-desc': 'We clean facades, solar panels, wind turbines, and industrial structures at heights up to 100 meters — no scaffolding, faster and cheaper.',
      'hero-btn-1': 'Get a Quote',
      'hero-btn-2': 'How It Works?',
      'badge1-title': '100m reach',
      'badge1-sub': 'No scaffolding',
      'badge2-title': '3× faster',
      'badge2-sub': 'Than traditional methods',
      'badge3-title': 'Eco-friendly',
      'badge3-sub': 'Less water & chemicals',
      'trusted-label': 'Trusted by property managers across Poland',
      'section-services-label': 'Our Services',
      'section-services-title': 'Comprehensive Drone Cleaning',
      'section-services-subtitle': 'We offer professional cleaning services using state-of-the-art industrial drones.',
      'svc1-title': 'Building Facades',
      'svc1-desc': 'Washing facades of residential and office buildings without scaffolding or lifts.',
      'svc2-title': 'Wind Turbines',
      'svc2-desc': 'Cleaning wind turbine blades at heights up to 100 meters.',
      'svc3-title': 'Solar Panels',
      'svc3-desc': 'Professional PV cleaning that increases panel efficiency by up to 30%.',
      'svc4-title': 'Bridges & Overpasses',
      'svc4-desc': 'Cleaning bridge structures without traffic closures.',
      'svc5-title': 'Monuments & Heritage',
      'svc5-desc': 'Gentle cleaning of historic buildings while preserving their structure.',
      'svc6-title': 'Industrial Chimneys',
      'svc6-desc': 'Washing chimneys and industrial towers without risking workers.',
      'svc7-title': 'Telecom Towers',
      'svc7-desc': 'Cleaning masts and towers without connectivity interruptions.',
      'svc8-title': 'Shopping Centers',
      'svc8-desc': 'Washing glass facades of shopping malls at great heights.',
      'svc9-title': 'Warehouses',
      'svc9-desc': 'Cleaning roofs and facades of production and logistics halls.',
      'svc10-title': 'Post-Construction',
      'svc10-desc': 'Fast and thorough cleanup after construction and renovation work.',
      'section-how-label': 'How It Works',
      'section-how-title': 'Simple Process, Spectacular Results',
      'section-how-subtitle': 'From first contact to a sparkling clean surface — three simple steps.',
      'step1-title': 'Contact & Quote',
      'step1-desc': 'Contact us, describe your property — we\'ll prepare a free quote within 24h.',
      'step2-title': 'Drone Inspection',
      'step2-desc': 'Our drone conducts a detailed inspection and plans the cleaning route.',
      'step3-title': 'Drone Cleaning',
      'step3-desc': 'Precision high-pressure washing — fast, safe, and scaffold-free.',
      'section-benefits-label': 'Why Us',
      'section-benefits-title': 'The Drone Technology Advantage',
      'section-benefits-subtitle': 'Our drones aren\'t a gimmick — they\'re a professional tool that changes the game.',
      'ben1-title': 'Safety First',
      'ben1-desc': 'Zero workers at height. We eliminate the risk of accidents when working at elevation.',
      'ben2-title': '3× Faster',
      'ben2-desc': 'Our drones finish the job three times faster than traditional rope access methods.',
      'ben3-title': '40% Savings',
      'ben3-desc': 'No scaffolding or lifts means significantly lower costs for your company.',
      'ben4-title': 'Eco-Friendly',
      'ben4-desc': 'We use up to 80% less water and biodegradable cleaning agents.',
      'ben5-title': '100m Reach',
      'ben5-desc': 'Our drones reach where traditional methods fail — up to 100 meters.',
      'ben6-title': 'Documentation',
      'ben6-desc': 'Every job is documented with drone photos and video — before and after.',
      'section-stats-label': 'By the Numbers',
      'section-stats-title': 'BezLiny in Numbers',
      'stat1-suffix': 'm',
      'stat1-label': 'Height reach',
      'stat2-suffix': '×',
      'stat2-label': 'Faster than traditional methods',
      'stat3-suffix': '%',
      'stat3-label': 'Cheaper than traditional methods',
      'stat4-suffix': '',
      'stat4-label': 'Workers at height',
      'section-testimonials-label': 'Testimonials',
      'section-testimonials-title': 'What Our Clients Say',
      'section-testimonials-subtitle': 'Join the growing number of satisfied property managers and companies.',
      'test1-text': 'BezLiny cleaned our 15-story office building in one day. No scaffolding, no noise — amazing!',
      'test1-name': 'Marek Kowalski',
      'test1-role': 'Property Manager, Warsaw',
      'test2-text': 'Solar panels after drone cleaning produce 28% more energy. I recommend it to every PV farm.',
      'test2-name': 'Anna Nowak',
      'test2-role': 'PV Farm Owner, Kraków',
      'test3-text': 'Top-level professionalism. Drone photo and video documentation — priceless.',
      'test3-name': 'Tomasz Wiśniewski',
      'test3-role': 'Technical Director, Gdańsk',
      'section-contact-label': 'Contact',
      'section-contact-title': 'Get a Free Quote',
      'section-contact-subtitle': 'Write to us or call — we respond within 24 hours.',
      'contact-card1-title': 'Phone',
      'contact-card2-title': 'Email',
      'contact-card3-title': 'Address',
      'contact-card4-title': 'Working Hours',
      'contact-card4-line1': 'Mon–Fri: 8:00–18:00',
      'contact-card4-line2': 'Sat: 9:00–14:00',
      'form-name-label': 'Full Name',
      'form-email-label': 'Email Address',
      'form-phone-label': 'Phone Number',
      'form-service-label': 'Service of Interest',
      'form-service-default': 'Select a service...',
      'form-message-label': 'Message',
      'form-message-placeholder': 'Describe your property and scope of work...',
      'form-submit': 'Send Inquiry',
      'form-success-title': 'Message Sent!',
      'form-success-desc': 'Thank you for reaching out. We\'ll respond within 24 hours.',
      'error-required': 'This field is required',
      'error-email': 'Please enter a valid email address',
      'error-phone': 'Please enter a valid phone number',
      'footer-desc': 'Professional cleaning with industrial drones. Safe, fast, and eco-friendly.',
      'footer-services': 'Services',
      'footer-company': 'Company',
      'footer-company-about': 'About Us',
      'footer-company-career': 'Careers',
      'footer-company-blog': 'Blog',
      'footer-company-privacy': 'Privacy Policy',
      'footer-contact-title': 'Contact',
      'footer-copy': '© 2025 BezLiny Cleaning Cooperation. All rights reserved.',
      'footer-nip': 'Tax ID: 5214130837',
    }
  };

  let currentLang = 'pl';

  /* ---------- DOM Ready ---------- */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initLanguageToggle();
    initCounters();
    initContactForm();
    initScrollTopButton();
  }

  /* ---------- Navbar scroll ---------- */
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile Menu ---------- */
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Smooth Scroll ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ---------- Scroll Reveal (Intersection Observer) ---------- */
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

  /* ---------- Language Toggle ---------- */
  function initLanguageToggle() {
    const buttons = document.querySelectorAll('.lang-toggle button');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang === currentLang) return;
        currentLang = lang;
        buttons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
        applyTranslations(lang);
        document.documentElement.lang = lang;
      });
    });
  }

  function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else if (el.tagName === 'OPTION') {
          el.textContent = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Re-run counters on language change for suffix
    resetCounters();
  }

  /* ---------- Counter Animation ---------- */
  let countersAnimated = false;

  function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));
  }

  function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      const suffix = translations[currentLang][el.dataset.suffix] ?? el.dataset.suffixRaw ?? '';
      const duration = 2000;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }

  function resetCounters() {
    if (!countersAnimated) return;
    document.querySelectorAll('.stat-number').forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      const suffix = translations[currentLang][el.dataset.suffix] ?? el.dataset.suffixRaw ?? '';
      el.textContent = target + suffix;
    });
  }

  /* ---------- Contact Form ---------- */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateForm(form)) {
        form.style.display = 'none';
        document.querySelector('.form-success').classList.add('show');
      }
    });

    // Live validation on blur
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        const group = field.closest('.form-group');
        if (group && group.classList.contains('error')) validateField(field);
      });
    });
  }

  function validateForm(form) {
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!validateField(field)) valid = false;
    });
    return valid;
  }

  function validateField(field) {
    const group = field.closest('.form-group');
    if (!group) return true;
    const errEl = group.querySelector('.error-message');
    const dict = translations[currentLang];
    let errorMsg = '';

    if (field.required && !field.value.trim()) {
      errorMsg = dict['error-required'];
    } else if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      errorMsg = dict['error-email'];
    } else if (field.type === 'tel' && field.value && !/^[\d\s\+\-()]{7,}$/.test(field.value)) {
      errorMsg = dict['error-phone'];
    }

    if (errorMsg) {
      group.classList.add('error');
      if (errEl) errEl.textContent = errorMsg;
      return false;
    } else {
      group.classList.remove('error');
      if (errEl) errEl.textContent = '';
      return true;
    }
  }

  /* ---------- Scroll-to-Top ---------- */
  function initScrollTopButton() {
    const btn = document.querySelector('.scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();
