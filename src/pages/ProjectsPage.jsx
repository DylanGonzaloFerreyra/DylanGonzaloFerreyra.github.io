import Header from '../components/Header';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import { Rocket } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="page-frame">
      <Header />
      <div className="projects-page-content">
        <div className="projects-page-header">
          <h1 className="section-title"><Rocket size={20} /> All Projects</h1>
          <p className="projects-page-subtitle">A collection of all my work and side projects</p>
        </div>
        <ProjectsSection showAll />
      </div>
      <Footer />
    </div>
  );
}
