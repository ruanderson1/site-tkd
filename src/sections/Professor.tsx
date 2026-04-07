import React from 'react';
import { professorImage, professorName, faixa, experienceYears } from '../constants/site';
// whatsappLink
const Professor: React.FC = () => (
  <section id="professor" className="scroll-mt-24 bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
      <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl border border-zinc-800 lg:mx-0">
        <img
          src={professorImage}
          alt={`Professor ${professorName}`}
          className="h-[380px] w-full object-cover object-top sm:h-[460px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/25 to-zinc-950/20" />
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Conheça o Mestre</p>
        <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Rodrigo Oliveira</h2>
        <p className="mt-4 text-zinc-300">
          Muito prazer, sou Rodrigo Oliveira, faixa preta 4° DAN, tenho mais de 40 anos de experiência com Taekwondo: heptacampeão carioca e campeão da copa do Brasil de taekwondo, formei faixas pretas e coloridas e espero contribuir na sua trajetória no Taekwondo!
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-md border border-zinc-800 bg-zinc-900 p-4">
            <p className="text-xs uppercase tracking-wider text-zinc-400">Faixa</p>
            <p className="mt-1 font-bold text-white">{faixa}</p>
          </div>
          <div className="rounded-md border border-zinc-800 bg-zinc-900 p-4">
            <p className="text-xs uppercase tracking-wider text-zinc-400">Experiência</p>
            <p className="mt-1 font-bold text-white">{experienceYears}</p>
          </div>
          <div className="rounded-md border border-zinc-800 bg-zinc-900 p-4">
            <p className="text-xs uppercase tracking-wider text-zinc-400">Atuação</p>
            <p className="mt-1 font-bold text-white">Exames e competições</p>
          </div>
        </div>
        {/* <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex rounded-md bg-amber-400 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-300"
        >
          Falar com o professor
        </a> */}
      </div>
    </div>
  </section>
);

export default Professor;
