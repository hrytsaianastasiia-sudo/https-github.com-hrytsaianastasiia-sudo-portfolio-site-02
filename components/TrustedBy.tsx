import React from 'react';
import { CheckCircle2, Box, Globe, Layers } from 'lucide-react';

const TrustedBy: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto mb-20">
      <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-12">Trusted By</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80 grayscale">
        
        {/* Mock Logos - Using Text + Icon to simulate logos */}
        <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter">Navitime</span>
        </div>

        <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-serif">VegWam</span>
        </div>

        <div className="flex items-center gap-2">
            <CheckCircle2 className="w-8 h-8" strokeWidth={2.5} />
            <span className="text-xl font-bold">GoodCheck</span>
        </div>

        <div className="flex items-center gap-2">
             <Layers className="w-8 h-8" />
            <span className="text-xl font-semibold">Spannen</span>
        </div>

      </div>
    </section>
  );
};

export default TrustedBy;