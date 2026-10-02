/**
 * PARTICLE ENGINE - MULTI-LAYER CANVAS
 * Tối ưu hóa 60 FPS, hỗ trợ devicePixelRatio, tự thích ứng Mobile/Desktop
 * Bao gồm: Nebula glow, Stars, Glitter, Floating Petals, Hyperspace Warp, Particle Burst
 */

class ParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.width = 0;
    this.height = 0;
    this.isWarping = false;
    this.warpFactor = 0; // 0 (thường) đến 1 (tốc độ ánh sáng)
    this.theme = 'pink'; // 'pink' (intro) hoặc 'galaxy' (vũ trụ)

    this.stars = [];
    this.petals = [];
    this.glitters = [];
    this.nebulaBlobs = [];
    this.bursts = [];

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    this.initNebula();
    this.initStars();
    this.initPetals();
    this.initGlitters();

    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }

  initNebula() {
    const count = 4;
    this.nebulaBlobs = [];
    const colors = [
      { r: 255, g: 105, b: 180, a: 0.14 }, // hot pink
      { r: 186, g: 85, b: 211, a: 0.12 },  // medium orchid
      { r: 138, g: 43, b: 226, a: 0.10 },  // blue violet
      { r: 255, g: 182, b: 193, a: 0.12 }  // light pink
    ];

    for (let i = 0; i < count; i++) {
      this.nebulaBlobs.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.min(this.width, this.height) * (0.35 + Math.random() * 0.25),
        color: colors[i % colors.length],
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  initStars() {
    const isMobile = this.width < 768;
    const count = isMobile ? 120 : 260;
    this.stars = [];

    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: (Math.random() - 0.5) * this.width * 2,
        y: (Math.random() - 0.5) * this.height * 2,
        z: Math.random() * 1000 + 1,
        prevZ: 1000,
        radius: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.3 ? '#ffffff' : (Math.random() > 0.5 ? '#ffd2fc' : '#ffb7d5')
      });
    }
  }

  initPetals() {
    const isMobile = this.width < 768;
    const count = isMobile ? 22 : 45;
    this.petals = [];

    for (let i = 0; i < count; i++) {
      this.petals.push(this.createPetal(true));
    }
  }

  createPetal(initial = false) {
    return {
      x: Math.random() * this.width,
      y: initial ? Math.random() * this.height : -30,
      size: Math.random() * 14 + 10,
      vx: Math.random() * 1.2 - 0.6,
      vy: Math.random() * 0.9 + 0.6,
      angle: Math.random() * 360,
      vAngle: (Math.random() - 0.5) * 1.8,
      flip: Math.random() * Math.PI * 2,
      vFlip: Math.random() * 0.03 + 0.015,
      alpha: Math.random() * 0.55 + 0.35,
      colorVariant: Math.floor(Math.random() * 3) // 0: pink, 1: peach, 2: lavender
    };
  }

  initGlitters() {
    const count = 35;
    this.glitters = [];
    for (let i = 0; i < count; i++) {
      this.glitters.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 3 + 2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.04 + 0.02,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
      });
    }
  }

  // Chuyển sang chủ đề Vũ Trụ
  setTheme(theme) {
    this.theme = theme;
  }

  // Bắt đầu hiệu ứng Hyperspace Warp bay xuyên qua ngân hà
  startWarp(duration = 2500, callback) {
    this.isWarping = true;
    const startTime = performance.now();

    const animateWarp = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing curve cho tốc độ warp
      if (progress < 0.7) {
        this.warpFactor = Math.sin((progress / 0.7) * (Math.PI / 2));
      } else {
        this.warpFactor = Math.cos(((progress - 0.7) / 0.3) * (Math.PI / 2));
      }

      if (progress < 1) {
        requestAnimationFrame(animateWarp);
      } else {
        this.isWarping = false;
        this.warpFactor = 0;
        if (callback) callback();
      }
    };

    requestAnimationFrame(animateWarp);
  }

  // Kích hoạt chùm sáng hạt nổ rực rỡ khi mở thiệp hoặc click
  createBurst(x, y, count = 50, color = '#ff758f', isSpecial = false) {
    const particles = [];
    const actualCount = isSpecial ? count * 1.8 : count;

    for (let i = 0; i < actualCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 7 + 2;
      const life = Math.random() * 45 + 35;
      const size = Math.random() * 4 + (isSpecial ? 3 : 1.5);
      const isStar = Math.random() > 0.4;
      const particleColor = isSpecial && Math.random() > 0.5 
        ? '#ffd700' 
        : (Math.random() > 0.3 ? color : '#ffffff');

      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        life,
        maxLife: life,
        color: particleColor,
        isStar
      });
    }

    this.bursts.push(particles);
  }

  drawPetal(petal) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(petal.x, petal.y);
    ctx.rotate((petal.angle * Math.PI) / 180);
    ctx.scale(Math.cos(petal.flip), 1);

    ctx.beginPath();
    ctx.moveTo(0, -petal.size);
    ctx.bezierCurveTo(
      petal.size * 0.7, -petal.size * 0.7,
      petal.size * 0.8, petal.size * 0.5,
      0, petal.size
    );
    ctx.bezierCurveTo(
      -petal.size * 0.8, petal.size * 0.5,
      -petal.size * 0.7, -petal.size * 0.7,
      0, -petal.size
    );
    ctx.closePath();

    let gradient;
    if (petal.colorVariant === 0) {
      gradient = ctx.createLinearGradient(0, -petal.size, 0, petal.size);
      gradient.addColorStop(0, `rgba(255, 210, 225, ${petal.alpha})`);
      gradient.addColorStop(0.5, `rgba(255, 140, 180, ${petal.alpha * 0.9})`);
      gradient.addColorStop(1, `rgba(255, 95, 150, ${petal.alpha * 0.8})`);
    } else if (petal.colorVariant === 1) {
      gradient = ctx.createLinearGradient(0, -petal.size, 0, petal.size);
      gradient.addColorStop(0, `rgba(255, 230, 215, ${petal.alpha})`);
      gradient.addColorStop(0.6, `rgba(255, 175, 170, ${petal.alpha * 0.9})`);
      gradient.addColorStop(1, `rgba(255, 120, 145, ${petal.alpha * 0.8})`);
    } else {
      gradient = ctx.createLinearGradient(0, -petal.size, 0, petal.size);
      gradient.addColorStop(0, `rgba(240, 210, 255, ${petal.alpha})`);
      gradient.addColorStop(0.6, `rgba(215, 150, 245, ${petal.alpha * 0.9})`);
      gradient.addColorStop(1, `rgba(180, 100, 220, ${petal.alpha * 0.8})`);
    }

    ctx.fillStyle = gradient;
    ctx.shadowColor = 'rgba(255, 160, 200, 0.4)';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();
  }

  drawSparkle(x, y, size, alpha) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();

    // Hình ngôi sao 4 cánh tỏa sáng lung linh
    const inner = size * 0.25;
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2;
      ctx.lineTo(Math.cos(a) * size, Math.sin(a) * size);
      ctx.lineTo(Math.cos(a + Math.PI / 4) * inner, Math.sin(a + Math.PI / 4) * inner);
    }
    ctx.closePath();

    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    ctx.shadowColor = '#ffcbf2';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.restore();
  }

  loop() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // 1. VẼ NEBULA CLOUDS (Ánh mây hồng tím huyền ảo)
    this.nebulaBlobs.forEach((blob) => {
      blob.phase += 0.005;
      blob.x += blob.vx;
      blob.y += blob.vy;

      if (blob.x < -blob.radius) blob.x = this.width + blob.radius;
      if (blob.x > this.width + blob.radius) blob.x = -blob.radius;
      if (blob.y < -blob.radius) blob.y = this.height + blob.radius;
      if (blob.y > this.height + blob.radius) blob.y = -blob.radius;

      const dynamicRadius = blob.radius * (1 + Math.sin(blob.phase) * 0.15);
      const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, dynamicRadius);
      const themeAlpha = this.theme === 'pink' ? blob.color.a * 1.3 : blob.color.a * 0.9;
      grad.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${themeAlpha})`);
      grad.addColorStop(0.6, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${themeAlpha * 0.4})`);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, this.width, this.height);
    });

    // 2. VẼ STARS & HYPERSPACE WARP
    const cx = this.width / 2;
    const cy = this.height / 2;
    const baseSpeed = this.theme === 'galaxy' ? 2 : 0.8;
    const speed = baseSpeed + this.warpFactor * 32;

    this.stars.forEach((star) => {
      star.twinklePhase += star.twinkleSpeed;
      const twinkle = Math.sin(star.twinklePhase) * 0.35 + 0.65;

      star.prevZ = star.z;
      star.z -= speed;

      if (star.z <= 0) {
        star.z = 1000;
        star.prevZ = 1000;
        star.x = (Math.random() - 0.5) * this.width * 2;
        star.y = (Math.random() - 0.5) * this.height * 2;
      }

      const k = 400 / star.z;
      const px = star.x * k + cx;
      const py = star.y * k + cy;

      if (px >= 0 && px <= this.width && py >= 0 && py <= this.height) {
        if (this.warpFactor > 0.05) {
          // Kéo vệt sáng tốc độ ánh sáng
          const prevK = 400 / star.prevZ;
          const prevPx = star.x * prevK + cx;
          const prevPy = star.y * prevK + cy;

          ctx.beginPath();
          ctx.moveTo(prevPx, prevPy);
          ctx.lineTo(px, py);
          ctx.strokeStyle = `rgba(255, 230, 250, ${Math.min(1, star.alpha * 1.5)})`;
          ctx.lineWidth = Math.min(4, (1 - star.z / 1000) * 3 + 1);
          ctx.stroke();
        } else {
          // Ngôi sao lấp lánh bình thường
          ctx.beginPath();
          const r = Math.max(0.5, star.radius * (1 - star.z / 1200));
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.alpha * twinkle;
          ctx.shadowColor = star.color;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
        }
      }
    });

    // 3. VẼ GLITTERS (Các hạt lấp lánh 4 cánh)
    this.glitters.forEach((g) => {
      g.phase += g.speed;
      g.x += g.vx;
      g.y += g.vy;
      if (g.x < 0) g.x = this.width;
      if (g.x > this.width) g.x = 0;
      if (g.y < 0) g.y = this.height;
      if (g.y > this.height) g.y = 0;

      const alpha = (Math.sin(g.phase) + 1) * 0.45;
      if (alpha > 0.05) {
        this.drawSparkle(g.x, g.y, g.size, alpha);
      }
    });

    // 4. VẼ FLOATING SAKURA / ROSE PETALS
    this.petals.forEach((petal, idx) => {
      petal.x += petal.vx + Math.sin(petal.flip) * 0.4;
      petal.y += petal.vy;
      petal.angle += petal.vAngle;
      petal.flip += petal.vFlip;

      if (petal.y > this.height + 40 || petal.x < -40 || petal.x > this.width + 40) {
        this.petals[idx] = this.createPetal(false);
      } else {
        this.drawPetal(petal);
      }
    });

    // 5. VẼ CÁC CHÙM NỔ HẠT SÁNG (PARTICLE BURSTS)
    for (let b = this.bursts.length - 1; b >= 0; b--) {
      const group = this.bursts[b];
      for (let i = group.length - 1; i >= 0; i--) {
        const p = group[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95;
        p.vy *= 0.95;
        p.vy += 0.03; // Trọng lực nhẹ
        p.life -= 1;

        const progress = p.life / p.maxLife;
        if (p.life <= 0) {
          group.splice(i, 1);
        } else {
          ctx.save();
          ctx.globalAlpha = Math.max(0, progress);
          if (p.isStar) {
            this.drawSparkle(p.x, p.y, p.size * progress * 2.2, progress);
          } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * progress, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 8;
            ctx.fill();
          }
          ctx.restore();
        }
      }

      if (group.length === 0) {
        this.bursts.splice(b, 1);
      }
    }

    requestAnimationFrame(this.loop);
  }
}
