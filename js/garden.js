/**
 * THE GALAXY FLOWER GARDEN & GREETING CARDS CONTROLLER
 * Quản lý hiển thị 17 đóa hoa + Đóa hoa Hoàng gia Cô Phùng Thị Kiều
 * Kèm hệ thống Popup Thiệp chúc mừng tương tác cao cấp
 */

class GalaxyGarden {
  constructor(gardenContainerId, modalContainerId, particleEngine) {
    this.gardenContainer = document.getElementById(gardenContainerId);
    this.modalContainer = document.getElementById(modalContainerId);
    this.particleEngine = particleEngine;
    this.viewedCards = new Set();
    this.onFinaleCallback = null;

    this.initDOM();
  }

  initDOM() {
    if (!this.gardenContainer) return;
    this.gardenContainer.innerHTML = `
      <div class="garden-header">
        <div class="garden-subtitle">CHÀO MỪNG ĐẾN VỚI</div>
        <h1 class="garden-title">THE GALAXY FLOWER GARDEN</h1>
        <p class="garden-desc">
          17 đóa hoa ngân hà nở rộ cho 17 cô gái 11B cùng đóa hoa ánh kim rực rỡ tri ân Cô Chủ Nhiệm
        </p>
        <div class="garden-hint">✨ Nhấp vào từng bông hoa để mở tấm thiệp riêng ✨</div>
      </div>

      <!-- Khu vực Hoa Đặc Biệt Nhất Dành Cho Cô Giáo Phùng Thị Kiều -->
      <div class="teacher-flower-section" id="teacherFlowerSection">
        <div class="teacher-pedestal">
          <div class="teacher-light-pillar"></div>
          <div class="teacher-halo-ring halo-1"></div>
          <div class="teacher-halo-ring halo-2"></div>
          <div class="teacher-flower-node" id="teacherFlowerNode" title="Nhấp để mở thiệp tri ân Cô">
            <div class="crown-badge">👑 ĐẶC BIỆT NHẤT 👑</div>
            <div class="teacher-flower-icon">💐</div>
            <div class="teacher-aura"></div>
            <div class="teacher-name-badge">
              <span class="role-text">CÔ CHỦ NHIỆM</span>
              <span class="name-text">PHÙNG THỊ KIỀU</span>
            </div>
          </div>
        </div>
      </div>

      <div class="garden-divider">
        <span class="divider-line"></span>
        <span class="divider-icon">🌸 17 SẮC HOA LỚP 11B 🌸</span>
        <span class="divider-line"></span>
      </div>

      <!-- Khu vườn 17 Bông Hoa Của 17 Bạn Nữ Lớp 11B -->
      <div class="girls-flower-constellation" id="girlsConstellation">
        <!-- Render 17 hoa ở đây bằng Javascript -->
      </div>

      <!-- Nút Chuyển Đến Màn Hình Lời Kết 20/10 -->
      <div class="garden-footer">
        <button class="btn-finale-trigger" id="btnGoToFinale">
          <span class="btn-sparkle">✨</span>
          <span>BƯỚC VÀO LỜI KẾT 20/10</span>
          <span class="btn-sparkle">🌸</span>
        </button>
      </div>
    `;

    this.renderGirlsFlowers();
    this.setupTeacherFlower();
    this.setupFinaleButton();
  }

  renderGirlsFlowers() {
    const constellation = document.getElementById('girlsConstellation');
    if (!constellation) return;

    constellation.innerHTML = '';
    girls.forEach((girl, index) => {
      const flowerNode = document.createElement('div');
      flowerNode.className = 'flower-item';
      flowerNode.dataset.id = girl.id;
      flowerNode.style.animationDelay = `${index * 0.08}s`;

      flowerNode.innerHTML = `
        <div class="flower-node-inner" style="--flower-color: ${girl.color}; --flower-glow: ${girl.glowColor}">
          <div class="flower-orbit-ring"></div>
          <div class="flower-icon">${girl.flowerIcon}</div>
          <div class="flower-stem-glow"></div>
          <div class="flower-caption">
            <span class="flower-index">#${String(index + 1).padStart(2, '0')}</span>
            <span class="flower-name">${girl.name}</span>
            <span class="flower-tag">${girl.flowerName}</span>
          </div>
        </div>
      `;

      // Hover SFX
      flowerNode.addEventListener('mouseenter', () => {
        if (window.soundEngine) window.soundEngine.playCelestaNote(600 + index * 30, 0.08);
      });

      // Click mở thiệp
      flowerNode.addEventListener('click', (e) => {
        const rect = flowerNode.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        if (this.particleEngine) {
          this.particleEngine.createBurst(cx, cy, 45, girl.color, false);
        }
        if (window.soundEngine) {
          window.soundEngine.playSparkleBurst();
        }
        this.openGirlCard(girl);
      });

      constellation.appendChild(flowerNode);
    });
  }

