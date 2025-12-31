import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import NoteSection from "@/components/NoteSection";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <FloatingHearts />
      <HeroSection />
      <PhotoGallery />
      <NoteSection />
      <Footer />
    </main>
  );
};

export default Index;
