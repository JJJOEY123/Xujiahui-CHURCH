import React, { useState } from 'react';
import { Language, BookingConfirmation } from '../types';
import { 
  Ticket, 
  Calendar, 
  Clock, 
  Users, 
  User, 
  Phone, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  QrCode, 
  Download, 
  Share2, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

interface BookingSectionProps {
  currentLang: Language;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ currentLang }) => {
  const [visitType, setVisitType] = useState<'general' | 'guided' | 'liturgy' | 'audio'>('general');
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-09');
  const [selectedSlot, setSelectedSlot] = useState<string>('09:30 - 11:00');
  const [visitorCount, setVisitorCount] = useState<number>(2);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [needsAccessibility, setNeedsAccessibility] = useState<boolean>(false);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);
  const [formError, setFormError] = useState<string>('');

  const visitOptions = [
    {
      id: 'general',
      titleZh: '个人免费入堂参观',
      titleEn: 'General Admission (Free)',
      descZh: '自主漫步主教座堂大殿，瞻仰哥特拱顶、主祭台与圣像，感受神圣庄严。',
      descEn: 'Self-guided visit through the grand Gothic nave, high altar, and side chapels.',
      priceZh: '免费预约',
      priceEn: 'Free Entry',
      badgeZh: '常规参访',
      badgeEn: 'Popular'
    },
    {
      id: 'guided',
      titleZh: '座堂深度讲解导览',
      titleEn: 'Docent Guided Architectural Tour',
      descZh: '由主教座堂资深文化志愿者带领，45分钟深度解读建筑力学、彩玻圣经故事及徐光启文脉。',
      descEn: '45-minute comprehensive architectural and theological tour by certified docents.',
      priceZh: '免费专约',
      priceEn: 'Docent Tour',
      badgeZh: '名额有限',
      badgeEn: 'Limited Spots'
    },
    {
      id: 'liturgy',
      titleZh: '主日与瞻礼弥撒席位',
      titleEn: 'Solemn Mass Reserved Seating',
      descZh: '参与周日大礼唱经弥撒或英文国际弥撒，预留堂内前区礼仪祈祷席位。',
      descEn: 'Reserved prayer seating for Sunday High Mass or English International Mass.',
      priceZh: '神圣崇拜',
      priceEn: 'Sacred Worship',
      badgeZh: '信友礼仪',
      badgeEn: 'Mass Seats'
    },
    {
      id: 'audio',
      titleZh: '云端智能语音导览包',
      titleEn: 'Digital Audio Guide Pass',
      descZh: '随身开启手机网页端高保真双语语音讲解，定位扫描堂内12处重点文物微标。',
      descEn: 'Full mobile streaming audio pass unlocking 12 curated architectural commentary points.',
      priceZh: '手机即启',
      priceEn: 'Digital Access',
      badgeZh: '随时收听',
      badgeEn: 'Self-Paced'
    }
  ];

  const timeSlots = [
    { slot: '09:00 - 10:30', left: 42 },
    { slot: '10:30 - 12:00', left: 28 },
    { slot: '13:00 - 14:30', left: 65 },
    { slot: '14:30 - 15:30', left: 19 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError(currentLang === 'zh' ? '请填写预约联系人姓名' : 'Please enter contact name');
      return;
    }
    if (!phone.trim()) {
      setFormError(currentLang === 'zh' ? '请填写联系手机号码以接收电子凭证' : 'Please enter mobile phone number');
      return;
    }

    const randomId = 'XJH-' + Math.floor(100000 + Math.random() * 900000);
    const newConfirmation: BookingConfirmation = {
      bookingId: randomId,
      visitType: visitOptions.find(o => o.id === visitType)?.titleZh || '参观预约',
      date: selectedDate,
      timeSlot: selectedSlot,
      visitorCount: visitorCount,
      contactName: name,
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${randomId}-XUJIAHUI-CATHEDRAL`,
      createdAt: new Date().toLocaleDateString()
    };

    setConfirmation(newConfirmation);
  };

  return (
    <section id="booking" className="py-24 bg-[#0e1117] border-t border-[#1e2430] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header modeled after St. Peter's "Book Your Visit" */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-cinzel mb-2 font-semibold">
            <span>BOOK YOUR VISIT & OFFICIAL TOURS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f3ee] font-serif-sc mb-4">
            {currentLang === 'zh' ? '预约您的主教座堂参访' : 'Book Your Visit to the Cathedral'}
          </h2>
          <p className="text-sm sm:text-base text-[#9ea8b6] font-normal leading-relaxed">
            {currentLang === 'zh'
              ? '为维护神圣静谧与文物古建安全，徐家汇天主教堂实行全员实名分时预约制。入堂请出示电子预约凭据，着装端庄整洁，听从引导。'
              : 'To preserve sacred dignity and protect historic architecture, timed entry reservations are required. Free digital admission vouchers are issued immediately.'}
          </p>
        </div>

        {/* If reservation is confirmed, show the Official Digital Pass */}
        {confirmation ? (
          <div className="max-w-xl mx-auto bg-[#131720] border-2 border-[#d4af37] rounded-2xl p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Pass Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#262f3e] mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                  <span className="font-cinzel font-bold text-base">☧</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-serif-sc">
                    {currentLang === 'zh' ? '上海徐家汇天主教堂·入堂凭证' : 'St. Ignatius Cathedral Admission Pass'}
                  </h4>
                  <span className="text-[10px] text-[#8e9aa9] font-cinzel">DIOCESE OF SHANGHAI · OFFICIAL PASS</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#d4af37] text-black font-bold text-[11px] uppercase tracking-wider">
                {currentLang === 'zh' ? '预约成功' : 'Confirmed'}
              </span>
            </div>

            {/* QR Code and Key Details */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-5 bg-[#0b0e13] rounded-xl border border-[#212836] mb-6">
              {/* Dynamic QR Code representation */}
              <div className="p-2.5 bg-white rounded-lg shadow-md shrink-0 flex flex-col items-center">
                <div className="w-32 h-32 bg-white flex items-center justify-center relative">
                  {/* Decorative QR Pattern */}
                  <div className="w-full h-full border-4 border-black p-2 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <div className="w-7 h-7 bg-black flex items-center justify-center"><div className="w-3 h-3 bg-white" /></div>
                      <div className="w-7 h-7 bg-black flex items-center justify-center"><div className="w-3 h-3 bg-white" /></div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center text-[10px] font-bold text-black font-cinzel">☧</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="w-7 h-7 bg-black flex items-center justify-center"><div className="w-3 h-3 bg-white" /></div>
                      <div className="w-5 h-5 bg-black" />
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-black font-bold mt-1 tracking-wider">
                  {confirmation.bookingId}
                </span>
              </div>

              {/* Pass Metadata */}
              <div className="flex-1 space-y-2 text-xs">
                <div className="flex justify-between border-b border-[#1c2330] pb-1.5">
                  <span className="text-[#7c889a]">{currentLang === 'zh' ? '参访类型' : 'Type'}:</span>
                  <span className="text-white font-medium">{confirmation.visitType}</span>
                </div>
                <div className="flex justify-between border-b border-[#1c2330] pb-1.5">
                  <span className="text-[#7c889a]">{currentLang === 'zh' ? '参访日期' : 'Date'}:</span>
                  <span className="text-[#d4af37] font-semibold">{confirmation.date}</span>
                </div>
                <div className="flex justify-between border-b border-[#1c2330] pb-1.5">
                  <span className="text-[#7c889a]">{currentLang === 'zh' ? '入堂时段' : 'Time Slot'}:</span>
                  <span className="text-white font-medium">{confirmation.timeSlot}</span>
                </div>
                <div className="flex justify-between border-b border-[#1c2330] pb-1.5">
                  <span className="text-[#7c889a]">{currentLang === 'zh' ? '预约人数' : 'Guests'}:</span>
                  <span className="text-white font-medium">{confirmation.visitorCount} {currentLang === 'zh' ? '人' : 'people'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7c889a]">{currentLang === 'zh' ? '联系人' : 'Contact'}:</span>
                  <span className="text-white font-medium">{confirmation.contactName}</span>
                </div>
              </div>
            </div>

            {/* Practical Visiting Advisory */}
            <div className="p-3.5 bg-[#171c26] rounded-lg border border-[#252f3e] text-xs text-[#9aa6b8] mb-6 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[#d4af37] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{currentLang === 'zh' ? '入堂核销须知' : 'Admission Instructions'}</span>
              </div>
              <p>• {currentLang === 'zh' ? '请于预约时段前15分钟至座堂正立面西侧访客中心闸机扫码核销。' : 'Please arrive 15 minutes before your time slot at the West Visitor Entrance.'}</p>
              <p>• {currentLang === 'zh' ? '圣堂庄严神圣，入堂请着装得体（肩膝遮蔽，脱帽，保持肃静）。' : 'Modest dress required: shoulders and knees must be covered. Silence is observed.'}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmation(null)}
                className="flex-1 py-2.5 bg-[#1e2532] hover:bg-[#2a3446] text-xs text-white rounded-lg transition-colors font-medium"
              >
                {currentLang === 'zh' ? '再预约一场' : 'Book Another Visit'}
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#d4af37] hover:bg-[#e4be49] text-black text-xs font-semibold rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{currentLang === 'zh' ? '保存电子凭证' : 'Save Pass'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Booking Selection Form */
          <div className="max-w-4xl mx-auto bg-[#12161f] border border-[#262e3d] rounded-2xl p-6 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Choose Experience Type */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-cinzel text-[#d4af37] mb-3">
                  1. {currentLang === 'zh' ? '选择参访或导览类型' : 'Choose Experience Type'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {visitOptions.map(opt => {
                    const isSelected = visitType === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setVisitType(opt.id as any)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#1b222d] border-[#d4af37] ring-1 ring-[#d4af37] shadow-lg'
                            : 'bg-[#151922] border-[#252c38] hover:border-[#384355]'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="text-sm font-bold text-white font-serif-sc">
                              {currentLang === 'zh' ? opt.titleZh : opt.titleEn}
                            </span>
                            <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                              isSelected ? 'bg-[#d4af37] text-black' : 'bg-[#222936] text-[#9aa6b7]'
                            }`}>
                              {currentLang === 'zh' ? opt.badgeZh : opt.badgeEn}
                            </span>
                          </div>
                          <p className="text-xs text-[#8c97a7] leading-relaxed mb-3">
                            {currentLang === 'zh' ? opt.descZh : opt.descEn}
                          </p>
                        </div>
                        <div className="text-xs font-semibold text-[#d4af37] pt-2 border-t border-[#222936]">
                          {currentLang === 'zh' ? opt.priceZh : opt.priceEn}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Date & Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#1f2634]">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-cinzel text-[#d4af37] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>2. {currentLang === 'zh' ? '选择参访日期 (周一闭馆)' : 'Select Date (Closed Mondays)'}</span>
                  </label>
                  <input
                    type="date"
                    min="2026-09-08"
                    max="2026-10-31"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-[#171c26] border border-[#2c3545] focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
                  />
                  <span className="text-[11px] text-[#717d8e] mt-1 block">
                    {currentLang === 'zh' ? '每日开放时间：09:00 - 16:00 (15:30停止入堂)' : 'Open Tue-Sat 09:00 - 16:00 (Last entry 15:30)'}
                  </span>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-cinzel text-[#d4af37] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>3. {currentLang === 'zh' ? '选择分时时段 (实时余票)' : 'Select Timed Entry Slot'}</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map(t => (
                      <button
                        type="button"
                        key={t.slot}
                        onClick={() => setSelectedSlot(t.slot)}
                        className={`p-2 rounded-lg text-left border transition-all ${
                          selectedSlot === t.slot
                            ? 'bg-[#d4af37] text-black border-[#d4af37] font-semibold'
                            : 'bg-[#171c26] text-[#cbd5e1] border-[#2a3342] hover:border-[#3e4a5e]'
                        }`}
                      >
                        <div className="text-xs">{t.slot}</div>
                        <div className={`text-[10px] ${selectedSlot === t.slot ? 'text-black/80' : 'text-[#7e8a9b]'}`}>
                          {currentLang === 'zh' ? `余 ${t.left} 名额` : `${t.left} left`}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Contact & Visitor Info */}
              <div className="pt-4 border-t border-[#1f2634] space-y-4">
                <label className="block text-xs uppercase tracking-widest font-cinzel text-[#d4af37]">
                  4. {currentLang === 'zh' ? '参观者与联系信息' : 'Contact & Visitor Details'}
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] text-[#909cae] mb-1">
                      {currentLang === 'zh' ? '预约人数 (上限5人)' : 'Guests Count (Max 5)'}
                    </label>
                    <select
                      value={visitorCount}
                      onChange={(e) => setVisitorCount(Number(e.target.value))}
                      className="w-full bg-[#171c26] border border-[#2c3545] focus:border-[#d4af37] rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5].map(n => (
                        <option key={n} value={n}>{n} {currentLang === 'zh' ? '位访客' : 'Visitors'}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#909cae] mb-1">
                      {currentLang === 'zh' ? '领队/联系人姓名' : 'Lead Guest Full Name'}
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-[#6c788a] absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder={currentLang === 'zh' ? '例如：徐先生 / 玛利亚' : 'e.g. John Doe'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#171c26] border border-[#2c3545] focus:border-[#d4af37] rounded-lg pl-8 pr-3 py-2 text-xs text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#909cae] mb-1">
                      {currentLang === 'zh' ? '手机号码 (接收凭证)' : 'Mobile Phone'}
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-[#6c788a] absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        required
                        placeholder="13800000000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#171c26] border border-[#2c3545] focus:border-[#d4af37] rounded-lg pl-8 pr-3 py-2 text-xs text-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Special Needs Option */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="accessibility"
                    checked={needsAccessibility}
                    onChange={(e) => setNeedsAccessibility(e.target.checked)}
                    className="rounded border-[#353f4f] bg-[#171c26] text-[#d4af37] focus:ring-0 w-3.5 h-3.5 cursor-pointer"
                  />
                  <label htmlFor="accessibility" className="text-xs text-[#9aa6b7] cursor-pointer">
                    {currentLang === 'zh' 
                      ? '随行有轮椅或行动不便人士（座堂提供无障碍斜坡与专属绿色通道）' 
                      : 'Requires wheelchair accessibility or elderly assistance (Ramp entrance provided)'}
                  </label>
                </div>
              </div>

              {formError && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-900/30 border border-red-500/50 text-red-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#1f2634] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#788597]">
                  {currentLang === 'zh' ? '提示：本预约为官方公益免费通道，禁止任何加价倒卖行为。' : 'Official free reservation portal. Reselling is strictly prohibited.'}
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-3 bg-gradient-to-r from-[#d4af37] to-[#b89542] hover:from-[#e2be4c] hover:to-[#c6a249] text-black font-semibold text-xs uppercase tracking-wider rounded-lg shadow-xl active:scale-95 transition-all"
                >
                  {currentLang === 'zh' ? '立即生成电子入堂预约凭证' : 'Generate Digital Admission Pass'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
