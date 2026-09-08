import { ArchitecturalHighlight, TourStation, MassScheduleItem } from '../types';
import heroImgAsset from '../assets/images/cathedral_hero_1788774360940.jpg';
import interiorImgAsset from '../assets/images/cathedral_interior_1788774381534.jpg';
import roseWindowImgAsset from '../assets/images/cathedral_rose_window_1788774397730.jpg';
import altarImgAsset from '../assets/images/cathedral_altar_1788774416726.jpg';

// Public CDN fallbacks in case local binary files are excluded during ZIP download or Git push
export const HERO_FALLBACK = 'https://images.unsplash.com/photo-1548625361-16eb16428c0c?auto=format&fit=crop&w=2000&q=85';
export const INTERIOR_FALLBACK = 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=2000&q=85';
export const ROSE_WINDOW_FALLBACK = 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=85';
export const ALTAR_FALLBACK = 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=2000&q=85';

export const HERO_IMAGE = heroImgAsset || '/images/cathedral_hero.jpg' || HERO_FALLBACK;
export const INTERIOR_IMAGE = interiorImgAsset || '/images/cathedral_interior.jpg' || INTERIOR_FALLBACK;
export const ROSE_WINDOW_IMAGE = roseWindowImgAsset || '/images/cathedral_rose_window.jpg' || ROSE_WINDOW_FALLBACK;
export const ALTAR_IMAGE = altarImgAsset || '/images/cathedral_altar.jpg' || ALTAR_FALLBACK;

