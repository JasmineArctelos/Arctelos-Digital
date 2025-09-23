import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <ContactForm />
    </div>
  );
};

export default Index;
