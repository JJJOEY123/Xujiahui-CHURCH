import React, { useState, useEffect } from 'react';
import { 
  Church, 
  Clock, 
  Globe, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Compass, 
  BookOpen, 
  CalendarDays,
  ShieldCheck
} from 'lucide-react';
import { Language } from '../types';
import { cathedralAudio } from '../utils/audioSynthesizer';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentLang, 
  onLanguageChange
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(cathedralAudio.getPlaying());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = cathedralAudio.subscribe((playing) => {
      setIsAudioPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const toggleOrganMusic = () => {
    cathedralAudio.togglePlay();
  };

  const navLinks = [
    {
      id: 'discover',
      labelZh: '探索大堂',
      labelEn: 'Discover',
      icon: Compass
    },
    {
      id: 'virtual',
      labelZh: '数字全景',
      labelEn: 'Virtual Tour',
      icon: Church
    },
    {
      id: 'liturgy',
      labelZh: '弥撒礼仪',
      labelEn: 'Mass & Liturgy',
      icon: CalendarDays
    },
    {
      id: 'guidelines',
      labelZh: '参访须知',
      labelEn: 'Visitor Info',
      icon: BookOpen
    },
    {
      id: 'news',
      labelZh: '动态要闻',
      labelEn: 'News',
      icon: ShieldCheck
    }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Topmost Vatican-style Dignified Ribbon */}
      <div className="bg-[#0a0c0e] border-b border-[#23272e] text-[#a6adb8] text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-[#d4af37]">
              <Church className="w-3.5 h-3.5 text-[#d4af37]" />
              {currentLang === 'zh' ? '天主教上海教区主教座堂' : 'Cathedral of the Catholic Diocese of Shanghai'}
            </span>
            <span className="hidden md:inline text-[#4a5260]">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#8e97a4]">
              <Clock className="w-3 h-3 text-[#d4af37]" />
              {currentLang === 'zh' 
                ? '弥撒：平日 07:00, 19:00 | 主日 07:30, 10:00, 12:00(英), 18:00 · 参访：09:00 - 16:00' 
                : 'Masses: Mon-Fri 07:00, 19:00 | Sun 07:30, 10:00, 12:00(En), 18:00 · Visit: 09:00 - 16:00'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Ambient Pipe Organ Toggle Button */}
            <button
              onClick={toggleOrganMusic}
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] transition-all border ${
                isAudioPlaying 
                  ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#d4af37] animate-pulse' 
                  : 'bg-[#181c22] border-[#2e3540] text-[#a0aab8] hover:text-[#d4af37]'
              }`}
              title={isAudioPlaying ? '静音圣乐 / Mute Organ' : '播放大管风琴圣乐 / Play Pipe Organ'}
            >
              {isAudioPlaying ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
              <span>{isAudioPlaying ? (currentLang === 'zh' ? '管风琴圣乐中' : 'Organ Playing') : (currentLang === 'zh' ? '管风琴音韵' : 'Ambient Organ')}</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-[#161a20] rounded px-1.5 py-0.5 border border-[#2b323c]">
              <Globe className="w-3 h-3 text-[#8b95a5]" />
              <button
                onClick={() => onLanguageChange('zh')}
                className={`px-1.5 py-0.5 text-[11px] font-medium rounded transition-colors ${
                  currentLang === 'zh' ? 'text-[#d4af37] font-bold' : 'text-[#8b95a5] hover:text-white'
                }`}
              >
                中文
              </button>
              <span className="text-[#3b4350]">/</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-1.5 py-0.5 text-[11px] font-medium rounded transition-colors ${
                  currentLang === 'en' ? 'text-[#d4af37] font-bold' : 'text-[#8b95a5] hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`px-4 sm:px-8 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0f1217]/95 backdrop-blur-md border-b border-[#252b35] py-3 shadow-2xl' 
            : 'bg-gradient-to-b from-[#0a0c0f]/90 via-[#0a0c0f]/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Coat of Arms Header */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded border border-[#d4af37]/60 bg-gradient-to-br from-[#1c1a14] to-[#0f1115] flex items-center justify-center p-1.5 shadow-md group-hover:border-[#d4af37] transition-all">
              {/* Episcopal Seal Cross Motif */}
              <div className="relative flex items-center justify-center text-[#d4af37]">
                <span className="text-xl font-cinzel font-bold tracking-tighter">☧</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-cinzel font-bold tracking-wider text-[#ede7dc] group-hover:text-[#d4af37] transition-colors leading-tight">
                {currentLang === 'zh' ? '徐家汇圣依纳爵主教座堂' : 'St. Ignatius Cathedral'}
              </span>
              <span className="text-[10px] tracking-widest text-[#a89d87] uppercase font-cinzel">
                {currentLang === 'zh' ? '上海 · 远东第一大教堂 1910' : 'Shanghai · Diocese of Shanghai'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium tracking-wide text-[#d2cfc7] hover:text-[#d4af37] transition-colors relative py-1 group flex items-center gap-1.5"
                >
                  <span>{currentLang === 'zh' ? link.labelZh : link.labelEn}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-[#e0ded8] hover:text-[#d4af37] hover:bg-[#1a1e26] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1015] border-b border-[#252c38] px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            <div className="pb-3 mb-2 border-b border-[#202734] flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#98a3b3]">
                {currentLang === 'zh' ? '座堂导览目录' : 'Cathedral Directory'}
              </span>
              <span className="text-xs text-[#d4af37]">09:00 - 16:00</span>
            </div>

            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center gap-3 py-2.5 text-left text-sm text-[#e0ddd5] hover:text-[#d4af37] border-b border-[#181e28] transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#d4af37]" />
                  <span className="font-medium">
                    {currentLang === 'zh' ? link.labelZh : link.labelEn}
                  </span>
                </button>
              );
            })}

            <div className="pt-3 mt-1 flex flex-col gap-3">
              <button
                onClick={toggleOrganMusic}
                className="w-full flex items-center justify-center gap-2 py-2.5 border border-[#303947] text-xs text-[#b0bac7] rounded"
              >
                {isAudioPlaying ? <Volume2 className="w-4 h-4 text-[#d4af37]" /> : <VolumeX className="w-4 h-4" />}
                <span>{isAudioPlaying ? (currentLang === 'zh' ? '关闭管风琴伴奏' : 'Stop Organ Music') : (currentLang === 'zh' ? '开启管风琴伴奏' : 'Play Ambient Organ')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
