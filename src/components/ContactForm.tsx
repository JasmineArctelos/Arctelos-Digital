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

              {/* Email */}
              <div className="flex items-center space-x-4">
                <Mail className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">info@arctelos.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <Phone className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              {/* Addresses Section */}
              <div className="space-y-6">

                {/* Office Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Address:</p>
                    <p className="text-gray-600">
                      Plot #9, Karpagam Nagar<br />
                      Thirumudivakkam<br />
                      Chennai - 600044<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Factory Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Factory:</p>
                    <p className="text-gray-600">
                      #21, SIDCO Industrial Area<br />
                      Karuppur<br />
                      Salem - 636011<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Section - Form (Hidden for now) */}
          {showForm && (
            <Card className="p-8 bg-white shadow-card border border-border/50">
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
