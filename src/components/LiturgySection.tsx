import React, { useState } from 'react';
import { MASS_SCHEDULE } from '../data/cathedralData';
import { Language, MassScheduleItem } from '../types';
import { 
  CalendarDays, 
  Clock, 
  Flame, 
  Heart, 
  Sparkles, 
  BookOpen, 
  Check, 
  Send
} from 'lucide-react';

interface LiturgySectionProps {
  currentLang: Language;
}

export const LiturgySection: React.FC<LiturgySectionProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'sunday' | 'saturday' | 'weekday' | 'confession'>('summary');
  const [prayerName, setPrayerName] = useState('');
  const [prayerIntention, setPrayerIntention] = useState('平安健康 / Peace & Health');
  const [prayerText, setPrayerText] = useState('');
  const [candles, setCandles] = useState<{ id: string; name: string; intention: string; message: string; date: string }[]>([
    { id: '1', name: '若瑟·陈', intention: '家庭和睦与平安', message: '祈求天主降福家中长辈康泰，子孙修德。', date: '今日 08:30' },
    { id: '2', name: 'Maria L.', intention: 'Peace & Healing', message: 'Praying for grace, courage and recovery for all in sickness.', date: 'Today 10:15' },
    { id: '3', name: '方济各', intention: '信德坚固与学业', message: '愿圣依纳爵主保转祷，求赐聪敏明达。', date: '今日 12:45' }
  ]);
  const [candleLitSuccess, setCandleLitSuccess] = useState(false);

  const handleLightCandle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prayerName.trim()) return;

    const newCandle = {
      id: Date.now().toString(),
      name: prayerName,
      intention: prayerIntention,
      message: prayerText || (currentLang === 'zh' ? '默祷祈愿，蒙主垂顾。' : 'Silent prayer in God’s grace.'),
      date: currentLang === 'zh' ? '刚刚' : 'Just now'
    };

    setCandles([newCandle, ...candles]);
    setPrayerName('');
    setPrayerText('');
    setCandleLitSuccess(true);
    setTimeout(() => setCandleLitSuccess(false), 4000);
  };

  const scheduleList: MassScheduleItem[] = 
    activeTab === 'sunday' ? MASS_SCHEDULE.sunday :
    activeTab === 'saturday' ? MASS_SCHEDULE.saturday :
    activeTab === 'weekday' ? MASS_SCHEDULE.weekday :
    [];

  return (
    <section id="liturgy" className="py-24 bg-[#0c0e12] border-t border-[#1d222b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-cinzel mb-2 font-semibold">
            <span>SACRED LITURGIES & MASS SCHEDULE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f3ee] font-serif-sc mb-4">
            {currentLang === 'zh' ? '弥撒圣祭与礼仪时刻' : 'Mass Times & Sacraments'}
          </h2>
          <p className="text-sm sm:text-base text-[#9ea8b6] font-normal leading-relaxed">
            {currentLang === 'zh'
              ? '徐家汇圣依纳爵主教座堂为天主教上海教区首要礼仪圣所。每日奉献圣祭，主日特设隆重唱经弥撒及英文弥撒，欢迎海内外教友与渴望聆听福音之友人共襄盛典。'
              : 'As the cathedral church of Shanghai Diocese, St. Ignatius celebrates daily Eucharist and solemn Sunday High Masses in Chinese and English.'}
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('summary')}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all border ${
                activeTab === 'summary'
                  ? 'bg-[#d4af37] text-black border-[#d4af37] font-semibold shadow-md'
                  : 'bg-[#151922] text-[#9faab9] border-[#293240] hover:text-white'
              }`}
            >
              {currentLang === 'zh' ? '弥撒时刻表 (官方总览)' : 'Official Timetable'}
            </button>
            <button
              onClick={() => setActiveTab('sunday')}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all border ${
                activeTab === 'sunday'
                  ? 'bg-[#d4af37] text-black border-[#d4af37] font-semibold shadow-md'
                  : 'bg-[#151922] text-[#9faab9] border-[#293240] hover:text-white'
              }`}
            >
              {currentLang === 'zh' ? '主日弥撒 (周日)' : 'Sunday Masses'}
            </button>
            <button
              onClick={() => setActiveTab('saturday')}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all border ${
                activeTab === 'saturday'
                  ? 'bg-[#d4af37] text-black border-[#d4af37] font-semibold shadow-md'
                  : 'bg-[#151922] text-[#9faab9] border-[#293240] hover:text-white'
              }`}
            >
              {currentLang === 'zh' ? '提前主日 (周六)' : 'Saturday Vigil Masses'}
            </button>
            <button
              onClick={() => setActiveTab('weekday')}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all border ${
                activeTab === 'weekday'
                  ? 'bg-[#d4af37] text-black border-[#d4af37] font-semibold shadow-md'
                  : 'bg-[#151922] text-[#9faab9] border-[#293240] hover:text-white'
              }`}
            >
              {currentLang === 'zh' ? '平日弥撒 (周一至六)' : 'Weekday Masses'}
            </button>
            <button
              onClick={() => setActiveTab('confession')}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all border ${
                activeTab === 'confession'
                  ? 'bg-[#d4af37] text-black border-[#d4af37] font-semibold shadow-md'
                  : 'bg-[#151922] text-[#9faab9] border-[#293240] hover:text-white'
              }`}
            >
              {currentLang === 'zh' ? '忏悔圣事 (告解)' : 'Reconciliation'}
            </button>
          </div>
        </div>

        {/* Schedule View Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Liturgical Calendar */}
          <div className="lg:col-span-7 space-y-4">
            {activeTab === 'summary' ? (
              /* Official Cathedral Schedule Notice Board Card (Matching Uploaded Notice) */
              <div className="bg-[#12161f] border-2 border-[#d4af37]/40 hover:border-[#d4af37]/70 transition-colors rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />
                
                {/* Notice Header */}
                <div className="text-center pb-6 border-b border-[#232c3a]">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f3ee] font-serif-sc tracking-wide">
                    {currentLang === 'zh' ? '徐家汇天主堂' : 'St. Ignatius Cathedral'}
                  </h3>
                  <div className="text-xl sm:text-2xl font-bold text-[#d4af37] font-serif-sc mt-1 tracking-widest">
                    {currentLang === 'zh' ? '弥撒时间表' : 'Mass Schedule'}
                  </div>
                </div>

                {/* Notice Body */}
                <div className="py-6 space-y-6 text-sm">
                  {/* Block 1: 主日弥撒 */}
                  <div className="space-y-3">
                    <div className="text-center font-bold text-base sm:text-lg text-white font-serif-sc tracking-wide">
                      {currentLang === 'zh' ? '主日弥撒' : 'Sunday Masses'}
                    </div>
                    
                    <div className="space-y-2.5 max-w-md mx-auto">
                      <div className="flex items-start justify-between sm:justify-start gap-4 sm:gap-10 py-1.5 border-b border-[#1b222d]">
                        <span className="font-bold text-[#d4af37] shrink-0 text-sm sm:text-base">
                          {currentLang === 'zh' ? '周六：' : 'Saturday:'}
                        </span>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-sm sm:text-base text-white">
                          <span>16:30 <span className="font-sans text-xs text-[#9aa7b9]">(中文)</span></span>
                          <span>18:00 <span className="font-sans text-xs text-[#9aa7b9]">(中文)</span></span>
                        </div>
                      </div>

                      <div className="flex items-start justify-between sm:justify-start gap-4 sm:gap-10 py-1.5 border-b border-[#1b222d]">
                        <span className="font-bold text-[#d4af37] shrink-0 text-sm sm:text-base">
                          {currentLang === 'zh' ? '周日：' : 'Sunday:'}
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-1.5 font-mono text-sm sm:text-base text-white">
                          <span>07:30 <span className="font-sans text-xs text-[#9aa7b9]">(中文)</span></span>
                          <span>10:00 <span className="font-sans text-xs text-[#9aa7b9]">(中文)</span></span>
                          <span>12:00 <span className="font-sans text-xs text-[#d4af37] font-semibold">(英文)</span></span>
                          <span>18:00 <span className="font-sans text-xs text-[#9aa7b9]">(中文)</span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Block 2: 平日弥撒 */}
                  <div className="space-y-3 pt-3">
                    <div className="text-center font-bold text-base sm:text-lg text-white font-serif-sc tracking-wide">
                      {currentLang === 'zh' ? '平日弥撒' : 'Weekday Masses'}
                    </div>

                    <div className="space-y-2.5 max-w-md mx-auto">
                      <div className="flex items-start justify-between sm:justify-start gap-4 sm:gap-10 py-1.5 border-b border-[#1b222d]">
                        <span className="font-bold text-[#d4af37] shrink-0 text-sm sm:text-base">
                          {currentLang === 'zh' ? '周一至周五：' : 'Mon - Fri:'}
                        </span>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-sm sm:text-base text-white">
                          <span>07:00 <span className="font-sans text-xs text-[#9aa7b9]">(中文)</span></span>
                          <span>19:00 <span className="font-sans text-xs text-[#9aa7b9]">(中文)</span></span>
                        </div>
                      </div>

                      <div className="flex items-start justify-between sm:justify-start gap-4 sm:gap-10 py-1.5 border-b border-[#1b222d]">
                        <span className="font-bold text-[#d4af37] shrink-0 text-sm sm:text-base">
                          {currentLang === 'zh' ? '周六：' : 'Saturday:'}
                        </span>
                        <div className="font-mono text-sm sm:text-base text-white">
                          <span>07:00 <span className="font-sans text-xs text-[#9aa7b9]">(中文)</span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Block 3: 忏悔圣事 */}
                  <div className="pt-3 max-w-md mx-auto">
                    <div className="flex items-start justify-between sm:justify-start gap-4 sm:gap-10 py-2">
                      <span className="font-bold text-[#d4af37] shrink-0 text-sm sm:text-base">
                        {currentLang === 'zh' ? '忏悔圣事：' : 'Confession:'}
                      </span>
                      <div className="space-y-1 text-sm text-[#e2e8f0]">
                        <div className="font-medium text-white">
                          {currentLang === 'zh' ? '平日弥撒前 15 分钟' : '15 mins before Weekday Masses'}
                        </div>
                        <div className="font-medium text-white">
                          {currentLang === 'zh' ? '主日弥撒前 30 分钟' : '30 mins before Sunday Masses'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="pt-4 border-t border-[#232c3a] flex flex-wrap items-center justify-between gap-2 text-xs text-[#8c98a9]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    {currentLang === 'zh' ? '弥撒自由进堂，请提前10分钟有序入座默祷' : 'Walk-in welcome, please arrive 10 mins early'}
                  </span>
                  <button
                    onClick={() => setActiveTab('sunday')}
                    className="text-[#d4af37] hover:underline flex items-center gap-1 text-xs font-medium"
                  >
                    {currentLang === 'zh' ? '查看分场详细介绍 →' : 'View Detailed Masses →'}
                  </button>
                </div>
              </div>
            ) : activeTab === 'confession' ? (
              /* Confession Info Card */
              <div className="bg-[#12161f] border border-[#262e3d] rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#202734]">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif-sc">
                      {currentLang === 'zh' ? '忏悔圣事 (告解与和好安排)' : 'Sacrament of Reconciliation & Confession'}
                    </h3>
                    <span className="text-xs text-[#d4af37] font-cinzel">SANCTISSIMUM POENITENTIAE</span>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 bg-[#171c26] rounded-lg border border-[#252f3f] flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-white mb-1">
                        {currentLang === 'zh' ? '主日弥撒前 30 分钟' : '30 minutes before Sunday Masses'}
                      </div>
                      <p className="text-xs text-[#8e9aaa]">
                        {currentLang === 'zh' 
                          ? '包含周六提前主日弥撒（16:00起、17:30起）及周日各场主日弥撒（07:00起、09:30起、11:30起、17:30起），座堂大堂告解亭司铎常驻举行告解圣事。' 
                          : 'Available 30 mins before all Sunday Masses and Saturday vigil Masses in the cathedral confessional booths.'}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 bg-[#232b38] text-[#d4af37] text-xs font-mono rounded shrink-0">
                      弥撒前 30m
                    </span>
                  </div>

                  <div className="p-4 bg-[#171c26] rounded-lg border border-[#252f3f] flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-white mb-1">
                        {currentLang === 'zh' ? '平日弥撒前 15 分钟' : '15 minutes before Weekday Masses'}
                      </div>
                      <p className="text-xs text-[#8e9aaa]">
                        {currentLang === 'zh' 
                          ? '周一至周五晨间弥撒（06:45起）与晚间弥撒（18:45起）；周六晨间弥撒（06:45起），司铎于祭台侧或告解亭听告解。' 
                          : 'Available 15 mins before daily morning & evening Masses (Mon-Fri 06:45, 18:45; Sat 06:45).'}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 bg-[#232b38] text-[#d4af37] text-xs font-mono rounded shrink-0">
                      弥撒前 15m
                    </span>
                  </div>

                  <div className="p-4 bg-[#171c26] rounded-lg border border-[#252f3f]">
                    <div className="font-semibold text-white mb-1">
                      {currentLang === 'zh' ? '个别神修面谈与重病傅油' : 'Individual Pastoral Care & Anointing'}
                    </div>
                    <p className="text-xs text-[#8e9aaa]">
                      {currentLang === 'zh' 
                        ? '如有临终傅油、病人送圣体或个别灵修辅导需求，请至座堂堂务处或致电本堂值班司铎专线。' 
                        : 'For pastoral emergencies, hospital visitations or private counseling, contact the Cathedral Parish Office.'}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Mass Items List */
              scheduleList.map((item, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    item.highlight
                      ? 'bg-[#181e28] border-[#d4af37] shadow-lg ring-1 ring-[#d4af37]/30'
                      : 'bg-[#12161f] border-[#222936] hover:border-[#354052]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`px-3 py-2 rounded-lg font-mono font-bold text-sm sm:text-base shrink-0 ${
                      item.highlight ? 'bg-[#d4af37] text-black' : 'bg-[#1e2533] text-[#d4af37]'
                    }`}>
                      {item.time}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm sm:text-base font-bold text-white font-serif-sc">
                          {currentLang === 'zh' ? item.nameZh : item.nameEn}
                        </h4>
                        {item.highlight && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 uppercase tracking-wider">
                            {currentLang === 'zh' ? '大礼隆重' : 'Solemn'}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#8c97a7]">
                        <span>{currentLang === 'zh' ? '语言：' + item.languageZh : 'Language: ' + item.languageEn}</span>
                        <span>•</span>
                        <span>{currentLang === 'zh' ? '祭坛：' + item.locationZh : 'Location: ' + item.locationEn}</span>
                      </div>

                      {item.noteZh && (
                        <p className="text-xs text-[#6e7b8c] mt-1.5 italic">
                          {currentLang === 'zh' ? item.noteZh : item.noteEn}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="self-end sm:self-center shrink-0">
                    <span className="inline-flex items-center gap-1 text-xs text-[#a0abb9] bg-[#1a212c] px-3 py-1.5 rounded-full border border-[#2a3444]">
                      <Clock className="w-3 h-3 text-[#d4af37]" />
                      <span>{currentLang === 'zh' ? '自由进堂·准时起课' : 'Walk-in Welcome'}</span>
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right: Interactive Candle Lighting & Prayer Wall */}
          <div className="lg:col-span-5 bg-[#12161f] border border-[#262e3d] rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#202734] mb-5">
                <Flame className="w-5 h-5 text-[#d4af37] animate-pulse" />
                <div>
                  <h3 className="text-base font-bold text-white font-serif-sc">
                    {currentLang === 'zh' ? '线上点燃心烛 · 奉献祈祷' : 'Light a Candle & Offer a Prayer'}
                  </h3>
                  <span className="text-[10px] text-[#8e9aaa] font-cinzel">OFFERING OF SACRED INTENTION</span>
                </div>
              </div>

              {/* Community Lit Candles */}
              <div className="space-y-3 mb-6 max-h-56 overflow-y-auto pr-1">
                {candles.map((c) => (
                  <div key={c.id} className="p-3 bg-[#171c26] rounded-lg border border-[#252f3f] text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
                        <span className="font-semibold text-[#f0eee8]">{c.name}</span>
                        <span className="text-[10px] text-[#d4af37] bg-[#d4af37]/10 px-1.5 py-0.2 rounded border border-[#d4af37]/20">
                          {c.intention}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#637082]">{c.date}</span>
                    </div>
                    <p className="text-[#a0abbb] text-[11px] leading-relaxed pl-4">
                      {c.message}
                    </p>
                  </div>
                ))}
              </div>

              {/* Candle Form */}
              <form onSubmit={handleLightCandle} className="space-y-3 pt-3 border-t border-[#1f2634]">
                <div>
                  <label className="block text-[11px] text-[#8b97a8] mb-1">
                    {currentLang === 'zh' ? '奉献祈祷人署名' : 'Your Name / Family Name'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={currentLang === 'zh' ? '例如：保禄 / 张姐妹' : 'e.g. Paul / Sister Teresa'}
                    value={prayerName}
                    onChange={(e) => setPrayerName(e.target.value)}
                    className="w-full bg-[#171c26] border border-[#2a3344] focus:border-[#d4af37] rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[#8b97a8] mb-1">
                    {currentLang === 'zh' ? '祈求意向' : 'Intention Category'}
                  </label>
                  <select
                    value={prayerIntention}
                    onChange={(e) => setPrayerIntention(e.target.value)}
                    className="w-full bg-[#171c26] border border-[#2a3344] focus:border-[#d4af37] rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none"
                  >
                    <option value="平安健康 / Peace & Health">平安健康 / Peace & Health</option>
                    <option value="家庭和睦 / Family Harmony">家庭和睦 / Family Harmony</option>
                    <option value="学业事业 / Wisdom & Career">学业事业 / Wisdom & Career</option>
                    <option value="亡者安息 / Repose of Soul">亡者安息 / Repose of Soul</option>
                    <option value="感恩赞美 / Thanksgiving">感恩赞美 / Thanksgiving</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-[#8b97a8] mb-1">
                    {currentLang === 'zh' ? '祈愿词句 (选填)' : 'Prayer Request Note (Optional)'}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={currentLang === 'zh' ? '写下您的心声或祈愿...' : 'Enter your prayer message...'}
                    value={prayerText}
                    onChange={(e) => setPrayerText(e.target.value)}
                    className="w-full bg-[#171c26] border border-[#2a3344] focus:border-[#d4af37] rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none resize-none"
                  />
                </div>

                {candleLitSuccess && (
                  <div className="flex items-center gap-1.5 text-xs text-[#d4af37] bg-[#d4af37]/10 p-2 rounded border border-[#d4af37]/30">
                    <Check className="w-3.5 h-3.5" />
                    <span>{currentLang === 'zh' ? '心烛已在徐家汇主教座堂前点亮，主佑平安！' : 'Your prayer candle has been lit in the Cathedral!'}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#b89542] hover:brightness-110 text-black font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg active:scale-95 transition-all"
                >
                  <Flame className="w-4 h-4" />
                  <span>{currentLang === 'zh' ? '点燃座堂祈愿烛' : 'Light Prayer Candle'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
