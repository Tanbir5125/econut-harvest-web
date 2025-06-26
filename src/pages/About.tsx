
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
              About FreshWorth
            </h1>
            <p className="text-xl text-green-800 max-w-3xl mx-auto">
              A Farmer Producer Organization dedicated to empowering coconut farmers 
              and delivering premium organic products from Karnataka's fertile lands.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold text-green-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  To bridge the gap between coconut farmers and consumers by providing direct market access, 
                  ensuring fair prices for farmers while delivering authentic, high-quality organic coconut 
                  products to health-conscious consumers.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Eliminate middlemen to maximize farmer returns
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Promote sustainable and organic farming practices
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Create rural employment opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Train and empower local youth in modern agriculture
                  </li>
                </ul>
              </div>
              <div className="h-80 bg-gradient-to-br from-green-100 to-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-8xl">🌴</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-80 bg-gradient-to-br from-amber-100 to-green-100 rounded-lg flex items-center justify-center order-2 md:order-1">
                <span className="text-8xl">🎯</span>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold text-green-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-6">
                  To become Karnataka's leading coconut product brand, recognized for quality, 
                  sustainability, and positive social impact, while setting new standards for 
                  farmer-consumer relationships in the agricultural sector.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    Expand reach to health-conscious consumers nationwide
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    Establish strong B2B partnerships with retailers
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    Scale operations across multiple states
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    Become a model for sustainable agriculture practices
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Our Leadership Team
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Experienced professionals dedicated to transforming the coconut industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👨‍💼</span>
                  </div>
                  <CardTitle className="text-green-900">Chief Executive Officer</CardTitle>
                  <CardDescription>Strategic Leadership</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">
                    Leading the organization's vision with extensive experience in agricultural 
                    business development and farmer empowerment initiatives.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👩‍🔬</span>
                  </div>
                  <CardTitle className="text-amber-800">Head of Operations</CardTitle>
                  <CardDescription>Production & Quality</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">
                    Overseeing product development, quality control, and supply chain 
                    management to ensure premium organic standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👨‍🌾</span>
                  </div>
                  <CardTitle className="text-green-900">Farmer Relations Manager</CardTitle>
                  <CardDescription>Community Engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">
                    Building strong relationships with coconut farmers, providing training, 
                    and ensuring fair trade practices across our network.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📊</span>
                  </div>
                  <CardTitle className="text-amber-800">Sales & Marketing Director</CardTitle>
                  <CardDescription>Market Expansion</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">
                    Driving brand awareness and market penetration through strategic 
                    partnerships and innovative marketing campaigns.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔬</span>
                  </div>
                  <CardTitle className="text-green-900">Quality Assurance Lead</CardTitle>
                  <CardDescription>Product Excellence</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">
                    Maintaining the highest standards of organic certification and 
                    product quality across all coconut-based offerings.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <CardTitle className="text-amber-800">Finance & Operations</CardTitle>
                  <CardDescription>Financial Management</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">
                    Managing financial operations, farmer payments, and ensuring 
                    sustainable growth for all stakeholders.
                  </p>
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

export default About;
