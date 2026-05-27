import { Analytics } from "@vercel/analytics/react";
import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, Home, ShieldCheck, Wifi, Users, Layout, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const theme = {
    primaryBg: 'bg-orange-500',
    hoverBg: 'hover:bg-orange-600',
    dark: 'text-slate-800',
    bg: 'bg-slate-50',
  };

  const appProjects = [
    {
      id: "mesh",
      route: "/mesh",
      title: "Mesh router",
      category: "System / Network",
      tag: "複雜系統",
      description: "整合多個不同開發團隊與產品，規劃出完整的Mesh router產品。",
      icon: <ShieldCheck className="w-6 h-6" />,
      details: {
        team: "4個開發團隊約 20 人",
        role: "App整合提案、流程規劃、UI 介面設計",
        features: ["即時網路威脅監控", "家長控制權限管理", "QoS 優先權設定"],
        challenge: "整合多個不同開發團隊的功能，規劃出完整的家用Mesh router，減少每年需重複開發與維護的時間。"
      }
    },
    {
      id: "sensing",
      route: "/sensing",
      title: "Wi-Fi Sensing App",
      category: "AI / Sensing",
      tag: "前瞻技術",
      description: "將抽象技術轉換為溫暖且具隱私保護的健康監測體驗。優化使用流程，並改善介面設計。",
      icon: <Wifi className="w-6 h-6" />,
      details: {
        team: "研發實驗團隊 10 人",
        role: "App 流程規劃、Wireframe 文件製作",
        features: ["呼吸與心跳偵測 UI", "睡眠品質分析報告", "動作偵測安全警報"],
        challenge: "將兩種不同應用情境（健康監測與安全警報）整合在同一 App 中，並確保使用者能夠輕鬆理解與使用這些複雜的感測功能。"
      }
    },
    {
      id: "doorbell",
      route: "/doorbell",
      title: "Smart Doorbell App",
      category: "IoT / Security",
      tag: "CES 展示作品",
      description: "針對北美地區設計，優化包裹偵測與安全預警流程。負責 App 流程規劃與 Wireframe 製作。",
      icon: <Home className="w-6 h-6" />,
      details: {
        team: "50人 (含軟硬體、PM、Leader)",
        role: "App 流程規劃、Wireframe 文件製作",
        features: ["AI 包裹偵測通知", "自訂偵測區域", "事件紀錄介面"],
        challenge: "針對北美當地實際使用情境，保護私人包裹的安全，並透過App遠端提供即時回應機制。"
      }
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

  const goToSection = (id) => {
    scrollTo(id);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace('#', '');
    const timer = setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Analytics />

      <div className={`min-h-screen ${theme.bg} ${theme.dark} font-sans selection:bg-orange-100 selection:text-orange-600 transition-colors duration-500`}>
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
            <div className="text-xl font-bold tracking-tight cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              CINDY <span className="text-orange-500">H.</span>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-slate-500">
              <button onClick={() => goToSection('projects')} className="hover:text-orange-500 transition-colors">App 作品集</button>
              <a href="/visual" className="hover:text-orange-500 transition-colors">網站設計</a>
              <a href="mailto:swi963@gmail.com" className={`px-4 py-2 ${theme.primaryBg} text-white rounded-full ${theme.hoverBg} transition-all shadow-lg shadow-orange-500/20`}>聯絡我</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-b border-slate-200 p-6 flex flex-col space-y-4 shadow-xl">
              <button onClick={() => goToSection('projects')} className="text-left py-2 font-medium">App 作品集</button>
              <a href="/visual" className="text-left py-2 font-medium">網站設計作品</a>
            </div>
          )}
        </nav>

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
            <p className="text-xl text-slate-700 max-w-2xl leading-relaxed mb-10 mx-auto md:mx-0 font-light">
              Hi, 我是 Cindy。我相信好的設計來自持續的對話——從產品定位到流程細節，我習慣與團隊反覆溝通，將抽象的需求梳理成清晰易懂的體驗。
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="px-4 py-2 bg-white/40 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">IoT 智慧家居</span>
              <span className="px-4 py-2 bg-white/40 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">Wi-Fi Sensing 偵測應用</span>
              <span className="px-4 py-2 bg-white/40 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">Mesh 介面規劃</span>
            </div>
          </div>
        </section>

        <section id="projects" className="pt-24 pb-8 bg-white px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center md:text-left mb-8">
              <h2 className="text-3xl font-bold mb-4">精選 App 專案 (2022-2025)</h2>
              <p className="text-slate-500">以下介紹三個App開發專案，從概念到實作的完整過程。</p>
            </div>
          </div>
        </section>

        {appProjects.map((project, index) => (
          <section id={`detail-${project.id}`} key={project.id} className={`py-24 px-6 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="w-full md:w-1/2 aspect-video bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 relative group">
                  <img src={`/images/${project.id}.png`} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = 'https://via.placeholder.com/1920x1080?text=App+Project+Image'; }} />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-6"><span className="text-4xl font-bold text-orange-200">0{index + 1}</span><h2 className="text-3xl font-bold">{project.title}</h2></div>
                  <div className="mb-10">
                    <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-4">核心挑戰</h4>
                    <p className="text-slate-600 leading-relaxed font-medium text-lg border-l-4 border-orange-200 pl-6">{project.details.challenge}</p>
                  </div>
                  <button onClick={() => { window.location.href = project.route; }} className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-orange-500 transition-all inline-flex items-center">
                    查看完整作品 <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section id="philosophy" className="py-24 px-6 text-slate-700 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(166deg, #DBEAFE 0%, #EDE9FE 100%)', mixBlendMode: 'multiply' }}></div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-orange-500/80 font-bold tracking-[0.4em] mb-12 uppercase">Design Philosophy</h2>
            <blockquote className="text-2xl md:text-4xl font-extralight italic leading-loose mb-12 text-slate-700 max-w-3xl mx-auto">
              "最好的設計是感覺不到設計。<br />
              真正的智慧，應體現在<span className="text-orange-500/80">零干涉</span>的順暢體驗。"
            </blockquote>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              這是我一直在追求的方向。我喜歡思考如何簡化複雜的流程，不只是讓介面看起來簡單，而是讓使用者不需要多想，就能順著直覺走下去。
            </p>
          </div>
        </section>

        <footer className="py-24 px-6 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <p className="text-slate-500 mb-12 text-lg">目前正在尋找 UI/UX 設計的相關工作。如果你對我的作品感興趣，歡迎與我聯繫。</p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
              <a href="mailto:swi963@gmail.com" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-full text-xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                <Mail className="mr-3" /> swi963@gmail.com
              </a>
              <a href="/visual" className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 text-slate-600 rounded-full text-xl font-bold hover:bg-slate-200 transition-all">
                查看網站設計
              </a>
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