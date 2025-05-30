
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ECONUT</h3>
            <p className="text-green-100 mb-6 max-w-md">
              Empowering coconut farmers and delivering premium organic products 
              from Karnataka's finest farms to your doorstep.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-green-100 hover:text-white hover:bg-green-800">
                <span className="text-xl">📘</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-green-100 hover:text-white hover:bg-green-800">
                <span className="text-xl">📷</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-green-100 hover:text-white hover:bg-green-800">
                <span className="text-xl">🐦</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-green-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/products" className="text-green-100 hover:text-white transition-colors">Products</a></li>
              <li><a href="/impact" className="text-green-100 hover:text-white transition-colors">Our Impact</a></li>
              <li><a href="/investors" className="text-green-100 hover:text-white transition-colors">Investors</a></li>
              <li><a href="/contact" className="text-green-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-green-100 mb-4 text-sm">
              Subscribe to our newsletter for updates on new products and farming initiatives.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-green-800 border-green-700 text-white placeholder:text-green-200"
              />
              <Button className="bg-amber-700 hover:bg-amber-800">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-green-700" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-green-100 text-sm mb-4 md:mb-0">
            <p>© 2024 ECONUT. All rights reserved.</p>
            <p>Contact: info@econut.com | +91-1234567890</p>
          </div>
          <div className="text-green-100 text-sm">
            <span>Made with 💚 for sustainable farming</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
