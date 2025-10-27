// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Card } from "@/components/ui/card";
// import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// const ContactForm = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "", 
//     company: "",
//     email: "",
//     message: "",
//     privacy: false
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!formData.privacy) {
//       toast({
//         title: "Privacy Agreement Required",
//         description: "Please agree to our privacy policy to continue.",
//         variant: "destructive"
//       });
//       return;
//     }

//     // Here you would typically send the data to your backend
//     toast({
//       title: "Message Sent Successfully!",
//       description: "We'll get back to you within 24 hours.",
//     });
    
//     // Reset form
//     setFormData({
//       name: "",
//       phone: "",
//       company: "",
//       email: "",
//       message: "",
//       privacy: false
//     });
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <section className="py-20 bg-gradient-to-t from-muted/30 via-background to-muted/20 relative">
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-32 right-16 w-80 h-80 border border-primary/10 rounded-full"></div>
//         <div className="absolute bottom-40 left-16 w-60 h-60 border border-primary/15 rounded-full"></div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//             Get in Touch
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Turn disruption into opportunity. Catalyze your potential and drive excellence with Arctelos.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-semibold text-foreground mb-6">
//                 Let's Discuss Your Project
//               </h3>
//               <p className="text-muted-foreground text-lg leading-relaxed mb-8">
//                 Whether you need custom digital devices, healthcare electronics, or defense solutions, 
//                 our team of experts is ready to help you achieve your goals.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-foreground">Email</h4>
//                   <p className="text-muted-foreground">info@arctelos.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
//                   <Phone className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-foreground">Phone</h4>
//                   <p className="text-muted-foreground">+1 (555) 123-4567</p>
//                 </div>
//               </div>

//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
//                   <MapPin className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-foreground">Address</h4>
//                   <p className="text-muted-foreground">
//                     123 Technology Drive<br />
//                     Innovation Park, Tech City 12345
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <Card className="p-6 bg-gradient-card border border-primary/20">
//               <h4 className="font-semibold text-foreground mb-3">Why Choose Arctelos?</h4>
//               <ul className="space-y-2 text-sm text-muted-foreground">
//                 <li className="flex items-center">
//                   <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
//                   Expert team with deep industry experience
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
//                   Custom solutions tailored to your needs
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
//                   Proven track record in healthcare and defense
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
//                   End-to-end project support
//                 </li>
//               </ul>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <Card className="p-8 bg-white shadow-card border border-border/50">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                     Your Name*
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full"
//                     placeholder="Enter your full name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
//                     Phone Number
//                   </label>
//                   <Input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
//                     Company Name*
//                   </label>
//                   <Input
//                     id="company"
//                     name="company"
//                     type="text"
//                     required
//                     value={formData.company}
//                     onChange={handleInputChange}
//                     className="w-full"
//                     placeholder="Enter your company name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                     Work Email*
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full"
//                     placeholder="Enter your work email"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                   Message*
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   required
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows={4}
//                   className="w-full resize-none"
//                   placeholder="Tell us about your project requirements..."
//                 />
//               </div>

//               <div className="flex items-start space-x-3">
//                 <Checkbox
//                   id="privacy"
//                   checked={formData.privacy}
//                   onCheckedChange={(checked) => 
//                     setFormData(prev => ({ ...prev, privacy: checked as boolean }))
//                   }
//                   className="mt-1"
//                 />
//                 <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
//                   I confirm, I have read and agreed to{" "}
//                   <a href="#" className="text-primary hover:underline">Privacy Policy</a>{" "}
//                   and consent to sharing my information. For more information, please review our{" "}
//                   <a href="#" className="text-primary hover:underline">Cookies Policy</a>{" "}
//                   and{" "}
//                   <a href="#" className="text-primary hover:underline">Privacy Statement</a>.
//                 </label>
//               </div>

//               <Button
//                 type="submit"
//                 variant="hero"
//                 size="lg"
//                 className="w-full group"
//               >
//                 Submit
//                 <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </form>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  // Toggle this to true later when backend and email integration are ready
  const showForm = false;

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Feel free to reach out to us for any queries or collaborations.
        </p>

        {/* Grid adjusted to single column when form is hidden */}
        <div className={`grid ${showForm ? "lg:grid-cols-2" : "grid-cols-1"} gap-12`}>
          
          {/* Left Section - Contact Info */}
          <Card className="p-8 bg-white shadow-card border border-border/50">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">info@arctelos.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-gray-600">
                    123 Business Avenue, Tech Park, Chennai, India
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Section - Form (Hidden for now) */}
          {showForm && (
            <Card className="p-8 bg-white shadow-card border border-border/50">
              {/* TODO: Enable this form once backend and email integration are ready */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="info@arctelos.com"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Write your message..."
                    rows={4}
                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}