export const ARCHITECTURAL_HIGHLIGHTS: ArchitecturalHighlight[] = [
  {
    id: 'twin-spires',
    titleZh: '57米哥特式双塔钟楼',
    titleEn: 'The 57-Meter Gothic Twin Spires',
    subtitleZh: '上海近现代标志性天际线',
    subtitleEn: 'Iconic Historic Horizon of Shanghai',
    categoryZh: '建筑外立面',
    categoryEn: 'Exterior Architecture',
    year: '1910',
    dimension: '双塔高57米 / 尖塔高31米',
    descriptionZh: '座堂正立面耸立着两座对称的哥特尖塔钟楼，砖木混构，顶冠十字架直指苍穹。塔身开有修长的尖拱百叶窗，晨昏时分，百年古钟悠扬回荡于徐家汇商圈核心。',
    descriptionEn: 'Rising gracefully into the Shanghai sky, these two symmetrical neo-Gothic bell towers stand 57 meters tall with 31-meter needle spires crowned with Latin crosses, blending European Gothic verticality with local brick craftsmanship.',
    image: HERO_IMAGE,
    detailsZh: [
      '砖木结构外墙通体采用清水红砖精细砌筑，饰以白色花岗岩雕饰线条。',
      '西正门上方中央浮雕四位福音使者圣像（玛窦、马尔谷、路加、若望）。',
      '两座塔楼内各悬挂有一口铸造于1910年代的青铜大钟，至今保留整点报时传统。'
    ],
    detailsEn: [
      'Facade composed of premium fair-faced red bricks accented with white granite moldings.',
      'Above the main west portals are sculpted stone reliefs of the Four Evangelists.',
      'The twin towers house bronze bells cast in the 1910s that still chime across the plaza.'
    ],
    audioTrackId: 'track-spires'
  },
  {
    id: 'great-nave',
    titleZh: '大堂通廊与64根金山石柱',
    titleEn: 'The Great Nave & 64 Clustered Granite Pillars',
    subtitleZh: '容纳3000信众的远东第一大堂',
    subtitleEn: 'The Far East Cathedral Accommodating 3,000 Worshippers',
    categoryZh: '堂内建筑',
    categoryEn: 'Interior Nave',
    year: '1906-1910',
    dimension: '纵深79米 / 脊高28米 / 宽28米',
    descriptionZh: '拉丁十字形巴西利卡平面布局，堂脊高达28米。殿内由64根金山花岗石雕凿组合而成的束柱巍然列阵，支撑起交错复杂的哥特肋架尖拱顶，气象磅礴。',
    descriptionEn: 'Designed in a majestic Latin cross basilica plan, the vast nave stretches 79 meters with a 28-meter high ribbed vault. 64 monumental clustered columns carved from Jinshan granite support the soaring stone arches.',
    image: INTERIOR_IMAGE,
    detailsZh: [
      '每根主柱由10根精琢细磨的小圆柱簇拥而成，顶端饰以雕花卷草柱头。',
      '天花板呈现经典的哥特交叉十字肋拱，有效聚拢管风琴与唱经班的回响共鸣。',
      '地面满铺红黄相间的典雅瓷釉方砖，中央通道直贯远端圣所主祭坛。'
    ],
    detailsEn: [
      'Each clustered column is meticulously carved from 10 slender round stone pillars with acanthus leaf capitals.',
      'The ribbed cross-vaulted ceilings provide exceptional acoustics for sacred organ and choral singing.',
      'Glazed encaustic floor tiles create a grand sacred avenue leading directly to the high altar.'
    ],
    audioTrackId: 'track-nave'
  },
  {
    id: 'high-altar',
    titleZh: '1919年巴黎雕花汉白玉主祭台',
    titleEn: 'The 1919 Parisian Carved Marble High Altar',
    subtitleZh: '至圣所核心与精绝雕刻艺术',
    subtitleEn: 'Sacred Heart of the Sanctuary & Masterpiece of Relief',
    categoryZh: '至圣所圣器',
    categoryEn: 'Sanctuary & Altar',
    year: '1919',
    dimension: '祭台面宽4.8米 / 汉白玉浮雕',
    descriptionZh: '主祭台于1919年复活节前自法国巴黎远洋运抵上海。通体采用上等汉白玉精雕而成，中央端坐座堂主保圣人圣依纳爵·罗耀拉，两侧环立八位圣人，圣体柜与哥特尖拱华盖金碧辉煌。',
    descriptionEn: 'Shipped from Paris before Easter in 1919, this ornate high altar is sculpted from white marble and accented with gilded bronze. It enshrines Cathedral patron Saint Ignatius of Loyola surrounded by eight saints.',
    image: ALTAR_IMAGE,
    detailsZh: [
      '圣体柜上方矗立哥特式微型尖顶亭阁，象征天主临在的荣光。',
      '祭台基座浮雕呈现最后的晚餐、圣髑敬礼及耶稣受难神圣图景。',
      '圣所周围环绕铸铁镀金圣餐栏杆，地面铺设繁复精致的几何马赛克。'
    ],
    detailsEn: [
      'Gothic micro-architecture tabernacle crowned by a golden spire symbolizing the Holy Presence.',
      'Pedestal reliefs depict the Last Supper, Veneration of Relics, and Christ Passion.',
      'Gilded iron communion rail and sacred geometric mosaics surround the apse sanctuary.'
    ],
    audioTrackId: 'track-altar'
  },
  {
    id: 'rose-window',
    titleZh: '哥特花窗与铅条彩绘玻璃',
    titleEn: 'The Gothic Rose Window & Stained Glass',
    subtitleZh: '圣洁神圣的光影叙事画卷',
    subtitleEn: 'Sacred Illumination & Biblical Iconography',
    categoryZh: '宗教艺术',
    categoryEn: 'Sacred Glass Art',
    year: '2017修复',
    dimension: '直径6.2米圆形玫瑰窗及双侧尖拱窗',
    descriptionZh: '西立面与南北耳堂嵌有巨幅圆形玫瑰花窗，堂内数十扇尖拱大窗均镶嵌铅条拼嵌彩绘玻璃。日光穿透红、蓝、琥珀色彩玻，在地砖上投射出绚烂的光晕，宛若天国华章。',
    descriptionEn: 'The transept and west facade feature circular rose windows and dozens of tall lancet stained glass windows. Natural light filtered through ruby, sapphire, and amber glass casts kaleidoscopic sacred radiance across the stone nave.',
    image: ROSE_WINDOW_IMAGE,
    detailsZh: [
      '彩玻图案生动展现新旧约圣经史迹、救恩奥迹及传教先贤传略。',
      '近年全面修缮采用传统手工吹制彩色透光玻璃与铅条镶嵌古法工艺。',
      '晴朗午后西晒时刻，玫瑰花窗在中央祭坛地面投下最为震撼的圣光投影。'
    ],
    detailsEn: [
      'Depicts scenes from the Old and New Testaments, Salvation mysteries, and Jesuit missionaries.',
      'Recent comprehensive restoration utilized historic hand-blown colored glass and lead came techniques.',
      'During afternoon golden hours, the sunlight projects dramatic jewel-toned reflections onto the sanctuary.'
    ],
    audioTrackId: 'track-rose'
  },
  {
    id: 'xu-guangqi-heritage',
    titleZh: '徐光启与中西文化交融圣地',
    titleEn: 'Xu Guangqi & Sino-Western Dialogue Heritage',
    subtitleZh: '明末先贤与上海天主教发轫之源',
    subtitleEn: 'Ming Scholar & The Cradle of Modern Shanghai Catholicism',
    categoryZh: '历史文脉',
    categoryEn: 'Historical Heritage',
    year: '1603-至今',
    dimension: '徐家汇源核心文物区',
    descriptionZh: '明代崇祯文渊阁大学士徐光启受洗于此，与利玛窦翻译《几何原本》，开启西学东渐。徐家汇因而得名，成为中国早期近代科学与天主教传播的关键重镇。',
    descriptionEn: 'The cathedral district is named after Paul Xu Guangqi, the Grand Academician of the Ming Dynasty who collaborated with Matteo Ricci to translate Euclid’s Elements, fostering early scientific and cultural exchange.',
    image: HERO_IMAGE,
    detailsZh: [
      '徐家汇（原名徐家汇村）由徐光启及其后裔聚居与安葬地演化而来。',
      '座堂邻近徐光启墓园（光启公园）、徐家汇藏书楼及土山湾博物馆，构成完整文化聚落。',
      '堂内设有天主教上海教区历任主教及开教先贤生平事迹特展区。'
    ],
    detailsEn: [
      'The name "Xujiahui" originates from the ancestral settlement and tomb of Paul Xu Guangqi.',
      'Forms a cohesive historic cluster with Guangqi Park, Bibliotheca Zi-Ka-Wei, and Tushanwan Museum.',
      'Features memorial exhibits honoring Shanghai Catholic heritage and early Jesuit pioneers.'
    ]
  },
  {
    id: 'cathedral-treasury',
    titleZh: '主教座堂圣器与珍藏典籍',
    titleEn: 'Cathedral Sacred Treasury & Archives',
    subtitleZh: '百年礼仪金银器与织锦祭披',
    subtitleEn: 'Centennial Liturgical Vessels & Embroidered Vestments',
    categoryZh: '典藏宝库',
    categoryEn: 'Cathedral Treasury',
    year: '19-20世纪',
    dimension: '圣器室与展陈馆藏',
    descriptionZh: '圣器室珍藏有多套19世纪末自欧洲定制的手工金丝刺绣大祭披、银镀金圣爵、圣体光、拉伯尔象牙苦像，以及清末铅活字印刷拉丁语天主教典籍。',
    descriptionEn: 'The sacristy and treasury house liturgical masterworks including 19th-century gold-embroidered chasubles, gilded silver chalices, monstrances, and rare hand-pressed bilingual Latin-Chinese theological texts.',
    image: ALTAR_IMAGE,
    detailsZh: [
      '保存有1910年建堂落成大礼弥撒所用的法式鎏金圣体光与祭披。',
      '土山湾孤儿工艺院雕刻大师亲手打造的中国传统工艺祭台圣像圣物。',
      '定期在主教座堂南侧展厅举办宗教艺术与教会文献主题特展。'
    ],
    detailsEn: [
      'Preserves the gilded monstrance and chasubles used at the 1910 grand inauguration Mass.',
      'Features religious sculptures handcrafted by woodcarvers from the historic Tushanwan Art Atelier.',
      'Regular thematic exhibitions on religious arts and historical missals held in the south pavilion.'
    ]
  }
];

