import React, { useState, useEffect } from 'react';
import { 
  TOUR_STATIONS, 
  HERO_IMAGE, 
  INTERIOR_IMAGE, 
  ALTAR_IMAGE, 
  ROSE_WINDOW_IMAGE,
  HERO_FALLBACK,
  INTERIOR_FALLBACK,
  ALTAR_FALLBACK,
  ROSE_WINDOW_FALLBACK
} from '../data/cathedralData';
import { Language, TourStation } from '../types';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Volume2, 
  VolumeX, 
  Info, 
  Compass, 
  Maximize,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { cathedralAudio } from '../utils/audioSynthesizer';

interface VirtualExperienceProps {
  currentLang: Language;
}

export const VirtualExperience: React.FC<VirtualExperienceProps> = ({ currentLang }) => {
  const [selectedStation, setSelectedStation] = useState<TourStation>(TOUR_STATIONS[0]);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeHotspot, setActiveHotspot] = useState<{ labelZh: string; labelEn: string; infoZh: string; infoEn: string } | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isPlayingNarration, setIsPlayingNarration] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState<number>(0);

  const viewpointImages: Record<string, string> = {
    facade: HERO_IMAGE,
    nave: INTERIOR_IMAGE,
    altar: ALTAR_IMAGE,
    rose_window: ROSE_WINDOW_IMAGE
  };

  const fallbackImages: Record<string, string> = {
    facade: HERO_FALLBACK,
    nave: INTERIOR_FALLBACK,
    altar: ALTAR_FALLBACK,
    rose_window: ROSE_WINDOW_FALLBACK
  };

  useEffect(() => {
    // Reset zoom and hotspot when station changes
    setZoomLevel(1);
    setActiveHotspot(null);
    setIsPlayingNarration(false);
    setAudioProgress(0);
  }, [selectedStation]);

  useEffect(() => {
    let interval: number;
    if (isPlayingNarration) {
      interval = window.setInterval(() => {
        setAudioProgress(prev => {
          if (prev >= 100) {
            setIsPlayingNarration(false);
            return 0;
          }
          return prev + 1.5;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlayingNarration]);

  const toggleOrgan = () => {
    cathedralAudio.togglePlay((playing) => {
      setIsPlayingAudio(playing);
    });
  };

  const handleZoom = (direction: 'in' | 'out' | 'reset') => {
    if (direction === 'in') setZoomLevel(prev => Math.min(prev + 0.25, 2.0));
    if (direction === 'out') setZoomLevel(prev => Math.max(prev - 0.25, 0.9));
    if (direction === 'reset') setZoomLevel(1);
  };

  return (
    <section id="virtual" className="py-24 bg-[#0a0c10] border-t border-[#1f242e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header modeled after St. Peter's Pétros ení / Digital Experience */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-cinzel mb-2 font-semibold">
            <span>PÉTROS ENÍ · DIGITAL CATHEDRAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f3ee] font-serif-sc mb-4">
            {currentLang === 'zh' ? '360° 沉浸式数字座堂漫游' : 'Immersive Digital Cathedral Tour'}
          </h2>
          <p className="text-sm sm:text-base text-[#9ea8b6] font-normal leading-relaxed">
            {currentLang === 'zh'
              ? '突破时空阻隔，指尖纵览徐家汇主教座堂核心视角。开启大管风琴伴奏与原声导览解说，探索高直拱券、圣像浮雕与百年彩玻的精妙构筑。'
              : 'Explore the architectural majesty of St. Ignatius Cathedral virtually. Interact with panoramic stations, discover hidden architectural details, and experience sacred pipe organ acoustics.'}
          </p>
        </div>

        {/* Station Navigation Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar">
          {TOUR_STATIONS.map((station, index) => {
            const isSelected = selectedStation.id === station.id;
            return (
              <button
                key={station.id}
                onClick={() => setSelectedStation(station)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs whitespace-nowrap transition-all border shrink-0 ${
                  isSelected
                    ? 'bg-[#d4af37] text-black font-semibold border-[#d4af37] shadow-lg'
                    : 'bg-[#141820] text-[#cbd5e1] border-[#262f3c] hover:border-[#414d61]'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  isSelected ? 'bg-black text-[#d4af37]' : 'bg-[#212733] text-[#8e99aa]'
                }`}>
                  {index + 1}
                </span>
                <span>{currentLang === 'zh' ? station.titleZh : station.titleEn}</span>
                <span className={`text-[10px] ml-1 px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-black/20 text-black' : 'bg-[#1b212b] text-[#717d8e]'
                }`}>
                  {station.duration}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Virtual Canvas Area */}
        <div className="relative bg-[#11141a] rounded-xl border border-[#262e3d] overflow-hidden shadow-2xl">
          {/* Main Panorama Viewport */}
          <div className="relative h-[440px] sm:h-[560px] w-full overflow-hidden flex items-center justify-center select-none bg-black">
            <div 
              className="w-full h-full relative transition-transform duration-300 ease-out"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={viewpointImages[selectedStation.viewpoint]}
                alt={selectedStation.titleZh}
                className="w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = fallbackImages[selectedStation.viewpoint] || HERO_FALLBACK;
                  if (target.src !== fallback) {
                    target.src = fallback;
                  }
                }}
              />

              {/* Hotspot Interactive Markers */}
              {selectedStation.hotspots.map((hotspot, idx) => (
                <div
                  key={idx}
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => setActiveHotspot(activeHotspot?.labelZh === hotspot.labelZh ? null : hotspot)}
                    className="relative group p-2 focus:outline-none"
                    aria-label={hotspot.labelZh}
                  >
                    {/* Pulsing ring */}
                    <span className="absolute inset-0 rounded-full bg-[#d4af37]/40 animate-ping" />
                    <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#d4af37] text-black shadow-lg border-2 border-white hover:scale-125 transition-transform">
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>

                    {/* Hotspot label tag */}
                    <span className="absolute left-1/2 -translate-x-1/2 top-9 whitespace-nowrap bg-black/85 backdrop-blur-md text-white border border-[#d4af37]/50 text-[11px] font-medium px-2.5 py-1 rounded shadow-xl pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
                      {currentLang === 'zh' ? hotspot.labelZh : hotspot.labelEn}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* Top Viewport Floating Bar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="pointer-events-auto bg-[#0d1015]/85 backdrop-blur-md border border-[#2b3341] px-3.5 py-1.5 rounded-lg text-xs text-[#e4e1db] flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="font-medium">
                  {currentLang === 'zh' ? selectedStation.titleZh : selectedStation.titleEn}
                </span>
                <span className="text-[#626e80]">|</span>
                <span className="text-[11px] text-[#8e9aaa]">
                  {currentLang === 'zh' ? '点击光点探秘细节' : 'Click pins to reveal details'}
                </span>
              </div>

              {/* Viewport Control Actions */}
              <div className="pointer-events-auto flex items-center gap-1.5 bg-[#0d1015]/85 backdrop-blur-md border border-[#2b3341] p-1 rounded-lg">
                <button
                  onClick={() => handleZoom('in')}
                  className="p-1.5 rounded hover:bg-[#202734] text-[#cfd7e4] hover:text-[#d4af37] transition-colors"
                  title="放大 / Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleZoom('out')}
                  className="p-1.5 rounded hover:bg-[#202734] text-[#cfd7e4] hover:text-[#d4af37] transition-colors"
                  title="缩小 / Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleZoom('reset')}
                  className="p-1.5 rounded hover:bg-[#202734] text-[#cfd7e4] hover:text-[#d4af37] transition-colors"
                  title="重置视角 / Reset"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <span className="w-px h-4 bg-[#2e3746]" />
                <button
                  onClick={toggleOrgan}
                  className={`p-1.5 rounded transition-colors ${
                    isPlayingAudio 
                      ? 'bg-[#d4af37] text-black' 
                      : 'hover:bg-[#202734] text-[#cfd7e4] hover:text-[#d4af37]'
                  }`}
                  title={isPlayingAudio ? '静音圣乐' : '管风琴原声'}
                >
                  {isPlayingAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Active Hotspot Popover Card */}
            {activeHotspot && (
              <div className="absolute bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-30 bg-[#12161d]/95 backdrop-blur-md border border-[#d4af37]/60 rounded-xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#d4af37]">
                    <Info className="w-4 h-4" />
                    <span>{currentLang === 'zh' ? activeHotspot.labelZh : activeHotspot.labelEn}</span>
                  </div>
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="text-[#8692a3] hover:text-white p-0.5 rounded"
                  >
                    ×
                  </button>
                </div>
                <p className="text-xs text-[#cfd7e4] leading-relaxed">
                  {currentLang === 'zh' ? activeHotspot.infoZh : activeHotspot.infoEn}
                </p>
              </div>
            )}
          </div>

          {/* Integrated Digital Audio Guide Controller Bar */}
          <div className="p-4 sm:p-5 bg-[#141820] border-t border-[#232a37] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button
                onClick={() => setIsPlayingNarration(!isPlayingNarration)}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b89542] hover:brightness-110 active:scale-95 text-black flex items-center justify-center shrink-0 shadow-lg transition-all"
              >
                {isPlayingNarration ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>

              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-white font-serif-sc">
                    {currentLang === 'zh' ? '官方语音讲解：' + selectedStation.titleZh : 'Audio Commentary: ' + selectedStation.titleEn}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-[#212835] text-[#d4af37] rounded">
                    {selectedStation.duration}
                  </span>
                </div>
                <p className="text-xs text-[#8c98a9] line-clamp-1">
                  {currentLang === 'zh' ? selectedStation.descriptionZh : selectedStation.descriptionEn}
                </p>
              </div>
            </div>

            {/* Audio Progress Bar & Organ Acoustic status */}
            <div className="w-full md:w-72 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11px] text-[#788596]">
                <span>{isPlayingNarration ? '正在播放讲解音轨...' : (currentLang === 'zh' ? '点击播放讲解' : 'Click to stream')}</span>
                <span>{Math.round(audioProgress)}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#202734] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#d4af37] transition-all duration-300"
                  style={{ width: `${audioProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
