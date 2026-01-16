import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-300">
        
        {/* Header / Image Area */}
        <div className={`relative h-64 sm:h-80 md:h-[400px] w-full flex-shrink-0 ${project.imageBgColor} overflow-hidden`}>
           <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 bg-black/10 hover:bg-black/20 backdrop-blur-md p-2 rounded-full transition-colors text-white border border-white/20"
          >
            <X className="w-6 h-6 text-black" />
          </button>
           <div className={`w-full h-full ${project.imagePadding || ''} flex items-center justify-center`}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
           </div>
        </div>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-white">
           <div className="inline-block px-4 py-1.5 rounded-full border border-gray-900 mb-6">
                <span className="text-xs font-bold tracking-widest uppercase">
                    {project.tag}
                </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-[1.1] text-gray-900 uppercase">
                {project.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Main Content Column */}
                <div className="lg:col-span-2 space-y-10">
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">About the Project</h3>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                            {project.fullDescription || project.description}
                        </p>
                    </div>

                    {project.testimonial && (
                        <div className="bg-[#F9F9F9] p-8 md:p-10 rounded-3xl border border-gray-100 relative">
                             <div className="text-brand-green mb-4 opacity-20 absolute top-6 right-8">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                </svg>
                             </div>
                             <p className="text-xl md:text-2xl font-serif italic text-gray-800 mb-6 relative z-10 leading-normal">
                                "{project.testimonial.quote}"
                             </p>
                             <div className="relative z-10">
                                <div className="font-bold text-gray-900 text-lg">{project.testimonial.author}</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">{project.testimonial.role}</div>
                             </div>
                        </div>
                    )}
                </div>

                {/* Sidebar Column */}
                <div className="space-y-10">
                     {project.technologies && (
                        <div>
                             <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Technologies</h3>
                             <div className="flex flex-wrap gap-2">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg border border-gray-200">
                                        {tech}
                                    </span>
                                ))}
                             </div>
                        </div>
                     )}
                     
                     <div className="pt-4 lg:pt-0">
                        <button className="w-full bg-forest-900 text-white py-5 px-6 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-forest-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                            {project.ctaText || 'View Case Study'}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-xs text-center text-gray-400 mt-4">Opens external case study in new tab</p>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;