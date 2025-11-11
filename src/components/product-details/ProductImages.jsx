import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductImages = ({ images, selectedImage, setSelectedImage }) => {

  const displayedImages = images?.slice(0, 4) || [];

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Main Image */}
      <div className="flex-1 relative group order-1 lg:order-2">
        <div className="bg-gray-100 rounded h-[500px] overflow-hidden">
          {images && images[selectedImage] ? (
            <img
              src={`http://localhost:3000${images[selectedImage]}`}
              alt={`product-image-${selectedImage + 1}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>

        {/* Navigation sur l'image principale */}
        {images && images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </>
        )}
      </div>

      <div className="flex lg:flex-col gap-3 justify-between lg:justify-start order-2 lg:order-1 w-full lg:w-auto lg:h-[500px]">
        {displayedImages.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-1 lg:flex-none aspect-square lg:w-[116px] lg:h-[116px] bg-gray-100 rounded border-2 transition overflow-hidden p-0 ${
              selectedImage === index
                ? "border-black"
                : "border-transparent"
            }`}
          >
            <img
              src={`http://localhost:3000${img}`}
              alt={`thumbnail-${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
