import React from 'react';
import { heroImage, whatsappLink } from '../constants/site';
// dojangName
const Hero: React.FC = () => (
  <section
    id="inicio"
    className="relative overflow-hidden bg-zinc-950"
  >
    <div className="relative w-full min-h-[65vh] sm:min-h-[70vh] lg:min-h-screen">
      {/* Logo principal no canto superior direito (apenas desktop) */}
      <img
        src="/images/Logo-pirncipal.png"
        alt="Logo Equipe Rodrigo Oliveira"
        className="hidden sm:block absolute top-20 right-8 w-82 h-82 object-contain z-20 drop-shadow-xl"
      />
      <img
        src={heroImage}
        alt="Treino de Taekwondo"
        className="absolute inset-0 w-full h-full object-cover object-[20%_center] sm:object-[center_-30%]"
      />

      <div className="absolute inset-0 bg-zinc-950/80" />
      {/* <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:4px_4px]" /> */}

      <div className="z-10 absolute left-0 bottom-0 w-full px-2 pb-2 sm:absolute sm:left-0 sm:bottom-0 sm:w-full sm:flex sm:items-end sm:justify-start sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl sm:mx-0 sm:ml-10">
          <div className="rounded-sm sm:rounded-xl p-3 sm:p-8 shadow-lg sm:text-left">
            <p className="mb-3 sm:mb-4 inline-flex rounded-full border border-amber-400/40 bg-zinc-900/40 px-3 py-1 sm:px-4 sm:py-1 text-[0.6rem] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-amber-300 mx-auto sm:mx-0 max-w-xs sm:max-w-none sm:whitespace-nowrap">
              Cortesia • Integridade • Perseverança • Autocontrole • Espírito Indomável
            </p>

            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black leading-tight text-white">
              TAEKWONDO com disciplina, caráter e evolução.
            </h1>

            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base text-zinc-200">
              Com a Equipe Rodrigo Oliveira Taekwondo, a cada treino você fortalece sua técnica, autocontrole e espirito de equipe. Agende uma aula experimental e comece sua jornada no TAEKWONDO conosco!
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-2 sm:gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-amber-400 px-4 py-2 sm:px-6 sm:py-3 text-center text-xs sm:text-sm font-extrabold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-300"
              >
                Agendar aula experimental
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;