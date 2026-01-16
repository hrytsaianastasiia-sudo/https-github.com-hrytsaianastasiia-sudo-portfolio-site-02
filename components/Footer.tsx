import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-forest-900 text-white pt-24 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:items-end gap-16">
        
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight tracking-tight">
            Build or Scale <br className="hidden md:block" /> Your Product
          </h2>
        </div>

        <div className="flex flex-col gap-4 md:text-right shrink-0">
          <h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-2">Contact</h4>
          <a href="mailto:anastasiia@email.com" className="hover:text-white/80 transition-colors text-xl">anastasiia@email.com</a>
          <p className="text-white/40 text-sm mt-4">© Copyright 2022</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;