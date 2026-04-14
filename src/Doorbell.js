import React, { useEffect, useState } from 'react';

const Doorbell = () => {
  const [researchIndex, setResearchIndex] = useState(0);
  const [prototypeIndex, setPrototypeIndex] = useState(0);
  const [uiImageIndex, setUiImageIndex] = useState(0);

  const researchSlides = [
    {
      src: '/images/research_doorbell.png',
      alt: 'Doorbell research illustration 1',
    },
    {
      src: '/images/part1_research2.png',
      alt: 'Doorbell research illustration 2',
    },
  ];

  const prototypeSlides = [
    {
      src: '/images/part2_wireframe_1.png',
      alt: 'Smart Doorbell prototype wireframe 1',
    },
    {
      src: '/images/part2_wireframe_2.png',
      alt: 'Smart Doorbell prototype wireframe 2',
    },
  ];

  const uiImages = [
    {
      src: '/images/doorbell0.png',
      alt: 'Smart Doorbell App main image 0',
    },
    {
      src: '/images/doorbell.png',
      alt: 'Smart Doorbell App main image 1',
    },
    {
      src: '/images/doorbell2.png',
      alt: 'Smart Doorbell App main image 2',
    },
  ];

  useEffect(() => {
    document.title = 'Smart Doorbell App';
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrototypeIndex((current) => (current + 1) % prototypeSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [prototypeSlides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setUiImageIndex((current) => (current + 1) % uiImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [uiImages.length]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-600">
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-12">
        <header className="relative overflow-hidden rounded-[40px] bg-white text-center">
          <div className="absolute inset-0 bg-slate-100 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90"></div>
          <div className="relative p-12 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500 mb-4">Design Process Showcase</p>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">Smart Doorbell App</h1>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              這裡展示本專案的三大設計階段：Research、Prototype / Wireframe 與 Final UI Design。從市場分析到產品落地實踐的完整過程。
            </p>
          </div>
        </header>

        <section className="rounded-[40px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="grid lg:grid lg:grid-cols-[1.2fr_1.8fr] gap-6 lg:gap-10 items-center p-6 lg:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500 mb-4">01 Research</p>
              <h2 className="text-3xl font-bold mb-6">市場調研與競品分析</h2>
              <p className="text-slate-600 leading-relaxed">
                針對競品App互動功能上的優缺點進行評估，並且從中找出使用者的痛點與需求，作為後續設計的依據。此次在登入流程做了深度評估，盡可能在安全驗證與使用便利性之間取得平衡，優化操作體驗。
              </p>
            </div>
            <div>
              <div className="overflow-hidden rounded-[32px] bg-slate-100 aspect-[3/2]">
                <div
                  className="flex transition-transform duration-700 h-full"
                  style={{
                    width: `${researchSlides.length * 100}%`,
                    transform: `translateX(-${researchIndex * (100 / researchSlides.length)}%)`,
                  }}
                >
                  {researchSlides.map((slide, idx) => (
                    <div key={idx} className="flex-none w-[50%] h-full">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-3">
                {researchSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setResearchIndex(idx)}
                    className={`${researchIndex === idx ? 'bg-orange-500' : 'bg-slate-300'} h-3 w-3 rounded-full transition-all duration-200`}
                    aria-label={`Research image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[40px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="grid lg:grid-cols-[1.8fr_1.2fr] gap-6 lg:gap-10 items-center p-6 lg:p-10">
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500 mb-4">02 Prototype / Wireframe</p>
              <h2 className="text-3xl font-bold mb-6">持續溝通與文檔建立</h2>
              <p className="text-slate-600 leading-relaxed">
                使用prototype工具建立互動原型，並與團隊持續溝通迭代。透過文檔記錄設計決策，確保每個階段的設計方向清晰且有據可循。
              </p>
            </div>
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-[32px] bg-slate-100 aspect-[3/2]">
                <div
                  className="flex transition-transform duration-700 h-full"
                  style={{
                    width: `${prototypeSlides.length * 100}%`,
                    transform: `translateX(-${prototypeIndex * (100 / prototypeSlides.length)}%)`,
                  }}
                >
                  {prototypeSlides.map((slide, idx) => (
                    <div key={idx} className="flex-none w-[50%] h-full">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-3">
                {prototypeSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPrototypeIndex(idx)}
                    className={`${prototypeIndex === idx ? 'bg-orange-500' : 'bg-slate-300'} h-3 w-3 rounded-full transition-all duration-200`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
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
                最終將門鈴通知、歷史影像與事件判斷進行整合，讓使用者能迅速掌握門口動態並作出適切回應。
              </p>
              <p className="mt-4 text-sm text-slate-500">
                此專案UI設計由另一位設計師負責，這裡展示的為我在專案中協助優化的部分UI畫面。
              </p>
            </div>
            <div>
              <div className="overflow-hidden rounded-[32px] bg-[#f1f1f1] aspect-video">
                <div
                  className="flex h-full transition-transform duration-700"
                  style={{
                    width: `${uiImages.length * 100}%`,
                    transform: `translateX(-${uiImageIndex * (100 / uiImages.length)}%)`,
                  }}
                >
                  {uiImages.map((image, idx) => (
                    <div key={idx} className="flex-none h-full" style={{ width: `${100 / uiImages.length}%` }}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-3">
                {uiImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setUiImageIndex(idx)}
                    className={`${uiImageIndex === idx ? 'bg-orange-500' : 'bg-slate-300'} h-3 w-3 rounded-full transition-all duration-200`}
                    aria-label={`UI image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <button
            onClick={() => { window.location.href = '/#detail-doorbell'; }}
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-10 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            返回 Smart Doorbell App 專案內容
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doorbell;