export const TOUR_STATIONS: TourStation[] = [
  {
    id: 'station-1',
    titleZh: '第1站：座堂广场与哥特西立面',
    titleEn: 'Station 1: Cathedral Square & West Facade',
    duration: '3分45秒',
    viewpoint: 'facade',
    descriptionZh: '仰望57米双塔尖顶与清水红砖尖券门，感受十九世纪哥特复兴风格在上海的宏伟呈现。',
    descriptionEn: 'Marvel at the 57-meter twin spires and red brick arches, witnessing high Gothic revival in Shanghai.',
    hotspots: [
      {
        x: 50,
        y: 20,
        labelZh: '十字架尖顶 (57米)',
        labelEn: 'Cross Spires (57m)',
        infoZh: '两座塔尖高31米，顶部立有镀锌铁十字架，1982年重新修复升顶。',
        infoEn: '31-meter spire needles topped with Latin crosses, restored in 1982.'
      },
      {
        x: 48,
        y: 45,
        labelZh: '主立面玫瑰窗',
        labelEn: 'Facade Rose Window',
        infoZh: '圆形辐辏式花窗，象征太阳与永恒的救赎神恩。',
        infoEn: 'Wheel-patterned circular window symbolizing divine light and salvation.'
      },
      {
        x: 50,
        y: 78,
        labelZh: '西正门与福音使者',
        labelEn: 'West Portals & Evangelists',
        infoZh: '尖券三联门，正中央浮雕四位圣史，为信众进入天国大门的神圣象征。',
        infoEn: 'Triple pointed portals adorned with sculptures of the four Evangelists.'
      }
    ]
  },
  {
    id: 'station-2',
    titleZh: '第2站：大殿中通廊与金山石柱',
    titleEn: 'Station 2: The Great Nave & Granite Clustered Pillars',
    duration: '4分20秒',
    viewpoint: 'nave',
    descriptionZh: '漫步于高耸的哥特肋架尖拱之下，64根石柱构筑出神秘崇高的宗教纵深感。',
    descriptionEn: 'Walk beneath soaring ribbed vaults where 64 clustered granite pillars evoke solemn transcendence.',
    hotspots: [
      {
        x: 35,
        y: 55,
        labelZh: '金山石雕柱身',
        labelEn: 'Jinshan Granite Columns',
        infoZh: '每根主柱由10根小圆柱复合而成，质地坚固，展现江南石刻绝艺。',
        infoEn: 'Compound clustered pillars carved from local granite with superb masonry.'
      },
      {
        x: 50,
        y: 25,
        labelZh: '28米交叉肋架拱顶',
        labelEn: '28-Meter Ribbed Vaults',
        infoZh: '法国式骨架拱顶，分散顶部重压，使大堂无需厚墙即可实现巨大挑高。',
        infoEn: 'French Gothic ribbed vaults transferring ceiling weight outward to enable high clerestories.'
      },
      {
        x: 50,
        y: 65,
        labelZh: '主通道瓷砖圣路',
        labelEn: 'Central Processional Aisle',
        infoZh: '纵深近80米，可举行容纳数千信徒的主教大礼游行与婚礼降福。',
        infoEn: 'Near 80-meter aisle designed for solemn episcopal processions and ceremonies.'
      }
    ]
  },
  {
    id: 'station-3',
    titleZh: '第3站：巴黎汉白玉主祭台与圣所',
    titleEn: 'Station 3: The Parisian Marble High Altar & Sanctuary',
    duration: '5分10秒',
    viewpoint: 'altar',
    descriptionZh: '聚焦至圣所核心，瞻仰1919年自巴黎定制运抵的汉白玉主祭台与九圣人雕像。',
    descriptionEn: 'Gaze into the sacred sanctuary, admiring the 1919 Paris-crafted marble altar and patron statues.',
    hotspots: [
      {
        x: 50,
        y: 42,
        labelZh: '圣依纳爵·罗耀拉主保圣像',
        labelEn: 'St. Ignatius of Loyola Statue',
        infoZh: '耶稣会创始人，本堂主保，手持会宪，目光坚毅。',
        infoEn: 'Founder of the Society of Jesus and patron saint of this Cathedral.'
      },
      {
        x: 50,
        y: 30,
        labelZh: '至圣圣体柜华盖',
        labelEn: 'Tabernacle & Gothic Canopy',
        infoZh: '保存祝圣圣体之所，上方红灯长明，代表基督的永恒临在。',
        infoEn: 'Sanctuary lamp remains lit before the tabernacle symbolizing Christ perpetual presence.'
      },
      {
        x: 38,
        y: 70,
        labelZh: '最后的晚餐浮雕',
        labelEn: 'Last Supper Marble Relief',
        infoZh: '祭台前部汉白玉浅浮雕，再现基督建立圣体圣事的庄严时刻。',
        infoEn: 'Marble relief on the altar front depicts Christ instituting the Eucharist.'
      }
    ]
  },
  {
    id: 'station-4',
    titleZh: '第4站：耳堂玫瑰花窗与彩绘玻璃',
    titleEn: 'Station 4: Transept Rose Window & Leaded Stained Glass',
    duration: '3分30秒',
    viewpoint: 'rose_window',
    descriptionZh: '仰望缤纷夺目的圣经彩绘玻璃，聆听日光流转下玻璃构件的百年修复传奇。',
    descriptionEn: 'Look up at vibrant biblical stained glass as sunlight illuminates hundreds of hand-leaded panels.',
    hotspots: [
      {
        x: 50,
        y: 45,
        labelZh: '玫瑰花窗中心：羔羊圣像',
        labelEn: 'Center Rosette: Agnus Dei',
        infoZh: '花窗核心镶嵌天主羔羊圣徽，周边八瓣放射状花瓣象征复活与新生。',
        infoEn: 'Lamb of God medallion at center, with 8 radial petals symbolizing Resurrection.'
      },
      {
        x: 25,
        y: 60,
        labelZh: '传统铅条镶嵌工艺',
        labelEn: 'Hand-Leaded Came Craft',
        infoZh: '每块彩色玻璃均用工字型铅条咬合焊接，历经百年风雨依然严密。',
        infoEn: 'H-channel lead cames hold hand-blown colored glass panels securely in place.'
      }
    ]
  }
];

