/**
 * MAIN CONTROLLER - ĐIỀU PHỐI TIMELINE & TRẢI NGHIỆM CINEMATIC 20/10
 */

document.addEventListener('DOMContentLoaded', () => {
  // Khởi tạo các hệ thống nòng cốt
  const particles = new ParticleEngine('particleCanvas');
  const spaceship = new SpaceshipMission('spaceshipSection', particles);
  const garden = new GalaxyGarden('gardenSection', 'cardModalSection', particles);

  // Tham chiếu các thành phần DOM chính
  const introSection = document.getElementById('introSection');
  const introWishText = document.getElementById('introWishText');
  const introDecorFlowers = document.getElementById('introDecorFlowers');
  const introTitleBlock = document.getElementById('introTitleBlock');
  const btnStartVoyage = document.getElementById('btnStartVoyage');
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const audioPromptToast = document.getElementById('audioPromptToast');
  const finaleSection = document.getElementById('finaleSection');

  let currentWishIndex = 0;
  let wishTimer = null;

  // 1. GIAI ĐOẠN 1 & 2: MÀN HÌNH HỒNG, BÔNG HOA & LỜI CHÚC XUẤT HIỆN
  function startIntroAnimation() {
    particles.setTheme('pink');

    // Tạo các bông hoa lơ lửng nở nhẹ ở foreground & background
    const flowerIcons = ['🌸', '🌷', '🌹', '🪷', '🌺', '🌼', '💮', '🪻'];
    introDecorFlowers.innerHTML = '';
    for (let i = 0; i < 14; i++) {
      const fl = document.createElement('div');
      fl.className = `intro-float-flower fl-${i % 4}`;
      fl.innerText = flowerIcons[i % flowerIcons.length];
      fl.style.left = `${(i * 7.5 + Math.random() * 5)}%`;
      fl.style.top = `${15 + (i % 5) * 16 + (Math.random() * 8)}%`;
      fl.style.animationDelay = `${i * 0.35}s`;
      fl.style.animationDuration = `${6 + (i % 3) * 2}s`;
      introDecorFlowers.appendChild(fl);
    }

    // Hiển thị lần lượt các câu chúc trôi êm dịu (fade in -> float -> glow -> fade out)
    rotateIntroWishes();
  }

  function rotateIntroWishes() {
    if (currentWishIndex < introWishes.length) {
      introWishText.innerText = introWishes[currentWishIndex];
      introWishText.classList.remove('active');
      void introWishText.offsetWidth; // reflow
      introWishText.classList.add('active');

      currentWishIndex++;
      wishTimer = setTimeout(rotateIntroWishes, 2800);
    } else {
      // Sau khi xoay hết các lời chúc, hiện Title lớn 20/10 & Nút Bắt đầu
      setTimeout(showMainTitle, 800);
    }
  }

  // 2. GIAI ĐOẠN 3: HIỆN TITLE 20/10 VÀ NÚT "BẮT ĐẦU CHUYẾN DU HÀNH"
  function showMainTitle() {
    introWishText.style.display = 'none';
    introTitleBlock.classList.add('visible');

    if (window.soundEngine) {
      window.soundEngine.playChime();
    }
  }

  // 3. GIAI ĐOẠN 4: CLICK BẮT ĐẦU -> CHUYỂN CẢNH VÀO VŨ TRỤ (WARP SPEED)
  if (btnStartVoyage) {
    btnStartVoyage.addEventListener('click', () => {
      // Kích hoạt nhạc & âm thanh nếu chưa bật
      if (window.soundEngine) {
        window.soundEngine.start();
        window.soundEngine.playChime();
      }
      if (audioPromptToast) {
        audioPromptToast.style.opacity = '0';
        setTimeout(() => audioPromptToast.style.display = 'none', 500);
      }

      // Nổ chùm hạt sáng tại nút
      const rect = btnStartVoyage.getBoundingClientRect();
      particles.createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 60, '#ff70a6', true);

      // Chuyển màn hình hồng mờ dần và camera bay xuyên qua vũ trụ
      introSection.classList.add('fade-to-cosmos');

      // Đổi theme hạt sang Galaxy & bắt đầu tốc độ Hyperspace Warp
      setTimeout(() => {
        particles.setTheme('galaxy');
        particles.startWarp(2600, () => {
          // Sau khi warp xong, bước vào Mission 01: Phi thuyền mang 17 bông hoa
          introSection.style.display = 'none';
          spaceship.startMission(() => {
            // Khi phi thuyền xong 17 bông hoa, mở Khu Vườn Thiên Hà
            garden.show(() => {
              // Khi người dùng bấm xem Lời kết
              showFinaleScreen();
            });
          });
        });
      }, 500);
    });
  }

  // 4. GIAI ĐOẠN 5 & 6: LỜI KẾT 20/10
  function showFinaleScreen() {
    if (!finaleSection) return;

    particles.setTheme('pink');
    finaleSection.classList.add('active');
    finaleSection.scrollIntoView({ behavior: 'smooth' });

    if (window.soundEngine) {
      window.soundEngine.playRoyalChime();
    }

    // Hiển thị tuần tự các dòng thơ/lời kết xúc động
    const finaleLines = [
      { id: 'finLine1', delay: 800 },
      { id: 'finLine2', delay: 2400 },
      { id: 'finLine3', delay: 4000 },
      { id: 'finLine4', delay: 6000 },
      { id: 'finLine5', delay: 8200 },
      { id: 'finLine6', delay: 10400 },
      { id: 'finFinalCard', delay: 12600 }
    ];

    finaleLines.forEach(item => {
      setTimeout(() => {
        const el = document.getElementById(item.id);
        if (el) {
          el.classList.add('visible');
          if (window.soundEngine && (item.id === 'finLine4' || item.id === 'finFinalCard')) {
            window.soundEngine.playSparkleBurst();
          }
        }
      }, item.delay);
    });
  }

  // Nút quay lại vườn hoa từ màn hình lời kết
  const btnBackToGarden = document.getElementById('btnBackToGarden');
  if (btnBackToGarden) {
    btnBackToGarden.addEventListener('click', () => {
      if (window.soundEngine) window.soundEngine.playChime();
      particles.setTheme('galaxy');
      finaleSection.classList.remove('active');
      const gardenEl = document.getElementById('gardenSection');
      if (gardenEl) gardenEl.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Bật / Tắt âm thanh
  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', () => {
      if (window.soundEngine) {
        if (!window.soundEngine.isPlaying) {
          window.soundEngine.start();
          musicToggleBtn.innerHTML = `🎵 NHẠC: BẬT`;
          musicToggleBtn.classList.remove('muted');
        } else {
          const isMuted = window.soundEngine.toggleMute();
          musicToggleBtn.innerHTML = isMuted ? `🔇 NHẠC: TẮT` : `🎵 NHẠC: BẬT`;
          if (isMuted) {
            musicToggleBtn.classList.add('muted');
          } else {
            musicToggleBtn.classList.remove('muted');
          }
        }
      }
    });
  }

  // Toast nhắc bật nhạc khi click lần đầu vào trang
  if (audioPromptToast) {
    audioPromptToast.addEventListener('click', () => {
      if (window.soundEngine) {
        window.soundEngine.start();
      }
      audioPromptToast.style.opacity = '0';
      setTimeout(() => audioPromptToast.style.display = 'none', 400);
      if (musicToggleBtn) {
        musicToggleBtn.innerHTML = `🎵 NHẠC: BẬT`;
        musicToggleBtn.classList.remove('muted');
      }
    });
  }

  // Bắt đầu chu trình mở màn
  startIntroAnimation();
});
