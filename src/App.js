import React, { useState } from 'react';
import { Mail, ChevronRight, Menu, X, Cpu, Home, ShieldCheck, Wifi, ExternalLink, Users, Layout, Smartphone, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 第一款風格的配色：明亮橙、深藍灰、淺背景
  const theme = {
    primary: 'text-orange-500',
    primaryBg: 'bg-orange-500',
    hoverBg: 'hover:bg-orange-600',
    dark: 'text-slate-800',
    lightText: 'text-slate-500',
    bg: 'bg-slate-50',
  };

  const projects = [
    {
      id: "doorbell",
      title: "Smart Doorbell App",
      category: "IoT / Security",
      tag: "CES 展示作品",
      description: "針對北美地區設計，優化包裹偵測與安全預警流程。在 50 人大型跨國團隊中負責 App 流程規劃與 Wireframe 製作。",
      icon: <Home className="w-6 h-6" />,
      highlight: "解決「包裹遭竊」與「誤判預警」的平衡點",
      details: {
        team: "50人 (含軟硬體、PM、Leader)",
        role: "App 流程規劃、Wireframe 文件製作、交付 GUI 製作",
        features: ["AI 包裹偵測通知", "雙向語音對講優化", "事件錄影回放介面"],
        challenge: "在複雜的網路環境下，確保警示通知能即時送達，並讓用戶能快速判斷包裹安全性。"
      }
    },
    {
      id: "sensing",
      title: "Wi-Fi Sensing App",
      category: "AI / Sensing",
      tag: "前瞻技術",
      description: "利用 Mesh 設備間的波形偵測呼吸、睡眠與動作。將深奧的技術轉換為溫暖且具隱私保護的健康監測體驗。",
      icon: <Wifi className="w-6 h-6" />,
      highlight: "無攝影機的隱私偵測技術落地",
      details: {
        team: "研發實驗團隊",
        role: "UX 互動定義、波形數據視覺化、隱私保護機制設計",
        features: ["呼吸與心跳偵測 UI", "睡眠品質分析報告", "動作偵測安全警報"],
        challenge: "如何在不使用攝影機的情況下，讓使用者「感知」到偵測正在運作，並建立信任感。"
      }
    },
    {
      id: "mesh",
      title: "Cybersecurity & Mesh",
      category: "System / Network",
      tag: "複雜系統",
      description: "處理 Mesh Router 上的網路安全展示與家長監控。優化 QoS 網速調節邏輯，將複雜設定直覺化。",
      icon: <ShieldCheck className="w-6 h-6" />,
      highlight: "高負載資訊的層級優化",
      details: {
        team: "產品開發團隊",
        role: "介面層級梳理、QoS 邏輯簡化、Design System 維護",
        features: ["即時網路威脅監控", "家長控制權限管理", "QoS 裝置優先權拖拉排序"],
        challenge: "將專業的網管功能轉化為家庭用戶也能輕鬆上手的圖形化介面。"
      }
    }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // 考慮到固定導航欄的高度
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.dark} font-sans selection:bg-orange-100 selection:text-orange-600`}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            CINDY <span className="text-orange-500">H.</span>
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-slate-500">
            <button onClick={() => scrollTo('about')} className="hover:text-orange-500 transition-colors">關於我</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-orange-500 transition-colors">作品集</button>
            <button onClick={() => scrollTo('philosophy')} className="hover:text-orange-500 transition-colors">設計哲學</button>
            <a href="mailto:swi963@gmail.com" className={`px-4 py-2 ${theme.primaryBg} text-white rounded-full ${theme.hoverBg} transition-all shadow-lg shadow-orange-500/20`}>聯絡我</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-6 flex flex-col space-y-4 shadow-xl">
            <button onClick={() => scrollTo('about')} className="text-left py-2 font-medium">關於我</button>
            <button onClick={() => scrollTo('projects')} className="text-left py-2 font-medium">作品集</button>
            <button onClick={() => scrollTo('philosophy')} className="text-left py-2 font-medium">設計哲學</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">UI/UX Designer</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            讓複雜的功能，<br className="hidden md:block" />
            變得極其<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">直覺。</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10 mx-auto md:mx-0">
            Hi, 我是 Cindy 洪馨黛。在設計時，我花 80% 的時間思考如何簡化流程。我擅長將 AI、IoT 與網通技術轉化為使用者愛不釋手的簡單體驗。
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium">
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm hover:border-orange-200 transition-colors">IoT 智慧家居</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm hover:border-orange-200 transition-colors">Mesh 系統規劃</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm hover:border-orange-200 transition-colors">AI 波形偵測應用</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm hover:border-orange-200 transition-colors">前端實作 (HTML/CSS)</span>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">精選專案 (2022-2025)</h2>
              <p className="text-slate-500">點擊「查看專案細節」了解我的設計思考與溝通面向</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  {project.icon}
                </div>
                <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider">
                  {project.tag}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <button 
                  onClick={() => scrollTo(`detail-${project.id}`)}
                  className="mt-4 flex items-center text-sm font-bold text-orange-600 group-hover:translate-x-2 transition-transform"
                >
                  查看專案細節 <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Project Sections */}
      {projects.map((project, index) => (
        <section 
          id={`detail-${project.id}`} 
          key={`detail-${project.id}`}
          className={`py-24 px-6 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              // {/* Project Visual */}
              // <div className="w-full md:w-1/2 aspect-video bg-white rounded-3xl flex items-center justify-center shadow-inner border border-slate-200 group relative overflow-hidden">
              //    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
              //    <div className="z-10 text-slate-300 flex flex-col items-center group-hover:text-orange-300 transition-colors">
              //       <div className="scale-150">{project.icon}</div>
              //       <span className="mt-4 text-xs font-bold tracking-widest uppercase text-slate-400">[ GUI Mockup Placeholder ]</span>
              //    </div>
              // </div>
                  {/* 替換後的程式碼 - 顯示真實圖片 */}
                  {/* Project Visual */}
                  <div className="w-full md:w-1/2 aspect-video bg-white rounded-3xl flex items-center justify-center shadow-lg border border-slate-100 group relative overflow-hidden">
                    {/* 💡 設計師秘訣：這裡會根據 project.id 自動抓取對應的圖片名稱 */}
                    <img 
                      src={`/${project.id}.png`} 
                      alt={project.title}
                      {/* 💡 設計師特效：滑鼠移過去時圖片會輕微放大，增加互動感 */}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      {/* 防呆機制：如果圖片讀取失敗，顯示一個簡單的提示 */}
                      onError={(e) => { e.target.src='https://via.placeholder.com/1920x1080?text=Image+Not+Found'; }}
                    />
                  </div>

              {/* Project Content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                   <span className="text-4xl font-bold text-orange-200">0{index + 1}</span>
                   <h2 className="text-3xl font-bold">{project.title}</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      <Users className="w-3 h-3 mr-1" /> 團隊規模
                    </h4>
                    <p className="text-sm font-bold text-slate-700">{project.details.team}</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      <Layout className="w-3 h-3 mr-1" /> 負責工作
                    </h4>
                    <p className="text-sm font-bold text-slate-700">{project.details.role}</p>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-4">核心互動挑戰</h4>
                  <p className="text-slate-600 leading-relaxed font-medium text-lg border-l-4 border-orange-200 pl-6">
                    {project.details.challenge}
                  </p>
                </div>

                <div className="mb-10">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">主要功能亮點</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.details.features.map((f, i) => (
                      <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-600 border border-slate-100">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-orange-500 transition-all inline-flex items-center shadow-lg shadow-slate-900/10">
                  查看完整作品介紹 <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-orange-500 font-bold tracking-[0.4em] mb-12 uppercase">Design Philosophy</h2>
          <blockquote className="text-3xl md:text-5xl font-light italic leading-snug mb-12">
            "最好的設計是感覺不到設計。<br />
            真正的智慧，應體現在<span className="text-orange-500 font-medium">零干涉</span>的順暢體驗。"
          </blockquote>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto mb-12 rounded-full"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            我不致力於增加操作負擔，而是致力於精確的簡化。
            使用者應該只需插電上線，所有複雜的技術都應在後台靜默且高效地運作。
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">與我合作？</h2>
          <p className="text-slate-500 mb-12 text-lg">
            我目前正在尋找 UI/UX 設計的相關挑戰。<br />
            如果你對我的作品感興趣，歡迎來信討論。
          </p>
          <a href="mailto:swi963@gmail.com" className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-full text-xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
            <Mail className="mr-3" /> swi963@gmail.com
          </a>
          <div className="mt-20 pt-12 border-t border-slate-100 text-slate-400 text-sm tracking-widest">
            © 2025 CINDY HUNG • DESIGNED WITH INTUITION
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
