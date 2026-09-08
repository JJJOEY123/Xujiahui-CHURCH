# 上海徐家汇圣依纳爵主教座堂官方文化门户
### St. Ignatius Cathedral of Shanghai · Official Cultural Portal & Digital Experience

[![React](https://img.shields.io/badge/React-19.0-blue.svg?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.0-38b2ac.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff.svg?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> 天主教上海教区主教座堂 · 远东第一大教堂 (建于1910年)  
> Mother Church of the Catholic Diocese of Shanghai · Est. 1910

---

## 🏛️ 项目简介 (Introduction)

本项目为**上海徐家汇圣依纳爵主教座堂（徐家汇天主堂）**精心打造的官方文化数字化门户。设计语言全面对标**梵蒂冈圣伯多禄大殿（Basilica di San Pietro）**官方网站的庄重、沉浸与极简美学，融合中西文明交流深厚底蕴与现代 Web 交互技术。

### ✨ 核心功能与亮点 (Key Features)

1. **梵蒂冈式极简建筑首屏 (Vatican-Style Architectural Hero)**
   - 全幅高清晰度展现徐家汇天主堂代表性视角（57米哥特双塔立面、通廊64根金山石柱与拱顶、中央大理石祭台、百年玫瑰花窗）。
   - 底部采用极简白色细线滑动指示器，模块随上方图片 1:1 同步平滑滑动，支持左右侧边按键切换与触屏手势轻扫。
   - 纯粹典雅的衬线排版，凸显圣殿的神圣与宁静。

2. **管风琴圣乐氛围音韵 (Cathedral Pipe Organ Synthesizer)**
   - 基于 **Web Audio API** 原生实时合成管风琴神圣和弦声学效果（D minor - G minor - A7 - D major）。
   - **进入网页即自动开启**，配合智能触控解锁策略，并于顶栏与首屏右下角实现全局播放状态联动。

3. **探索大堂与建筑瑰宝 (Discover Cathedral Architecture)**
   - 深入展示哥特式双尖塔、尖券肋拱顶、花岗岩雕花柱头与彩绘玻璃窗等核心建筑遗产。
   - 配备徐光启与利玛窦中西文化会通历史溯源。

4. **360° 沉浸式数字全景漫游 (Virtual 360° Panoramic Experience)**
   - 模拟殿堂内部全景漫游导览，支持多交互热点、双语云端语音解说与全屏探索。

5. **弥撒礼仪时刻与圣事日程 (Mass & Liturgy Schedules)**
   - 详尽列明平日弥撒、主日弥撒（中文/英文堂次）、告解和好圣事与瞻礼特别礼仪，支持实时状态指示与日历导出。

6. **参访须知与庄重礼仪 (Visitor Guidelines & Sacred Decorum)**
   - 明确开放时间、免费免预约参访说明、着装礼仪与摄影静音规范。

7. **堂区动态要闻 (Cathedral News & Announcements)**
   - 发布堂区最新信仰生活、礼仪通告、修缮动态与文化讲座。

8. **全站中英双语无缝切换 (Bilingual Chinese & English)**
   - 架构级完整双语词条支持，自由在简体中文与英文间切换。

---

## 🛠️ 技术栈 (Tech Stack)

- **前端核心**：React 19, TypeScript
- **构建工具**：Vite 6
- **样式方案**：Tailwind CSS v4
- **图标系统**：Lucide React
- **音频系统**：Web Audio API (无需外部音频文件加载，原生低延迟合成)
- **动效库**：Motion (Framer Motion)

---

## 🚀 本地运行与部署 (Getting Started)

### 1. 克隆代码库
```bash
git clone https://github.com/your-username/xujiahui-cathedral-website.git
cd xujiahui-cathedral-website
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动本地开发服务
```bash
npm run dev
```
本地浏览器访问：`http://localhost:3000`

### 4. 生产环境构建
```bash
npm run build
```
编译产物将生成在 `dist/` 目录中，可直接部署至任一静态托管平台（如 GitHub Pages, Vercel, Netlify, Cloud Run 等）。

### 5. 语法与类型检查
```bash
npm run lint
```

---

## 📂 目录结构 (Project Structure)

```
xujiahui-cathedral-website/
├── public/                  # 静态高清照片及资源
│   └── images/              # 徐家汇天主堂高清实景照片
├── src/
│   ├── assets/              # 本地图像资产备份
│   ├── components/          # 模块化 UI 组件
│   │   ├── Navbar.tsx       # 顶栏与移动端抽屉导航
│   │   ├── Hero.tsx         # 极简首屏大图滑动与指示器
│   │   ├── DiscoverSection.tsx  # 探索建筑艺术
│   │   ├── VirtualExperience.tsx# 360°数字漫游体验
│   │   ├── LiturgySection.tsx   # 弥撒时刻与礼仪时刻表
│   │   ├── VisitorGuidelines.tsx# 参访须知与行为准则
│   │   ├── NewsSection.tsx      # 堂区动态与资讯
│   │   └── Footer.tsx       # 官方页脚与版权
│   ├── data/
│   │   └── cathedralData.ts # 教堂全量中英文数据与图像源
│   ├── utils/
│   │   └── audioSynthesizer.ts  # 管风琴和弦声学合成引擎
│   ├── types.ts             # TypeScript 类型定义
│   ├── App.tsx              # 应用根组件
│   └── main.tsx             # 入口文件
├── index.html               # 页面 HTML 模版
├── package.json             # 项目元信息与依赖
├── tsconfig.json            # TypeScript 编译配置
└── vite.config.ts           # Vite 构建配置
```

---

## 📜 许可 (License)

本项目遵循 [MIT License](LICENSE) 开源协议。
所有徐家汇主教座堂相关历史文化资料均归属天主教上海教区及徐汇区文物保护单位所有。
