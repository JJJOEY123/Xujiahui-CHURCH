import React from 'react';
import { Language } from '../types';
import { 
  Church, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronUp, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07090c] border-t border-[#1a1f28] text-[#8e98a7] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#181e28]">
          {/* Col 1 & 2: Cathedral Brand & Insignia */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-[#d4af37]/60 bg-[#14171d] flex items-center justify-center text-[#d4af37] font-cinzel font-bold text-xl">
                ☧
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-cinzel tracking-wider">
                  {currentLang === 'zh' ? '徐家汇圣依纳爵主教座堂' : 'St. Ignatius Cathedral of Shanghai'}
                </h3>
                <span className="text-[10px] text-[#d4af37] font-cinzel tracking-widest block uppercase">
                  DIOCESE OF SHANGHAI · ECCLESIA CATHEDRALIS
                </span>
              </div>
            </div>

            <p className="text-xs text-[#808c9d] leading-relaxed max-w-sm">
              {currentLang === 'zh'
                ? '奉圣依纳爵·罗耀拉为主保，天主教上海教区主教座堂。建于1906-1910年，高直哥特风格，曾誉为“远东第一大教堂”。国务院公布之全国重点文物保护单位。'
                : 'Cathedral of the Roman Catholic Diocese of Shanghai, consecrated to St. Ignatius of Loyola. A 1910 neo-Gothic landmark designated as a National Key Cultural Relic of China.'}
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#a1967c]">
              <span className="font-cinzel tracking-widest text-[#d4af37]">AD MAJOREM DEI GLORIAM</span>
              <span>· 愈显主荣</span>
            </div>
          </div>

          {/* Col 3: Practical Hours & Mass */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-cinzel">
              {currentLang === 'zh' ? '弥撒与开放时间' : 'Masses & Visiting'}
            </h4>
            <div className="space-y-2.5 text-[11px] text-[#8e9aaa]">
              <div>
                <span className="text-[#d4af37] font-medium block mb-0.5">
                  {currentLang === 'zh' ? '主日弥撒' : 'Sunday Masses'}
                </span>
                <p>{currentLang === 'zh' ? '周六：16:30, 18:00' : 'Sat: 16:30, 18:00'}</p>
                <p>{currentLang === 'zh' ? '周日：07:30, 10:00, 12:00(英文), 18:00' : 'Sun: 07:30, 10:00, 12:00(EN), 18:00'}</p>
              </div>

              <div className="pt-1.5 border-t border-[#181f2a]">
                <span className="text-[#d4af37] font-medium block mb-0.5">
                  {currentLang === 'zh' ? '平日弥撒' : 'Weekday Masses'}
                </span>
                <p>{currentLang === 'zh' ? '周一至周五：07:00, 19:00' : 'Mon - Fri: 07:00, 19:00'}</p>
                <p>{currentLang === 'zh' ? '周六：07:00' : 'Saturday: 07:00'}</p>
              </div>

              <div className="pt-1.5 border-t border-[#181f2a]">
                <span className="text-[#d4af37] font-medium block mb-0.5">
                  {currentLang === 'zh' ? '忏悔圣事' : 'Confession'}
                </span>
                <p>{currentLang === 'zh' ? '平日弥撒前15分钟 · 主日弥撒前30分钟' : '15m before weekday · 30m before Sunday'}</p>
              </div>

              <div className="pt-1.5 border-t border-[#181f2a]">
                <span className="text-[#e2e8f0] font-medium block mb-0.5">
                  {currentLang === 'zh' ? '参访开放' : 'Visiting Hours'}
                </span>
                <p>{currentLang === 'zh' ? '周二至周六 09:00 - 16:00 (周一闭馆)' : 'Tue - Sat 09:00 - 16:00 (Closed Mon)'}</p>
              </div>
            </div>
          </div>

          {/* Col 4: Official & Diocese Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-cinzel">
              {currentLang === 'zh' ? '友好链接与圣所' : 'Related Links'}
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a 
                  href="https://www.basilicasanpietro.va" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#d4af37] transition-colors flex items-center gap-1"
                >
                  <span>{currentLang === 'zh' ? '梵蒂冈圣伯多禄大殿官网' : "St. Peter's Basilica (Vatican)"}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.vatican.va" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#d4af37] transition-colors flex items-center gap-1"
                >
                  <span>{currentLang === 'zh' ? '圣座梵蒂冈官方门户' : 'The Holy See (Vatican)'}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <span className="text-[#a0abbb]">
                  {currentLang === 'zh' ? '佘山圣母宗座圣殿 (Sheshan)' : 'Sheshan Marian Minor Basilica'}
                </span>
              </li>
              <li>
                <span className="text-[#a0abbb]">
                  {currentLang === 'zh' ? '天主教上海教区光启社' : 'Guangqi Press & Diocese'}
                </span>
              </li>
              <li>
                <span className="text-[#a0abbb]">
                  {currentLang === 'zh' ? '徐家汇藏书楼文献库' : 'Bibliotheca Zi-Ka-Wei'}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-cinzel">
              {currentLang === 'zh' ? '堂区联络' : 'Cathedral Contact'}
            </h4>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{currentLang === 'zh' ? '上海市徐汇区蒲西路158号' : '158 Puxi Rd, Xuhui, Shanghai'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>021-64382595 / 64690930</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>xujiahui@catholic-sh.org</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#171c24] hover:bg-[#d4af37] hover:text-black text-white rounded transition-colors text-xs font-medium"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>{currentLang === 'zh' ? '返回顶部' : 'Back to Top'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Heritage accreditation bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6d7888]">
          <div className="flex flex-wrap items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>全国重点文物保护单位 (国发〔2013〕13号)</span>
            <span>•</span>
            <span>上海市优秀历史建筑 A-III-007</span>
          </div>

          <div>
            © {new Date().getFullYear()} 上海徐家汇圣依纳爵主教座堂 版权所有 · Diocese of Shanghai
          </div>
        </div>
      </div>
    </footer>
  );
};
