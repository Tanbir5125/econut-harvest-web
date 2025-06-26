
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-green-800 max-w-3xl mx-auto">
              Get in touch with our team for product inquiries, partnerships, 
              or to learn more about our sustainable farming initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-green-900 mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-green-800 font-semibold">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 border-green-200 focus:border-green-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-green-800 font-semibold">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 border-green-200 focus:border-green-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-green-800 font-semibold">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2 w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:border-green-500"
                      placeholder="Tell us about your inquiry, partnership interest, or any questions you have..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-green-900 mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <Card className="border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-900 flex items-center">
                        <span className="text-2xl mr-3">📧</span>
                        Email Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-700">
                        <strong>General Inquiries:</strong> info@FreshWorth.com<br />
                        <strong>Sales & Orders:</strong> sales@FreshWorth.com<br />
                        <strong>Partnerships:</strong> partners@FreshWorth.com
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-amber-200">
                    <CardHeader>
                      <CardTitle className="text-amber-800 flex items-center">
                        <span className="text-2xl mr-3">📞</span>
                        Call Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-700">
                        <strong>Main Office:</strong> +91-1234567890<br />
                        <strong>Customer Support:</strong> +91-9876543210<br />
                        <strong>Business Hours:</strong> Mon-Fri 9AM-6PM IST
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-900 flex items-center">
                        <span className="text-2xl mr-3">📍</span>
                        Visit Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-700">
                        <strong>Head Office:</strong><br />
                        FreshWorth Farmer Producer Organization<br />
                        Coconut Processing Center<br />
                        Karnataka, India 560001
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-green-900 mb-6">Find Us</h2>
              <p className="text-xl text-gray-700">Located in the heart of Karnataka's coconut farming region</p>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🗺️</span>
                <p className="text-xl text-gray-600">Interactive Map Coming Soon</p>
                <p className="text-gray-500">Karnataka, India - Coconut Farming Region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-green-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-6">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">How can I purchase your products?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    You can purchase our products through our website, contact us directly via phone or email, 
                    or visit our partner retail stores. We offer both online ordering and local pickup options.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800">Do you offer bulk orders for businesses?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    Yes! We welcome B2B partnerships and offer special pricing for bulk orders. Contact our 
                    sales team at sales@FreshWorth.com for wholesale pricing and partnership opportunities.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">Are your products certified organic?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    Yes, all our products are certified organic and follow strict quality standards. 
                    We can provide certification documents upon request.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800">How can farmers join your network?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    Coconut farmers interested in joining our network can contact us directly. We provide 
                    training, fair pricing, and support to help farmers transition to organic methods.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
