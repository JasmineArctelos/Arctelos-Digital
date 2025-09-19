import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We push the boundaries of technology to create cutting-edge solutions that address real-world challenges."
    },
    {
      icon: Award,
      title: "Excellence", 
      description: "We maintain the highest standards of quality and performance in every project we undertake."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand their needs and deliver customized solutions."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Arctelos
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Leading the way in digital device innovation for healthcare and defense applications
          </p>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Arctelos was founded with a vision to revolutionize the digital device landscape 
                through innovative engineering and cutting-edge technology. We specialize in creating 
                sophisticated electronic solutions that serve critical applications in healthcare and defense.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our expertise spans from high-speed data acquisition systems and BLE healthcare devices 
                to GPS navigation systems and defense electronics. We pride ourselves on delivering 
                custom solutions that meet the most demanding requirements.
              </p>
              <Button variant="hero" className="group">
                Learn More About Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card">
                <div className="w-full h-full bg-primary/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">10+ Years</h3>
                    <p className="text-foreground">Of Innovation Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our approach to innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center bg-gradient-card shadow-card border border-border/50 hover:shadow-xl transition-smooth group">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-spring">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help bring your digital device vision to life.
          </p>
          <Button variant="professional" size="lg" className="group">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;