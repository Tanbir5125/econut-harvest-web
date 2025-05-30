
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-amber-50 min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-green-900 mb-6 leading-tight">
              Empowering Farmers,<br />
              <span className="text-amber-700">Nourishing Lives</span><br />
              with Organic Coconut Products
            </h1>
            <p className="text-xl md:text-2xl text-green-800 mb-8 max-w-3xl mx-auto leading-relaxed">
              ECONUT connects coconut farmers directly to markets, promoting sustainable agriculture 
              and delivering premium organic coconut products from Karnataka's finest farms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/products'}
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-700 text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/about'}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-green-700" />
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Our Mission & Impact
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Transforming lives through sustainable coconut farming and direct market access
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <CardTitle className="text-green-900">Sustainable Agriculture</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    Promoting organic farming practices that protect the environment while ensuring 
                    quality coconut products for health-conscious consumers.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <CardTitle className="text-amber-800">Direct Market Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    Eliminating middlemen to ensure farmers receive fair prices while providing 
                    consumers with authentic, fresh coconut products.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💪</span>
                  </div>
                  <CardTitle className="text-green-900">Rural Employment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    Creating job opportunities and training programs for youth in rural areas, 
                    building stronger farming communities across Karnataka.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Premium Organic Products
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Discover our range of authentic coconut products, sourced directly from Karnataka's finest farms
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-amber-200 hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-t-lg flex items-center justify-center">
                  <span className="text-6xl">🍯</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-800">Neera Sugar</CardTitle>
                  <CardDescription>Natural sweetener with low glycemic index</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-200 hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg flex items-center justify-center">
                  <span className="text-6xl">🥥</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-green-800">Virgin Coconut Oil</CardTitle>
                  <CardDescription>Cold-pressed, pure and nutritious</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-amber-200 hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-t-lg flex items-center justify-center">
                  <span className="text-6xl">🥤</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-800">Coconut Milkshake</CardTitle>
                  <CardDescription>Refreshing and naturally nutritious</CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/products'}
              >
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
