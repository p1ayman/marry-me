/**
 * Свадебное приглашение — Ирина & Александр
 * app.js — основная логика приложения
 */

(function () {
  'use strict';

  // ===== VENUE DATA =====
  const VENUES = {
    relatives: {
      name: 'Ресторан «Терраса»',
      type: 'Банкетный зал',
      date: '19 июня 2026',
      time: '17:00',
      address: 'г. Чебоксары, ул. А.В. Асламаса, 2Б',
      datetime: new Date('2026-06-19T17:00:00+03:00'),
      mapQuery: 'Чебоксары, улица А.В. Асламаса, 2Б',
      mapCoords: [56.1316, 47.2519]
    },
    friends: {
      name: 'Гостевой дом «На пихте»',
      type: 'Загородная площадка',
      date: '20 июня 2026',
      time: '16:00',
      address: 'д. Пихтулино, Садовая ул., 131',
      datetime: new Date('2026-06-20T16:00:00+03:00'),
      mapQuery: 'деревня Пихтулино, Садовая улица, 131, Чебоксарский муниципальный округ',
      mapCoords: [56.1085, 47.2100]
    }
  };

  // ===== INIT =====
  function init() {
    const guestKey = getGuestKey();
    const guest = guestKey ? GUESTS[guestKey] : null;

    if (!guest) {
      showError();
      return;
    }

    showEnvelope(guest);
  }

  // ===== GET GUEST FROM URL =====
  function getGuestKey() {
    const params = new URLSearchParams(window.location.search);
    return params.get('guest');
  }

  // ===== SHOW ERROR SCREEN =====
  function showError() {
    document.getElementById('errorScreen').classList.add('active');
    document.getElementById('envelopeScreen').classList.remove('active');
    document.getElementById('appContent').classList.remove('active');
  }

  // ===== SHOW ENVELOPE SCREEN =====
  function showEnvelope(guest) {
    const envelopeScreen = document.getElementById('envelopeScreen');
    const guestNameEl = document.getElementById('envelopeGuestName');
    const envelopeDateEl = document.getElementById('envelopeDate');
    const openBtn = document.getElementById('envelopeOpenBtn');

    // Use genitive form if available, fallback to regular name
    guestNameEl.textContent = guest.nameGenitive || guest.name;

    // Show specific date based on guest type
    const venue = VENUES[guest.type];
    if (envelopeDateEl) {
      envelopeDateEl.textContent = venue.date + ' · Чебоксары';
    }

    // Show envelope screen
    document.getElementById('errorScreen').classList.remove('active');
    document.getElementById('appContent').classList.remove('active');
    envelopeScreen.classList.add('active');

    // Spawn mini sparkles on envelope screen
    initEnvelopeParticles();

    // Button click → open invitation
    openBtn.addEventListener('click', function () {
      openBtn.disabled = true;
      
      // Сначала показываем основное приглашение (оно окажется под конвертом)
      // Его внутренние анимации (появление текста) начнут проигрываться
      showApp(guest);
      
      // Затем плавно растворяем конверт
      envelopeScreen.classList.add('leaving');
      
      // Убираем конверт из DOM после завершения анимации
      setTimeout(function () {
        envelopeScreen.classList.remove('active');
        envelopeScreen.classList.remove('leaving');
      }, 1200);
    });
  }

  // ===== SHOW APP =====
  function showApp(guest) {
    document.getElementById('errorScreen').classList.remove('active');
    document.getElementById('appContent').classList.add('active');

    const venue = VENUES[guest.type];

    // Personalized greeting
    setGreeting(guest.name);

    // Invitation text (different for friends vs relatives)
    setInvitationText(guest.type);

    // Hero date — show only relevant date
    setHeroDate(venue);

    // Venue details
    setVenueDetails(venue);

    // Countdown
    startCountdown(venue.datetime);

    // Map
    initMap(venue, guest.type);

    // Floating particles
    initParticles();
    
    // Parallax
    initParallax();

    // Scroll animations
    initScrollAnimations();
  }

  // ===== GREETING =====
  function setGreeting(guestName) {
    const el = document.getElementById('greetingText');
    const names = guestName.split(' и ');
    let greeting;
    if (names.length > 1) {
      greeting = `Дорогие ${guestName}!`;
    } else {
      greeting = `Дорогая ${guestName}!`;
    }
    el.textContent = greeting;
  }

  // ===== INVITATION TEXT =====
  function setInvitationText(guestType) {
    const el = document.getElementById('invitationText');
    const elSecondary = document.getElementById('invitationTextSecondary');

    let mainText;
    const SECONDARY = {
      friends: 'Отмечаем в неформальной обстановке. Просто будьте рядом, остальное мы берём на себя.',
      relatives: 'Будем рады разделить с вами этот вечер за торжественным ужином.'
    };

    if (guestType === 'relatives') {
      mainText = 'Один день в этом году станет для нас особенным: мы хотим провести его в кругу близких и дорогих людей. С большим удовольствием приглашаем вас на нашу свадьбу.';
    } else {
      mainText = 'С большим удовольствием приглашаем Вас на наш праздник – свадьбу.';
    }

    if (el) el.textContent = mainText;
    if (elSecondary) elSecondary.textContent = SECONDARY[guestType] || SECONDARY.friends;
  }

  // ===== HERO DATE =====
  function setHeroDate(venue) {
    const el = document.getElementById('heroDate');
    el.textContent = venue.date + ', Чебоксары';
  }

  // ===== VENUE DETAILS =====
  function setVenueDetails(venue) {
    document.getElementById('venueName').textContent = venue.name;
    document.getElementById('venueType').textContent = venue.type;
    document.getElementById('eventDate').textContent = venue.date;
    document.getElementById('eventTime').textContent = venue.time;
    document.getElementById('eventAddress').textContent = venue.address;
  }

  // ===== COUNTDOWN =====
  function startCountdown(targetDate) {
    function update() {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        document.getElementById('countDays').textContent = '00';
        document.getElementById('countHours').textContent = '00';
        document.getElementById('countMinutes').textContent = '00';
        document.getElementById('countSeconds').textContent = '00';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      document.getElementById('countDays').textContent = String(days).padStart(2, '0');
      document.getElementById('countHours').textContent = String(hours).padStart(2, '0');
      document.getElementById('countMinutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('countSeconds').textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  // ===== MAP =====
  function initMap(venue, guestType) {
    const imageLink = document.getElementById('mapImageLink');
    const mapImage = document.getElementById('mapImage');
    const linkEl = document.getElementById('mapLink');
    const addressEl = document.getElementById('mapAddress');

    const encodedQuery = encodeURIComponent(venue.mapQuery);
    const yandexLink = `https://yandex.ru/maps/?text=${encodedQuery}`;

    // Set map image based on guest type
    const mapImages = {
      friends: 'img/IMG_3090.jpg',
      relatives: 'img/для гостей.jpeg'
    };

    if (mapImage) mapImage.src = mapImages[guestType] || mapImages.friends;
    if (imageLink) imageLink.href = yandexLink;
    if (linkEl) linkEl.href = yandexLink;
    if (addressEl) addressEl.textContent = venue.address;
  }

  // ===== FLOATING PARTICLES =====
  function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 15 : 40;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      const size = isMobile ? (Math.random() * 5 + 4) : (Math.random() * 6 + 4);
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 8;
      const delay = Math.random() * duration * -1;
      const hue = Math.random() > 0.5 ? '45' : '38';
      const drift = (Math.random() - 0.5) * 40;
      const lightness = Math.floor(Math.random() * 10 + 78); // 78-88
      const alpha = (Math.random() * 0.3 + 0.5).toFixed(2); // 0.5-0.8

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        background: hsla(${hue}, 90%, ${lightness}%, ${alpha});
        color: hsla(${hue}, 90%, ${lightness}%, ${alpha});
        --drift: ${drift}px;
      `;

      container.appendChild(particle);
    }
  }

  // ===== PARALLAX =====
  function initParallax() {
    // Полностью отключаем параллакс на мобильных — главная причина подлагиваний
    if (window.innerWidth < 768) return;

    const heroBg = document.querySelector('.hero__bg');
    const heroContent = document.querySelector('.hero__content');
    const botanicals = document.querySelectorAll('.hero__botanical, .card__botanical, .footer__botanical');
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          if (heroBg) {
            heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
          }

          if (heroContent) {
            heroContent.style.transform = `translateY(${scrollY * -0.1}px)`;
            heroContent.style.opacity = Math.max(1 - scrollY / 600, 0);
          }

          botanicals.forEach(bot => {
            const rect = bot.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const move = (window.innerHeight - rect.top) * 0.05;
              bot.style.transform = `translateY(${move}px) rotate(${move * 0.05}deg)`;
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ===== SCROLL REVEAL ANIMATIONS =====
  function initScrollAnimations() {
    const elements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -30px 0px'
        }
      );

      elements.forEach((el) => observer.observe(el));
    } else {
      elements.forEach((el) => el.classList.add('visible'));
    }
  }

  // ===== ENVELOPE PARTICLES =====
  function initEnvelopeParticles() {
    const container = document.getElementById('envelopeParticles');
    if (!container) return;

    const count = 30;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'env-particle';

      const size = Math.random() * 5 + 4;
      const left = Math.random() * 100;
      const duration = Math.random() * 7 + 5;
      const delay = Math.random() * -duration;
      const hue = Math.random() > 0.5 ? '45' : '38';
      const lightness = Math.floor(Math.random() * 15 + 75);
      const drift = (Math.random() - 0.5) * 50;

      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        background: hsla(${hue}, 100%, ${lightness}%, 0.8);
        --drift: ${drift}px;
      `;
      container.appendChild(p);
    }
  }

  // ===== START =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
