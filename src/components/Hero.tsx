import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight, Cpu, Radio, Shield } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import heroTank from "@/assets/hero-tank.jpg";
import heroSatellite from "@/assets/hero-satellite.jpg";
import heroHealthcare from "@/assets/hero-healthcare.jpg";

const Hero = () => {
  const heroImages = [
    { src: heroTank, alt: "Defense Technology - Battle Tank" },
    { src: heroSatellite, alt: "Satellite Technology - GPS Systems" },
    { src: heroHealthcare, alt: "Healthcare Analytics - Digital Devices" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full h-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-full -ml-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="relative h-screen min-h-screen pl-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
                  style={{ backgroundImage: `url(${image.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary/70 to-primary-dark/80" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-20 left-10 w-72 h-72 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-96 h-96 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 border border-white/15 rounded-full"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Advanced Digital Solutions for
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Healthcare & Defense
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialized in creating cutting-edge digital devices including GPS systems, 
            routers, BLE healthcare devices, and electronic solutions for defense applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="professional" size="xl" className="group">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="flex flex-col items-center text-white/90 group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-smooth">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">High-Speed DAQ Systems</h3>
              <p className="text-sm text-white/80 text-center">
                Multi-channel data acquisition systems with sampling rates greater than 50 kSPS
              </p>
            </div>

            <div className="flex flex-col items-center text-white/90 group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-smooth">
                <Radio className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">BLE Healthcare Devices</h3>
              <p className="text-sm text-white/80 text-center">
                Bluetooth Low Energy solutions for healthcare monitoring and tracking
              </p>
            </div>

            <div className="flex flex-col items-center text-white/90 group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-smooth">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Defense Electronics</h3>
              <p className="text-sm text-white/80 text-center">
                Specialized electronic systems designed for defense applications
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C400,20 800,100 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;