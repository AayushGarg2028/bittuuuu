import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import NoteSection from "@/components/NoteSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PhotoGallery />
      <NoteSection />
      <Footer />
    </main>
  );
};

export default Index;
