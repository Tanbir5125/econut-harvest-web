
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Impact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
              Our Impact
            </h1>
            <p className="text-xl text-green-800 max-w-3xl mx-auto">
              Transforming lives, empowering communities, and building a sustainable future 
              for coconut farming in Karnataka.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Problem */}
              <div>
                <h2 className="text-4xl font-bold text-red-800 mb-8">The Problem We Solve</h2>
                <div className="space-y-6">
                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-red-800 flex items-center">
                        <span className="text-2xl mr-3">💸</span>
                        Middleman Exploitation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-red-700">
                        Farmers receive only 30-40% of the final product price due to multiple intermediaries, 
                        reducing their income and motivation to continue farming.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-red-800 flex items-center">
                        <span className="text-2xl mr-3">📊</span>
                        Market Access Barriers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-red-700">
                        Small farmers lack direct access to premium markets and consumers, 
                        limiting their ability to get fair prices for quality products.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-red-800 flex items-center">
                        <span className="text-2xl mr-3">👥</span>
                        Youth Migration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-red-700">
                        Young people leave rural areas for urban jobs due to lack of opportunities 
                        in traditional agriculture, weakening farming communities.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-4xl font-bold text-green-800 mb-8">Our Solution</h2>
                <div className="space-y-6">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-green-800 flex items-center">
                        <span className="text-2xl mr-3">🎯</span>
                        Direct Market Connection
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-green-700">
                        We connect farmers directly to consumers and businesses, ensuring 
                        70-80% of product value reaches the farmer, dramatically increasing their income.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-green-800 flex items-center">
                        <span className="text-2xl mr-3">🌱</span>
                        Value-Added Processing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-green-700">
                        We help farmers process raw coconuts into premium products like virgin oil, 
                        neera sugar, and health drinks, multiplying their revenue potential.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-green-800 flex items-center">
                        <span className="text-2xl mr-3">📚</span>
                        Training & Employment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-green-700">
                        We provide technical training to rural youth, creating local employment 
                        opportunities and keeping families together in farming communities.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Traction */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Market Traction & Growth
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our impact in numbers - demonstrating sustainable growth and positive change
              </p>
            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌾</span>
                </div>
                <div className="text-3xl font-bold text-green-900 mb-2">500+</div>
                <p className="text-gray-600">Farmers Empowered</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <div className="text-3xl font-bold text-amber-800 mb-2">200+</div>
                <p className="text-gray-600">Rural Jobs Created</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <div className="text-3xl font-bold text-green-900 mb-2">40%</div>
                <p className="text-gray-600">Income Increase</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏪</span>
                </div>
                <div className="text-3xl font-bold text-amber-800 mb-2">50+</div>
                <p className="text-gray-600">Retail Partners</p>
              </div>
            </div>

            {/* Growth Story */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">Year 1: Foundation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Established partnerships with 100 farmers
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Launched first 3 products locally
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Set up processing facilities
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Achieved organic certification
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800">Year 2: Expansion</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Grew to 300 farmer network
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Expanded to 6 product lines
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Entered online marketplaces
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Established B2B partnerships
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">Year 3: Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      500+ farmers across Karnataka
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Complete 9-product portfolio
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Multi-state distribution
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Training 200+ rural youth
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Environmental Sustainability
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our commitment to environmental protection and sustainable farming practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-green-200 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <CardTitle className="text-green-900">Organic Farming</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    100% chemical-free farming methods protecting soil health and biodiversity
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-amber-200 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💧</span>
                  </div>
                  <CardTitle className="text-amber-800">Water Conservation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Efficient water management systems reducing consumption by 30%
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-200 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">♻️</span>
                  </div>
                  <CardTitle className="text-green-900">Zero Waste</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Complete utilization of coconut parts, minimizing agricultural waste
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-amber-200 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌳</span>
                  </div>
                  <CardTitle className="text-amber-800">Carbon Neutral</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Coconut trees absorb CO2, making our farming operations carbon negative
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

export default Impact;
