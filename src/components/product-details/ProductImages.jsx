const ProductImages = ({ images, selectedImage, setSelectedImage }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">

      <div className="flex lg:flex-col gap-4 overflow-x-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`shrink-0 w-24 h-24 lg:w-28 lg:h-28 bg-gray-100 rounded border-2 transition ${
              selectedImage === index
                ? "border-black"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <img src= {img} alt= "" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 bg-gray-100 rounded h-[500px] lg:h-[500px]">
       <img src= {images} alt= "" />
      </div>
    </div>
  );
};

export default ProductImages;