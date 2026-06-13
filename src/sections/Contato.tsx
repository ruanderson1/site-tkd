import React from 'react';
import { address, city, instagramLink, schedule, whatsappLink } from '../constants/site';

const Contato: React.FC = () => (
  <section id="contato" className="scroll-mt-24 bg-zinc-950 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div className="mx-auto max-w-5xl rounded-2xl border border-zinc-800 bg-zinc-900/85 p-4 sm:p-6 lg:p-10">
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1.2fr_1fr] lg:gap-8">
        <div>
          <h2 className="text-3xl font-black text-white lg:text-4xl">Contato</h2>
          <div className="mt-4 flex flex-col gap-2.5 lg:mt-5 lg:gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-amber-400 px-5 py-3 text-center text-xs font-extrabold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-300 lg:px-6 lg:py-4 lg:text-sm"
            >
              Falar no WhatsApp
            </a>
            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-3 text-center text-xs font-extrabold uppercase tracking-wide text-zinc-100 transition hover:border-zinc-500 hover:text-white lg:px-6 lg:py-4 lg:text-sm"
            >
              Ver Instagram
            </a>
          </div>
        </div>

        <div className="hidden h-44 w-px bg-amber-400 lg:block" />

        <div>
          <div>
            <p className="text-2xl font-black leading-none text-amber-400 lg:text-4xl">Horários</p>
            <p className="mt-2 text-lg font-semibold text-zinc-100 lg:text-2xl">{schedule}</p>
            <p className="mt-2 inline-flex rounded-md bg-amber-400 px-3 py-1 text-sm font-extrabold text-zinc-950 lg:text-lg">
              A primeira aula é gratuita!
            </p>
          </div>
          <div className="mt-6 lg:mt-8">
            <p className="text-2xl font-black leading-none text-amber-400 lg:text-4xl">Endereço</p>
            <p className="mt-2 text-lg font-semibold text-zinc-100 lg:text-2xl">{address}</p>
            <p className="mt-1 text-lg text-zinc-300 lg:text-2xl">{city}</p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[180px] lg:max-w-[260px]">
          <img
            src="/images/Logo-pirncipal.png"
            alt="Logo Equipe Rodrigo Oliveira"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Contato;
