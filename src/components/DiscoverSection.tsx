import React, { useState } from 'react';
import { 
  ARCHITECTURAL_HIGHLIGHTS,
  HERO_FALLBACK 
} from '../data/cathedralData';
import { ArchitecturalHighlight, Language } from '../types';
import { 
  ArrowUpRight, 
  X, 
  Sparkles, 
  Maximize2, 
  Info,
  Calendar,
  Ruler
} from 'lucide-react';

interface DiscoverSectionProps {
  currentLang: Language;
  onOpenStationAudio?: (stationId: string) => void;
}

export const DiscoverSection: React.FC<DiscoverSectionProps> = ({ 
  currentLang 
}) => {
  const [selectedHighlight, setSelectedHighlight] = useState<ArchitecturalHighlight | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelZh: '全部焦点', labelEn: 'All Highlights' },
    { id: 'exterior', labelZh: '外立面与双塔', labelEn: 'Exterior & Spires' },
    { id: 'interior', labelZh: '大堂通廊与祭台', labelEn: 'Nave & Sanctuary' },
    { id: 'art', labelZh: '彩绘玻璃与艺术', labelEn: 'Stained Glass & Art' },
    { id: 'heritage', labelZh: '历史与典藏', labelEn: 'Heritage & Archives' },
  ];

  const filteredHighlights = ARCHITECTURAL_HIGHLIGHTS.filter(item => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'exterior') return item.id === 'twin-spires';
    if (activeCategory === 'interior') return item.id === 'great-nave' || item.id === 'high-altar';
    if (activeCategory === 'art') return item.id === 'rose-window';
    if (activeCategory === 'heritage') return item.id === 'xu-guangqi-heritage' || item.id === 'cathedral-treasury';
    return true;
  });

  return (
    <section id="discover" className="py-24 bg-[#0d0f13] border-t border-[#1d222b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading modeled after basilicasanpietro.va */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-cinzel mb-2 font-semibold">
            <span>DISCOVER THE BASILICA & CATHEDRAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f3ee] font-serif-sc mb-4">
            {currentLang === 'zh' ? '探索主教座堂建筑瑰宝' : 'Treasures of St. Ignatius Cathedral'}
          </h2>
          <p className="text-sm sm:text-base text-[#9ea8b6] font-normal leading-relaxed">
            {currentLang === 'zh' 
              ? '徐家汇圣依纳爵堂始建于1906年，由英国著名建筑师陶特凡设计。融合法国高直哥特式风格，红砖尖券、穹顶肋拱与玫瑰花窗交相辉映，是近代上海乃至远东的宗教建筑经典。'
              : 'Constructed from 1906 to 1910, designed by British architect William M. Dowdall. Discover the neo-Gothic geometry, Parisian marble altar, Jinshan granite colonnades, and jewel-like stained glass rose windows.'}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 text-xs rounded-full transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[#d4af37] text-black font-semibold border-[#d4af37] shadow-md'
                    : 'bg-[#141820] text-[#a0abbb] border-[#293240] hover:text-white hover:border-[#424e62]'
                }`}
              >
                {currentLang === 'zh' ? cat.labelZh : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHighlights.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setSelectedHighlight(item)}
                className="group relative bg-[#13171e] rounded-lg border border-[#232a35] hover:border-[#d4af37]/60 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-[#181d26]">
                  <img
                    src={item.image}
                    alt={currentLang === 'zh' ? item.titleZh : item.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('unsplash.com')) {
                        target.src = HERO_FALLBACK;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13171e] via-transparent to-black/30" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#0d1015]/85 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-medium uppercase tracking-wider text-[#d4af37] border border-[#d4af37]/30">
                    {currentLang === 'zh' ? item.categoryZh : item.categoryEn}
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3 bg-[#0d1015]/85 backdrop-blur-md px-2 py-1 rounded text-[10px] text-[#cbd5e1] border border-[#2b3340]">
                    {item.year}
                  </div>

                  {/* Quick Expand Icon */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#d4af37] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-cinzel tracking-wider text-[#a3977c] block mb-1">
                      {currentLang === 'zh' ? item.subtitleZh : item.subtitleEn}
                    </span>
                    <h3 className="text-lg font-bold text-[#f7f5f0] group-hover:text-[#d4af37] transition-colors font-serif-sc mb-2">
                      {currentLang === 'zh' ? item.titleZh : item.titleEn}
                    </h3>
                    <p className="text-xs text-[#9aa3b2] line-clamp-3 leading-relaxed mb-4">
                      {currentLang === 'zh' ? item.descriptionZh : item.descriptionEn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1e2430] flex items-center justify-between text-xs text-[#808b9c]">
                    <span className="truncate max-w-[190px]">{item.dimension}</span>
                    <span className="flex items-center gap-1 text-[#d4af37] font-medium group-hover:underline">
                      {currentLang === 'zh' ? '详解' : 'Details'}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Architectural Detail Modal */}
      {selectedHighlight && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative bg-[#12161d] border border-[#303847] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <img
                src={selectedHighlight.image}
                alt={selectedHighlight.titleZh}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('unsplash.com')) {
                    target.src = HERO_FALLBACK;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12161d] via-[#12161d]/40 to-black/50" />
              
              <button
                onClick={() => setSelectedHighlight(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-[#d4af37] hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#d4af37] text-black uppercase tracking-wider mb-2">
                  {currentLang === 'zh' ? selectedHighlight.categoryZh : selectedHighlight.categoryEn}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif-sc">
                  {currentLang === 'zh' ? selectedHighlight.titleZh : selectedHighlight.titleEn}
                </h2>
                <p className="text-xs text-[#d4af37] font-cinzel">
                  {currentLang === 'zh' ? selectedHighlight.subtitleZh : selectedHighlight.subtitleEn}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Quick Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-[#171c24] rounded-lg border border-[#262f3d] text-xs">
                <div>
                  <div className="flex items-center gap-1 text-[#7e8a9c] mb-0.5">
                    <Calendar className="w-3 h-3 text-[#d4af37]" />
                    <span>{currentLang === 'zh' ? '落成/修缮年代' : 'Year'}</span>
                  </div>
                  <span className="font-semibold text-white">{selectedHighlight.year}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#7e8a9c] mb-0.5">
                    <Ruler className="w-3 h-3 text-[#d4af37]" />
                    <span>{currentLang === 'zh' ? '建筑规制与尺寸' : 'Dimension'}</span>
                  </div>
                  <span className="font-semibold text-white">{selectedHighlight.dimension}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1 text-[#7e8a9c] mb-0.5">
                    <Info className="w-3 h-3 text-[#d4af37]" />
                    <span>{currentLang === 'zh' ? '保护级别' : 'Heritage Status'}</span>
                  </div>
                  <span className="font-semibold text-[#d4af37]">全国重点文物保护单位</span>
                </div>
              </div>

              {/* Main Detailed Description */}
              <div>
                <h4 className="text-xs font-cinzel uppercase tracking-widest text-[#d4af37] mb-2">
                  {currentLang === 'zh' ? '建筑历史与艺术解析' : 'Historical & Architectural Significance'}
                </h4>
                <p className="text-sm text-[#ccd3df] leading-relaxed">
                  {currentLang === 'zh' ? selectedHighlight.descriptionZh : selectedHighlight.descriptionEn}
                </p>
              </div>

              {/* Bullet Details */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-cinzel uppercase tracking-widest text-[#d4af37] mb-1">
                  {currentLang === 'zh' ? '特色细节与工艺' : 'Key Features & Craftsmanship'}
                </h4>
                {(currentLang === 'zh' ? selectedHighlight.detailsZh : selectedHighlight.detailsEn).map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#9da8ba] leading-normal">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-[#232a37] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[#717c8d]">
                  {currentLang === 'zh' ? '堂内常设导览铭牌编号：CAT-' + selectedHighlight.id : 'Cathedral Signage Code: CAT-' + selectedHighlight.id}
                </span>
                <button
                  onClick={() => setSelectedHighlight(null)}
                  className="px-6 py-2 bg-[#212733] hover:bg-[#d4af37] hover:text-black text-xs font-semibold text-white rounded transition-colors"
                >
                  {currentLang === 'zh' ? '关闭详情' : 'Close Details'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
