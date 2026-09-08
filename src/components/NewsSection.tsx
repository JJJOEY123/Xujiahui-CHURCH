import React, { useState } from 'react';
import { CATHEDRAL_NOTICES } from '../data/cathedralData';
import { Language } from '../types';
import { 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Music, 
  X,
  FileText
} from 'lucide-react';

interface NewsSectionProps {
  currentLang: Language;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ currentLang }) => {
  const [selectedNotice, setSelectedNotice] = useState<typeof CATHEDRAL_NOTICES[0] | null>(null);

  return (
    <section id="news" className="py-24 bg-[#0a0c10] border-t border-[#1e2430] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header modeled after St. Peter's News */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-cinzel mb-2 font-semibold">
            <span>CATHEDRAL NEWS & LITURGICAL EVENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f3ee] font-serif-sc mb-4">
            {currentLang === 'zh' ? '主教座堂动态与要闻' : 'News & Announcements'}
          </h2>
          <p className="text-sm sm:text-base text-[#9ea8b6] font-normal leading-relaxed">
            {currentLang === 'zh'
              ? '发布徐家汇圣依纳爵主教座堂最新瞻礼庆典预告、大管风琴音乐晚会、文物保护研究成果及教区通告。'
              : 'Official updates on upcoming liturgical celebrations, sacred choral performances, restoration projects, and parish news.'}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATHEDRAL_NOTICES.map((notice) => (
            <div
              key={notice.id}
              onClick={() => setSelectedNotice(notice)}
              className="bg-[#12161f] border border-[#232a37] hover:border-[#d4af37]/60 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 uppercase tracking-wider">
                    {currentLang === 'zh' ? notice.tagZh : notice.tagEn}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-[#717d8e]">
                    <Calendar className="w-3 h-3" />
                    <span>{notice.date}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#d4af37] font-serif-sc transition-colors line-clamp-2 mb-2.5">
                  {currentLang === 'zh' ? notice.titleZh : notice.titleEn}
                </h3>

                <p className="text-xs text-[#8f9baa] line-clamp-3 leading-relaxed">
                  {currentLang === 'zh' ? notice.summaryZh : notice.summaryEn}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1e2533] flex items-center justify-between text-xs text-[#d4af37] font-medium">
                <span>{currentLang === 'zh' ? '查阅全文' : 'Read Notice'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notice Detail Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-[#131720] border border-[#323b4c] rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedNotice(null)}
              className="absolute top-4 right-4 text-[#8894a5] hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-[#d4af37] text-black">
                {currentLang === 'zh' ? selectedNotice.tagZh : selectedNotice.tagEn}
              </span>
              <span className="text-xs text-[#717d8e]">{selectedNotice.date}</span>
            </div>

            <h3 className="text-xl font-bold text-white font-serif-sc mb-4">
              {currentLang === 'zh' ? selectedNotice.titleZh : selectedNotice.titleEn}
            </h3>

            <div className="p-4 bg-[#181d28] rounded-lg border border-[#262f40] text-xs sm:text-sm text-[#ccd5e2] leading-relaxed mb-6">
              {currentLang === 'zh' ? selectedNotice.summaryZh : selectedNotice.summaryEn}
              <p className="mt-3 text-xs text-[#8c97a7]">
                {currentLang === 'zh' 
                  ? '详情请咨询主教座堂服务台，或关注上海天主教教区官方通告。' 
                  : 'For more information, please inquire at the Cathedral Reception Desk.'}
              </p>
            </div>

            <button
              onClick={() => setSelectedNotice(null)}
              className="w-full py-2.5 bg-[#202734] hover:bg-[#d4af37] hover:text-black text-xs font-semibold text-white rounded-lg transition-colors"
            >
              {currentLang === 'zh' ? '关闭通告' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
