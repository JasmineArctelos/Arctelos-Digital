import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  Lightbulb, 
  Users, 
  Cog,
  ArrowRight,
  Target,
  Clock,
  Award
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Custom Design & Development",
      description: "End-to-end custom electronic system design from concept to production, tailored to your specific requirements.",
      highlights: ["Concept Development", "Prototyping", "Testing & Validation", "Production Support"]
    },
    {
      icon: Cog,
      title: "System Integration",
      description: "Seamless integration of hardware and software components to create comprehensive solutions for complex applications.",
      highlights: ["Hardware Integration", "Software Development", "IoT Solutions", "Cloud Connectivity"]
    },
    {
      icon: Wrench,
      title: "Technical Consulting",
      description: "Expert technical consulting services to help you make informed decisions and optimize your electronic systems.",
      highlights: ["Technical Analysis", "System Architecture", "Performance Optimization", "Best Practices"]
    },
    {
      icon: Users,
      title: "Support & Maintenance",
      description: "Comprehensive support and maintenance services to ensure your systems operate at peak performance.",
      highlights: ["24/7 Technical Support", "Preventive Maintenance", "System Updates", "Training Programs"]
    }
  ];

  const capabilities = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "High-accuracy systems designed to meet exact specifications and performance requirements."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Efficient development processes to deliver solutions quickly without compromising quality."
    },
    {
      icon: Award,
      title: "Quality Assurance", 
      description: "Rigorous testing and quality control processes to ensure reliable, long-lasting products."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive engineering services to bring your digital device concepts to reality
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-gradient-card shadow-card hover:shadow-xl transition-smooth border border-border/50 group">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-spring">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {service.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {capabilities.map((capability, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-white shadow-card border border-border/50 hover:shadow-xl transition-smooth group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                <capability.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{capability.title}</h3>
              <p className="text-sm text-muted-foreground">{capability.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss how our expertise can help bring your digital device concepts to life. 
            Contact us for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="professional" size="lg" className="group">
              Get Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-primary">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;