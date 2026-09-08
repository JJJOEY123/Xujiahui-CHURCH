import React, { useState } from 'react';
import { 
  ARCHITECTURAL_HIGHLIGHTS,
  HERO_IMAGE,
  INTERIOR_IMAGE,
  ALTAR_IMAGE,
  ROSE_WINDOW_IMAGE,
  XU_GUANGQI_IMAGE,
  MADONNA_IMAGE,
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
  Ruler,
  Compass,
  Volume2,
  Layers,
  ChevronRight
} from 'lucide-react';

interface DiscoverSectionProps {
  currentLang: Language;
  onOpenStationAudio?: (stationId: string) => void;
}

export const DiscoverSection: React.FC<DiscoverSectionProps> = ({ 
  currentLang,
  onOpenStationAudio 
}) => {
  const [selectedHighlight, setSelectedHighlight] = useState<ArchitecturalHighlight | null>(null);
  const [overallViewMode, setOverallViewMode] = useState<'exterior' | 'interior'>('exterior');

  // Match items from dataset
  const spiresItem = ARCHITECTURAL_HIGHLIGHTS.find(item => item.id === 'twin-spires') || ARCHITECTURAL_HIGHLIGHTS[0];
  const naveItem = ARCHITECTURAL_HIGHLIGHTS.find(item => item.id === 'great-nave') || ARCHITECTURAL_HIGHLIGHTS[1];
  const altarItem = ARCHITECTURAL_HIGHLIGHTS.find(item => item.id === 'high-altar') || ARCHITECTURAL_HIGHLIGHTS[2];
  const roseWindowItem = ARCHITECTURAL_HIGHLIGHTS.find(item => item.id === 'rose-window') || ARCHITECTURAL_HIGHLIGHTS[3];
  const xuGuangqiItem = ARCHITECTURAL_HIGHLIGHTS.find(item => item.id === 'xu-guangqi-heritage') || ARCHITECTURAL_HIGHLIGHTS[4];
  const madonnaItem = ARCHITECTURAL_HIGHLIGHTS.find(item => item.id === 'cathedral-treasury') || ARCHITECTURAL_HIGHLIGHTS[5];

  const activeOverallItem = overallViewMode === 'exterior' ? spiresItem : naveItem;

  return (
    <section id="discover" className="relative bg-[#fcfbf9] text-[#1a1c22]">
      {/* Target element container for focus-mode CSS selector */}
      <div id="discover-main-container" className="w-full">
        {/* Vatican Official Style Top Bar */}
        <div className="bg-[#1c2027] text-[#c9b27b] border-b border-[#2d3442] px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between text-xs tracking-widest uppercase font-cinzel">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#c9b27b] animate-pulse" />
            <span className="font-semibold">
              {currentLang === 'zh' ? '座堂瑰宝与建筑巡礼' : 'Digital Architectural Exhibition'}
            </span>
            <span className="hidden sm:inline text-[#647185]">|</span>
            <span className="hidden sm:inline text-[#95a2b5] normal-case font-sans tracking-normal text-xs">
              {currentLang === 'zh' ? '致敬梵蒂冈圣伯多禄大殿官网典藏版式' : 'Curated in Vatican St. Peter’s Editorial Style'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#95a2b5] tracking-wider">
            <span className="hidden md:inline">A.D. 1910 · ZIKAWEI BASILICA</span>
            <span className="text-[#c9b27b] font-medium flex items-center gap-1">
              <span>{currentLang === 'zh' ? '全国重点文保单位' : 'National Heritage'}</span>
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. 页面一（大图 1）：左侧展示整体建筑，右侧留白文字展示 */}
        {/* ========================================================================= */}
        <div className="border-b border-[#e5e1d8] bg-white">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[620px] xl:min-h-[700px]">
            {/* Left: Overall Architecture Large Image with Subtle View Switcher */}
            <div className="relative group overflow-hidden bg-[#181d26] flex items-center justify-center min-h-[400px] lg:min-h-[620px]">
              <img
                src={overallViewMode === 'exterior' ? HERO_IMAGE : INTERIOR_IMAGE}
                alt={currentLang === 'zh' ? activeOverallItem.titleZh : activeOverallItem.titleEn}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
                referrerPolicy="no-referrer"
                onClick={() => setSelectedHighlight(activeOverallItem)}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('unsplash.com')) {
                    target.src = HERO_FALLBACK;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* View Mode Switcher (Exterior 57m Spires vs Interior 28m Nave) */}
              <div className="absolute top-5 left-5 z-10 flex items-center bg-black/70 backdrop-blur-md rounded-sm p-1 border border-white/20">
                <button
                  onClick={() => setOverallViewMode('exterior')}
                  className={`px-3 py-1.5 text-xs rounded-xs transition-all font-medium ${
                    overallViewMode === 'exterior'
                      ? 'bg-[#b39353] text-white shadow-sm'
                      : 'text-[#d0d7e2] hover:text-white'
                  }`}
                >
                  {currentLang === 'zh' ? '外观双塔立面' : 'Exterior Spires'}
                </button>
                <button
                  onClick={() => setOverallViewMode('interior')}
                  className={`px-3 py-1.5 text-xs rounded-xs transition-all font-medium ${
                    overallViewMode === 'interior'
                      ? 'bg-[#b39353] text-white shadow-sm'
                      : 'text-[#d0d7e2] hover:text-white'
                  }`}
                >
                  {currentLang === 'zh' ? '大堂尖券通廊' : 'Interior Nave'}
                </button>
              </div>

              {/* Image Quick Info Pill */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-xs pointer-events-none">
                <div className="bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/15">
                  <span className="text-[#c9b27b] font-cinzel mr-2">
                    {overallViewMode === 'exterior' ? '57M SPIRES' : '64 PILLARS'}
                  </span>
                  <span>{currentLang === 'zh' ? activeOverallItem.dimension : activeOverallItem.year}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedHighlight(activeOverallItem);
                  }}
                  className="pointer-events-auto bg-[#b39353] hover:bg-[#9f8143] text-white p-2 rounded-sm transition-colors shadow-lg"
                  aria-label="Expand image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Spacious Vatican-style Editorial White Space */}
            <div className="p-8 sm:p-14 lg:p-18 xl:p-24 flex flex-col justify-center bg-[#fcfbf9]">
              <div className="max-w-xl">
                <span className="inline-block text-xs font-cinzel uppercase tracking-[0.25em] text-[#8e723e] mb-3 font-semibold">
                  {currentLang === 'zh' ? 'ARCHITECTURAL MASTERPIECE · 建筑概览' : 'ARCHITECTURAL MASTERPIECE'}
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] font-serif-sc mb-4 tracking-tight leading-tight">
                  {currentLang === 'zh' ? '探索主教座堂建筑全貌' : 'Discover the Cathedral'}
                </h3>
                <p className="text-sm text-[#8c7444] font-cinzel tracking-wider mb-6">
                  {currentLang === 'zh' ? '陶特凡设计 · 远东第一大天主教堂' : 'Designed by William M. Dowdall · Circa 1910'}
                </p>
                <div className="space-y-4 text-[#4a5260] text-sm sm:text-base leading-relaxed mb-8">
                  <p>
                    {currentLang === 'zh'
                      ? '徐家汇圣依纳爵主教座堂始建于1906年，由英国著名建筑师陶特凡设计。全堂呈纯正法国高直哥特式形制，正立面耸立着两座对称的57米砖木结构尖顶钟楼，直插云霄。'
                      : 'Constructed between 1906 and 1910, designed by British architect William M. Dowdall. The basilica features authentic French High Gothic styling, anchored by dual 57-meter neo-Gothic bell towers piercing the Shanghai horizon.'}
                  </p>
                  <p className="text-xs sm:text-sm text-[#667085]">
                    {currentLang === 'zh'
                      ? '堂内长79米、脊高28米，由64根金山花岗石束柱擎起繁复交错的连环尖券肋拱顶，地表满铺红黄彩釉方砖，曾被誉为“远东第一大教堂”，可同时容纳3000信众。'
                      : 'The vast 79-meter nave with 28-meter ceiling vaults is supported by 64 clustered Jinshan granite columns, creating soaring acoustics and timeless architectural majesty.'}
                  </p>
                </div>

                {/* Specs highlights */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#e8e4db] text-xs text-[#525d6f] mb-8">
                  <div>
                    <span className="block text-[#8c7444] font-cinzel text-[11px] uppercase tracking-wider mb-0.5">
                      {currentLang === 'zh' ? '双塔高度' : 'Tower Height'}
                    </span>
                    <span className="font-semibold text-[#1a1a1a] text-sm">57.0 Meters (31m Spire)</span>
                  </div>
                  <div>
                    <span className="block text-[#8c7444] font-cinzel text-[11px] uppercase tracking-wider mb-0.5">
                      {currentLang === 'zh' ? '容纳规模' : 'Capacity'}
                    </span>
                    <span className="font-semibold text-[#1a1a1a] text-sm">{currentLang === 'zh' ? '3,000人礼仪大堂' : '3,000 Worshippers'}</span>
                  </div>
                </div>

                {/* Vatican-style ENTER Gold Button */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setSelectedHighlight(activeOverallItem)}
                    className="bg-[#b39353] hover:bg-[#9e8042] text-white tracking-[0.2em] uppercase text-xs font-semibold px-9 py-3.5 rounded-sm shadow-sm transition-all hover:shadow-md active:scale-95"
                  >
                    ENTER
                  </button>
                  {onOpenStationAudio && (
                    <button
                      onClick={() => onOpenStationAudio('station-facade')}
                      className="inline-flex items-center gap-2 text-xs font-medium text-[#7a6438] hover:text-[#1a1a1a] transition-colors py-2 px-3"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>{currentLang === 'zh' ? '聆听堂体建筑解说' : 'Audio Guide'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. 页面二（大图 2）：下滑到下个页面右侧展示主祭台，左侧为留白文字展示 */}
        {/* ========================================================================= */}
        <div className="border-b border-[#e5e1d8] bg-[#fbfaf7]">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[620px] xl:min-h-[700px]">
            {/* Left: Spacious Vatican-style Editorial White Space */}
            <div className="p-8 sm:p-14 lg:p-18 xl:p-24 flex flex-col justify-center order-2 lg:order-1 bg-[#fcfbf9]">
              <div className="max-w-xl lg:ml-auto">
                <span className="inline-block text-xs font-cinzel uppercase tracking-[0.25em] text-[#8e723e] mb-3 font-semibold">
                  {currentLang === 'zh' ? 'SANCTISSIMUM SACRAMENTUM · 至圣所' : 'SANCTISSIMUM SACRAMENTUM'}
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] font-serif-sc mb-4 tracking-tight leading-tight">
                  {currentLang === 'zh' ? '百年主祭台与崇高圣所' : 'The High Altar'}
                </h3>
                <p className="text-sm text-[#8c7444] font-cinzel tracking-wider mb-6">
                  {currentLang === 'zh' ? '1919年巴黎定制雕花汉白玉主祭台' : 'Parisian Sculpted White Marble · Consecrated 1919'}
                </p>
                <div className="space-y-4 text-[#4a5260] text-sm sm:text-base leading-relaxed mb-8">
                  <p>
                    {currentLang === 'zh'
                      ? '主教座堂主祭台于1919年复活节前夕自法国巴黎海运抵沪。整座祭台通体由法国雕塑名匠以纯白大理石精心琢造而成，中央端坐座堂主保圣人圣依纳爵·罗耀拉，两侧环立诸位圣师雕像。'
                      : 'Shipped from Paris before Easter in 1919, this monumental High Altar is sculpted from white Parisian marble and gilded bronze, enshrining Cathedral patron Saint Ignatius of Loyola alongside revered Doctors of the Church.'}
                  </p>
                  <p className="text-xs sm:text-sm text-[#667085]">
                    {currentLang === 'zh'
                      ? '祭台中央矗立哥特式微型尖拱圣体亭阁，基座浮雕生动再现“最后的晚餐”与受难救赎神圣场面；与土山湾孤儿工艺院木雕名师手制的圣衣柜相互衬托，构筑神圣庄严的礼仪核心。'
                      : 'The tabernacle is crowned with a gilded Gothic spire symbolizing the Divine Presence, complemented by hand-carved mahogany sacristy cabinetry crafted by historical Tushanwan masters.'}
                  </p>
                </div>

                {/* Specs highlights */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#e8e4db] text-xs text-[#525d6f] mb-8">
                  <div>
                    <span className="block text-[#8c7444] font-cinzel text-[11px] uppercase tracking-wider mb-0.5">
                      {currentLang === 'zh' ? '祭台规格' : 'Altar Dimensions'}
                    </span>
                    <span className="font-semibold text-[#1a1a1a] text-sm">4.8m Carved Marble</span>
                  </div>
                  <div>
                    <span className="block text-[#8c7444] font-cinzel text-[11px] uppercase tracking-wider mb-0.5">
                      {currentLang === 'zh' ? '定制年代' : 'Origin'}
                    </span>
                    <span className="font-semibold text-[#1a1a1a] text-sm">Paris, France (1919)</span>
                  </div>
                </div>

                {/* Vatican-style ENTER Gold Button */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setSelectedHighlight(altarItem)}
                    className="bg-[#b39353] hover:bg-[#9e8042] text-white tracking-[0.2em] uppercase text-xs font-semibold px-9 py-3.5 rounded-sm shadow-sm transition-all hover:shadow-md active:scale-95"
                  >
                    ENTER
                  </button>
                  {onOpenStationAudio && (
                    <button
                      onClick={() => onOpenStationAudio('station-altar')}
                      className="inline-flex items-center gap-2 text-xs font-medium text-[#7a6438] hover:text-[#1a1a1a] transition-colors py-2 px-3"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>{currentLang === 'zh' ? '聆听主祭台解说' : 'Audio Guide'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right: High Altar Large Majestic Image */}
            <div className="relative group overflow-hidden bg-[#181d26] flex items-center justify-center min-h-[400px] lg:min-h-[620px] order-1 lg:order-2">
              <img
                src={ALTAR_IMAGE}
                alt={currentLang === 'zh' ? altarItem.titleZh : altarItem.titleEn}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
                referrerPolicy="no-referrer"
                onClick={() => setSelectedHighlight(altarItem)}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('unsplash.com')) {
                    target.src = HERO_FALLBACK;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Image Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-xs pointer-events-none">
                <div className="bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/15">
                  <span className="text-[#c9b27b] font-cinzel mr-2">SANCTUARY</span>
                  <span>{currentLang === 'zh' ? '1919年巴黎汉白玉主祭台' : 'The High Altar'}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedHighlight(altarItem);
                  }}
                  className="pointer-events-auto bg-[#b39353] hover:bg-[#9f8143] text-white p-2 rounded-sm transition-colors shadow-lg"
                  aria-label="Expand altar image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. 页面三（特色展示）：圣像位于左1/3处长图完整展示，右2/3处展示哥特窗花和徐光启 */}
        {/* ========================================================================= */}
        <div className="py-20 lg:py-28 px-4 sm:px-8 max-w-[1600px] mx-auto bg-white">
          {/* Section Section Eyebrow & Title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-cinzel uppercase tracking-[0.25em] text-[#8e723e] font-semibold block mb-2">
              {currentLang === 'zh' ? 'SACRED ICONS & CULTURAL HERITAGE' : 'SACRED ICONS & CULTURAL HERITAGE'}
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] font-serif-sc mb-4 tracking-tight">
              {currentLang === 'zh' ? '典藏圣像与历史瑰宝' : 'Treasures & Sino-Western Dialogue'}
            </h3>
            <p className="text-sm text-[#647185] leading-relaxed">
              {currentLang === 'zh'
                ? '座堂珍藏的进教之佑圣母圣像、哥特式玫瑰彩绘花窗，与明末先贤徐光启开创的中西文化交融圣迹。'
                : 'Encounter the venerated statue of Our Lady Help of Christians, the celestial rose windows, and the immortal heritage of Grand Academician Paul Xu Guangqi.'}
            </p>
          </div>

          {/* 1/3 (Left: Full vertical Statue as background) vs 2/3 (Right: Rose Window & Xu Guangqi) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-stretch">
            {/* ------------------------------------------------------------- */}
            {/* 左 1/3：圣像图片作为整个div后方背景，去除enter按键，内容悬浮其上 */}
            {/* ------------------------------------------------------------- */}
            <div 
              className="lg:col-span-1 relative min-h-[560px] sm:min-h-[600px] rounded-sm overflow-hidden border border-[#e6e2d8] shadow-sm hover:shadow-lg transition-all duration-500 group cursor-pointer flex flex-col justify-between p-6 sm:p-8 bg-[#181c24]"
              onClick={() => setSelectedHighlight(madonnaItem)}
            >
              {/* 衬在后方的全幅圣像大图 */}
              <img
                src={MADONNA_IMAGE}
                alt={currentLang === 'zh' ? madonnaItem.titleZh : madonnaItem.titleEn}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('unsplash.com')) {
                    target.src = HERO_FALLBACK;
                  }
                }}
              />
              {/* 景深与暗角高质感遮罩，确保文字无论在任何光线和屏幕上均清晰可读 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 group-hover:from-black/90 transition-colors pointer-events-none" />

              {/* 顶部标签栏 */}
              <div className="relative z-10 flex items-center justify-between pointer-events-none">
                <span className="bg-black/75 backdrop-blur-md px-3 py-1 rounded-xs text-[11px] font-cinzel text-[#d4af37] border border-[#d4af37]/30 tracking-wider font-semibold">
                  {currentLang === 'zh' ? '座堂圣物 · 圣像典藏' : 'SACRED ICON · TREASURE'}
                </span>
                <span className="bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-xs text-[11px] text-white/90 border border-white/20">
                  {madonnaItem.year}
                </span>
              </div>

              {/* 底部浮层信息：标题、副标与解读（衬在图片前方，去掉了enter按钮） */}
              <div className="relative z-10 text-white space-y-3 pt-32 pointer-events-none">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-cinzel block mb-1 font-semibold">
                    {currentLang === 'zh' ? '十二星金冠 · 彩绘贴金圣像' : 'SACRED ICON · GILDED STATUE'}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold font-serif-sc text-white mb-2 leading-tight drop-shadow-md">
                    {currentLang === 'zh' ? '进教之佑圣母雕像' : 'Our Lady Help of Christians'}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-[#e2e8f0]/95 leading-relaxed drop-shadow">
                  {currentLang === 'zh'
                    ? '圣母身披蔚蓝斗篷与金丝彩绘长袍，头顶十二星荣光冠冕，右手执权杖，左怀抱双臂敞开降福人间的圣婴耶稣。整尊圣像高约2.2米，端立于圣所大理石壁龛中，神圣安详。'
                    : 'Adorned with an azure mantle and twelve radiant golden stars, the Blessed Virgin holds the Christ Child who extends divine peace and blessing to humanity.'}
                </p>

                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-[#d4af37]/90">
                  <span className="font-cinzel text-[11px] tracking-wider">CAT-TREASURY</span>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-white/90 group-hover:text-white transition-colors">
                    <span>{currentLang === 'zh' ? '点击查阅详细档案' : 'Click to view details'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* 右 2/3：并排展示哥特窗花和徐光启（两张图片依旧占据2/3位置） */}
            {/* ------------------------------------------------------------- */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
              {/* Card 1: 哥特窗花 (The Rose Window) */}
              <div className="flex flex-col bg-[#fbfaf8] border border-[#e6e2d8] rounded-sm overflow-hidden group shadow-sm hover:shadow-md transition-all">
                {/* Image Showcase */}
                <div 
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#161a22] cursor-pointer"
                  onClick={() => setSelectedHighlight(roseWindowItem)}
                >
                  <img
                    src={ROSE_WINDOW_IMAGE}
                    alt={currentLang === 'zh' ? roseWindowItem.titleZh : roseWindowItem.titleEn}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('unsplash.com')) {
                        target.src = HERO_FALLBACK;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-xs text-[10px] font-cinzel text-[#d4af37] border border-[#d4af37]/30 tracking-wider">
                    {currentLang === 'zh' ? '哥特窗花' : 'ROSE WINDOW'}
                  </div>

                  <div className="absolute top-3.5 right-3.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-xs text-[10px] text-white border border-white/20">
                    {roseWindowItem.year}
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white text-center">
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-cinzel block">
                      SACRED ILLUMINATION
                    </span>
                    <span className="text-xs text-[#e2e8f0] font-medium">{roseWindowItem.dimension}</span>
                  </div>
                </div>

                {/* Content: Compact, no blank wasted areas, centered tag block & text */}
                <div className="p-6 sm:p-7 flex flex-col items-center text-center">
                  <span className="text-[11px] font-cinzel tracking-widest text-[#8e723e] uppercase mb-1 font-semibold">
                    {currentLang === 'zh' ? '宗教艺术 · 彩绘玻璃' : 'SACRED ART · STAINED GLASS'}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-normal text-[#1a1a1a] font-serif-sc mb-2 leading-snug">
                    {currentLang === 'zh' ? roseWindowItem.titleZh : roseWindowItem.titleEn}
                  </h4>
                  <p className="text-xs text-[#8e723e] font-cinzel tracking-wider mb-3">
                    {currentLang === 'zh' ? roseWindowItem.subtitleZh : roseWindowItem.subtitleEn}
                  </p>
                  <p className="text-xs sm:text-sm text-[#545d6e] leading-relaxed mb-5 max-w-md">
                    {currentLang === 'zh'
                      ? '堂内西立面与南北耳堂嵌有巨幅圆形哥特玫瑰窗，300余扇尖拱大窗镶嵌铅条拼嵌彩绘玻璃。晴朗午后，天光在红黄方砖上投射出绚烂的光晕，宛若天国华章。'
                      : 'Iconic rose windows filter natural light through ruby, sapphire, and amber hand-blown glass, depicting sacred salvation history and casting celestial hues across the stone nave.'}
                  </p>

                  {/* 标签块居中 (Centered tag block) */}
                  <div className="mb-5 inline-flex items-center justify-center gap-2.5 px-3.5 py-1 bg-[#ede8dd] rounded-full text-xs text-[#525d6f]">
                    <span>{currentLang === 'zh' ? '直径6.2米手工彩玻' : '6.2m Circular Rose'}</span>
                    <span className="text-[#8e723e] font-bold">·</span>
                    <span className="text-[#8e723e] font-medium">{currentLang === 'zh' ? '光影叙事' : 'Stained Glass'}</span>
                  </div>

                  <button
                    onClick={() => setSelectedHighlight(roseWindowItem)}
                    className="w-full sm:w-auto px-8 bg-[#b39353] hover:bg-[#9e8042] text-white tracking-[0.2em] uppercase text-xs font-semibold py-3 rounded-sm shadow-sm transition-all text-center"
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </div>

              {/* Card 2: 徐光启与利玛窦 (Xu Guangqi & Matteo Ricci - 两名人物完整呈现) */}
              <div className="flex flex-col bg-[#fbfaf8] border border-[#e6e2d8] rounded-sm overflow-hidden group shadow-sm hover:shadow-md transition-all">
                {/* Image Showcase: 4:3 比例完整呈现徐光启与利玛窦两位先贤 */}
                <div 
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#161a22] cursor-pointer"
                  onClick={() => setSelectedHighlight(xuGuangqiItem)}
                >
                  <img
                    src={XU_GUANGQI_IMAGE}
                    alt={currentLang === 'zh' ? '徐光启与利玛窦文明对话' : 'Xu Guangqi & Matteo Ricci Dialogue'}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('unsplash.com')) {
                        target.src = HERO_FALLBACK;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-xs text-[10px] font-cinzel text-[#d4af37] border border-[#d4af37]/30 tracking-wider">
                    {currentLang === 'zh' ? '历史先贤 · 双圣对话' : 'HISTORIC HERITAGE'}
                  </div>

                  <div className="absolute top-3.5 right-3.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-xs text-[10px] text-white border border-white/20">
                    A.D. 1603
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white text-center">
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-cinzel block">
                      EAST-WEST EXCHANGE
                    </span>
                    <span className="text-xs text-[#e2e8f0] font-medium">利玛窦（左）与徐光启（右）文明对话</span>
                  </div>
                </div>

                {/* Content: Compact, no blank wasted areas, centered tag block & text */}
                <div className="p-6 sm:p-7 flex flex-col items-center text-center">
                  <span className="text-[11px] font-cinzel tracking-widest text-[#8e723e] uppercase mb-1 font-semibold">
                    {currentLang === 'zh' ? '中西交融 · 历史丰碑' : 'SINO-WESTERN DIALOGUE'}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-normal text-[#1a1a1a] font-serif-sc mb-2 leading-snug">
                    {currentLang === 'zh' ? xuGuangqiItem.titleZh : xuGuangqiItem.titleEn}
                  </h4>
                  <p className="text-xs text-[#8e723e] font-cinzel tracking-wider mb-3">
                    {currentLang === 'zh' ? '利玛窦与徐光启合译《几何原本》' : xuGuangqiItem.subtitleEn}
                  </p>
                  <p className="text-xs sm:text-sm text-[#545d6e] leading-relaxed mb-5 max-w-md">
                    {currentLang === 'zh'
                      ? '明代文渊阁大学士徐光启受洗于此，与利玛窦翻译《几何原本》，开启西学东渐大潮。徐家汇因而得名，成为近代中国科学启蒙与天主教文化传播的关键重镇。'
                      : 'Paul Xu Guangqi, the Grand Academician of the Ming Dynasty, collaborated with Jesuit scholar Matteo Ricci to translate Euclid’s Elements, sparking China’s modern scientific awakening.'}
                  </p>

                  {/* 标签块居中 (Centered tag block) */}
                  <div className="mb-5 inline-flex items-center justify-center gap-2.5 px-3.5 py-1 bg-[#ede8dd] rounded-full text-xs text-[#525d6f]">
                    <span>{currentLang === 'zh' ? '徐家汇源核心文物区' : 'Historic Origin'}</span>
                    <span className="text-[#b39353]">·</span>
                    <span className="text-[#8e723e] font-medium">{currentLang === 'zh' ? '中西交融' : 'Heritage'}</span>
                  </div>

                  <button
                    onClick={() => setSelectedHighlight(xuGuangqiItem)}
                    className="w-full sm:w-auto px-8 bg-[#b39353] hover:bg-[#9e8042] text-white tracking-[0.2em] uppercase text-xs font-semibold py-3 rounded-sm shadow-sm transition-all text-center"
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Detail Modal (Museum Editorial Light/Gold Standard) */}
      {/* ========================================================================= */}
      {selectedHighlight && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedHighlight(null)}
        >
          <div 
            className="relative bg-[#ffffff] border border-[#ded8cb] rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-[#1a1c22]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#181d26]">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
              
              <button
                onClick={() => setSelectedHighlight(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-[#b39353] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <div className="inline-block px-2.5 py-0.5 rounded-xs text-[10px] font-semibold bg-[#b39353] text-white uppercase tracking-wider mb-2 font-cinzel">
                  {currentLang === 'zh' ? selectedHighlight.categoryZh : selectedHighlight.categoryEn}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-sc drop-shadow-md">
                  {currentLang === 'zh' ? selectedHighlight.titleZh : selectedHighlight.titleEn}
                </h3>
                <p className="text-xs text-[#d9c496] font-cinzel tracking-wider mt-1">
                  {currentLang === 'zh' ? selectedHighlight.subtitleZh : selectedHighlight.subtitleEn}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Quick Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#f8f6f0] rounded-sm border border-[#e5dfd2] text-xs">
                <div>
                  <div className="flex items-center gap-1 text-[#7a6f5e] mb-0.5">
                    <Calendar className="w-3.5 h-3.5 text-[#b39353]" />
                    <span>{currentLang === 'zh' ? '落成/修缮年代' : 'Year'}</span>
                  </div>
                  <span className="font-semibold text-[#1a1a1a]">{selectedHighlight.year}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#7a6f5e] mb-0.5">
                    <Ruler className="w-3.5 h-3.5 text-[#b39353]" />
                    <span>{currentLang === 'zh' ? '建筑规制与尺寸' : 'Dimension'}</span>
                  </div>
                  <span className="font-semibold text-[#1a1a1a]">{selectedHighlight.dimension}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1 text-[#7a6f5e] mb-0.5">
                    <Info className="w-3.5 h-3.5 text-[#b39353]" />
                    <span>{currentLang === 'zh' ? '保护级别' : 'Heritage Status'}</span>
                  </div>
                  <span className="font-semibold text-[#b39353]">全国重点文物保护单位</span>
                </div>
              </div>

              {/* Main Detailed Description */}
              <div>
                <h4 className="text-xs font-cinzel uppercase tracking-widest text-[#8e723e] mb-2 font-semibold">
                  {currentLang === 'zh' ? '建筑历史与艺术解析' : 'Historical & Architectural Significance'}
                </h4>
                <p className="text-sm text-[#4a5260] leading-relaxed">
                  {currentLang === 'zh' ? selectedHighlight.descriptionZh : selectedHighlight.descriptionEn}
                </p>
              </div>

              {/* Bullet Details */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-cinzel uppercase tracking-widest text-[#8e723e] mb-1 font-semibold">
                  {currentLang === 'zh' ? '特色细节与工艺' : 'Key Features & Craftsmanship'}
                </h4>
                {(currentLang === 'zh' ? selectedHighlight.detailsZh : selectedHighlight.detailsEn).map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#525d6f] leading-normal">
                    <Sparkles className="w-3.5 h-3.5 text-[#b39353] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-[#eae5da] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[#8792a2]">
                  {currentLang === 'zh' ? '座堂导览铭牌编号：CAT-' + selectedHighlight.id : 'Signage Code: CAT-' + selectedHighlight.id}
                </span>
                <div className="flex items-center gap-2">
                  {onOpenStationAudio && (
                    <button
                      onClick={() => {
                        setSelectedHighlight(null);
                        onOpenStationAudio('station-facade');
                      }}
                      className="px-4 py-2 border border-[#b39353] text-[#8e723e] hover:bg-[#b39353] hover:text-white text-xs font-semibold rounded-sm transition-colors"
                    >
                      {currentLang === 'zh' ? '收听语音' : 'Listen Audio'}
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedHighlight(null)}
                    className="px-6 py-2 bg-[#b39353] hover:bg-[#9e8042] text-xs font-semibold text-white rounded-sm transition-colors shadow-sm"
                  >
                    {currentLang === 'zh' ? '关闭详情' : 'Close Details'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
