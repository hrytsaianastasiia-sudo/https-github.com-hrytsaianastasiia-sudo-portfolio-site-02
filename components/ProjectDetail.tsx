import React, { useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  // Ensure we start at the top of the page when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        {/* Header Section */}
        <div className="mb-16">
           <div className="inline-block px-4 py-1.5 rounded-full border border-gray-900 mb-6">
                <span className="text-xs font-bold tracking-widest uppercase">
                    {project.tag}
                </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 uppercase leading-[0.9] mb-12">
                {project.title}
            </h1>
            
            <div className={`w-full aspect-[16/9] md:aspect-[2/1] rounded-[2rem] overflow-hidden ${project.imageBgColor} shadow-sm`}>
                 <div className={`w-full h-full ${project.imagePadding || ''} flex items-center justify-center`}>
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                 </div>
            </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">About the Project</h3>
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                        {project.fullDescription || project.description}
                    </p>
                </div>

                {project.testimonial && (
                    <div className="bg-[#F9F9F9] p-8 md:p-12 rounded-[2rem] relative mt-12">
                         <div className="text-brand-green mb-4 opacity-10 absolute top-8 right-8">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                            </svg>
                         </div>
                         <p className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-8 relative z-10 leading-normal">
                            "{project.testimonial.quote}"
                         </p>
                         <div className="relative z-10">
                            <div className="font-bold text-gray-900 text-xl">{project.testimonial.author}</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2">{project.testimonial.role}</div>
                         </div>
                    </div>
                )}
            </div>

            {/* Sidebar */}
            <div className="space-y-12">
                 {project.technologies && (
                    <div>
                         <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Technologies</h3>
                         <div className="flex flex-wrap gap-2">
                            {project.technologies.map(tech => (
                                <span key={tech} className="px-4 py-2 bg-gray-50 text-gray-900 text-sm font-semibold rounded-lg border border-gray-100">
                                    {tech}
                                </span>
                            ))}
                         </div>
                    </div>
                 )}
                 
                 <div className="pt-8 border-t border-gray-100 lg:border-none lg:pt-0">
                    <a 
                      href={project.link || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-forest-900 text-white py-6 px-8 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-forest-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        {project.ctaText || 'View Live Site'}
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <p className="text-xs text-center text-gray-400 mt-4">Opens in new tab</p>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;