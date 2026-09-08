import React from 'react';
import { Language } from '../types';
import { 
  ShieldAlert, 
  MapPin, 
  Clock, 
  VolumeX, 
  CameraOff, 
  Accessibility, 
  Shirt, 
  HelpCircle,
  Navigation,
  ExternalLink,
  Footprints
} from 'lucide-react';

interface VisitorGuidelinesProps {
  currentLang: Language;
}

export const VisitorGuidelines: React.FC<VisitorGuidelinesProps> = ({ currentLang }) => {
  const decorumRules = [
    {
      icon: Shirt,
      titleZh: '端庄着装礼仪 (Dress Code)',
      titleEn: 'Sacred Dress Code',
      descZh: '圣堂为天主圣殿与崇拜场所。进入大堂请遮盖双肩与膝部，不得穿着背心、超短裤裙或拖鞋。男性进入圣殿请主动脱帽。',
      descEn: 'Shoulders and knees must be covered. Sleeveless tops, miniskirts, and short shorts are strictly prohibited. Gentlemen must remove headwear upon entering.'
    },
    {
      icon: VolumeX,
      titleZh: '肃静与庄严氛围',
      titleEn: 'Silence & Reverence',
      descZh: '请将手机调至静音或震动模式。堂内切勿大声喧哗、奔跑嬉戏，请压低交谈声音，共同维护信友祈祷与默想之安宁。',
      descEn: 'Mobile phones must be silenced. Loud conversation, running, or disruptive behavior is prohibited to maintain solemn peace.'
    },
    {
      icon: CameraOff,
      titleZh: '摄影与摄像规范',
      titleEn: 'Photography Rules',
      descZh: '允许非商业性常态拍摄。严禁使用闪光灯、三脚架或无人机。弥撒礼仪进行期间严禁在至圣所周边近距离穿行拍摄。',
      descEn: 'Flash photography, selfie sticks, tripods, and drones are strictly prohibited. Photography of the altar is forbidden during liturgical services.'
    },
    {
      icon: Accessibility,
      titleZh: '无障碍设施与适老服务',
      titleEn: 'Barrier-Free Accessibility',
      descZh: '座堂南侧通道配有专用无障碍升降坡道及轮椅进出通道。洗手间设有无障碍卫生间及母婴护理台，提供人工导盲协助。',
      descEn: 'South entrance features wheelchair ramps and accessible pathways. Barrier-free restrooms and priority docent assistance available.'
    }
  ];

  const heritageSites = [
    {
      nameZh: '徐家汇藏书楼 (Bibliotheca Zi-Ka-Wei)',
      nameEn: 'Bibliotheca Zi-Ka-Wei',
      distZh: '步行约2分钟 (座堂北侧)',
      distEn: '2 min walk north',
      descZh: '上海现存最早的近代图书馆，藏有大量早期珍稀汉学与西文中世纪善本。'
    },
    {
      nameZh: '光启公园与徐光启墓',
      nameEn: 'Guangqi Park & Xu Guangqi Tomb',
      distZh: '步行约5分钟 (南丹路)',
      distEn: '5 min walk east',
      descZh: '明代文渊阁大学士徐光启归葬安息之所，园内立有徐光启雕像与生平纪念馆。'
    },
    {
      nameZh: '土山湾博物馆 (Tushanwan Atelier)',
      nameEn: 'Tushanwan Museum',
      distZh: '步行约8分钟 (蒲汇塘路)',
      distEn: '8 min walk south',
      descZh: '中国西洋画与彩色玻璃工艺摇篮，曾制作徐家汇座堂初建之祭坛与彩玻。'
    }
  ];

  return (
    <section id="guidelines" className="py-24 bg-[#0d0f14] border-t border-[#1e2430] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-cinzel mb-2 font-semibold">
            <span>VISITOR INFO & CODE OF CONDUCT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f3ee] font-serif-sc mb-4">
            {currentLang === 'zh' ? '参访须知与圣堂礼仪' : 'Visitor Guidelines & Access'}
          </h2>
          <p className="text-sm sm:text-base text-[#9ea8b6] font-normal leading-relaxed">
            {currentLang === 'zh'
              ? '为了让每位朝圣者与访客获得尊崇、安详的属灵体验，请遵守主教座堂参观与着装规定。'
              : 'St. Ignatius Cathedral is an active consecrated sanctuary. We kindly ask all guests to observe our sacred guidelines and respectful decorum.'}
          </p>
        </div>

        {/* Decorum Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {decorumRules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#131720] rounded-xl border border-[#232b38] hover:border-[#d4af37]/50 transition-colors flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1a212c] border border-[#2e3748] flex items-center justify-center shrink-0 text-[#d4af37]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-serif-sc mb-1.5">
                    {currentLang === 'zh' ? rule.titleZh : rule.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9aa4b4] leading-relaxed">
                    {currentLang === 'zh' ? rule.descZh : rule.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Location & Transport Navigation Module */}
        <div className="bg-[#12161f] border border-[#262e3d] rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Transit info */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-cinzel mb-1 font-semibold">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>LOCATION & PUBLIC TRANSIT</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-serif-sc mb-2">
                  {currentLang === 'zh' ? '地理位置与交通指引' : 'How to Reach the Cathedral'}
                </h3>
                <p className="text-xs sm:text-sm text-[#95a1b2]">
                  {currentLang === 'zh' 
                    ? '主教座堂位于上海徐汇区徐家汇核心源头区，毗邻徐家汇源历史风貌街区。' 
                    : 'Located at the heart of the historic Xujiahui Origin cultural district in Shanghai.'}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 bg-[#171c26] rounded-lg border border-[#252f3f] flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {currentLang === 'zh' ? '主教座堂详细地址' : 'Official Address'}
                    </span>
                    <span className="text-[#a0abbb]">
                      {currentLang === 'zh' ? '上海市徐汇区蒲西路158号 (近漕溪北路)' : 'No. 158 Puxi Road, Xuhui District, Shanghai, China'}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#171c26] rounded-lg border border-[#252f3f] flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {currentLang === 'zh' ? '地铁轨道交通' : 'Metro Subways'}
                    </span>
                    <span className="text-[#a0abbb]">
                      {currentLang === 'zh' 
                        ? '乘坐地铁 1号线、9号线、11号线 至【徐家汇站】，经 3号出口 沿蒲西路步行约150米即达。' 
                        : 'Take Metro Line 1, 9, or 11 to Xujiahui Station, Exit 3, walk 150m along Puxi Road.'}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#171c26] rounded-lg border border-[#252f3f] flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {currentLang === 'zh' ? '开放参访时间' : 'Opening Hours'}
                    </span>
                    <span className="text-[#a0abbb]">
                      {currentLang === 'zh' 
                        ? '周二至周六 09:00 - 16:00 (15:30 停止入内) · 周一闭馆修整维护' 
                        : 'Tuesday to Saturday: 09:00 - 16:00 (Last entry 15:30) · Closed on Mondays.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Historic Cultural Trail Walking Circuit */}
            <div className="lg:col-span-6 bg-[#161b24] border border-[#293242] rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-cinzel font-semibold">
                <Footprints className="w-4 h-4" />
                <span>{currentLang === 'zh' ? '徐家汇源历史文脉漫步环线' : 'Xujiahui Heritage Walking Trail'}</span>
              </div>
              <p className="text-xs text-[#8c98a9]">
                {currentLang === 'zh'
                  ? '参观完座堂后，可步行造访徐家汇源国家4A级旅游景区核心文物点：'
                  : 'Extend your cultural exploration with nearby historic landmark attractions:'}
              </p>

              <div className="space-y-3">
                {heritageSites.map((site, i) => (
                  <div key={i} className="p-3 bg-[#11141a] rounded-lg border border-[#202734] text-xs">
                    <div className="flex items-center justify-between font-semibold text-white mb-0.5">
                      <span>{currentLang === 'zh' ? site.nameZh : site.nameEn}</span>
                      <span className="text-[11px] text-[#d4af37] font-normal">{currentLang === 'zh' ? site.distZh : site.distEn}</span>
                    </div>
                    <p className="text-[11px] text-[#8e9aaa]">
                      {site.descZh}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
