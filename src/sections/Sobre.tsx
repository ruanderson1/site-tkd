import React from 'react';
import { pillars } from '../constants/site';

const Sobre: React.FC = () => (
  <section id="sobre" className="scroll-mt-24 bg-zinc-900 px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-3xl font-black text-white sm:text-4xl">Sobre o Dojang</h2>
      <p className="mt-4 max-w-3xl text-zinc-300">
        A metodologia equipe Rodrigo Oliveira TAEKWONDO une técnica e condicionamento físico e abraça objetivos diferentes, é para todo mundo, para quem pensa em competir e para quem busca uma nova forma de atividade física.
      </p>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {pillars.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-3 sm:p-5 transition hover:border-amber-400/40"
          >
            <div className="mb-3 sm:mb-4 inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-amber-400/90 font-black text-zinc-950">
              {item.title[0]}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-zinc-300">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Sobre;
