import React, { useEffect } from 'react';

const Sensing = () => {

  useEffect(() => {
    document.title = 'Wi-Fi Sensing App';
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-600">
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-12">
        <header className="relative overflow-hidden rounded-[40px] bg-white text-center">
          <div className="absolute inset-0 bg-slate-100 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90"></div>
          <div className="relative p-12 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500 mb-4">Design Process Showcase</p>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">Wi-Fi Sensing App</h1>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              本專案主要的設計過程包括：前期規劃、流程優化與最終 UI 設計。</p>
          </div>
        </header>

        <section className="rounded-[40px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="grid lg:grid lg:grid-cols-[1.2fr_1.8fr] gap-6 lg:gap-10 items-center p-6 lg:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500 mb-4">01 Research</p>
              <h2 className="text-3xl font-bold mb-6">前期規劃</h2>
              <p className="text-slate-600 leading-relaxed">
                由於有兩種不同的應用情境（健康監測與安全警報），我們在規劃階段特別注意如何讓使用者能夠清楚區分並理解這些功能，確保在同一 App 中提供一致且直觀的使用體驗。
              </p>
            </div>
            <div className="overflow-hidden rounded-[32px] bg-slate-100 aspect-[3/2]">
              <img
                src="/images/part1_research.png"
                alt="Sensing research illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="rounded-[40px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="grid lg:grid-cols-[1.8fr_1.2fr] gap-6 lg:gap-10 items-center p-6 lg:p-10">
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500 mb-4">02 Prototype / Wireframe</p>
              <h2 className="text-3xl font-bold mb-6">流程優化</h2>
              <p className="text-slate-600 leading-relaxed">
                產品初始的版本將應用情境與設備安裝串再一起，接手改版後我將安裝設備與應用情境的選擇分開，縮短每個操作的步驟，可切換不同應用情境，讓使用上更具彈性，也減少了安裝等候時間過長的問題。
              </p>
            </div>
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-[32px] bg-slate-100 aspect-[3/2]">
                <img
                  src="/images/part2_wireframe_2.png"
                  alt="Wi-Fi Sensing prototype wireframe 2"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[40px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="grid lg:grid lg:grid-cols-[1.2fr_1.8fr] gap-6 lg:gap-10 items-center p-6 lg:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500 mb-4">03 Final Mobile UI Design</p>
              <h2 className="text-3xl font-bold mb-6">UI 介面設計</h2>
              <p className="text-slate-600 leading-relaxed">
                最終 UI 將感測結果、安全警示等訊息整合在一個簡潔的儀表板中，讓使用者能在忙碌生活中快速掃描健康狀態。
              </p>
                <p className="mt-4 text-sm text-slate-500">
                    本產品UI設計由另一位設計師負責，這裡展示的為我在專案中協助優化的部分UI畫面。
                </p>
            </div>
            <div className="overflow-hidden rounded-[32px] bg-[#f1f1f1] aspect-video">
              <img
                src="/images/sensing.png"
                alt="Wi-Fi Sensing App main image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <div className="text-center">
          <button
            onClick={() => { window.location.href = '/#detail-sensing'; }}
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-10 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            返回 Wi-Fi Sensing App 專案內容
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sensing;
