import React from 'react';
import { apostilaImage, whatsappLink } from '../constants/site';

const Apostila: React.FC = () => (
  <section id="apostila" className="scroll-mt-24 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div className="mx-auto w-full max-w-[330px] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/70 shadow-[0_16px_44px_rgba(0,0,0,0.45)]">
        <img
          src={apostilaImage}
          alt="Capa da apostila oficial de Taekwondo"
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400 sm:text-sm">Confira nosso material de apoio</p>
        <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
          <span className="block">Apostila Introdutória de</span>
          <span className="mt-1 block text-amber-400">Taekwondo</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-zinc-200 sm:text-lg sm:leading-relaxed lg:text-[1.7rem] lg:leading-relaxed">
          Nossa apostila introdutória para faixas brancas, te coloca no mundo do Taekwondo, ensinando a história, terminologias em coreano e o básico para começar!
        </p>
        <p className="mt-5 border-l-2 border-amber-400 pl-4 text-lg font-semibold text-amber-300 sm:text-xl">
          Base sólida para evolução real.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-300 sm:w-auto sm:text-base"
        >
          Quero receber informações
        </a>
      </div>
    </div>
  </section>
);

export default Apostila;
