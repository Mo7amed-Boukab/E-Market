import { Star, Minus, Plus} from "lucide-react";

const ProductInfo = ({
  title,
  description,
  price,
  stock,
  reviews,
  colors,
  sizes,
  selectedColor,
  selectedSize,
  quantity,
  onColorChange,
  onSizeChange,
  onQuantityChange,
  onAddToCart,
}) => {
  return (
    <div className="flex flex-col h-[500px] lg:h-[500px]">
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-black mb-3 uppercase tracking-tight">
            {title}
          </h1>

          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-black stroke-black" />
              ))}
              {reviews && (
                 <span className="text-sm text-gray-600 ml-2">{reviews} Avis</span>
              )}
             
            </div>
            <span className="text-gray-400">|</span>
            {stock && (
              <span className="text-green-600 text-sm font-medium">
                En stock
              </span>
            )}
          </div>

          <div className="text-2xl font-bold text-black mb-4">{price}</div>

          {description && (
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {description}
            </p>
          )}
        </div>

        <div className="border-t border-gray-200 pt-6"></div>

        {colors && colors.length > 0 && (
          <div>
            <label className="text-sm font-medium text-black mb-3 block">
              Colours:
            </label>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => onColorChange(color.name)}
                  className={`w-8 h-8 rounded-full border-2 transition ${
                    selectedColor === color.name
                      ? "border-black scale-110"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
          </div>
        )}

        {sizes && sizes.length > 0 && (
          <div>
            <label className="text-sm font-medium text-black mb-3 block">
              Size:
            </label>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => onSizeChange(size)}
                  className={`px-4 py-2 text-sm font-medium border rounded transition ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4 items-center">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={() => onQuantityChange("decrease")}
              className="p-3 hover:bg-gray-100 transition"
            >
              <Minus className="w-4 h-4" />
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-16 text-center font-medium outline-none"
            />
            <button
              onClick={() => onQuantityChange("increase")}
              className="p-3 hover:bg-gray-100 transition"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onAddToCart}
            className="flex-1 bg-black text-white py-3 px-8 rounded font-medium sm:text-sm hover:bg-gray-800 transition text-xs uppercase tracking-wide"
          >
            Acheter maintenant
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
