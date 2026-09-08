import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Sparkles, 
  Headphones, 
  ChevronDown, 
  CheckCircle2,
  Compass,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import { HERO_IMAGE, HERO_FALLBACK } from '../data/cathedralData';

interface HeroProps {
  currentLang: Language;
  onExploreClick: () => void;
  onBookingClick: () => void;
  onVirtualTourClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onExploreClick,
  onBookingClick,
  onVirtualTourClick
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Hero Background Image with High-Contrast Ecclesiastical Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Shanghai Xujiahui Cathedral (St. Ignatius Cathedral) Gothic Facade"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== HERO_FALLBACK) {
              target.src = HERO_FALLBACK;
            }
          }}
        />
        {/* Layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/60 to-[#0a0c0f]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0d0f12]/40 to-[#0d0f12]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-6">
        {/* Solemn Latin Motto Overline */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181d24]/80 border border-[#d4af37]/40 backdrop-blur-md mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
          <span className="text-xs tracking-[0.25em] font-cinzel text-[#d4af37] uppercase font-semibold">
            AD MAJOREM DEI GLORIAM
          </span>
          <span className="text-xs text-[#a0947e] font-serif-sc">· 愈显主荣</span>
        </div>

        {/* Grand Cathedral Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fbfaf8] mb-4 font-serif-sc leading-[1.15]">
          {currentLang === 'zh' ? '徐家汇圣依纳爵主教座堂' : 'St. Ignatius Cathedral'}
        </h1>

        <p className="text-sm sm:text-lg md:text-xl font-cinzel tracking-widest text-[#d4af37] mb-6 uppercase">
          {currentLang === 'zh' 
            ? '天主教上海教区 · 远东第一大教堂 · 1910' 
            : 'Mother Church of the Catholic Diocese of Shanghai · Est. 1910'}
        </p>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#d1d5db] font-normal leading-relaxed mb-10">
          {currentLang === 'zh'
            ? '耸立于上海百余年的哥特复兴式双塔圣殿。57米钟楼直插云霄，64根金山花岗石雕柱承托28米肋拱尖顶，汇聚明末先贤徐光启与中西文明交流之薪火。'
            : 'A century-old Neo-Gothic twin-spire masterpiece in Shanghai. Towering 57 meters tall with 64 granite pillars and 28-meter ribbed vaults, embodying the profound heritage of Sino-Western dialogue and Catholic spirituality.'}
        </p>

        {/* Action Button Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={onBookingClick}
            className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#d4af37] to-[#b89542] hover:from-[#e3be4d] hover:to-[#c5a249] text-[#0b0e12] font-semibold text-sm uppercase tracking-wider rounded shadow-xl hover:shadow-[#d4af37]/20 active:scale-95 transition-all"
          >
            <span>{currentLang === 'zh' ? '预约参观入堂' : 'Book Free Visit'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onVirtualTourClick}
            className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#171c24]/90 hover:bg-[#202732] border border-[#3b4454] hover:border-[#d4af37] text-[#f2efe9] text-sm font-medium tracking-wide rounded backdrop-blur-sm transition-all"
          >
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>{currentLang === 'zh' ? '360° 沉浸全景漫游' : '360° Virtual Tour'}</span>
          </button>

          <button
            onClick={onExploreClick}
            className="flex items-center justify-center gap-2 px-6 py-3.5 text-[#d0d7e2] hover:text-[#d4af37] text-sm font-medium tracking-wide transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>{currentLang === 'zh' ? '建筑艺术探索' : 'Explore Architecture'}</span>
          </button>
        </div>

        {/* Real-time Visitor Stats & Practical Access Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto bg-[#13171f]/80 border border-[#262e3c] backdrop-blur-md rounded-lg p-3 sm:p-4 text-left shadow-2xl">
          <div className="border-r border-[#262e3c]/60 pr-3">
            <div className="flex items-center gap-1.5 text-xs text-[#8c97a7] mb-1">
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{currentLang === 'zh' ? '开放参访' : 'Opening Days'}</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#f0ede6]">
              {currentLang === 'zh' ? '周二至周六 09:00-16:00' : 'Tue - Sat 09:00-16:00'}
            </div>
            <div className="text-[11px] text-[#747e8d]">
              {currentLang === 'zh' ? '15:30 停止入内' : 'Last entry 15:30'}
            </div>
          </div>

          <div className="border-r border-[#262e3c]/60 pr-3 pl-2">
            <div className="flex items-center gap-1.5 text-xs text-[#8c97a7] mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{currentLang === 'zh' ? '参访门票' : 'Admission'}</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#d4af37]">
              {currentLang === 'zh' ? '免费参观 · 在线预约' : 'Free Entry with Pass'}
            </div>
            <div className="text-[11px] text-[#747e8d]">
              {currentLang === 'zh' ? '即时出码 / 现场核销' : 'Instant digital QR pass'}
            </div>
          </div>

          <div className="border-r border-[#262e3c]/60 pr-3 pl-2">
            <div className="flex items-center gap-1.5 text-xs text-[#8c97a7] mb-1">
              <Headphones className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{currentLang === 'zh' ? '语音与导览' : 'Audio Guide'}</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#f0ede6]">
              {currentLang === 'zh' ? '中英双语云导览' : 'Bilingual Digital Audio'}
            </div>
            <div className="text-[11px] text-[#747e8d]">
              {currentLang === 'zh' ? '手机直听 / 免租设备' : 'Stream on mobile device'}
            </div>
          </div>

          <div className="pl-2">
            <div className="flex items-center gap-1.5 text-xs text-[#8c97a7] mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{currentLang === 'zh' ? '地理交通' : 'Location'}</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#f0ede6]">
              {currentLang === 'zh' ? '徐家汇站3号口' : 'Xujiahui Stn. Exit 3'}
            </div>
            <div className="text-[11px] text-[#747e8d]">
              {currentLang === 'zh' ? '地铁1/9/11号线蒲西路' : 'Puxi Rd 158 / Lines 1,9,11'}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onExploreClick}
            className="text-[#838e9e] hover:text-[#d4af37] transition-colors flex flex-col items-center gap-1 animate-bounce"
            aria-label="Scroll to discover section"
          >
            <span className="text-[10px] uppercase tracking-widest font-cinzel">DISCOVER</span>
            <ChevronDown className="w-4 h-4 text-[#d4af37]" />
          </button>
        </div>
      </div>
    </section>
  );
};
