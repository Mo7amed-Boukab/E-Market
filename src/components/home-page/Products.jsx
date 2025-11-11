import ProductCard from "./ProductCard";
import Button from "./Button";
import axios from "../../axios";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
     const fetchProducts = async () => {
         try {
            const response = await axios.get("/products");
            setProducts(response.data.data.products);
         } catch (error) {
            console.error(error);
         } finally {
           setLoading(true);
         }
     };
     fetchProducts();
  }, []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-10 bg-black"></div>
              <h2 className="text-4xl font-bold text-black font-serif">
                OUR PRODUCTS
              </h2>
            </div>
            <p className="text-gray-700 font-serif">Explore Our Products</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products &&
            products.map((product) => (
              <ProductCard
                key={product._id}
                images={product.imageUrls || []}
                title={product.title}
                price={product.price}
                reviews={product.reviews}
                badge={product.isNew}
                discount={product.discount}
                productIndex={product._id}
              />
            ))}
        </div>

        <div className="flex justify-center">
          <Button btnName={"VOIR PLUS"} />
        </div>
      </div>
    </section>
  );
};

export default Products;
