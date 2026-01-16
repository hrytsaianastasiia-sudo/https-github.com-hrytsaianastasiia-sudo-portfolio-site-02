import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onViewProjects?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewProjects }) => {
  return (
    <section className="px-6 md:px-12 pt-12 pb-24 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-between">
        
        <div className="flex-1 max-w-3xl z-10">
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] font-black tracking-tight text-forest-900 mb-8 uppercase">
            Design for <br />
            Well-Being.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-lg mb-10 leading-relaxed font-medium">
            Tokyo-based product designer. Crafting data-driven,
            human-centered digital products with inclusive,
            empathetic UX and design.
          </p>

          <button 
            onClick={onViewProjects}
            className="group bg-forest-800 text-white px-8 py-4 rounded-md font-bold tracking-widest text-sm hover:bg-forest-900 transition-all flex items-center gap-2"
          >
            VIEW PROJECTS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] flex-shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-100 shadow-xl">
             <img 
              src="https://picsum.photos/id/64/800/800" 
              alt="Anastasiia" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;