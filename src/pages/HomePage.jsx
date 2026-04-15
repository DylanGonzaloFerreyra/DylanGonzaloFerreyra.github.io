import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificatesSection from '../components/CertificatesSection';
import EducationSection from '../components/EducationSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="page-frame">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <EducationSection />
      <Footer />
    </div>
  );
}