  setupTeacherFlower() {
    const teacherNode = document.getElementById('teacherFlowerNode');
    if (!teacherNode) return;

    teacherNode.addEventListener('click', (e) => {
      const rect = teacherNode.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      if (this.particleEngine) {
        this.particleEngine.createBurst(cx, cy, 90, '#ffd700', true);
      }
      if (window.soundEngine) {
        window.soundEngine.playRoyalChime();
      }
      this.openTeacherCard();
    });
  }

  setupFinaleButton() {
    const btnFinale = document.getElementById('btnGoToFinale');
    if (btnFinale) {
      btnFinale.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playChime();
        if (this.onFinaleCallback) {
          this.onFinaleCallback();
        }
      });
    }
  }

  openGirlCard(girl) {
    this.viewedCards.add(girl.id);
    if (!this.modalContainer) return;

    this.modalContainer.innerHTML = `
      <div class="card-backdrop" id="cardBackdrop">
        <div class="card-modal girl-card-modal">
          <button class="btn-card-close" id="btnCardClose" aria-label="Đóng thiệp">✕ ĐÓNG THIỆP</button>
          
          <div class="card-decor-header">
            <span class="card-badge">20/10 • DÀNH TẶNG BẠN</span>
            <div class="card-flower-emblem" style="text-shadow: 0 0 40px ${girl.glowColor}">${girl.flowerIcon}</div>
            <h2 class="card-recipient">${girl.name}</h2>
            <div class="card-flower-title">${girl.flowerName}</div>
          </div>

          <div class="card-body">
            <div class="card-quote-icon">“</div>
            <p class="card-message">${girl.message}</p>
            <div class="card-quote-icon quote-end">”</div>
          </div>

          <div class="card-decor-footer">
            <div class="card-meaning-tag">🌸 ${girl.meaning}</div>
            <div class="card-handwritten-note">With love, 11B ♡</div>
            <div class="card-wish-tag">Happy Vietnamese Women's Day 20/10! 💗</div>
            <div class="card-sender">Tập thể Lớp 11B thân tặng</div>
          </div>
        </div>
      </div>
    `;

    this.modalContainer.classList.add('visible');
    this.bindModalClose();
  }

  openTeacherCard() {
    if (!this.modalContainer) return;

    const paras = teacher.messageParagraphs.map(p => `<p class="teacher-para">${p}</p>`).join('');

    this.modalContainer.innerHTML = `
      <div class="card-backdrop teacher-backdrop" id="cardBackdrop">
        <div class="card-modal teacher-card-modal">
          <button class="btn-card-close btn-teacher-close" id="btnCardClose" aria-label="Đóng thiệp">✕ ĐÓNG THIỆP</button>

          <div class="card-decor-header teacher-header">
            <div class="teacher-card-crown">👑 👑 👑</div>
            <span class="card-badge teacher-badge">${teacher.badge}</span>
            <div class="teacher-card-emblem">${teacher.flowerIcon}</div>
            <h1 class="card-recipient teacher-recipient">CÔ PHÙNG THỊ KIỀU</h1>
            <div class="card-flower-title teacher-flower-name">${teacher.flowerName}</div>
          </div>

          <div class="card-body teacher-body">
            <div class="card-quote-icon">“</div>
            ${paras}
            <div class="card-quote-icon quote-end">”</div>
          </div>

          <div class="card-decor-footer teacher-footer">
            <div class="teacher-handwritten-note">With love & respect, 11B ♡</div>
            <div class="teacher-sparkle-ribbon">✨ Kính chúc cô luôn luôn mạnh khỏe, hạnh phúc và an vui ✨</div>
            <div class="teacher-signature">TRI ÂN TỪ TẬP THỂ LỚP 11B • 20/10</div>
          </div>
        </div>
      </div>
    `;

    this.modalContainer.classList.add('visible');
    this.bindModalClose();
  }

  bindModalClose() {
    const backdrop = document.getElementById('cardBackdrop');
    const btnClose = document.getElementById('btnCardClose');

    const closeHandler = () => {
      if (window.soundEngine) window.soundEngine.playChime();
      this.modalContainer.classList.remove('visible');
      setTimeout(() => {
        this.modalContainer.innerHTML = '';
      }, 350);
    };

    if (btnClose) btnClose.addEventListener('click', closeHandler);
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeHandler();
      });
    }

    const escHandler = (e) => {
      if (e.key === 'Escape') {
        closeHandler();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  }

  show(onFinale) {
    this.onFinaleCallback = onFinale;
    this.gardenContainer.classList.add('active');
    this.gardenContainer.scrollIntoView({ behavior: 'smooth' });
  }
}
