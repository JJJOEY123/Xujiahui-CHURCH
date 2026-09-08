import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX 
} from 'lucide-react';
import { Language } from '../types';
import { 
  HERO_IMAGE, 
  INTERIOR_IMAGE, 
  ALTAR_IMAGE, 
  ROSE_WINDOW_IMAGE, 
  HERO_FALLBACK, 
  INTERIOR_FALLBACK,
  ALTAR_FALLBACK,
  ROSE_WINDOW_FALLBACK
} from '../data/cathedralData';
import { cathedralAudio } from '../utils/audioSynthesizer';

interface HeroProps {
  currentLang: Language;
  onExploreClick?: () => void;
  onVirtualTourClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang
}) => {
  // Real high-resolution images of Shanghai Xujiahui Cathedral (St. Ignatius Cathedral)
  // Beginning with the beloved initial exterior twin spires facade photo
  const slides = [
    {
      src: HERO_IMAGE,
      fallback: HERO_FALLBACK,
      alt: '上海徐家汇圣依纳爵主教座堂 57米哥特式双塔正立面与广场大景',
      titleZh: '57米哥特复兴式双塔钟楼',
      titleEn: '57m Gothic Twin Spires Facade'
    },
    {
      src: INTERIOR_IMAGE,
      fallback: INTERIOR_FALLBACK,
      alt: '上海徐家汇主教座堂 大堂通廊与64根金山石柱哥特拱顶',
      titleZh: '大堂通廊与64根金山石柱',
      titleEn: 'Interior Ribbed Vaults & Nave'
    },
    {
      src: ALTAR_IMAGE,
      fallback: ALTAR_FALLBACK,
      alt: '上海徐家汇主教座堂 圣所与中央白色大理石祭台',
      titleZh: '中央祭台与圣所',
      titleEn: 'Sanctuary & High Altar'
    },
    {
      src: ROSE_WINDOW_IMAGE,
      fallback: ROSE_WINDOW_FALLBACK,
      alt: '上海徐家汇主教座堂 百年哥特式玫瑰花窗与彩绘玻璃',
      titleZh: '哥特式玫瑰花窗',
      titleEn: 'Stained Glass Rose Window'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(cathedralAudio.getPlaying());
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const unsubscribe = cathedralAudio.subscribe((playing) => {
      setIsAudioPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const toggleOrgan = () => {
    cathedralAudio.togglePlay();
  };

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    }
    setTouchStartX(null);
  };

  return (
    <section 
      className="relative h-screen min-h-[640px] w-full flex flex-col justify-between overflow-hidden select-none bg-[#090b0e]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Architectural Images Slider: 模块跟随上方背景图片滑动而滑动 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="flex h-full w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((s, idx) => (
            <div key={idx} className="relative min-w-full h-full shrink-0">
              <img
                src={s.src}
                alt={s.alt}
                className="w-full h-full object-cover object-center scale-100"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== s.fallback) {
                    target.src = s.fallback;
                  }
                }}
              />
              {/* Refined subtle vignette to preserve high resolution & sharpness while assuring text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/70 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_35%,_rgba(0,0,0,0.5)_100%)] pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Spacer for Top Navbar */}
      <div className="h-20 sm:h-24 w-full" />

      {/* Side Navigation Buttons: 左右切换按钮放置在照片背景左右侧 */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-7 md:left-9 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/25 hover:bg-black/55 border border-white/20 hover:border-white/75 text-white/75 hover:text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 active:scale-90 shadow-2xl group cursor-pointer"
        aria-label="Previous Photo"
        title={currentLang === 'zh' ? '上一张照片' : 'Previous Photo'}
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75] transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-7 md:right-9 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/25 hover:bg-black/55 border border-white/20 hover:border-white/75 text-white/75 hover:text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 active:scale-90 shadow-2xl group cursor-pointer"
        aria-label="Next Photo"
        title={currentLang === 'zh' ? '下一张照片' : 'Next Photo'}
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75] transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Centerpiece Minimalist Typography */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center my-auto flex flex-col items-center justify-center pointer-events-none">
        {currentLang === 'zh' ? (
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-[0.14em] text-[#f7f5f0] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] font-serif-sc">
              欢迎访问官方网站
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.08em] text-[#ffffff] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] font-serif-sc leading-tight">
              徐家汇圣依纳爵主教座堂
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-cinzel tracking-[0.3em] text-[#d4af37] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pt-2">
              Welcome to the Official Website · St. Ignatius Cathedral
            </p>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#f7f5f0] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] font-serif">
              Welcome to the Official Website
            </h2>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#ffffff] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] font-serif leading-tight">
              of St. Ignatius Cathedral
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-cinzel tracking-[0.25em] text-[#d4af37] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] pt-2">
              Catholic Diocese of Shanghai · Far East Cathedral 1910
            </p>
          </div>
        )}
      </div>

      {/* Bottom Bar: 简洁的白色细线，模块跟随上方背景图片滑动而滑动 */}
      <div className="relative z-20 w-full pb-8 sm:pb-10 pt-4 flex flex-col items-center justify-center">
        {/* Sleek Minimalist White Line Indicator */}
        <div className="w-[65%] sm:w-[50%] max-w-sm sm:max-w-md h-6 relative flex items-center justify-center">
          {/* Subtle translucent track line */}
          <div className="w-full h-[2px] bg-white/25 rounded-full overflow-hidden relative">
            {/* Sliding white module that glides synchronously with top image */}
            <div 
              className="absolute top-0 bottom-0 bg-white rounded-full transition-transform duration-700 ease-out shadow-[0_0_10px_rgba(255,255,255,0.95)]"
              style={{
                width: `${100 / slides.length}%`,
                transform: `translateX(${currentSlide * 100}%)`
              }}
            />
          </div>

          {/* Transparent interactive segments allowing direct slide jumping */}
          <div className="absolute inset-0 flex">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="flex-1 h-full cursor-pointer focus:outline-none"
                aria-label={`Slide ${idx + 1}`}
                title={slides[idx].titleZh}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Discrete Ambient Audio Toggle at bottom right */}
      <div className="absolute right-5 sm:right-8 bottom-6 sm:bottom-8 z-30">
        <button
          onClick={toggleOrgan}
          className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border transition-all active:scale-90 shadow-xl backdrop-blur-md ${
            isAudioPlaying
              ? 'bg-[#d4af37] text-[#0c0e12] border-[#e6be4d] shadow-[#d4af37]/40 animate-pulse'
              : 'bg-black/30 text-white/70 border-white/20 hover:border-white/60 hover:text-white hover:bg-black/55'
          }`}
          title={isAudioPlaying ? (currentLang === 'zh' ? '暂停管风琴音韵' : 'Mute Pipe Organ') : (currentLang === 'zh' ? '播放管风琴圣乐' : 'Play Pipe Organ')}
          aria-label="Cathedral Ambient Audio"
        >
          {isAudioPlaying ? (
            <Volume2 className="w-4 h-4" />
          ) : (
            <VolumeX className="w-4 h-4 opacity-75" />
          )}
        </button>
      </div>
    </section>
  );
};
