import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Menu, X, Linkedin, Mail, FileText, ExternalLink, 
  ChevronRight, Smartphone, Globe, PenTool, Layout,
  User, CheckCircle, ArrowRight, Clock, Users, Layers, Palette, Image as ImageIcon, Briefcase, HeartPulse, ChevronDown, Sparkles, Leaf, Triangle, Play, Quote, Loader2, ArrowLeft, ArrowLeft as ArrowLeftIcon
} from 'lucide-react';
import { Language, Project } from './types';
import { VEGWAM_DATA, LABELS, PROFILE, SKILLS, LANGUAGES, INTERESTS, PROJECTS } from './constants';

// --- VEGWAM COMPONENT HELPERS ---

const VegTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block px-3 py-1 bg-white border border-[#f1683c] text-[#f1683c] text-[12px] font-bold uppercase rounded-full tracking-wider">
    {children}
  </span>
);

const VegSectionHeader = ({ overline, title, subtext }: { overline: string, title: string, subtext?: string }) => (
  <div className="mb-8">
    <p className="text-[#f1683c] text-xs font-bold uppercase tracking-widest mb-2">{overline}</p>
    <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-3">{title}</h2>
    <div className="h-1 w-16 bg-[#145850] mb-4"></div>
    {subtext && <p className="text-[#555555] text-sm md:text-base max-w-2xl">{subtext}</p>}
  </div>
);

const VegMetaBlock = ({ lang }: { lang: Language }) => {
  const labels = {
    type: { en: "Type", jp: "種別", ua: "Тип" },
    valType: { en: "Academic Project", jp: "学内課題", ua: "Академічний Проєкт" },
    duration: { en: "Duration", jp: "期間", ua: "Тривалість" },
    valDuration: { en: "1 Month (2021-2022)", jp: "1ヶ月 (2021-2022)", ua: "1 Місяць (2021-2022)" },
    role: { en: "Role", jp: "担当", ua: "Роль" },
    valRole: { en: "UX Research / UI Design", jp: "UXリサーチ / UIデザイン", ua: "UX Дослідження / UI Дизайн" },
    tools: { en: "Tools", jp: "ツール", ua: "Інструменти" }
  };

  return (
    <div className="bg-white border border-[#dddddd] rounded-2xl p-6 md:p-8 grid grid-cols-2 gap-y-6 gap-x-4">
      <div>
        <p className="font-bold text-[#111111] mb-1">{labels.type[lang]}</p>
        <p className="text-[#555555] text-sm">{labels.valType[lang]}</p>
      </div>
      <div>
        <p className="font-bold text-[#111111] mb-1">{labels.duration[lang]}</p>
        <p className="text-[#555555] text-sm">{labels.valDuration[lang]}</p>
      </div>
      <div>
        <p className="font-bold text-[#111111] mb-1">{labels.role[lang]}</p>
        <p className="text-[#555555] text-sm">{labels.valRole[lang]}</p>
      </div>
      <div>
        <p className="font-bold text-[#111111] mb-1">{labels.tools[lang]}</p>
        <p className="text-[#555555] text-sm">Figma, Illustrator</p>
      </div>
    </div>
  );
};

const VegInsightCard: React.FC<{ title: string; body: string; label?: string }> = ({ title, body, label }) => (
  <div className="bg-white border-l-4 border-[#145850] p-6 shadow-sm rounded-r-xl h-full flex flex-col">
    {label && <p className="text-[#f1683c] text-xs font-bold uppercase mb-2">{label}</p>}
    <h3 className="text-lg font-bold text-[#111111] mb-3">{title}</h3>
    <p className="text-[#555555] text-sm leading-relaxed flex-1">{body}</p>
  </div>
);

