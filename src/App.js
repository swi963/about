import { Analytics } from "@vercel/analytics/react"
import React, { useState, useEffect } from 'react';
import { Mail, ChevronRight, Menu, X, Cpu, Home, ShieldCheck, Wifi, ExternalLink, Users, Layout, Smartphone, ArrowRight, Palette, Globe, Eye } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('main'); // 'main' or 'visual'

  // Figma 簡報連結
  const figmaLink = "https://www.figma.com/deck/GCZwMDI9SoSrYBjbTR1iuL";

  // 配色方案
  const theme = {
    primary: 'text-orange-500',
    primaryBg: 'bg-orange-500',
    hoverBg: 'hover:bg-orange-600',
    dark: 'text-slate-800',
    lightText: 'text-slate-500',
    bg: 'bg-slate-50',
  };

  const appProjects = [
    {
      id: "doorbell",
      title: "Smart Doorbell App",
      category: "IoT / Security",
      tag: "CES 展示作品",
      description: "針對北美地區設計，優化包裹偵測與安全預警流程。在 50 人團隊中負責 App 流程規劃與 Wireframe 製作。",
      icon: <Home className="w-6 h-6" />,
      details: {
        team: "50人 (含軟硬體、PM、Leader)",
        role: "App 流程規劃、Wireframe 文件製作、交付 GUI 製作",
        features: ["AI 包裹偵測通知", "自訂偵測區域", "事件紀錄介面"],
        challenge: "在複雜的網路環境下，確保警示通知能即時送達，並讓用戶能快速判斷包裹安全性。"
      }
    },
    {
      id: "sensing",
      title: "Wi-Fi Sensing App",
      category: "AI / Sensing",
      tag: "前瞻技術",
      description: "利用 Mesh 設備間的波形偵測呼吸、睡眠與動作。將抽象技術轉換為溫暖且具隱私保護的健康監測體驗。",
      icon: <Wifi className="w-6 h-6" />,
      details: {
        team: "研發實驗團隊 10 人",
        role: "UX 互動定義、波形數據視覺化、隱私保護機制設計",
        features: ["呼吸與心跳偵測 UI", "睡眠品質分析報告", "動作偵測安全警報"],
        challenge: "針對不喜歡被攝影監控的用戶，提供一種隱私性高的居家安全偵測方式。"
      }
    },
    {
      id: "mesh",
      title: "Cybersecurity & Mesh",
      category: "System / Network",
      tag: "複雜系統",
      description: "處理 Mesh Router 上的網路安全展示與家長監控。優化 QoS 網速調節，並結合 IoT 智慧控制。",
      icon: <ShieldCheck className="w-6 h-6" />,
      details: {
        team: "產品開發團隊 20 人",
        role: "介面層級梳理、智慧控制多功能整合",
        features: ["即時網路威脅監控", "家長控制權限管理", "QoS 優先權設定"],
        challenge: "將複雜的網管功能轉化為家庭用戶也能輕鬆上手的圖形化介面。"
      }
    }
  ];

  const visualProjects = [
    {
      id: "web-industrial",
      title: "Industrial Automation Official Web",
      category: "Website Design / Coding",
      tag: "品牌視覺重塑",
      description: "以 brand 橘色與咖啡色調為主進行設計，廠區照片較複雜，因此以灰階色調呈現、滑過再顯示色彩。",
      features: ["網站地圖規劃", "Sketch 繪製提案", "網站實作 (HTML/CSS via Bootstrap)"],
      challenge: "如何在傳統工業品牌中導入現代感的視覺語彙，並平衡複雜的實景照片。"
    },
    {
      id: "web-medical-brand",
      title: "Medical Device Official Web",
      category: "Website Design / Branding",
      tag: "醫療器材品牌",
      description: "透過降低飽和度與調整紅色比例，展現值得信賴且前衛專業的品牌形象。選用抽象概念素材示意產品功能。",
      features: ["網站地圖規劃", "Sketch 繪製提案", "產品拍攝與文案撰寫", "網站實作 (HTML/CSS via Bootstrap)"],
      challenge: "醫療品牌需兼具「信任感」與「前衛感」，色彩與素材的挑選至關重要。"
    },
    {
      id: "web-acloud",
      title: "Clouder Official Web Design",
      category: "Website Design / Cloud Service",
      tag: "擎雲數位科技",
      description: "針對雲端解決方案商 Clouder 設計，以深藍與科技藍為主調，強化安全與專業感，優化雲端服務的資訊展示。 ",
      features: ["視覺風格定義", "響應式介面設計 (RWD)", "資訊架構優化", "UI 標註交付"],
      challenge: "將抽象的「雲端服務」與「數據安全」具象化為易於理解的圖像與資訊方塊。"
    },
    {
      id: "web-hospital",
      title: "Hospital UGY System Platform",
      category: "UI Design / Internal System",
      tag: "奇美醫院專案",
      description: "針對醫學生歷程設計的管理平台，將繁瑣的學生歷程數據轉化為易於管理與檢視的資訊儀表板。",
      features: ["後台系統 UI 設計", "使用者路徑規劃", "資訊層級梳理"],
      challenge: "醫護人員工作繁忙，介面必須極致簡化且資訊明確，減少搜尋資料的時間。"
    }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const switchPage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openFigma = () => {
    window.open(figmaLink, '_blank');
  };

  return (
    <>
      {/* Analytics 組件放在這裡最安全，不會影響佈局 */}
      <Analytics />

      <div className={`min-h-screen ${theme.bg} ${theme.dark} font-sans selection:bg-orange-100 selection:text-orange-600 transition-colors duration-500`}>
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
            <div className="text-xl font-bold tracking-tight cursor-pointer" onClick={() => switchPage('main')}>
              CINDY <span className="text-orange-500">H.</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-slate-500">
              {activePage === 'main' ? (
                <>
                  <button onClick={() => scrollTo('about')} className="hover:text-orange-500 transition-colors">關於我</button>
                  <button onClick={() => scrollTo('projects')} className="hover:text-orange-500 transition-colors">App 作品集</button>
                  <button onClick={() => scrollTo('philosophy')} className="hover:text-orange-500 transition-colors">設計哲學</button>
                </>
              ) : (
                <button onClick={() => switchPage('main')} className="hover:text-orange-500 transition-colors">返回首頁</button>
              )}
              <button 
                onClick={() => switchPage('visual')} 
                className={`${activePage === 'visual' ? 'text-orange-500 font-bold' : ''} hover:text-orange-500 transition-colors`}
              >
                網站設計
              </button>
              <a href="mailto:swi963@gmail.com" className={`px-4 py-2 ${theme.primaryBg} text-white rounded-full ${theme.hoverBg} transition-all shadow-lg shadow-orange-500/20`}>聯絡我</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-b border-slate-200 p-6 flex flex-col space-y-4 shadow-xl">
              {activePage === 'main' ? (
                <>
                  <button onClick={() => scrollTo('about')} className="text-left py-2 font-medium">關於我</button>
                  <button onClick={() => scrollTo('projects')} className="text-left py-2 font-medium">App 作品集</button>
                </>
              ) : (
                <button onClick={() => switchPage('main')} className="text-left py-2 font-medium">返回首頁</button>
              )}
              <button onClick={() => switchPage('visual')} className={`text-left py-2 font-medium ${activePage === 'visual' ? 'text-orange-500' : ''}`}>網站設計作品</button>
            </div>
          )}
        </nav>

        {activePage === 'main' ? (
          <>
            {/* Main Hero Section */}
            <section id="about" className="relative pt-48 pb-32 px-6 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(166deg, #FFE0B6 0%, #F3FFDA 100%)', mixBlendMode: 'multiply' }}></div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
                <svg className="absolute top-20 right-[10%] w-24 h-24 text-orange-500/30 animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100"><rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                <svg className="absolute top-1/2 right-[15%] w-8 h-8 text-orange-500/30 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100"><rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="3" /></svg>
              </div>

              <div className="max-w-4xl mx-auto relative z-10 text-center md:text-left">
                <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.3em] mb-4">UI/UX Designer</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  讓複雜的功能，<br className="hidden md:block" />
                  變得極其<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">直覺。</span>
                </h1>
                <p className="text-xl text-slate-700 max-w-2xl leading-relaxed mb-10 mx-auto md:mx-0">
                  Hi, 我是 Cindy。在設計時，我花 80% 以上的時間思考如何簡化流程。我擅長將硬體產品、IoT與網通技術轉化為使用者愛不釋手的簡單體驗。
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <span className="px-4 py-2 bg-white/40 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">IoT 智慧家居</span>
                  <span className="px-4 py-2 bg-white/40 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">Wi-Fi Sensing 偵測應用</span>
                  <span className="px-4 py-2 bg-white/40 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">Mesh 介面規劃</span>
                </div>
              </div>
            </section>

            {/* App Projects Section */}
            <section id="projects" className="py-24 bg-white px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center md:text-left mb-16">
                  <h2 className="text-3xl font-bold mb-4">精選 App 專案 (2022-2025)</h2>
                  <p className="text-slate-500">針對跨團隊合作與 IoT 產品研發，著重互動流程與系統邏輯。</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {appProjects.map((project) => (
                    <div key={project.id} className="group relative bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
                      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">{project.icon}</div>
                      <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider">{project.tag}</div>
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.description}</p>
                      <button onClick={() => scrollTo(`detail-${project.id}`)} className="mt-4 flex items-center text-sm font-bold text-orange-600 group-hover:translate-x-2 transition-transform">
                        查看專案細節 <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* App Project Details */}
            {appProjects.map((project, index) => (
              <section id={`detail-${project.id}`} key={project.id} className={`py-24 px-6 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                <div className="max-w-6xl mx-auto">
                  <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="w-full md:w-1/2 aspect-video bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 relative group">
                      <img src={`/images/${project.id}.png`} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src='https://via.placeholder.com/1920x1080?text=App+Project+Image'; }} />
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="flex items-center gap-4 mb-6"><span className="text-4xl font-bold text-orange-200">0{index + 1}</span><h2 className="text-3xl font-bold">{project.title}</h2></div>
                      <div className="grid grid-cols-2 gap-8 mb-8">
                        <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                          <h4 className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-2"><Users className="w-3 h-3 mr-1" /> 團隊規模</h4>
                          <p className="text-sm font-bold text-slate-700">{project.details.team}</p>
                        </div>
                        <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                          <h4 className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-2"><Layout className="w-3 h-3 mr-1" /> 負責工作</h4>
                          <p className="text-sm font-bold text-slate-700">{project.details.role}</p>
                        </div>
                      </div>
                      <div className="mb-10">
                        <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-4">核心挑戰</h4>
                        <p className="text-slate-600 leading-relaxed font-medium text-lg border-l-4 border-orange-200 pl-6">{project.details.challenge}</p>
                      </div>
                      <button onClick={openFigma} className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-orange-500 transition-all inline-flex items-center">
                        查看完整作品介紹 <ExternalLink className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* Philosophy Section */}
            <section id="philosophy" className="py-24 px-6 bg-slate-900 text-white relative">
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-orange-500 font-bold tracking-[0.4em] mb-12 uppercase">Design Philosophy</h2>
                <blockquote className="text-3xl md:text-5xl font-light italic leading-snug mb-12">
                  "最好的設計是感覺不到設計。<br />
                  真正的智慧，應體現在<span className="text-orange-500 font-medium">零干涉</span>的順暢體驗。"
                </blockquote>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                  我專注於簡化複雜流程，並優化使用者體驗。與其增加操作負擔，我致力於讓技術在後台靜默且高效地運作。
                </p>
              </div>
            </section>
          </>
        ) : (
          /* Website Design Page */
          <section className="pt-40 pb-24 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <button onClick={() => switchPage('main')} className="text-slate-400 hover:text-orange-500 mb-4 flex items-center font-bold group">
                  <ChevronRight className="w-4 h-4 rotate-180 mr-1 group-hover:-translate-x-1 transition-transform" /> 返回 App 作品集
                </button>
                <h1 className="text-5xl font-bold mb-4">網站設計作品</h1>
                <p className="text-slate-500 text-xl">Official Website Design & System Visuals</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {visualProjects.map((project, idx) => (
                  <div key={project.id} className="group flex flex-col">
                    {/* Website Image Container */}
                    <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden mb-6 relative shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-500">
                      <img 
                        src={`/images/${project.id}.png`} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => { e.target.src='https://via.placeholder.com/1920x1080?text=Web+Design+Project'; }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full uppercase tracking-widest">{project.tag}</span>
                        <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">{project.category}</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 mb-8">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">負責內容：</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {project.features.map((item, i) => (
                            <li key={i} className="text-sm flex items-center text-slate-500">
                              <div className="w-1 h-1 bg-orange-500 rounded-full mr-2"></div> {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto">
                        <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">設計挑戰</h4>
                        <p className="text-sm text-slate-500 italic mb-6">"{project.challenge}"</p>
                        <button 
                          onClick={openFigma}
                          className="flex items-center text-sm font-bold hover:text-orange-500 transition-colors"
                        >
                          看其他作品 <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-24 p-12 bg-orange-50 rounded-[40px] text-center">
                <h2 className="text-2xl font-bold mb-4">對網站設計感興趣？</h2>
                <p className="text-slate-500 mb-8">除了 UI/UX 流程，我也具備將品牌語彙轉化為網站實作的能力。</p>
                <button onClick={() => switchPage('main')} className="px-8 py-3 bg-white text-orange-600 rounded-full font-bold shadow-sm hover:shadow-md transition-all">
                  看更多 App 的邏輯設計
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="py-24 px-6 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">與我合作？</h2>
            <p className="text-slate-500 mb-12 text-lg">目前正在尋找 UI/UX 設計的相關挑戰。如果你對我的作品感興趣，歡迎來信討論。</p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
              <a href="mailto:swi963@gmail.com" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-full text-xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                <Mail className="mr-3" /> swi963@gmail.com
              </a>
              <button 
                onClick={() => switchPage(activePage === 'main' ? 'visual' : 'main')} 
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 text-slate-600 rounded-full text-xl font-bold hover:bg-slate-200 transition-all"
              >
                {activePage === 'main' ? '查看網站設計' : '返回 App 作品'}
              </button>
            </div>
            <div className="mt-20 pt-12 border-t border-slate-100 text-slate-400 text-sm tracking-widest">
              © 2025 CINDY HONG • DESIGNED WITH INTUITION
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
