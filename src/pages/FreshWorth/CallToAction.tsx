import { Button } from "@/components/ui/button";

const FreshWorthCallToAction = () => (
  <section className="py-20 bg-green-900 text-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Be part of the transformation. Whether you're a farmer, investor, or
          conscious consumer, you can contribute to rural empowerment and
          sustainable development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg font-semibold rounded-full"
            onClick={() => (window.location.href = "/contact")}
          >
            Partner With Us
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-green-100 text-green-700 hover:bg-green-200 hover:text-green-900 px-8 py-4 text-lg font-semibold rounded-full"
            onClick={() => (window.location.href = "/products")}
          >
            Support Through Purchase
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default FreshWorthCallToAction;
