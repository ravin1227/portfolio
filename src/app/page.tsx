import HeroSection from '@/components/HeroSection';
import TechnologySection from '@/components/TechnologySection';
import WorkSection from '@/components/WorkSection';
import SkillsSection from '@/components/SkillsSection';
import RibbonBanner from '@/components/RibbonBanner';
import AboutSection from '@/components/AboutSection';
import TestimonialSection from '@/components/TestimonialSection';
import MySiteSection from '@/components/MySiteSection';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechnologySection />
        <WorkSection />
        <SkillsSection />
      </div>
      <RibbonBanner />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSection />
        <TestimonialSection />
        <MySiteSection />
      </div>
    </div>
  );
}
