/**
 * Web Audio API based Sacred Cathedral Pipe Organ & Choral Atmosphere Synthesizer
 * Provides reverent, dignified church chords (D minor - G minor - A7 - D major)
 * with soft harmonic overtones resembling sacred church organ acoustics.
 */

class CathedralAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private oscillators: OscillatorNode[] = [];
  private gainNodes: GainNode[] = [];
  private masterGain: GainNode | null = null;
  private timerId: number | null = null;
  private listeners: Set<(playing: boolean) => void> = new Set();
  private autoPlayInitialized: boolean = false;

  public subscribe(listener: (playing: boolean) => void): () => void {
    this.listeners.add(listener);
    listener(this.isPlaying);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(fn => {
      try {
        fn(this.isPlaying);
      } catch {
        // ignore
      }
    });
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  /**
   * Initializes autoplay when entering webpage.
   * Seamlessly unlocks and plays on page load or on first user interaction if browser policies block unprompted audio.
   */
  public initAutoPlay() {
    if (this.autoPlayInitialized) return;
    this.autoPlayInitialized = true;
    this.isPlaying = true;
    this.notifyListeners();

    // Try immediate playback
    this.play();

    // Fallback: unlock on first interaction if blocked by browser policy
    const unlock = () => {
      if (this.isPlaying) {
        if (!this.ctx || this.ctx.state === 'suspended') {
          this.initContext();
          this.startOrganLoop();
        }
      }
      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('scroll', unlock);
      window.removeEventListener('pointerdown', unlock);
    };

    window.addEventListener('click', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
    window.addEventListener('scroll', unlock, { passive: true });
    window.addEventListener('pointerdown', unlock, { passive: true });
  }

  public togglePlay(onStateChange?: (playing: boolean) => void) {
    if (this.isPlaying) {
      this.stop();
      if (onStateChange) onStateChange(false);
    } else {
      this.play();
      if (onStateChange) onStateChange(true);
    }
  }

  public play() {
    this.initContext();
    this.isPlaying = true;
    this.notifyListeners();

    if (!this.ctx) return;
    this.startOrganLoop();
  }

  private startOrganLoop() {
    if (!this.ctx || !this.isPlaying) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }

    // Master gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 2.5);
    this.masterGain.connect(this.ctx.destination);

    // Chords progression for sacred contemplation:
    // 1. D minor (D3, F3, A3, D4)
    // 2. G minor (G2, Bb3, D4, G4)
    // 3. A sus4 - A maj (A2, E3, A3, C#4)
    // 4. D Major resolving (D3, F#3, A3, D4)
    const chordFrequencies = [
      [146.83, 174.61, 220.0, 293.66], // Dm
      [98.0, 196.0, 233.08, 293.66],   // Gm
      [110.0, 164.81, 220.0, 277.18],  // A
      [146.83, 185.0, 220.0, 293.66],  // D
    ];

    let chordIndex = 0;

    const playChord = (frequencies: number[]) => {
      if (!this.ctx || !this.masterGain || !this.isPlaying) return;

      // Fade out old oscillators
      const now = this.ctx.currentTime;
      this.gainNodes.forEach(g => {
        try {
          g.gain.setValueAtTime(g.gain.value, now);
          g.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
        } catch {
          // ignore
        }
      });

      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // ignore
          }
        });
        this.oscillators = [];
        this.gainNodes = [];

        if (!this.ctx || !this.masterGain || !this.isPlaying) return;
        const startTime = this.ctx.currentTime;

        // Pipe organ voices (layered sine + triangle + soft sawtooth for reed organ pipes)
        frequencies.forEach((freq, idx) => {
          // Fundamental pipe
          const osc1 = this.ctx!.createOscillator();
          osc1.type = idx === 0 ? 'triangle' : 'sine';
          osc1.frequency.setValueAtTime(freq, startTime);

          // Octave overtone
          const osc2 = this.ctx!.createOscillator();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(freq * 2, startTime);

          const noteGain = this.ctx!.createGain();
          noteGain.gain.setValueAtTime(0.001, startTime);
          noteGain.gain.exponentialRampToValueAtTime(0.08 / frequencies.length, startTime + 1.8);

          osc1.connect(noteGain);
          osc2.connect(noteGain);
          noteGain.connect(this.masterGain!);

          osc1.start(startTime);
          osc2.start(startTime);

          this.oscillators.push(osc1, osc2);
          this.gainNodes.push(noteGain);
        });
      }, 900);
    };

    playChord(chordFrequencies[0]);

    this.timerId = window.setInterval(() => {
      chordIndex = (chordIndex + 1) % chordFrequencies.length;
      playChord(chordFrequencies[chordIndex]);
    }, 6500);
  }

  public stop() {
    this.isPlaying = false;
    this.notifyListeners();
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    if (this.ctx && this.masterGain) {
      try {
        const now = this.ctx.currentTime;
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
        setTimeout(() => {
          this.oscillators.forEach(osc => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {
              // ignore
            }
          });
          this.oscillators = [];
          this.gainNodes = [];
        }, 1300);
      } catch {
        // ignore
      }
    }
  }

  public getPlaying(): boolean {
    return this.isPlaying;
  }
}

export const cathedralAudio = new CathedralAudioEngine();
