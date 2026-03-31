import React, { useState, useCallback, useMemo } from 'react';
import { galleryImages } from '../constants/site';

const IMAGES_PER_LOAD = 8;

const Gallery: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_LOAD);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const visibleImages = useMemo(() => galleryImages.slice(0, visibleCount), [visibleCount]);

  const handleShowMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + IMAGES_PER_LOAD, galleryImages.length));
      setLoading(false);
    }, 400); // Simula skeleton
  }, []);

  const openModal = useCallback((idx: number) => setModalIndex(idx), []);
  const closeModal = useCallback(() => setModalIndex(null), []);

  return (
    <section className="py-10 px-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleImages.map((src, idx) => (
          <button
            key={src}
            className="group relative overflow-hidden rounded-lg shadow-lg bg-zinc-900 focus:outline-none"
            onClick={() => openModal(idx)}
            style={{ aspectRatio: '4/3' }}
          >
            <img
              src={src}
              alt={`Foto galeria ${idx + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
              style={{ background: '#27272a' }}
            />
            {/* Skeleton */}
            {loading && (
              <div className="absolute inset-0 animate-pulse bg-zinc-800/60" />
            )}
          </button>
        ))}
        {/* Skeletons para carregamento */}
        {loading && Array.from({ length: IMAGES_PER_LOAD }).map((_, i) => (
          <div
            key={`skeleton-${i}`}
            className="rounded-lg bg-zinc-800/60 animate-pulse"
            style={{ aspectRatio: '4/3' }}
          />
        ))}
      </div>
      {visibleCount < galleryImages.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 rounded bg-amber-500 text-zinc-900 font-bold shadow hover:bg-amber-400 transition-colors"
            disabled={loading}
          >
            {loading ? 'Carregando...' : 'Ver mais'}
          </button>
        </div>
      )}
      {/* Modal/Lightbox */}
      {modalIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeModal}>
          <div className="relative max-w-3xl w-full p-4 flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img
              src={galleryImages[modalIndex]}
              alt={`Foto galeria ampliada ${modalIndex + 1}`}
              className="w-full h-auto rounded-lg shadow-xl bg-zinc-900"
              style={{ maxHeight: '80vh', objectFit: 'contain' }}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-3xl text-amber-400 hover:text-amber-300 font-bold bg-black/60 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Fechar"
              style={{zIndex: 10}}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(Gallery);
