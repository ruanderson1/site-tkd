import React from 'react';
import Gallery from '../components/Gallery';

const Galeria: React.FC = () => (
  <section id="galeria" className="scroll-mt-24 bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-3xl font-black text-white sm:text-4xl">Galeria</h2>
      <p className="mt-3 text-zinc-300">Treinos, superações e momentos marcantes no Dojang.</p>
      <div className="mt-8">
        <Gallery />
      </div>
    </div>
  </section>
);

export default Galeria;
