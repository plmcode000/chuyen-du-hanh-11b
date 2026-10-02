/**
 * SPACESHIP & FLOWER DELIVERY SEQUENCE (MISSION 01)
 * Hiệu ứng phi thuyền tương lai mang 17 bông hoa lần lượt đến cho 17 cô gái 11B
 */

class SpaceshipMission {
  constructor(containerId, particleEngine) {
    this.container = document.getElementById(containerId);
    this.particleEngine = particleEngine;
    this.currentIndex = 0;
    this.isDelivering = false;
    this.autoTimer = null;
    this.onCompleteCallback = null;

    this.shipElement = null;
    this.hudElement = null;
    this.deliveryCard = null;
    this.progressFill = null;
    this.counterText = null;

    this.initDOM();
  }

  initDOM() {
    if (!this.container) return;
    this.container.innerHTML = `
      <div class="mission-hud" id="missionHud">
        <div class="mission-badge">
          <span class="mission-pulse"></span>
          <span class="mission-tag">MISSION 01</span>
        </div>
        <h2 class="mission-title">MANG NHỮNG BÔNG HOA ĐẾN CHO 17 CÔ GÁI LỚP 11B</h2>
        <div class="mission-progress-bar">
          <div class="progress-fill" id="missionProgressFill"></div>
        </div>
        <div class="mission-counter">
          Bông hoa: <span id="missionCounterText" class="counter-num">0</span> / 17
        </div>
      </div>

      <!-- Khung hiển thị phi thuyền bay qua không gian -->
      <div class="spaceship-voyage" id="spaceshipVoyage">
        <div class="ship-wrapper" id="shipWrapper">
          <div class="ship-engine-glow"></div>
          <div class="ship-thruster-plume"></div>
          
          <!-- Vector Spaceship Hiện Đại - Futuristic Star Cruiser -->
          <svg class="spaceship-svg" viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hullGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="35%" stop-color="#f3c4fb"/>
                <stop offset="70%" stop-color="#d05ce3"/>
                <stop offset="100%" stop-color="#4a0e4e"/>
              </linearGradient>
              <linearGradient id="neonPinkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#ff70a6"/>
                <stop offset="100%" stop-color="#ff0a54"/>
              </linearGradient>
              <linearGradient id="cockpitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#a0f0ed"/>
                <stop offset="50%" stop-color="#4ea8de"/>
                <stop offset="100%" stop-color="#03045e"/>
              </linearGradient>
              <linearGradient id="thrusterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#ff007f"/>
                <stop offset="40%" stop-color="#00f5d4"/>
                <stop offset="100%" stop-color="#ffffff"/>
              </linearGradient>
              <filter id="shipGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur"/>
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
              </filter>
            </defs>

            <!-- Cánh sau & Cánh ổn định phi thuyền -->
            <path d="M40 70 L10 20 L70 50 Z" fill="#6a0572" opacity="0.8"/>
            <path d="M40 70 L10 120 L70 90 Z" fill="#6a0572" opacity="0.8"/>
            <path d="M15 25 L55 52" stroke="#ff70a6" stroke-width="2"/>
            <path d="M15 115 L55 88" stroke="#ff70a6" stroke-width="2"/>

            <!-- Cánh chính bên trên & dưới -->
            <path d="M90 70 L130 10 L190 60 Z" fill="url(#hullGrad)"/>
            <path d="M90 70 L130 130 L190 80 Z" fill="url(#hullGrad)"/>
            <path d="M130 10 L190 60" stroke="#00f5d4" stroke-width="2" filter="url(#shipGlow)"/>
            <path d="M130 130 L190 80" stroke="#00f5d4" stroke-width="2" filter="url(#shipGlow)"/>

            <!-- Thân phi thuyền khí động học cao cấp -->
            <path d="M30 65 Q 110 50 250 68 L 305 70 L 250 72 Q 110 90 30 75 Z" fill="url(#hullGrad)"/>

            <!-- Vệt sọc Neon hồng & tím chạy dọc thân -->
            <path d="M60 63 L 260 68" stroke="url(#neonPinkGrad)" stroke-width="3" filter="url(#shipGlow)"/>
            <path d="M60 77 L 260 72" stroke="url(#neonPinkGrad)" stroke-width="3" filter="url(#shipGlow)"/>

            <!-- Buồng lái Hologram kính vũ trụ -->
            <ellipse cx="220" cy="70" rx="35" ry="10" fill="url(#cockpitGrad)" opacity="0.95"/>
            <ellipse cx="230" cy="68" rx="20" ry="4" fill="#ffffff" opacity="0.85"/>

            <!-- Động cơ phản lực Ion Plasma sau đuôi -->
            <rect x="18" y="62" width="16" height="16" rx="4" fill="#1b1b2f" stroke="#ff0a54" stroke-width="2"/>
            <ellipse cx="20" cy="70" rx="8" ry="12" fill="url(#thrusterGrad)" filter="url(#shipGlow)"/>
          </svg>

          <!-- Hiệu ứng hoa bay tỏa ra sau phi thuyền -->
          <div class="ship-cargo-emitter" id="shipCargoEmitter">🌸✨</div>
        </div>
      </div>

      <!-- Khung xuất hiện hoa và tên bạn nữ từng người -->
      <div class="flower-delivery-stage" id="flowerDeliveryStage">
        <div class="delivery-card" id="currentDeliveryCard">
          <div class="flower-portal-ring"></div>
          <div class="flower-icon-wrap" id="deliveryFlowerIcon">🌸</div>
          <div class="delivery-name" id="deliveryGirlName">Đỗ Phạm Quỳnh Anh</div>
          <div class="delivery-meaning" id="deliveryFlowerMeaning">Hoa Quỳnh Dạ Nguyệt</div>
          <div class="delivery-sparkle-stars">✨ 💗 ✨</div>
        </div>
      </div>

      <!-- Nút điều hướng chuyến bay -->
      <div class="mission-controls">
        <button class="btn-control btn-prev" id="btnDeliveryPrev">⏮ Trước</button>
        <button class="btn-control btn-pause-play" id="btnDeliveryPlay">⏸ Tạm Dừng</button>
        <button class="btn-control btn-next" id="btnDeliveryNext">Tiếp Theo ⏭</button>
        <button class="btn-control btn-skip" id="btnDeliverySkip">Đến Khu Vườn 🌸</button>
      </div>
    `;

    this.shipElement = document.getElementById('shipWrapper');
    this.hudElement = document.getElementById('missionHud');
    this.deliveryCard = document.getElementById('currentDeliveryCard');
    this.deliveryFlowerIcon = document.getElementById('deliveryFlowerIcon');
    this.deliveryGirlName = document.getElementById('deliveryGirlName');
    this.deliveryFlowerMeaning = document.getElementById('deliveryFlowerMeaning');
    this.progressFill = document.getElementById('missionProgressFill');
    this.counterText = document.getElementById('missionCounterText');
    this.btnPlay = document.getElementById('btnDeliveryPlay');

    this.setupEvents();
  }

