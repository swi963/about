import { Analytics } from "@vercel/analytics/react";
import React, { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

const Visual = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [comparisonPosition, setComparisonPosition] = useState(75);

  const featuredProject = {
    id: "web-skgas",
    title: "欣興天然氣官網",
    category: "Website Redesign / Before & After",
    tag: "官網設計",
    description: "聚焦資訊重整與拍照報度功能優化，讓使用者更快找到常用服務，並提升整體品牌專業度與可讀性。",
    beforeImage: "/images/sg_before.png",
    afterImage: "/images/sg_after.png",
    features: ["導入AI協作網站改版", "Figma Design System", "Figma MCP交付", "Vibe coding實作"],
    challenge: "嘗試使用Figma設計系統配合tailwind CSS規則來實現AI Vibe Coding，完成不需寫程式也可實現網站改版。"
  };

  const visualProjects = [
    {
      id: "web-industrial",
      title: "Industrial Automation Official Web",
      category: "Website Design / Coding",
      tag: "官網設計",
      description: "以 brand 橘色與咖啡色調為主進行設計，廠區照片較複雜，因此以灰階色調呈現、滑過再顯示色彩。",
      features: ["網站地圖規劃", "Sketch 繪製提案", "網站實作 (HTML/CSS via Bootstrap)"],
      challenge: "如何在傳統工業品牌中導入現代感的視覺語彙，並平衡複雜的實景照片。"
    },
    {
      id: "web-medical-brand",
      title: "Medical Device Official Web",
      category: "Website Design / Branding",
      tag: "官網設計",
      description: "透過降低飽和度與調整紅色比例，展現值得信賴且前衛專業的品牌形象。選用抽象概念素材示意產品功能。",
      features: ["網站地圖規劃", "Sketch 繪製提案", "產品拍攝與文案撰寫", "網站實作 (HTML/CSS via Bootstrap)"],
      challenge: "醫療品牌需兼具「信任感」與「前衛感」，色彩與素材的挑選至關重要。"
    },
    {
      id: "web-acloud",
      title: "Clouder Official Web Design",
      category: "Website Design / Cloud Service",
      tag: "官網設計, CIS",
      description: "針對雲端解決方案商 Clouder 設計，以深藍與科技藍為主調，強化安全與專業感，優化雲端服務的資訊展示。 ",
      features: ["視覺風格定義", "響應式介面設計 (RWD)", "資訊架構優化", "UI 標註交付"],
      challenge: "將抽象的「雲端服務」與「數據安全」具象化為易於理解的圖像與資訊方塊。"
    },
    {
      id: "web-hospital",
      title: "Hospital UGY System Platform",
      category: "UI Design / Internal System",
      tag: "官網設計, 系統介面",
      description: "針對醫學生歷程設計的管理平台，將繁瑣的學生歷程數據轉化為易於管理與檢視的資訊儀表板。",
      features: ["後台系統 UI 設計", "使用者路徑規劃", "資訊層級梳理"],
      challenge: "醫護人員工作繁忙，介面必須極致簡化且資訊明確，減少搜尋資料的時間。"
    },
    {
      id: "pc-tomolyze",
      title: "PET影像辨識軟體",
      category: "Medical Software / UI Design",
      tag: "系統介面",
      description: "正子斷層掃描(PET)的影像閱讀軟體，提供醫生操作圈選病灶與撰寫報告。LOGO已註冊商標，因此有針對灰階效果與暗色背景做調整。",
      features: ["影像檢視介面規劃", "資訊層級整理", "操作動線優化", "Logo設計"],
      challenge: "在專業醫療情境中平衡高資訊密度與操作直覺性，協助使用者快速定位重點影像。"
    }
  ];

  return (
    <>
      <Analytics />

      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-orange-100 selection:text-orange-600 transition-colors duration-500">
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
            <a href="/" className="text-xl font-bold tracking-tight">
              CINDY <span className="text-orange-500">H.</span>
            </a>

            <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-slate-500">
              <a href="/" className="hover:text-orange-500 transition-colors">App 作品集</a>
              <a href="/visual" className="text-orange-500 font-bold hover:text-orange-500 transition-colors">網站設計</a>
              <a href="mailto:swi963@gmail.com" className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">聯絡我</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-b border-slate-200 p-6 flex flex-col space-y-4 shadow-xl">
              <a href="/" className="text-left py-2 font-medium">App 作品集</a>
              <a href="/visual" className="text-left py-2 font-medium text-orange-500">網站設計作品</a>
              <a href="mailto:swi963@gmail.com" className="text-left py-2 font-medium">聯絡我</a>
            </div>
          )}
        </nav>

        <section className="pt-40 pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <a href="/" className="text-slate-400 hover:text-orange-500 mb-4 inline-flex items-center font-bold group">
                <ChevronRight className="w-4 h-4 rotate-180 mr-1 group-hover:-translate-x-1 transition-transform" /> 返回 App 作品集
              </a>
              <h1 className="text-5xl font-bold mb-4">網站設計作品</h1>
              <p className="text-slate-500 text-xl">Official Website Design & System Visuals</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="group flex flex-col">
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-200 border border-slate-100 mb-6 shadow-sm hover:shadow-xl transition-all duration-500">
                  <img
                    src={featuredProject.beforeImage}
                    alt={`${featuredProject.title} Before`}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/1920x1080?text=Before+Version'; }}
                  />

                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - comparisonPosition}% 0 0)` }}
                  >
                    <img
                      src={featuredProject.afterImage}
                      alt={`${featuredProject.title} After`}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/1920x1080?text=After+Version'; }}
                    />
                  </div>

                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_0_2px_rgba(15,23,42,0.08)]"
                    style={{ left: `${comparisonPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-700 border border-slate-200 shadow-md flex items-center justify-center font-bold text-xs">
                      ↔
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-xs tracking-wider">BEFORE</div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs tracking-wider">AFTER</div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={comparisonPosition}
                    onChange={(e) => setComparisonPosition(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize"
                    aria-label="調整 before after 比較"
                  />
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded-full uppercase tracking-widest">{featuredProject.tag}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredProject.title}</h3>

                  <div className="mt-auto">
                    <hr className="border-slate-200 mb-4" />
                    <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">concept</h4>
                    <p className="text-sm text-slate-500 italic mb-6">"{featuredProject.challenge}"</p>
                    <a
                      href="https://shinkao.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-orange-500 transition-all"
                    >
                      查看網站 →
                    </a>
                  </div>
                </div>
              </div>

              {visualProjects.map((project) => (
                <div key={project.id} className="group flex flex-col">
                  <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden mb-6 relative shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-500">
                    <img
                      src={`/images/${project.id}.png`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/1920x1080?text=Web+Design+Project'; }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tag.split(',').map((tagItem) => {
                        const label = tagItem.trim();
                        const colorClass =
                          label === '系統介面'
                            ? 'bg-green-100 text-green-700'
                            : label === 'CIS'
                              ? 'bg-orange-100 text-orange-600'
                              : label === '官網設計'
                                ? 'bg-slate-200 text-slate-600'
                              : 'bg-orange-100 text-orange-600';

                        return (
                          <span key={label} className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-widest ${colorClass}`}>
                            {label}
                          </span>
                        );
                      })}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>

                    <div className="mt-auto">
                      <hr className="border-slate-200 mb-4" />
                      <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">concept</h4>
                      <p className="text-sm text-slate-500 italic mb-6">"{project.challenge}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <footer className="py-24 px-6 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <p className="text-slate-500 mb-12 text-lg">如果你有小型網頁的客製化需求，也可以找我談外包合作——歡迎與我聯繫！</p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
              <a href="mailto:d3find.cindy@gmail.com" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-full text-xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                設計找 Cindy
              </a>
              <a href="/" className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 text-slate-600 rounded-full text-xl font-bold hover:bg-slate-200 transition-all">
                查看APP作品
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

export default Visual;