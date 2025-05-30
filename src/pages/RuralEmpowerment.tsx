
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, TrendingUp, Leaf, Heart, Award, Target } from "lucide-react";

const RuralEmpowerment = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-amber-50 pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=800&fit=crop')"
          }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 font-semibold rounded-full text-sm mb-6">
              Transforming Rural Communities
            </span>
            <h1 className="font-bold text-4xl md:text-6xl text-green-900 mb-8 leading-tight">
              Rural Empowerment Project
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-12 max-w-3xl mx-auto">
              Empowering farmers, generating employment, and building sustainable livelihoods 
              across Karnataka's coconut farming communities
            </p>
            
            {/* Key Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-900">500+</div>
                <div className="text-green-700">Farmers Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700">₹2Cr+</div>
                <div className="text-green-700">Income Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-900">1000+</div>
                <div className="text-green-700">Jobs Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700">15+</div>
                <div className="text-green-700">Villages Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-green-900 mb-6">
                Transforming Rural Lives
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our Rural Empowerment Project focuses on creating sustainable economic opportunities 
                while preserving traditional farming practices and protecting the environment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-green-900">Employment Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    Creating diverse employment opportunities across the coconut value chain, 
                    from farming to processing and marketing.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-amber-800">Income Enhancement</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    Increasing farmer incomes through direct market access, value addition, 
                    and elimination of middlemen exploitation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-green-900">Sustainable Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    Promoting organic farming practices and sustainable resource management 
                    for long-term community prosperity.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-green-900 mb-6">
                Our Key Initiatives
              </h2>
              <p className="text-xl text-gray-700">
                Comprehensive programs designed to uplift rural communities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-900 mb-2">Direct Market Linkage</h3>
                    <p className="text-gray-700">
                      Connecting farmers directly with consumers and retailers, ensuring fair prices 
                      and eliminating middleman exploitation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-2">Skill Development</h3>
                    <p className="text-gray-700">
                      Training programs in modern farming techniques, product processing, 
                      quality control, and business management.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-900 mb-2">Community Welfare</h3>
                    <p className="text-gray-700">
                      Healthcare initiatives, educational support, and infrastructure development 
                      for farming communities.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-2">Organic Certification</h3>
                    <p className="text-gray-700">
                      Supporting farmers in achieving organic certification to access premium 
                      markets and better pricing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-900 mb-2">Value Addition</h3>
                    <p className="text-gray-700">
                      Establishing processing units for coconut oil, neera sugar, and other 
                      value-added products to increase farmer income.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-2">Women Empowerment</h3>
                    <p className="text-gray-700">
                      Special programs for women farmers focusing on leadership development, 
                      financial literacy, and entrepreneurship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-green-900 mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-700">
                Real impact, real transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">Ramesh Kumar - Tumkur District</CardTitle>
                  <CardDescription>Coconut Farmer & Entrepreneur</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    "Before joining ECONUT, I was selling my coconuts at ₹12 each to middlemen. 
                    Now, through direct market access and value addition, I earn ₹25 per coconut. 
                    My monthly income has increased from ₹15,000 to ₹40,000."
                  </p>
                  <div className="text-sm text-green-600 font-semibold">
                    Income increase: 167%
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800">Lakshmi Devi - Mandya District</CardTitle>
                  <CardDescription>Women's Self-Help Group Leader</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    "Through ECONUT's women empowerment program, I learned coconut oil processing. 
                    Now I run my own unit employing 15 women from my village. We produce 500 liters 
                    of virgin coconut oil monthly."
                  </p>
                  <div className="text-sm text-amber-600 font-semibold">
                    Jobs created: 15 women employed
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-green-900 mb-6">
                Measurable Impact
              </h2>
              <p className="text-xl text-gray-700">
                Our commitment to transparency and accountability
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">500+</span>
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Farmers Benefited</h3>
                <p className="text-gray-600">Direct impact across 15 villages</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">₹2Cr</span>
                </div>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Additional Income</h3>
                <p className="text-gray-600">Generated for farming families</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1000+</span>
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Jobs Created</h3>
                <p className="text-gray-600">Direct and indirect employment</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">95%</span>
                </div>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Satisfaction Rate</h3>
                <p className="text-gray-600">Among participating farmers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Be part of the transformation. Whether you're a farmer, investor, or conscious consumer, 
              you can contribute to rural empowerment and sustainable development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg font-semibold rounded-full"
                onClick={() => window.location.href = '/contact'}
              >
                Partner With Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-green-100 text-green-100 hover:bg-green-100 hover:text-green-900 px-8 py-4 text-lg font-semibold rounded-full"
                onClick={() => window.location.href = '/products'}
              >
                Support Through Purchase
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RuralEmpowerment;
