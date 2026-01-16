import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProjectsGridProps {
  onProjectClick: (project: Project) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onProjectClick }) => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-forest-900 mb-6">
          All Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl font-medium">
          A collection of case studies highlighting data-driven, human-centered digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col group cursor-pointer"
            onClick={() => onProjectClick(project)}
          >
            <div className={`w-full aspect-[4/3] rounded-[2rem] overflow-hidden ${project.imageBgColor || 'bg-gray-100'} mb-8 shadow-sm`}>
              <div className={`w-full h-full ${project.imagePadding || ''}`}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="inline-block px-4 py-1.5 rounded-full border border-gray-900 mb-6">
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                    {project.tag}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-gray-900 group-hover:text-forest-800 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-normal">
                {project.description}
              </p>
              
              <button className="flex items-center gap-3 text-base font-bold text-black group-hover:opacity-70 transition-opacity mt-auto">
                {project.ctaText || 'View Case Study'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;