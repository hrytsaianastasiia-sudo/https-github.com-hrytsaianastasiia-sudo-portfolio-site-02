import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import ContactSlider from './components/ContactSlider';
import Footer from './components/Footer';
import ProjectsGrid from './components/ProjectsGrid';
import ProjectDetail from './components/ProjectDetail';
import BackToTop from './components/BackToTop';
import { Project } from './types';

function App() {
  const [view, setView] = useState<'home' | 'projects' | 'project-detail'>('home');
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setView('home');
    setCurrentProject(null);
    scrollToTop();
  };

  const handleNavigateProjects = () => {
    setView('projects');
    setCurrentProject(null);
    scrollToTop();
  };

  const handleProjectClick = (project: Project) => {
    setCurrentProject(project);
    setView('project-detail');
    scrollToTop();
  };

  const renderContent = () => {
    if (view === 'project-detail' && currentProject) {
      return (
        <ProjectDetail 
          project={currentProject} 
          onBack={handleNavigateHome} 
        />
      );
    }

    if (view === 'projects') {
      return <ProjectsGrid onProjectClick={handleProjectClick} />;
    }

    return (
      <>
        <Hero onViewProjects={handleNavigateProjects} />
        <WorkSection onProjectClick={handleProjectClick} />
        <ContactSlider />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-gray-900 selection:bg-black selection:text-white relative">
      <Navbar onLogoClick={handleNavigateHome} />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;