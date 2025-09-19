import ProductsSection from "@/components/ProductsSection";

const Products = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover our comprehensive range of digital devices and electronic solutions 
            designed for healthcare, defense, and industrial applications.
          </p>
        </div>
      </div>
      <ProductsSection />
    </div>
  );
};

export default Products;