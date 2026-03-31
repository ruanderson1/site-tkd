import React, { useState } from 'react';
import { treinoVideos } from '../constants/site';

const TreinoVideo: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  // Detecta se está em tela pequena (mobile)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const initialCount = isMobile ? 2 : 4;
  const visibleVideos = showAll ? treinoVideos : treinoVideos.slice(0, initialCount);

  return (
    <section className="bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8" id="videos">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-black text-white sm:text-3xl">Veja como funciona um treino real</h2>
        <p className="mt-3 text-zinc-300">Energia, técnica e disciplina em cada etapa da aula.</p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {visibleVideos.map((video) => (
            <div key={video.embedUrl} className="w-full overflow-hidden bg-black">
              <iframe
                className="h-[180px] sm:h-[300px] w-full"
                src={video.embedUrl}
                title={video.title}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        {treinoVideos.length > initialCount && !showAll ? (
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-md bg-amber-400 px-4 py-2 text-sm font-bold text-zinc-950 transition hover:bg-amber-300"
            >
              Ver mais
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default TreinoVideo;