export const MASS_SCHEDULE: { weekday: MassScheduleItem[]; saturday: MassScheduleItem[]; sunday: MassScheduleItem[] } = {
  sunday: [
    {
      time: '06:00',
      nameZh: '主日早课弥撒',
      nameEn: 'Sunday Dawn Mass',
      languageZh: '中文 (汉语)',
      languageEn: 'Chinese',
      locationZh: '大堂主祭台',
      locationEn: 'Cathedral Main Altar',
      noteZh: '晨光初现，适合长者与早起信友祈祷',
      noteEn: 'Early morning Mass with quiet meditation'
    },
    {
      time: '07:30',
      nameZh: '主日早弥撒',
      nameEn: 'Sunday Morning Mass',
      languageZh: '中文 (汉语)',
      languageEn: 'Chinese',
      locationZh: '大堂主祭台',
      locationEn: 'Cathedral Main Altar',
      noteZh: '颂读日课经，信友家庭齐聚',
      noteEn: 'Parish community morning Mass'
    },
    {
      time: '10:00',
      nameZh: '主教座堂大礼唱经弥撒 (High Mass)',
      nameEn: 'Solemn High Choral Mass',
      languageZh: '中文 / 拉丁文伴唱',
      languageEn: 'Chinese with Latin Chants',
      locationZh: '大堂主祭台',
      locationEn: 'Cathedral Main Altar',
      noteZh: '堂区圣咏团领唱，大管风琴伴奏，礼仪最为隆重',
      noteEn: 'Featuring Cathedral Sacred Choir & Pipe Organ, highly solemn',
      highlight: true
    },
    {
      time: '12:00',
      nameZh: '英文国际团体主日弥撒 (English Mass)',
      nameEn: 'International Community Mass',
      languageZh: '英语 (English)',
      languageEn: 'English',
      locationZh: '大堂主祭台',
      locationEn: 'Cathedral Main Altar',
      noteZh: '面向在沪外籍天主教徒及海内外访客',
      noteEn: 'Dedicated to international expatriates & English-speaking visitors',
      highlight: true
    },
    {
      time: '18:00',
      nameZh: '主日晚弥撒 (青年弥撒)',
      nameEn: 'Sunday Evening Youth Mass',
      languageZh: '中文 (汉语)',
      languageEn: 'Chinese',
      locationZh: '大堂主祭台',
      locationEn: 'Cathedral Main Altar',
      noteZh: '青年圣歌队弹唱，讲道贴近当代青年生活',
      noteEn: 'Contemporary choir, inspiring homily for students & professionals'
    }
  ],
  saturday: [
    {
      time: '06:15',
      nameZh: '周六平日晨间弥撒',
      nameEn: 'Saturday Morning Mass',
      languageZh: '中文',
      languageEn: 'Chinese',
      locationZh: '大堂侧祭台',
      locationEn: 'Side Altar'
    },
    {
      time: '07:00',
      nameZh: '周六特敬圣母晨弥撒',
      nameEn: 'Saturday Votive Mass of BVM',
      languageZh: '中文',
      languageEn: 'Chinese',
      locationZh: '大堂主祭台',
      locationEn: 'Main Altar'
    },
    {
      time: '16:30',
      nameZh: '主日提前儿童与辅祭弥撒',
      nameEn: 'Vigil Children & Altar Servers Mass',
      languageZh: '中文',
      languageEn: 'Chinese',
      locationZh: '大堂主祭台',
      locationEn: 'Main Altar',
      noteZh: '由堂区儿童唱经班与青少年辅祭团承办礼仪',
      noteEn: 'Led by youth choir and altar servers'
    },
    {
      time: '18:00',
      nameZh: '主日提前弥撒 (Vigil Mass)',
      nameEn: 'Sunday Anticipated Vigil Mass',
      languageZh: '中文',
      languageEn: 'Chinese',
      locationZh: '大堂主祭台',
      locationEn: 'Main Altar',
      noteZh: '履行主日弥撒本分，适宜周末工作人士',
      noteEn: 'Fulfills Sunday obligation'
    }
  ],
  weekday: [
    {
      time: '06:15',
      nameZh: '平日第一场晨间弥撒',
      nameEn: 'Weekday 1st Morning Mass',
      languageZh: '中文',
      languageEn: 'Chinese',
      locationZh: '圣母小堂 / 侧祭台',
      locationEn: 'Lady Chapel'
    },
    {
      time: '07:00',
      nameZh: '平日第二场弥撒',
      nameEn: 'Weekday 2nd Morning Mass',
      languageZh: '中文',
      languageEn: 'Chinese',
      locationZh: '大堂主祭台',
      locationEn: 'Main Altar'
    },
    {
      time: '周五 19:00',
      nameZh: '首周五特敬耶稣圣心弥撒与圣体降福',
      nameEn: 'First Friday Sacred Heart Mass & Benediction',
      languageZh: '中文',
      languageEn: 'Chinese',
      locationZh: '大堂主祭台',
      locationEn: 'Main Altar',
      noteZh: '首瞻礼六晚间敬礼耶稣圣心，降福信友',
      noteEn: 'Sacred Heart devotions and Eucharistic Benediction'
    }
  ]
};

