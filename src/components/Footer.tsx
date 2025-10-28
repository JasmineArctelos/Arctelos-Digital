import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import arctelosLogo from "@/assets/arctelos-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={arctelosLogo} 
                alt="Arctelos Logo" 
                className="h-8 w-auto" 
              />
              <span className="text-xl font-bold">Arctelos</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Specialized in creating cutting-edge digital devices for healthcare and defense applications. 
              We deliver innovative solutions that drive excellence and catalyze potential.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-primary transition-smooth"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span className="text-white/80">info@arctelos.com</span>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>

              {/* Office Address */}
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                <span className="text-white/80">
                  <strong>Office:</strong><br />
                  Plot #9, Karpagam Nagar<br />
                  Thirumudivakkam<br />
                  Chennai - 600044<br />
                  Tamil Nadu, India
                </span>
              </div>

              {/* Factory Address */}
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                <span className="text-white/80">
                  <strong>Factory:</strong><br />
                  #21, SIDCO Industrial Area<br />
                  Karuppur<br />
                  Salem - 636011<br />
                  Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Arctelos. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-smooth">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;