  setupEvents() {
    const btnNext = document.getElementById('btnDeliveryNext');
    const btnPrev = document.getElementById('btnDeliveryPrev');
    const btnSkip = document.getElementById('btnDeliverySkip');

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playChime();
        this.nextFlower();
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playChime();
        this.prevFlower();
      });
    }

    if (this.btnPlay) {
      this.btnPlay.addEventListener('click', () => {
        if (this.isDelivering) {
          this.pause();
        } else {
          this.resume();
        }
      });
    }

    if (btnSkip) {
      btnSkip.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playChime();
        this.completeMission();
      });
    }
  }

  startMission(onComplete) {
    this.onCompleteCallback = onComplete;
    this.currentIndex = 0;
    this.isDelivering = true;
    this.container.classList.add('active');

    if (window.soundEngine) {
      window.soundEngine.playWarpSpeed();
    }

    // Hiển thị phi thuyền bay lướt vào
    this.shipElement.classList.add('cruising');

    // Bắt đầu chuỗi 17 hoa lần lượt
    setTimeout(() => {
      this.showFlower(0);
      this.scheduleNext();
    }, 1200);
  }

  scheduleNext() {
    if (!this.isDelivering) return;
    clearTimeout(this.autoTimer);
    // Thời gian hiển thị mỗi bạn: 3.2s để vừa đủ ngắm hoa, đọc tên và cảm nhận sự trang trọng
    this.autoTimer = setTimeout(() => {
      if (this.currentIndex < girls.length - 1) {
        this.nextFlower();
      } else {
        // Đã hoàn thành 17 người!
        setTimeout(() => {
          this.completeMission();
        }, 2200);
      }
    }, 3200);
  }

  showFlower(index) {
    if (index < 0 || index >= girls.length) return;
    this.currentIndex = index;
    const girl = girls[index];

    // Cập nhật thanh tiến trình HUD
    const pct = ((index + 1) / girls.length) * 100;
    if (this.progressFill) this.progressFill.style.width = `${pct}%`;
    if (this.counterText) this.counterText.innerText = `${index + 1}`;

    // Hiệu ứng hoa & tên đổi mới
    this.deliveryCard.classList.remove('pop-in');
    void this.deliveryCard.offsetWidth; // Trigger reflow
    this.deliveryCard.classList.add('pop-in');

    this.deliveryFlowerIcon.innerText = girl.flowerIcon;
    this.deliveryFlowerIcon.style.textShadow = `0 0 35px ${girl.glowColor}, 0 0 70px ${girl.color}`;
    this.deliveryGirlName.innerText = girl.name;
    this.deliveryFlowerMeaning.innerText = `${girl.flowerName} • ${girl.meaning}`;

    // Âm thanh ngân vang và nổ hạt sáng
    if (window.soundEngine) {
      window.soundEngine.playSparkleBurst();
    }

    // Nổ hạt hạt sáng particle burst từ vị trí hoa
    if (this.particleEngine) {
      const rect = this.deliveryFlowerIcon.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      this.particleEngine.createBurst(cx, cy, 38, girl.color, false);
    }
  }

  nextFlower() {
    if (this.currentIndex < girls.length - 1) {
      this.showFlower(this.currentIndex + 1);
      this.scheduleNext();
    } else {
      this.completeMission();
    }
  }

  prevFlower() {
    if (this.currentIndex > 0) {
      this.showFlower(this.currentIndex - 1);
      this.scheduleNext();
    }
  }

  pause() {
    this.isDelivering = false;
    clearTimeout(this.autoTimer);
    if (this.btnPlay) {
      this.btnPlay.innerText = "▶ Tiếp Tục";
      this.btnPlay.classList.add('paused');
    }
  }

  resume() {
    this.isDelivering = true;
    if (this.btnPlay) {
      this.btnPlay.innerText = "⏸ Tạm Dừng";
      this.btnPlay.classList.remove('paused');
    }
    this.scheduleNext();
  }

  completeMission() {
    clearTimeout(this.autoTimer);
    this.isDelivering = false;

    // Hiệu ứng hoàn thành rực rỡ
    if (this.particleEngine) {
      this.particleEngine.createBurst(window.innerWidth / 2, window.innerHeight / 2, 80, '#ff70a6', true);
    }

    if (window.soundEngine) {
      window.soundEngine.playChime();
    }

    // Ẩn mission container và chuyển sang khu vườn thiên hà
    this.container.classList.add('fade-out');
    setTimeout(() => {
      this.container.classList.remove('active', 'fade-out');
      if (this.onCompleteCallback) {
        this.onCompleteCallback();
      }
    }, 800);
  }
}
