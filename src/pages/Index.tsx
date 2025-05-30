
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowDown, Leaf, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-amber-50 min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-800 font-semibold rounded-full text-sm mb-4">
                Premium Organic Products
              </span>
            </div>
            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-green-900 mb-8 leading-tight">
              From Farm to Your Table
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-12 max-w-2xl mx-auto font-medium">
              Connecting Karnataka's finest coconut farmers directly with conscious consumers
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-lg mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-900">100%</div>
                <div className="text-sm text-green-700">Organic</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-900">500+</div>
                <div className="text-sm text-green-700">Farmers</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-900">A+</div>
                <div className="text-sm text-green-700">Quality</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 text-lg font-semibold rounded-full"
                onClick={() => window.location.href = '/products'}
              >
                Shop Products
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-10 py-4 text-lg font-semibold rounded-full"
                onClick={() => window.location.href = '/about'}
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-green-700" />
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Why Choose ECONUT
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Experience the difference of authentic, farm-fresh coconut products
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <CardTitle className="text-green-900">Sustainable Farming</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    100% organic practices that protect the environment and ensure premium quality
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-amber-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <CardTitle className="text-amber-800">Direct Trade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Fair prices for farmers, fresh products for you - no middlemen involved
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💪</span>
                  </div>
                  <CardTitle className="text-green-900">Community Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Supporting rural communities and creating sustainable livelihoods
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
                Featured Products
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                Discover our premium coconut products, sourced directly from Karnataka's finest farms
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
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg font-semibold rounded-full"
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
