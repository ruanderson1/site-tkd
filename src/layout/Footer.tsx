import React from 'react';

const Footer: React.FC<{ dojoName: string }> = ({ dojoName }) => (
  <footer className="border-t border-zinc-800 bg-zinc-950 px-4 py-6 text-center text-sm text-zinc-400 sm:px-6 lg:px-8">
    © {new Date().getFullYear()} {dojoName}.
  </footer>
);

export default Footer;
