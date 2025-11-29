import { useState } from "react";
import { Heart, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({
  images = [],
  badge,
  discount,
  title,
  price,
  reviews,
  productIndex,
  viewMode = "grid",
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const getImageUrl = (url) => {
    if (!url) return null;
    if (url.startsWith("http") || url.startsWith("data:")) return url;
    return `http://localhost:3000${url}`;
  };

  const currentImage =
    images.length > 0 ? getImageUrl(images[imageIndex]) : null;

  const handleNextImage = (e) => {
    e.preventDefault();
    if (images.length > 0) {
      imageIndex === images.length - 1
        ? setImageIndex(0)
        : setImageIndex(imageIndex + 1);
    }
  };

  const handlePrevImage = (e) => {
    e.preventDefault();
    if (images.length > 0) {
      imageIndex === 0
        ? setImageIndex(images.length - 1)
        : setImageIndex(imageIndex - 1);
    }
  };

  if (viewMode === "list") {
    return (
      <div className="group flex flex-col sm:flex-row gap-6 bg-white p-4 border border-gray-100 transition">
        {/* Image Section */}
        <div className="relative w-full sm:w-72 h-72 shrink-0 bg-gray-100 overflow-hidden">
          <img
            src={currentImage}
            alt={title}
            className="w-full h-full object-cover"
          />
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
          
          {images.length > 0 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-200 transition z-10 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-200 transition z-10 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col py-2">
          <div className="flex justify-between items-start mb-2">
            <Link to={`/product/${productIndex}`} className="group-hover:text-gray-600 transition">
              <h3 className="text-xl font-medium font-serif text-black mb-1">
                {title}
              </h3>
            </Link>
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 transition border border-gray-200">
                <Heart className="w-4 h-4 text-black" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition border border-gray-200">
                <Eye className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-black" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 font-serif">
              ({reviews} avis)
            </span>
          </div>

          <div className="text-2xl font-medium font-serif text-black mb-4">
            {price} DH
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="mt-auto">
            <button className="bg-black text-white px-8 py-2.5 text-sm font-small font-serif hover:bg-gray-800 transition tracking-wide">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative">
      <div className="relative bg-gray-100 aspect-4/4 mb-4 overflow-hidden">
        <img
          src={currentImage}
          alt={title}
          className="w-full h-full object-cover"
        />
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
          <Link to={`/product/${productIndex}`} className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
            <Eye className="w-4 h-4 text-black" />
          </Link>
        </div>
        {images.length > 0 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-200 transition z-10"
            >
              <ChevronLeft className="w-4 h-4 text-black" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-200 transition z-10"
            >
              <ChevronRight className="w-4 h-4 text-black" />
            </button>
          </>
        )}

        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 text-sm font-medium font-serif hover:bg-gray-800 transition">
          Ajouter au panier
        </button>
      </div>

      <div className="space-y-2">
        <Link to={`/product/${productIndex}`}>
          <h3 className="text-black font-medium font-serif text-sm">{title}</h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-black font-medium font-serif">{price} DH</span>
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

export default ProductCard;
