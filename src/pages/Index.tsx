import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Index;
