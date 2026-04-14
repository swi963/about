import React, { useEffect, useState } from 'react';

const Mesh = () => {
  const [prototypeIndex, setPrototypeIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  const prototypeSlides = [
    {
      src: '/images/part2_wireframe_1.png',
      alt: 'Prototype wireframe illustration 1',
    },
    {
      src: '/images/part2_wireframe_2.png',
      alt: 'Prototype wireframe illustration 2',
    },
  ];

  const uiVideos = [
    {
      src: '/images/mesh.mov',
      poster: '/images/part3_ui.png',
      alt: 'Mesh router UI video',
    },
    {
      src: '/images/cybersecurity.mov',
      poster: '/images/part3_ui.png',
      alt: 'Cybersecurity App UI video',
    },
  ];

  useEffect(() => {
    document.title = 'Mesh router';
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrototypeIndex((current) => (current + 1) % prototypeSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [prototypeSlides.length]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-600">
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-12">
        <header className="relative overflow-hidden rounded-[40px] bg-white text-center">
          <div className="absolute inset-0 bg-slate-100 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90"></div>
          <div className="relative p-12 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500 mb-4">Design Process Showcase</p>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">Mesh router</h1>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              本專案從產品整合、Prototype建立到最終的UI設計，說明我在團隊中負責的角色與如何和工程團隊溝通的過程。
            </p>
          </div>
        </header>

        <section className="rounded-[40px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="grid lg:grid lg:grid-cols-[1.2fr_1.8fr] gap-6 lg:gap-10 items-center p-6 lg:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500 mb-4">01 Research</p>
              <h2 className="text-3xl font-bold mb-6">產品整合</h2>
              <p className="text-slate-600 leading-relaxed">
                本專案整合了三年來多個Mesh相關的軟體應用，透過消費者的實際需求來規劃產品，旨在讓抽象的概念能更落地實踐在市場上。
              </p>
            </div>
            <div className="overflow-hidden rounded-[32px] bg-slate-100 aspect-[3/2]">
              <img
                src="/images/part1_research.png"
                alt="Research illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="rounded-[40px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="grid lg:grid-cols-[1.8fr_1.2fr] gap-6 lg:gap-10 items-center p-6 lg:p-10">
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500 mb-4">02 Prototype / Wireframe</p>
              <h2 className="text-3xl font-bold mb-6">Prototype建立</h2>
              <p className="text-slate-600 leading-relaxed">
                透過Prototype模擬App實際操作，確認流程後再建立Wireframe開發文件，與工程人員保持良好溝通，確保設計與開發能符合使用者需求與產品目標。
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
                在設計上將每個功能依照不同權重擺放在適當位置，並保留足夠空間讓使用者專注於重要資訊。
              </p>
              <p className="mt-4 text-sm text-slate-500">
                第二個影片為子專案 Cybersecurity App 的 UI 設計展示。
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="overflow-hidden rounded-[32px] bg-[#f1f1f1]">
                <div
                  className="flex h-[400px] w-full max-w-[360px] transition-transform duration-500"
                  style={{ transform: `translateX(-${videoIndex * 100}%)` }}
                >
                  {uiVideos.map((video, idx) => (
                    <div key={idx} className="flex-none w-full h-full">
                      <video
                        src={video.src}
                        poster={video.poster}
                        className="h-full w-full object-contain"
                        controls
                        playsInline
                        preload="metadata"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                {uiVideos.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setVideoIndex(idx)}
                    className={`${videoIndex === idx ? 'bg-orange-500' : 'bg-slate-300'} h-3 w-3 rounded-full transition-all duration-200`}
                    aria-label={`Video ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <button
            onClick={() => { window.location.href = '/#detail-mesh'; }}
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-10 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            返回 Mesh router 專案內容
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mesh;