const VegPersonaCard = ({ lang }: { lang: Language }) => (
  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#dddddd]">
    <div className="flex items-center gap-4 mb-6 border-b border-[#dddddd] pb-6">
      <div className="w-16 h-16 bg-[#e6eddd] rounded-full flex items-center justify-center text-[#145850]">
        <User size={32} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#145850]">{VEGWAM_DATA.research.personaName[lang]}</h3>
        <p className="text-[#555555] text-sm">{VEGWAM_DATA.research.personaRole[lang]}</p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <p className="text-[#f1683c] font-bold uppercase text-xs mb-3">Goals / Needs</p>
        <ul className="space-y-2 text-[#111111] text-sm">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-[#145850] shrink-0" /> Find safe cafes easily</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-[#145850] shrink-0" /> Learn about nutrition</li>
        </ul>
      </div>
      <div>
        <p className="text-[#f1683c] font-bold uppercase text-xs mb-3">Pain Points</p>
        <ul className="space-y-2 text-[#111111] text-sm">
          <li className="flex items-start gap-2"><X size={16} className="text-red-500 shrink-0" /> Fear of hidden fish broth</li>
          <li className="flex items-start gap-2"><X size={16} className="text-red-500 shrink-0" /> Asking staff feels awkward</li>
        </ul>
      </div>
    </div>
  </div>
);

const VegQuoteBlock = ({ text, author }: { text: string, author: string }) => (
  <div className="bg-[#f7f8f5] p-6 border-l-4 border-[#145850] rounded-r-lg my-6">
    <p className="text-lg italic font-medium text-[#111111] mb-3 leading-relaxed">
      "{text}"
    </p>
    <p className="text-[#555555] text-xs font-bold uppercase tracking-wider">— {author}</p>
  </div>
);

const VegProcessStrip = ({ steps }: { steps: string[] }) => (
  <div className="flex flex-wrap gap-2 md:gap-0 items-center justify-between bg-white p-4 rounded-xl border border-[#dddddd] mb-8 text-xs md:text-sm">
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div className={`flex items-center gap-2 font-bold ${i < 3 ? 'text-[#145850]' : 'text-[#111111]'}`}>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${i < 3 ? 'bg-[#145850] text-white' : 'border border-[#dddddd] text-[#555555]'}`}>
            {i + 1}
          </div>
          <span>{step}</span>
        </div>
        {i < steps.length - 1 && <div className="w-4 md:w-8 h-px bg-[#dddddd] mx-2"></div>}
      </React.Fragment>
    ))}
  </div>
);

const VegImageFigure = ({ src, caption, annotations }: { src: string, caption: string, annotations?: string[] }) => (
  <figure className="my-8">
    <div className="bg-white p-2 md:p-4 rounded-2xl border border-[#dddddd] shadow-sm">
      <img src={src} alt={caption} className="w-full h-auto rounded-lg" />
    </div>
    <figcaption className="mt-4 text-center">
      <p className="font-bold text-[#111111]">{caption}</p>
      {annotations && (
        <ul className="mt-2 flex flex-wrap justify-center gap-4 text-xs text-[#555555]">
          {annotations.map((note, i) => (
            <li key={i} className="flex items-center gap-1">
              <span className="w-4 h-4 rounded-full bg-[#145850] text-white flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
              {note}
            </li>
          ))}
        </ul>
      )}
    </figcaption>
  </figure>
);

const VegWamLogo = () => (
  <div className="flex flex-col items-center justify-center p-8 bg-[#E6EDDD] rounded-2xl border border-[#145850]/10">
    <div className="relative w-32 h-32 flex items-center justify-center">
      <Triangle className="w-24 h-24 text-[#F1683C] fill-current absolute bottom-2" strokeWidth={1.5} />
      <Leaf className="w-16 h-16 text-[#145850] fill-current absolute -top-1 right-4 transform rotate-12" />
    </div>
    <h3 className="text-3xl font-black text-[#145850] mt-2 tracking-tight">VegWam</h3>
    <p className="text-[#145850]/70 text-sm font-medium mt-1">Wigwam + Plants</p>
  </div>
);

// --- VEGWAM CASE STUDY COMPONENT (MULTILINGUAL) ---
const VegWamCaseStudy = ({ lang }: { lang: Language }) => {
  const t = VEGWAM_DATA;
  
  return (
    <div className="bg-[#f9f9f9] text-[#111111] font-sans">
      
      {/* 1. Hero */}
      <section className="bg-[#e6eddd] pt-12 pb-16 px-6 md:px-12 rounded-t-[2rem]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-2">
              <VegTag>{t.header.tag[lang]}</VegTag>
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-[#145850] mb-2 leading-tight">{t.header.title[lang]}</h1>
              <p className="text-lg md:text-xl font-bold text-[#111111]">{t.header.catchphrase[lang]}</p>
            </div>
            <p className="text-[#555555] leading-relaxed text-sm md:text-base">
              {t.header.summary[lang]}
            </p>
            <div className="pt-4">
              <VegMetaBlock lang={lang} />
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-0">
             <img src="https://placehold.co/400x800/145850/ffffff?text=VegWam+App" alt="VegWam App Mockup" className="w-56 md:w-80 shadow-2xl rounded-[3rem] border-8 border-white" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-12 py-12 md:py-16 space-y-16 md:space-y-24">
        
        {/* 2. Overview */}
        <section>
          <VegSectionHeader 
            overline={t.overview.overline[lang]} 
            title={t.overview.title[lang]} 
            subtext={t.overview.subtext[lang]} 
          />
          <div className="grid md:grid-cols-3 gap-6">
            {t.insights.map((insight, i) => (
              <VegInsightCard key={i} title={insight.title[lang]} body={insight.body[lang]} label={insight.label} />
            ))}
          </div>
        </section>

        {/* 3. User Research */}
        <section>
          <VegSectionHeader overline="USER RESEARCH" title={t.research.title[lang]} />
          <VegProcessStrip steps={t.research.steps.map(s => s[lang])} />
          
          <div className="grid gap-8">
            <VegPersonaCard lang={lang} />
            <VegQuoteBlock text={t.research.quote[lang]} author={t.research.personaName[lang]} />
          </div>
        </section>

        {/* 4. IA & Flow */}
        <section>
          <VegSectionHeader overline="IA & FLOW" title={lang === 'jp' ? "情報設計と体験フロー" : "IA & User Flow"} />
          <VegImageFigure 
            src="https://placehold.co/1200x600/e6eddd/145850?text=Information+Architecture+Map" 
            caption={lang === 'jp' ? "迷わず目的にたどり着くための情報構造" : "Simplified Information Architecture"}
            annotations={["Home", "Search", "Community", "Profile"]}
          />
        </section>

        {/* 5. UI Highlights */}
        <section>
          <VegSectionHeader overline="UI HIGHLIGHTS" title={t.ui.title[lang]} />
          
          <div className="space-y-12 md:space-y-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <img src="https://placehold.co/600x1200/ffffff/145850?text=Home+Screen" className="rounded-xl shadow-lg border border-[#dddddd]" />
              <div>
                <h3 className="text-xl font-bold text-[#145850] mb-4">{t.ui.p1.title[lang]}</h3>
                <p className="text-[#555555] leading-relaxed mb-6">
                  {t.ui.p1.body[lang]}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-bold text-[#145850] mb-4">{t.ui.p2.title[lang]}</h3>
                <p className="text-[#555555] leading-relaxed mb-6">
                  {t.ui.p2.body[lang]}
                </p>
              </div>
              <img src="https://placehold.co/600x1200/ffffff/145850?text=Search+Screen" className="rounded-xl shadow-lg border border-[#dddddd] order-1 md:order-2" />
            </div>
          </div>
        </section>

        {/* 6. Outcomes */}
        <section className="bg-white p-6 md:p-8 rounded-2xl border border-[#dddddd]">
          <VegSectionHeader overline="OUTCOMES" title={t.outcomes.title[lang]} />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                <CheckCircle size={18} className="text-[#145850]" /> {t.outcomes.done[lang]}
              </h4>
              <ul className="list-disc list-inside text-[#555555] text-sm space-y-2 ml-1">
                {t.outcomes.listDone[lang].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#111111] mb-2 flex items-center gap-2">
                <ArrowRight size={18} className="text-[#f1683c]" /> {t.outcomes.next[lang]}
              </h4>
              <ul className="list-disc list-inside text-[#555555] text-sm space-y-2 ml-1">
                {t.outcomes.listNext[lang].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

// --- Components ---

const LanguageSwitcher = ({ 
  current, 
  onChange, 
  direction = 'down' 
}: { 
  current: Language, 
  onChange: (lang: Language) => void,
  direction?: 'up' | 'down' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'jp', label: '日本語', flag: '🇯🇵' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ua', label: 'Українська', flag: '🇺🇦' }
  ];
  const currentLang = languages.find(l => l.code === current);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-sm font-bold text-gray-700 border border-gray-200 shadow-sm"
      >
        <span>{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.code.toUpperCase()}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div 
          className={`absolute right-0 w-36 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-[100] animate-in fade-in zoom-in duration-200 ${
            direction === 'up' ? 'bottom-full mb-3 origin-bottom' : 'top-full mt-2 origin-top'
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { onChange(lang.code); setIsOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 hover:bg-gray-50 transition-colors ${current === lang.code ? 'bg-gray-50 font-bold' : ''}`}
            >
              <span>{lang.flag}</span>
              <span className="font-medium text-gray-700">{lang.code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ContactSlider: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0); 
  const [isRevealed, setIsRevealed] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const hasMoved = useRef(false);

  const email = PROFILE.email;

  const calculateProgress = useCallback((clientX: number) => {
    if (!containerRef.current || !handleRef.current) return 0;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;
    const padding = 8;
    // Calculate scrollable width
    const maxScroll = containerRect.width - handleWidth - (padding * 2);
    
    let x = clientX - containerRect.left - padding;
    x = Math.max(0, Math.min(x, maxScroll));
    
    return x / maxScroll;
  }, []);

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
        e.preventDefault(); 
        const newProgress = calculateProgress(e.touches[0].clientX);
        setProgress(newProgress);
        hasMoved.current = true;
      }
    };

    const onEnd = () => {
      if (isDragging) {
        setIsDragging(false);
        if (!hasMoved.current) {
          if (progress < 0.5) {
             setProgress(1);
             setIsRevealed(true);
          } else {
             setProgress(0);
             setIsRevealed(false);
          }
        } else {
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
  
  useEffect(() => {
      if (progress > 0.5 && !isRevealed) {
          setIsRevealed(true);
      } else if (progress <= 0.5 && isRevealed) {
          setIsRevealed(false);
      }
  }, [progress, isRevealed]);

  return (
    <div className="py-12 md:py-16 w-full overflow-hidden relative min-h-[400px] flex flex-col justify-center select-none bg-white rounded-[2rem] border border-gray-100 shadow-sm mt-6">
      
      {/* Background Typography - Marquee Effect */}
      <div className="absolute inset-0 z-0 flex items-center pointer-events-none overflow-hidden select-none opacity-30">
         <div className="flex whitespace-nowrap opacity-[0.03] animate-marquee will-change-transform">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center shrink-0">
                 <span className="text-[6rem] md:text-[10rem] font-black tracking-tighter leading-none text-gray-900 px-8 md:px-16">EMERGE</span>
                 <span className="text-[6rem] md:text-[10rem] font-black tracking-tighter leading-none text-gray-900 px-8 md:px-16">INVENT</span>
              </div>
            ))}
         </div>
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 flex flex-col gap-12 md:gap-16">
        {/* Header - Left Aligned */}
        <div className="flex flex-col items-start text-left gap-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1]">
            Let’s build something<br/>special
          </h2>
          
          {/* Badge */}
          <div className="flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform hover:scale-105">
             <span className="relative flex h-2.5 w-2.5">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
             </span>
             <span className="text-sm font-medium text-gray-600 tracking-wide">Available for work</span>
          </div>
        </div>

        {/* Interactive Slider Track */}
        <div 
          ref={containerRef}
          className="relative w-full h-20 md:h-24 bg-[#F7F7F7] rounded-full shadow-inner border border-gray-200 overflow-hidden isolate"
        >
           {/* Orange Background Fill */}
           <div 
             className={`absolute top-0 left-0 h-full bg-[#F1683C] transition-all ease-out rounded-full ${isDragging ? 'duration-0' : 'duration-500'}`}
             style={{ 
                 width: `${progress * 100}%`, 
             }}
           ></div>
           
           {/* Text Layer */}
           <div className="absolute inset-0 z-10 pointer-events-none">
              
              {/* "Reveal" Text */}
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 transform"
                style={{ 
                    opacity: progress > 0.15 ? 0 : 1, 
                    transform: `translateX(${progress * 50}px)` 
                }}
              >
                 <span className="text-gray-400 font-medium text-lg leading-none mb-1">Reveal</span>
                 <span className="text-gray-300 font-medium text-lg leading-none">email address</span>
              </div>
              
              {/* Email Text */}
               <div 
                className="absolute inset-0 flex items-center justify-center transition-all duration-500 pr-20 md:pr-28" 
                style={{ 
                    opacity: progress > 0.8 ? 1 : 0,
                    transform: progress > 0.8 ? 'translateY(0)' : 'translateY(10px)'
                }}
              >
                 <a 
                    href={`mailto:${email}`} 
                    className="text-white font-light text-xl md:text-3xl tracking-wide hover:underline pointer-events-auto cursor-pointer truncate max-w-full px-4"
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
             className={`group absolute top-2 bottom-2 aspect-square bg-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-gray-50 flex items-center justify-center z-20 cursor-pointer hover:scale-[1.02] active:scale-95 transition-all ${isDragging ? 'duration-0' : 'duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]'}`}
             style={{
                 left: containerRef.current && handleRef.current 
                    ? `calc(8px + ${progress * (containerRef.current.offsetWidth - handleRef.current.offsetWidth - 16)}px)` 
                    : `calc(8px + ${progress * 80}%)`
             }}
           >
              {progress > 0.5 ? (
                  <ArrowLeftIcon className="w-6 h-6 md:w-8 md:h-8 text-[#F1683C]" strokeWidth={2} />
              ) : (
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-[#F1683C] transition-colors duration-300" strokeWidth={2} />
              )}
           </div>

        </div>
      </div>
    </div>
  );
};

interface ProgressiveBlurProps {
  className?: string;
  height?: string;
  position?: "top" | "bottom" | "both";
  blurLevels?: number[];
  children?: React.ReactNode;
}

const ProgressiveBlur = ({
  className,
  height = "30%",
  position = "bottom",
  blurLevels = [0.5, 1, 2, 4, 8, 16, 32, 64],
}: ProgressiveBlurProps) => {
  const divElements = Array(blurLevels.length - 2).fill(null);
  
  const baseClasses = "gradient-blur pointer-events-none absolute inset-x-0 z-10";
  const positionClass = position === "top" ? "top-0" : position === "bottom" ? "bottom-0" : "inset-y-0";
  const combinedClasses = [baseClasses, className, positionClass].filter(Boolean).join(" ");

  return (
    <div
      className={combinedClasses}
      style={{
        height: position === "both" ? "100%" : height,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          backdropFilter: `blur(${blurLevels[0]}px)`,
          WebkitBackdropFilter: `blur(${blurLevels[0]}px)`,
          maskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
              : position === "top"
                ? `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
                : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
          WebkitMaskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
              : position === "top"
                ? `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
                : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
        }}
      />

      {divElements.map((_, index) => {
        const blurIndex = index + 1;
        const startPercent = blurIndex * 12.5;
        const midPercent = (blurIndex + 1) * 12.5;
        const endPercent = (blurIndex + 2) * 12.5;

        const maskGradient =
          position === "bottom"
            ? `linear-gradient(to bottom, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)`
            : position === "top"
              ? `linear-gradient(to top, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)`
              : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`;

        return (
          <div
            key={`blur-${index}`}
            className="absolute inset-0"
            style={{
              zIndex: index + 2,
              backdropFilter: `blur(${blurLevels[blurIndex]}px)`,
              WebkitBackdropFilter: `blur(${blurLevels[blurIndex]}px)`,
              maskImage: maskGradient,
              WebkitMaskImage: maskGradient,
            }}
          />
        );
      })}

      <div
        className="absolute inset-0"
        style={{
          zIndex: blurLevels.length,
          backdropFilter: `blur(${blurLevels[blurLevels.length - 1]}px)`,
          WebkitBackdropFilter: `blur(${blurLevels[blurLevels.length - 1]}px)`,
          maskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
              : position === "top"
                ? `linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
                : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
          WebkitMaskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
              : position === "top"
                ? `linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
                : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
        }}
      />
    </div>
  );
};

interface ProjectDetailProps {
  project: Project;
  lang: Language;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, lang }) => {
  const [isLoading, setIsLoading] = useState(true);
  const content = project.content[lang];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [project]);

  if (isLoading) {
    return (
      <div className="w-full h-full min-h-[50vh] flex flex-col items-center justify-center bg-white">
        <Loader2 className="animate-spin text-[#145850] mb-4" size={48} strokeWidth={1.5} />
        <p className="text-gray-400 text-sm tracking-widest uppercase font-medium animate-pulse">Loading Project...</p>
      </div>
    );
  }

  if (project.id === 'vegwam') {
    return <VegWamCaseStudy lang={lang} />;
  }

  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className={`${project.accentColor} relative h-64 md:h-80 flex items-end p-6 md:p-12`}>
        <div className="relative z-10 w-full">
          <span className="inline-block px-3 py-1 mb-4 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-wider border border-white/20 uppercase">
            {content.category}
          </span>
          <h2 className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tight">
            {content.title}
          </h2>
        </div>
        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto p-6 md:p-12 space-y-12 md:space-y-16">
        
        {/* Meta Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-8 border-b border-gray-100">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Timeline</p>
            <p className="font-medium text-gray-900">{content.caseStudy.timeline}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Role</p>
            <p className="font-medium text-gray-900">{content.caseStudy.role}</p>
          </div>
          <div className="col-span-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Tools</p>
            <div className="flex flex-wrap gap-2">
              {content.caseStudy.tools.map(tool => (
                <span key={tool} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md">{tool}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Sparkles className="text-[#10B981]" size={24} /> Overview
          </h3>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            {content.caseStudy.overview}
          </p>
        </section>

        {/* Figma Prototype Section (Conditional) */}
        {project.figmaUrl && (
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Play className="text-[#F1683C]" size={24} fill="currentColor" /> {LABELS.modal.prototype[lang]}
            </h3>
            <div className="w-full h-[600px] md:h-[800px] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
              <iframe 
                style={{ border: 'none' }}
                width="100%" 
                height="100%" 
                src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.figmaUrl)}`} 
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 text-center">
              *Interact with the prototype above to explore the user flow.
            </p>
          </section>
        )}

        {/* Problem & Solution Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50/50 p-6 md:p-8 rounded-3xl border border-red-100">
            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span> Problem
            </h4>
            <p className="text-gray-700 leading-relaxed">{content.caseStudy.problem}</p>
          </div>
          <div className="bg-emerald-50/50 p-6 md:p-8 rounded-3xl border border-emerald-100">
            <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Solution
            </h4>
            <p className="text-gray-700 leading-relaxed">{content.caseStudy.solution}</p>
          </div>
        </div>

        {/* Design System (If available) */}
        {project.designSystem && (
          <section className="bg-gray-50 p-6 md:p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Palette className="text-gray-400" size={20} /> Design System
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-3">Colors</p>
                <div className="flex gap-4">
                  {project.designSystem.colors.map((c, i) => (
                    <div key={i} className="group relative">
                      <div className="w-12 h-12 rounded-full shadow-sm ring-2 ring-white" style={{ backgroundColor: c.hex }}></div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-3">Typography</p>
                <div className="space-y-2">
                  {project.designSystem.typography.map((font, i) => (
                    <div key={i} className="flex items-baseline justify-between text-sm border-b border-gray-200 pb-1">
                      <span className="font-bold text-gray-800">{font.name}</span>
                      <span className="text-gray-500 text-xs">{font.usage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Results */}
        <section className={`p-8 md:p-12 rounded-3xl text-center text-white ${project.accentColor}`}>
          <h3 className="text-2xl font-bold mb-4">Outcome</h3>
          <p className="text-lg text-white/90 leading-relaxed">
            {content.caseStudy.results}
          </p>
        </section>

      </div>
    </div>
  );
};

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; project: Project | null; lang: Language }> = ({ isOpen, onClose, project, lang }) => {
  useEffect(() => {
    if (isOpen) { 
      document.body.style.overflow = 'hidden'; 
    } else { 
      document.body.style.overflow = 'unset'; 
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-gray-900/60 backdrop-blur-sm p-0 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full h-[90vh] md:h-[90vh] md:rounded-[2rem] rounded-t-[2rem] shadow-2xl flex flex-col overflow-hidden relative">
        
        <button onClick={onClose} className="absolute top-4 right-4 z-50 bg-white/50 backdrop-blur-md p-3 rounded-full hover:bg-white transition-all shadow-sm">
          <X size={20} className="text-gray-800" />
        </button>

        <div className="flex-1 overflow-y-auto relative scroll-smooth">
          <div className="pb-32">
            <ProjectDetail project={project} lang={lang} />
          </div>
        </div>

        <ProgressiveBlur position="bottom" height="150px" />
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  lang: Language;
  onClick: () => void;
  isGrid?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, lang, onClick, isGrid = false }) => (
  <div 
    onClick={onClick}
    className="group cursor-pointer"
  >
    <div className={`relative overflow-hidden rounded-[2rem] ${isGrid ? 'aspect-[4/3] md:aspect-[16/10]' : 'aspect-[16/9] md:aspect-[2/1]'} ${project.accentColor} mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500`}>
      <img 
        src={project.thumbnail} 
        alt={project.content[lang].title}
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 md:opacity-50 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
      />
      {/* Hover Overlay Content */}
      <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-black/80 md:from-black/60 via-black/20 md:via-transparent to-transparent`}>
        <div className="translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex flex-wrap gap-2 mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {project.content[lang].tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold border border-white/20">
                {tag}
              </span>
            ))}
          </div>
          <h3 className={`${isGrid ? 'text-2xl md:text-3xl' : 'text-2xl md:text-5xl'} font-black text-white mb-2 leading-tight`}>{project.content[lang].title}</h3>
          <p className="text-white/80 text-sm md:text-lg line-clamp-2 md:line-clamp-1 group-hover:line-clamp-none transition-all">{project.content[lang].description}</p>
        </div>
      </div>
      {/* Action Button */}
      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur rounded-full p-3 md:p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-x-0 md:translate-x-4 md:group-hover:translate-x-0">
        <ArrowRight size={20} className="text-[#145850] md:w-6 md:h-6" />
      </div>
    </div>
  </div>
);

export default function Portfolio() {
  const [lang, setLang] = useState<Language>('jp');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [view, setView] = useState<'home' | 'projects' | 'project-detail'>('home');

  // New state for interests visibility
  const [interestsRef, setInterestsRef] = useState<HTMLDivElement | null>(null);
  const [interestsVisible, setInterestsVisible] = useState(false);

  useEffect(() => {
    if (!interestsRef) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInterestsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(interestsRef);
    return () => observer.disconnect();
  }, [interestsRef]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  const handleProjectClick = (project: Project, from: 'home' | 'grid') => {
    setActiveProject(project);
    if (from === 'grid') {
      setView('project-detail');
      window.scrollTo(0,0);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 selection:bg-[#145850] selection:text-white">
      
      {/* --- Floating Nav (Trend: Island UI) --- */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg shadow-gray-200/50 rounded-full px-4 sm:px-6 py-3 flex items-center gap-4 sm:gap-6 md:gap-8 max-w-[90%] w-full sm:max-w-sm md:max-w-lg justify-between transition-all duration-300 ${view === 'project-detail' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div 
          onClick={() => { setView('home'); window.scrollTo(0,0); }}
          className="w-8 h-8 bg-[#145850] text-white rounded-full flex items-center justify-center font-serif font-bold text-lg shrink-0 cursor-pointer"
        >
          A
        </div>
        <div className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          {Object.entries(LABELS.nav).map(([key, label]) => (
            <button 
              key={key}
              onClick={() => handleNavClick(key)}
              className="text-sm font-medium text-gray-600 hover:text-[#145850] transition-colors"
            >
              {label[lang]}
            </button>
          ))}
        </div>
        <div className="hidden md:block w-px h-4 bg-gray-200 shrink-0"></div>
        {/* Desktop Language Switcher (Drops Down) */}
        <div className="hidden md:block shrink-0">
           <LanguageSwitcher current={lang} onChange={setLang} direction="down" />
        </div>
      </nav>

      {/* Mobile Language Switcher (Fixed Bottom Right - DROPS UP) */}
      <div className={`md:hidden fixed bottom-6 right-6 z-50 ${view === 'project-detail' ? 'hidden' : ''}`}>
        <LanguageSwitcher current={lang} onChange={setLang} direction="up" />
      </div>

      {/* Global Page Blur Effect */}
      {view !== 'project-detail' && (
        <div className="fixed bottom-0 left-0 right-0 z-30 h-24 md:h-32 pointer-events-none">
          <ProgressiveBlur position="bottom" height="100%" />
        </div>
      )}

      {view === 'home' && (
        <>
          {/* --- Hero Section (Trend: Big Typography & Split Layout) --- */}
          <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-12 gap-12 items-center">
                
                <div className="md:col-span-8 space-y-6 md:space-y-8 order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-[#145850] rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    {LABELS.hero.status[lang]}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-gray-900 leading-[0.95] tracking-tight">
                    {LABELS.hero.titlePrefix[lang]}<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#145850] to-[#047857]">
                      {LABELS.hero.titleSuffix[lang]}
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-2xl text-gray-500 max-w-xl leading-relaxed font-light">
                    {LABELS.hero.intro[lang]}
                  </p>

                  <div className="pt-4">
                    <button 
                      onClick={() => { setView('projects'); window.scrollTo(0,0); }}
                      className="group bg-[#145850] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0f4640] transition-all shadow-xl shadow-[#145850]/20 flex items-center gap-3"
                    >
                      {LABELS.hero.cta[lang]} 
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Profile Image (Replaced with User's Unsplash Placeholder) */}
                <div className="md:col-span-4 flex justify-center md:justify-end relative order-1 md:order-2">
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 bg-[#F1683C] rounded-full opacity-20 blur-3xl animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-gray-100">
                      <img 
                          src={PROFILE.avatar} 
                          alt="Anastasiia Profile" 
                          className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Badge */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3 whitespace-nowrap z-10">
                      <div className="bg-emerald-100 p-2 rounded-full text-[#145850]"><HeartPulse size={24} /></div>
                      <div className="text-left">
                          <p className="text-[10px] text-gray-400 font-bold uppercase">Focus</p>
                          <p className="font-bold text-gray-900 text-sm">{LABELS.hero.specialty[lang]}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* --- Projects Section (Trend: Large Cards with Hover Reveal) --- */}
          <section id="work" className="py-24 px-6 bg-white rounded-t-[3rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)]">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-black text-gray-900 mb-2">{LABELS.sectionTitles.work[lang]}</h2>
                <div className="h-1 w-20 bg-[#F1683C]"></div>
              </div>

              <div className="grid gap-12 md:gap-16">
                {PROJECTS.map((project, index) => (
                  <ProjectCard 
                    key={project.id}
                    project={project}
                    lang={lang}
                    onClick={() => handleProjectClick(project, 'home')}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* --- Bento Grid About Section (Trend: Bento Grids) --- */}
          <section id="about" className="py-24 px-6 bg-[#FAFAFA]">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-black text-gray-900 mb-2">{LABELS.sectionTitles.about[lang]}</h2>
                <div className="h-1 w-20 bg-[#145850]"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
                
                {/* 1. Bio (Large) */}
                <div className="md:col-span-8 bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{PROFILE.name[lang]}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {PROFILE.fullBio[lang]}
                  </p>
                </div>

                {/* 2. Experience (Tall) */}
                <div className="md:col-span-4 bg-[#145850] p-6 md:p-10 rounded-[2rem] shadow-lg text-white flex flex-col justify-between relative overflow-hidden min-h-[240px] md:min-h-0">
                  <Briefcase size={32} className="text-emerald-300 mb-4" />
                  <div>
                    <h4 className="text-3xl font-bold mb-2">3+ Years</h4>
                    <p className="text-emerald-100">{LABELS.experience.desc[lang]}</p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                </div>

                {/* 3. Skills */}
                <div className="md:col-span-8 bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                    <PenTool size={16} /> Skills
                  </h4>
                  <div className="space-y-1">
                    {SKILLS.map(skill => (
                      <div key={skill.name} className="p-3 -mx-3 rounded-xl transition-all duration-300 hover:bg-gray-50 cursor-default border border-transparent hover:border-gray-100">
                        <div className="flex justify-between text-sm font-bold text-gray-800 mb-1">
                          <span>{skill.name}</span>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#F1683C] rounded-full" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Languages */}
                <div className="md:col-span-4 bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Globe size={16} /> Languages
                  </h4>
                  <ul className="space-y-3">
                    {LANGUAGES.map(l => (
                      <li key={l.lang} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span className="font-bold text-gray-700">{l.lang}</span>
                        <span className="text-xs bg-white px-2 py-1 rounded shadow-sm text-gray-500 font-medium">{l.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Removed Contact Action Card */}

              </div>

              {/* 6. Interests (New Section) */}
              <div className="mt-6">
                <div 
                  ref={setInterestsRef}
                  className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100"
                >
                  <h4 className="font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Layout size={16} /> Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {INTERESTS.map((interest, i) => (
                      <span 
                        key={i} 
                        className={`px-4 py-2 bg-gray-50 rounded-full text-sm font-bold text-gray-700 border border-gray-100 hover:bg-[#E6EDDD] hover:text-[#145850] cursor-default transition-all duration-500 ease-out flex items-center gap-2 ${
                          interestsVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <interest.icon size={14} className="opacity-70" />
                        {interest[lang]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Slider */}
              <div className="mt-12 w-full">
                <ContactSlider />
              </div>

            </div>
          </section>
        </>
      )}

      {view === 'projects' && (
        /* --- ALL PROJECTS PAGE VIEW --- */
        <div className="pt-32 pb-24 px-6 min-h-screen">
          <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
            <button 
              onClick={() => { setView('home'); window.scrollTo(0,0); }}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#145850] font-bold mb-8 transition-colors"
            >
              <ArrowLeft size={20} /> Back to Home
            </button>
            
            <div className="mb-12">
               <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">All Projects</h1>
               <p className="text-gray-500 max-w-2xl text-lg">A collection of my recent work in UI/UX and Product Design.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {PROJECTS.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  lang={lang}
                  onClick={() => handleProjectClick(project, 'grid')}
                  isGrid={true}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {view === 'project-detail' && activeProject && (
        <div className="min-h-screen bg-white animate-in fade-in duration-300 pb-20">
          <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
            <button 
              onClick={() => setView('projects')} 
              className="pointer-events-auto bg-white/80 backdrop-blur-md p-3 rounded-full shadow-sm hover:bg-white transition-all text-gray-800 border border-gray-100 group"
            >
              <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
          </nav>
          <ProjectDetail project={activeProject} lang={lang} />
        </div>
      )}

      {/* --- Footer --- */}
      {view !== 'project-detail' && (
        <footer id="contact" className="py-20 px-6 border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-black text-gray-900 mb-1">{PROFILE.name[lang]}</h2>
              <p className="text-gray-500 text-sm">Designed & Built with React & Tailwind.</p>
            </div>
            <div className="flex gap-4">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="bg-gray-100 hover:bg-blue-50 hover:text-blue-600 p-4 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${PROFILE.email}`} className="bg-gray-100 hover:bg-emerald-50 hover:text-emerald-600 p-4 rounded-full transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </footer>
      )}

      {/* Only show modal when in Home view */}
      <Modal 
        key={activeProject?.id}
        isOpen={!!activeProject && view === 'home'} 
        onClose={() => setActiveProject(null)} 
        project={activeProject} 
        lang={lang} 
      />

    </div>
  );
}