export const CATHEDRAL_NOTICES = [
  {
    id: 'n1',
    tagZh: '礼仪盛典',
    tagEn: 'Solemnity',
    date: '2026-09-08',
    titleZh: '圣母诞辰庆节大礼弥撒及圣咏晚会预告',
    titleEn: 'Feast of the Nativity of the Blessed Virgin Mary & Choral Vespers',
    summaryZh: '本堂将于9月8日晚19:00举行圣母圣诞瞻礼大礼弥撒，随后由徐家汇座堂圣咏团带来巴赫与古诺圣母颂专题音乐会。',
    summaryEn: 'Solemn High Mass at 19:00 followed by an uplifting sacred choral recital featuring Bach and Gounod Ave Maria by Cathedral Choir.'
  },
  {
    id: 'n2',
    tagZh: '建筑保护',
    tagEn: 'Heritage',
    date: '2026-09-02',
    titleZh: '“远东第一堂”全国重点文保修缮十周年特展在南展厅启幕',
    titleEn: '10th Anniversary Exhibition of Historic Gothic Restoration Opens',
    summaryZh: '系统展出1910年建堂手稿图纸、金山石柱修复拓片、铅条彩绘玻璃传统工法及历史珍贵影像。',
    summaryEn: 'Displaying original 1910 architectural blueprints, rubbings of Jinshan granite pillars, and restored stained glass craft.'
  },
  {
    id: 'n3',
    tagZh: '参访须知',
    tagEn: 'Visitor Notice',
    date: '2026-08-28',
    titleZh: '徐家汇座堂推行“分时段智慧云预约”与双语语音导览服务',
    titleEn: 'Timed Entry E-Reservation & Multilingual Digital Audio Guide Launched',
    summaryZh: '为保障圣堂神圣宁静氛围与建筑承载安全，所有入堂参观者请提前在线获取免费电子入堂凭证。',
    summaryEn: 'Visitors are encouraged to secure free digital admission vouchers online to ensure solemn ambiance and site preservation.'
  }
];
