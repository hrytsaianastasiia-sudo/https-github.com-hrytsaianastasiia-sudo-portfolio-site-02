import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface WorkSectionProps {
  onProjectClick: (project: Project) => void;
}

const WorkSection: React.FC<WorkSectionProps> = ({ onProjectClick }) => {
  return (
    <section id="work" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col gap-32">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image Side - Clickable */}
            <div 
                className={`flex-1 w-full rounded-[2.5rem] overflow-hidden ${project.imageBgColor} shadow-sm group cursor-pointer`}
                onClick={() => onProjectClick(project)}
            >
               <div className={`w-full h-full aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden ${project.imagePadding || ''}`}>
                   <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                   />
               </div>
            </div>

            {/* Text Side */}
            <div className="flex-1 flex flex-col items-start text-left lg:py-8">
              <div className="inline-block px-6 py-2 rounded-full border border-gray-900 mb-8">
                <span className="text-xs font-medium tracking-widest uppercase">
                    {project.tag}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-medium mb-6 leading-[1.1] tracking-tight text-gray-900 cursor-pointer hover:text-forest-900 transition-colors" onClick={() => onProjectClick(project)}>
                {project.title}
              </h2>
              
              <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed font-normal max-w-lg">
                {project.description}
              </p>
              
              <button 
                onClick={() => onProjectClick(project)}
                className="group flex items-center gap-3 text-lg font-semibold text-black hover:opacity-70 transition-opacity"
              >
                {project.ctaText || 'View Case Study'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;