/**
 * AUDIO ENGINE - WEB AUDIO API
 * Chuyên tạo nhạc nền không gian lãng mạn, êm dịu, không lo lỗi mạng/CORS
 * Kèm hệ thống hiệu ứng âm thanh (SFX) tinh tế cho từng tương tác
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isPlaying = false;
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.timerId = null;
    this.step = 0;

    // Các hợp âm lãng mạn vũ trụ (Ab Maj9, Fm9, Db Maj9, Eb sus4 -> Eb)
    // Tần số Hz cho các nốt êm dịu
    this.chords = [
      // Ab Maj9 (Ab, C, Eb, G, Bb)
      [207.65, 261.63, 311.13, 392.00, 466.16],
      // Fm9 (F, Ab, C, Eb, G)
      [174.61, 207.65, 261.63, 311.13, 392.00],
      // Db Maj9 (Db, F, Ab, C, Eb)
      [138.59, 174.61, 207.65, 261.63, 311.13],
      // Eb9 sus4 / Eb (Eb, G, Bb, Db, F)
      [155.56, 196.00, 233.08, 277.18, 349.23]
    ];

    this.celestaNotes = [
      523.25, 587.33, 659.25, 783.99, 880.00, 1046.50, 1174.66, 1318.51, 1567.98
    ];
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(0.35, this.ctx.currentTime); // Nhẹ nhàng 35%
      this.musicGain.connect(this.masterGain);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.45, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);
    } catch (e) {
      console.warn("Web Audio API not supported:", e);
    }
  }

  start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (this.isPlaying) return;
    this.isPlaying = true;

    this.playAmbientChordLoop();
  }

  playAmbientChordLoop() {
    if (!this.isPlaying || !this.ctx) return;

    const chordIndex = Math.floor(this.step / 4) % this.chords.length;
    const currentChord = this.chords[chordIndex];

    // Phát pad nền vũ trụ ấm áp khi bắt đầu mỗi hợp âm
    if (this.step % 4 === 0) {
      this.playSynthPad(currentChord, 7.5);
    }

    // Phát các nốt celesta/chuông lấp lánh như sao băng
    const randomNote = this.celestaNotes[Math.floor(Math.random() * this.celestaNotes.length)];
    this.playCelestaNote(randomNote, 0.15 + Math.random() * 0.15);

    if (Math.random() > 0.4) {
      setTimeout(() => {
        if (!this.isPlaying) return;
        const graceNote = this.celestaNotes[Math.floor(Math.random() * this.celestaNotes.length)];
        this.playCelestaNote(graceNote, 0.1);
      }, 350 + Math.random() * 200);
    }

    this.step++;
    const nextInterval = 1400 + Math.random() * 400; // Nhịp điệu trôi êm đềm
    this.timerId = setTimeout(() => this.playAmbientChordLoop(), nextInterval);
  }

  // Tiếng pad không gian dập dềnh ấm áp
  playSynthPad(freqs, duration) {
    if (this.isMuted || !this.ctx) return;

    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(1100, this.ctx.currentTime + duration * 0.5);
      filter.frequency.exponentialRampToValueAtTime(500, this.ctx.currentTime + duration);

      const now = this.ctx.currentTime;
      const baseVol = 0.045 / freqs.length;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(baseVol, now + 1.8);
      gain.gain.exponentialRampToValueAtTime(baseVol * 0.7, now + duration * 0.6);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.musicGain);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    });
  }

  // Tiếng chuông sao lấp lánh (Celesta chime)
  playCelestaNote(freq, volume = 0.2) {
    if (this.isMuted || !this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume * 0.18, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

    osc.connect(gain);
    gain.connect(this.musicGain);

    osc.start(now);
    osc.stop(now + 2.3);
  }

  // HIỆU ỨNG: Nhấn nút / Click hoa (Tinh tế, ngân vang)
  playChime() {
    if (this.isMuted || !this.ctx) return;
    const now = this.ctx.currentTime;

    [880, 1174.66, 1760].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);

      gain.gain.setValueAtTime(0.0001, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.09, now + i * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 1.2);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 1.3);
    });
  }

  // HIỆU ỨNG: Hoa nở / Nổ hạt sáng (Magical Sparkle Burst)
  playSparkleBurst() {
    if (this.isMuted || !this.ctx) return;
    const now = this.ctx.currentTime;

    const notes = [659.25, 830.61, 987.77, 1318.51, 1661.22];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0.0001, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.08, now + idx * 0.05 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.8);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.9);
    });
  }

  // HIỆU ỨNG: Chuyển cảnh vào vũ trụ / Phi thuyền phóng vút qua (Warp Whoosh)
  playWarpSpeed() {
    if (this.isMuted || !this.ctx) return;
    const now = this.ctx.currentTime;

    // Tiếng rền trầm vũ trụ êm ái
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 1.5);
    osc.frequency.exponentialRampToValueAtTime(60, now + 3.2);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, now);
    filter.frequency.exponentialRampToValueAtTime(1400, now + 1.5);
    filter.frequency.exponentialRampToValueAtTime(200, now + 3.2);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.25, now + 1.2);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 3.3);
  }

  // HIỆU ỨNG: Bông hoa cô giáo đặc biệt (Golden Royal Celestial Fanfare)
  playRoyalChime() {
    if (this.isMuted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const majorChord = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];

    majorChord.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + i * 0.08);

      gain.gain.setValueAtTime(0.0001, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.12, now + i * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 2.5);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 2.6);
    });
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.7, now);
    }
    return this.isMuted;
  }
}

window.soundEngine = new SoundEngine();
