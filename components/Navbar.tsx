import React from 'react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onLogoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  return (
    <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
      <div 
        className="font-bold text-lg tracking-wider cursor-pointer hover:opacity-80 transition-opacity"
        onClick={onLogoClick}
      >
        ANASTASIIA
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="hover:opacity-70 transition-opacity uppercase tracking-wide">
            {link.label}
          </a>
        ))}
      </div>
      <div className="md:hidden">
        {/* Mobile Menu Icon Placeholder */}
        <button className="p-2">
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;