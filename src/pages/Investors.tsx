
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Investors = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
              Investment Opportunity
            </h1>
            <p className="text-xl text-green-800 max-w-3xl mx-auto">
              Join us in revolutionizing the coconut industry while generating sustainable returns 
              and creating positive social impact across rural Karnataka.
            </p>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Market Opportunity
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                The organic coconut products market is experiencing unprecedented growth, 
                driven by health-conscious consumers and sustainable farming demand.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-green-200 text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📈</span>
                  </div>
                  <CardTitle className="text-green-900">Market Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-700 mb-2">₹5,000 Cr</div>
                  <CardDescription>
                    Indian organic coconut products market expected to reach ₹5,000 crores by 2028
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-amber-200 text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <CardTitle className="text-amber-800">Growth Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-700 mb-2">25% CAGR</div>
                  <CardDescription>
                    Annual growth rate driven by health awareness and premium product demand
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-200 text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <CardTitle className="text-green-900">Target Market</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-700 mb-2">50M+</div>
                  <CardDescription>
                    Health-conscious consumers across urban and semi-urban India
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Target Audience
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our diverse customer base spans multiple segments with strong growth potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏃‍♀️</span>
                  </div>
                  <CardTitle className="text-green-900">Health-Conscious Consumers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Urban professionals aged 25-45
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Fitness enthusiasts and athletes
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Diabetic and diet-conscious individuals
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Premium product seekers
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <CardTitle className="text-amber-800">B2B Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Organic food retailers
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Health food stores
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Restaurants and cafes
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Export companies
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <CardTitle className="text-green-900">E-commerce Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Amazon, Flipkart marketplace
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      BigBasket, Grofers
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Specialty organic platforms
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Direct-to-consumer sales
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Business Model & Strategy
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Sustainable growth through vertical integration and direct market access
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-green-900 mb-6">Revenue Streams</h3>
                <div className="space-y-4">
                  <Card className="border-green-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-green-800">Direct Product Sales</span>
                        <span className="text-2xl font-bold text-green-700">60%</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-amber-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-amber-800">B2B Partnerships</span>
                        <span className="text-2xl font-bold text-amber-700">25%</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-green-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-green-800">Export Sales</span>
                        <span className="text-2xl font-bold text-green-700">15%</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-900 mb-6">Competitive Advantages</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <strong>Direct farmer relationships</strong> eliminating middemen costs
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <strong>Vertical integration</strong> from farm to consumer
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <strong>Organic certification</strong> commanding premium prices
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <strong>Strong brand positioning</strong> in health and sustainability
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <strong>Established distribution network</strong> across Karnataka
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Financial Projections
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Strong growth trajectory with increasing profitability and market expansion
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <Card className="border-green-200 text-center">
                <CardHeader>
                  <CardTitle className="text-green-900">Year 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-700 mb-2">₹2 Cr</div>
                  <CardDescription>Revenue Target</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-amber-200 text-center">
                <CardHeader>
                  <CardTitle className="text-amber-800">Year 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-700 mb-2">₹5 Cr</div>
                  <CardDescription>Revenue Target</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-200 text-center">
                <CardHeader>
                  <CardTitle className="text-green-900">Year 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-700 mb-2">₹12 Cr</div>
                  <CardDescription>Revenue Target</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-amber-200 text-center">
                <CardHeader>
                  <CardTitle className="text-amber-800">Year 5</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-700 mb-2">₹30 Cr</div>
                  <CardDescription>Revenue Target</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Ask */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-8">
              Investment Opportunity
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              We're seeking strategic partners to scale our operations, expand market reach, 
              and amplify our positive impact on farming communities. Join us in building 
              a sustainable future for coconut agriculture.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">What We Offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Proven business model with growing revenue
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Strong farmer network and supply chain
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Established brand with market traction
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Experienced management team
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Clear path to profitability and scale
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800">Investment Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left text-gray-700">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Expand processing facilities and capacity
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Scale farmer network across South India
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Strengthen distribution and marketing
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Develop new product lines
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      Technology and quality improvements
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Button 
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-white px-12 py-4 text-xl font-semibold"
              onClick={() => window.location.href = '/contact'}
            >
              Get in Touch for Investment Opportunities
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;
