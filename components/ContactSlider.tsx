import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const ContactSlider: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 1
  const [isRevealed, setIsRevealed] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const hasMoved = useRef(false);

  const email = "janblunar2@gmail.com"; 

  // Calculate progress based on clientX
  const calculateProgress = useCallback((clientX: number) => {
    if (!containerRef.current || !handleRef.current) return 0;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;
    const padding = 8;
    const maxScroll = containerRect.width - handleWidth - (padding * 2);
    
    let x = clientX - containerRect.left - padding;
    x = Math.max(0, Math.min(x, maxScroll));
    
    return x / maxScroll;
  }, []);

  // Mouse/Touch Event Handlers
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        const newProgress = calculateProgress(e.clientX);
        setProgress(newProgress);
        hasMoved.current = true;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        // Prevent scrolling on mobile while dragging the slider
        e.preventDefault(); 
        const newProgress = calculateProgress(e.touches[0].clientX);
        setProgress(newProgress);
        hasMoved.current = true;
      }
    };

    const onEnd = () => {
      if (isDragging) {
        setIsDragging(false);
        
        // If it was a simple click (no movement), toggle state
        if (!hasMoved.current) {
          if (progress < 0.5) {
             // Go to revealed
             setProgress(1);
             setIsRevealed(true);
          } else {
             // Go to start
             setProgress(0);
             setIsRevealed(false);
          }
        } else {
          // It was a drag, snap to closest side
          if (progress > 0.5) {
            setProgress(1);
            setIsRevealed(true);
          } else {
            setProgress(0);
            setIsRevealed(false);
          }
        }
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isDragging, progress, calculateProgress]);

  const startInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    hasMoved.current = false;
    e.stopPropagation();
  };
  
  // Update revealed state based on progress for visual sync during drag
  useEffect(() => {
      if (progress > 0.5 && !isRevealed) {
          setIsRevealed(true);
      } else if (progress <= 0.5 && isRevealed) {
          setIsRevealed(false);
      }
  }, [progress, isRevealed]);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden relative min-h-[500px] flex flex-col justify-center select-none">
      
      {/* Background Typography */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden select-none">
         <div className="flex flex-row items-center justify-center opacity-[0.03] whitespace-nowrap">
            <span className="text-[12rem] md:text-[20rem] font-black tracking-tighter leading-none">EMERGE</span>
            <span className="text-[12rem] md:text-[20rem] font-black tracking-tighter leading-none ml-12">INVENT</span>
         </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900">
            Let's build something special
          </h2>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Available for work</span>
          </div>
        </div>

        {/* Interactive Slider Track */}
        <div 
          ref={containerRef}
          className="relative w-full h-32 md:h-40 bg-gray-100 rounded-full shadow-inner overflow-hidden isolate"
        >
           {/* Orange Background Fill */}
           <div 
             className={`absolute top-0 left-0 h-full bg-brand-orange transition-all ease-out rounded-full ${isDragging ? 'duration-0' : 'duration-500'}`}
             style={{ 
                 width: `${Math.max(10, progress * 100)}%`, // Keep a small bit visible at start? No, 0 is fine, but rounded corners need width. 
                 // Actually, to match the handle movement, let's just make it grow.
                 // The handle covers the edge.
             }}
           ></div>
           
           {/* Text Layer */}
           <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-20">
              
              {/* "Reveal" Text */}
              <div 
                className="absolute transition-all duration-300 transform"
                style={{ 
                    opacity: progress > 0.2 ? 0 : 1,
                    transform: `translateX(${progress * 40}px)` 
                }}
              >
                 <div className="flex flex-col md:flex-row items-center gap-2 text-center">
                    <span className="text-gray-400 font-medium text-lg md:text-xl tracking-wide">Reveal</span>
                    <span className="text-gray-400 font-medium text-lg md:text-xl tracking-wide">email address</span>
                 </div>
              </div>
              
              {/* Email Text */}
               <div 
                className="absolute transition-all duration-500"
                style={{ 
                    opacity: progress > 0.8 ? 1 : 0,
                    transform: progress > 0.8 ? 'translateY(0)' : 'translateY(10px)'
                }}
              >
                 <a 
                    href={`mailto:${email}`} 
                    className="text-white font-bold text-2xl md:text-4xl tracking-tight hover:underline pointer-events-auto cursor-pointer"
                 >
                    {email}
                 </a>
              </div>
           </div>

           {/* Draggable Handle */}
           <div
             ref={handleRef}
             onMouseDown={startInteraction}
             onTouchStart={startInteraction}
             className={`absolute top-2 bottom-2 aspect-square bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center z-20 cursor-pointer hover:scale-[1.02] active:scale-95 transition-all ${isDragging ? 'duration-0' : 'duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]'}`}
             style={{
                 left: containerRef.current && handleRef.current 
                    ? `calc(8px + ${progress * (containerRef.current.offsetWidth - handleRef.current.offsetWidth - 16)}px)` 
                    : `calc(8px + ${progress * 75}%)`
             }}
           >
              {progress > 0.5 ? (
                  <ArrowLeft className="w-8 h-8 md:w-10 md:h-10 text-brand-orange" strokeWidth={2.5} />
              ) : (
                  <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-gray-300" strokeWidth={2.5} />
              )}
           </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSlider;