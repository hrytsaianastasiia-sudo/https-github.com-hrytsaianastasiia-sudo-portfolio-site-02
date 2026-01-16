import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Visibility Logic: Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 2. Footer Overlap Logic
      const footer = document.getElementById('main-footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        // The button is fixed at bottom-8 (32px) and is 64px tall (h-16).
        // It occupies the vertical space roughly between [Viewport - 96px] and [Viewport - 32px].
        // We trigger the color switch when the footer's top edge moves up into this zone.
        if (footerRect.top < window.innerHeight - 80) {
          setIsOverFooter(true);
        } else {
          setIsOverFooter(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-6 md:right-10 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 ease-out focus:outline-none focus:ring-4 group
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20 pointer-events-none'
        }
        ${isOverFooter
          ? 'bg-white text-forest-900 focus:ring-white/50' 
          : 'bg-forest-900 text-white focus:ring-forest-900/50'
        }
      `}
      aria-label="Back to Top"
    >
      <ArrowUp 
        className={`w-7 h-7 transition-transform duration-300 group-hover:-translate-y-1 ${isOverFooter ? 'stroke-[2.5px]' : 'stroke-[2px]'}`} 
      />
    </button>
  );
};

export default BackToTop;