import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/AboutSection';
import HistorySection from '@/components/HistorySection';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';
import BlogSection from '@/components/BlogSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark font-lato transition-colors duration-300">
                
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <GallerySection />
                <HistorySection />
                <BlogSection />
                <Footer />
                
    </div>
  );
}