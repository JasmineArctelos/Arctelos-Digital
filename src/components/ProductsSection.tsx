import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Activity, 
  Bluetooth, 
  MapPin, 
  Shield, 
  Zap, 
  Wifi,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: Activity,
      title: "High-Speed DAQ Systems",
      description: "Multi-channel high-speed data acquisition systems with sampling rates greater than 50 kSPS for demanding applications.",
      features: [
        "8-Channel simultaneous sampling",
        "Accelerometer & microphone interfaces", 
        "MATLAB & LabVIEW compatibility",
        "Real-time analysis capabilities"
      ],
      applications: "Vibration Analysis, Acoustics, Structural Testing"
    },
    {
      icon: Bluetooth,
      title: "BLE Healthcare Devices",
      description: "Advanced Bluetooth Low Energy devices designed specifically for healthcare monitoring and patient tracking applications.",
      features: [
        "Low power consumption",
        "Real-time health monitoring",
        "Secure data transmission",
        "Cloud platform integration"
      ],
      applications: "Patient Monitoring, Asset Tracking, Wellness Devices"
    },
    {
      icon: MapPin,
      title: "GPS & Navigation Systems",
      description: "Precision GPS systems and navigation solutions for various industrial and commercial applications.",
      features: [
        "High-accuracy positioning",
        "Multi-constellation support",
        "Ruggedized design",
        "Custom firmware solutions"
      ],
      applications: "Fleet Management, Survey Equipment, Autonomous Vehicles"
    },
    {
      icon: Wifi,
      title: "Industrial Routers",
      description: "Robust networking solutions designed for industrial environments with advanced connectivity features.",
      features: [
        "Industrial-grade reliability",
        "Multiple connectivity options",
        "Advanced security protocols",
        "Remote management capabilities"
      ],
      applications: "Industrial IoT, Remote Monitoring, Network Infrastructure"
    },
    {
      icon: Shield,
      title: "Defense Electronics",
      description: "Specialized electronic systems engineered to meet stringent defense and security requirements.",
      features: [
        "Military-grade specifications",
        "Encrypted communications",
        "Extreme environment operation",
        "Custom security protocols"
      ],
      applications: "Military Communications, Surveillance, Tactical Systems"
    },
    {
      icon: Zap,
      title: "Motor Test Systems",
      description: "Comprehensive motor characterization test benches with real-time analysis and automated testing capabilities.",
      features: [
        "Bidirectional motor control",
        "Real-time FFT analysis",
        "Automated test cycles",
        "Comprehensive data logging"
      ],
      applications: "Motor Validation, Quality Control, R&D Testing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Product Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge digital devices and electronic systems designed for healthcare, 
            defense, and industrial applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-xl transition-smooth border border-border/50 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-spring">
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{product.title}</h3>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary text-sm mb-1">Applications:</h4>
                <p className="text-sm text-foreground">{product.applications}</p>
              </div>

              <Button variant="outline" className="w-full group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="group">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;