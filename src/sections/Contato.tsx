import React from 'react';
import { address, city, instagramLink, schedule, whatsappLink } from '../constants/site';

const Contato: React.FC = () => (
  <section id="contato" className="scroll-mt-24 bg-zinc-950 px-4 py-14 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-5xl rounded-2xl border border-zinc-800 bg-zinc-900/85 p-6 sm:p-8 lg:p-10">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1.2fr_1fr]">
        <div>
          <h2 className="text-4xl font-black text-white">Contato</h2>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-amber-400 px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-300"
            >
              Falar no WhatsApp
            </a>
            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-zinc-100 transition hover:border-zinc-500 hover:text-white"
            >
              Ver Instagram
            </a>
          </div>
        </div>

        <div className="hidden h-44 w-px bg-amber-400 lg:block" />

        <div>
          <div>
            <p className="text-4xl font-black leading-none text-amber-400">Horários</p>
            <p className="mt-2 text-2xl font-semibold text-zinc-100">{schedule}</p>
            <p className="mt-2 inline-flex rounded-md bg-amber-400 px-3 py-1 text-lg font-extrabold text-zinc-950">
              A primeira aula é gratuita!
            </p>
          </div>
          <div className="mt-8">
            <p className="text-4xl font-black leading-none text-amber-400">Endereço</p>
            <p className="mt-2 text-2xl font-semibold text-zinc-100">{address}</p>
            <p className="mt-1 text-2xl text-zinc-300">{city}</p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[240px] lg:max-w-[260px]">
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
