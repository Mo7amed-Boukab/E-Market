import { useState } from "react";
import { Heart, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const ProductCard = ({ images, badge, discount, title, price, reviews }) => {

    const [imageIndex, setImageIndex] = useState(0);

    return (
      <div className="group relative">

        <div className="relative bg-gray-100 aspect-4/4 mb-4 overflow-hidden">
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {badge && (
              <span className="bg-white text-black text-xs font-medium px-3 py-1 font-serif">
                NEW
              </span>
            )}
            {discount && (
              <span className="bg-black text-white text-xs font-medium px-3 py-1 font-serif">
                {discount}
              </span>
            )}
          </div>

          <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
            <button className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
              <Heart className="w-4 h-4 text-black" />
            </button>
            <button className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
              <Eye className="w-4 h-4 text-black" />
            </button>
          </div>

              <button
                onClick={() => setImageIndex((prev) => Math.max(0, prev - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-200 transition z-10"
              >
                <ChevronLeft className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={() => setImageIndex((prev) => Math.min(2, prev + 1))}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-200 transition z-10"
              >
                <ChevronRight className="w-4 h-4 text-black" />
              </button>

            <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 text-sm font-medium font-serif hover:bg-gray-800 transition">
              Ajouter au panier
            </button>
        </div>


        <div className="space-y-2">
          <h3 className="text-black font-medium font-serif text-sm">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-black font-medium font-serif">
              {price}
            </span>
            <div className="flex items-center gap-1">

              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-black" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="text-sm text-gray-600 ml-1 font-serif">
                ({reviews})
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ProductCard