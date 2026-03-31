import React from 'react';
import { dojoName as dojangName, navItems } from '../constants/site';

const Header: React.FC = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/90 bg-zinc-950/90 backdrop-blur">
    <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 flex-wrap gap-4 lg:ml-15 lg:mr-0">
      <a href="#inicio" className="flex items-center gap-2">
        <img
          src="/images/logo_amarelo.png"
          alt="Logo Dojang"
          className="h-10 w-auto drop-shadow-md"
          style={{ maxWidth: 120 }}
        />
        {/* <span className="text-base font-extrabold tracking-[0.18em] text-amber-400 sm:text-lg">
          {dojangName}
        </span> */}
      </a>
      <nav className="hidden items-center gap-6 md:flex ml-auto lg:ml-24">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-zinc-200 transition-colors hover:text-amber-400"
          >
            {item.label}
          </a>
        ))}
      </nav>
      {/* <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="rounded-md bg-amber-400 px-4 py-2 text-sm font-bold text-zinc-950 transition hover:bg-amber-300"
      >
        WhatsApp
      </a> */}
    </div>
  </header>
);

export default Header;
