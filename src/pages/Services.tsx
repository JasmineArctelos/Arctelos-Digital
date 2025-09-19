import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive engineering services from concept to production, 
            helping you bring innovative digital device solutions to reality.
          </p>
        </div>
      </div>
      <ServicesSection />
    </div>
  );
};

export default Services;