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
    <div className="min-h-screen">
      <HeroSection />
      <TechnologySection />
      <WorkSection />
      <SkillsSection />
      <RibbonBanner />
      <AboutSection />
      <TestimonialSection />
      <MySiteSection />
    </div>
  );
}
