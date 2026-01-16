import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('design');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-black mb-16 uppercase tracking-tight">Services</h2>

      <div className="flex flex-col border-t border-gray-300">
        {SERVICES.map((service) => (
          <div key={service.id} className="border-b border-gray-300">
            <button 
              onClick={() => toggle(service.id)}
              className="w-full py-8 flex items-start md:items-center justify-between group text-left transition-colors hover:bg-gray-50 px-2"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="text-3xl md:text-4xl font-bold uppercase tracking-tight">{service.title}</span>
              </div>
              
              <div className="flex-shrink-0 ml-4">
                 <ChevronDown 
                    className={`w-8 h-8 transition-transform duration-300 ${openId === service.id ? 'rotate-180' : ''}`} 
                 />
              </div>
            </button>
            
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === service.id ? 'max-h-40 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-lg md:text-xl text-gray-600 font-medium px-2">
                    {service.subtitle}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;