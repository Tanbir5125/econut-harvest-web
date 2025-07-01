import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white relative overflow-hidden">
      {/* Shimmering animated gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-1/2 left-0 w-full h-[200%] animate-footer-shimmer bg-gradient-to-r from-amber-400/10 via-emerald-400/10 to-green-400/10 opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-green-900/0 to-emerald-700/10"></div>
      </div>
      {/* Shimmering animated gradient overlay - Removed duplicate */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="relative inline-block">
              <img
                src="/src/logo/freshworth.png"
                alt="Fresh Worth Logo"
                className="h-12 mb-4 mt-10 drop-shadow-lg animate-footer-logo-shimmer"
                style={{ objectFit: "contain" }}
              />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-amber-400/10 blur-2xl animate-pulse opacity-60" />
            </div>
            <p className="text-green-100 mb-6 mt-9 max-w-md">
              Empowering coconut farmers and delivering premium organic products
              from Karnataka's finest farms to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/impact"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Our Impact
                </a>
              </li>
              <li>
                <a
                  href="/fresh-worth"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Fresh Worth
                </a>
              </li>
              <li>
                <a
                  href="/investors"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Investors
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-green-100 mb-4 text-sm">
              Subscribe to our newsletter for updates on new products and
              farming initiatives.
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

        <Separator className="my-8 bg-green-700 opacity-80" />

        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="text-green-100 text-sm mb-4 md:mb-0">
            <p>© 2025 Fresh Worth. All rights reserved.</p>
            <p>Contact: info@FreshWorth.com | +91-1234567890</p>
          </div>
          <div className="text-green-100 text-sm flex items-center gap-2">
            <span className="inline-block animate-footer-heart-shimmer">
              Made with
            </span>
            <span className="text-amber-400 animate-pulse">💚</span>
            <span>for sustainable farming</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Tailwind CSS keyframes for shimmer (add to your global CSS or tailwind config)
//
// @layer utilities {
//   @keyframes footer-shimmer {
//     0% { transform: translateY(-20%); }
//     100% { transform: translateY(20%); }
//   }
//   .animate-footer-shimmer {
//     animation: footer-shimmer 6s linear infinite alternate;
//   }
//   @keyframes footer-logo-shimmer {
//     0%, 100% { filter: drop-shadow(0 0 8px #fbbf24) brightness(1.1); }
//     50% { filter: drop-shadow(0 0 24px #fbbf24) brightness(1.3); }
//   }
//   .animate-footer-logo-shimmer {
//     animation: footer-logo-shimmer 3s ease-in-out infinite;
//   }
//   @keyframes footer-heart-shimmer {
//     0%, 100% { color: #fbbf24; }
//     50% { color: #f59e42; }
//   }
//   .animate-footer-heart-shimmer {
//     animation: footer-heart-shimmer 2s ease-in-out infinite;
//   }
// }
