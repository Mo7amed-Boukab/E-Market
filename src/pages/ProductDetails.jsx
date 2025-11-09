import { useState } from "react";
import { Link } from "react-router-dom";
import SubHeader from "../components/home-page/SubHeader";
import Header from "../components/home-page/Header";
import Footer from "../components/home-page/Footer";
import ProductImages from "../components/product-details/ProductImages";
import ProductInfo from "../components/product-details/ProductInfo";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState(0);

  const handleColorChange = (colorName) => {
    setSelectedColor(colorName);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      product: product.title,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      price: product.price,
    };
    console.log("Ajouté au panier:", cartItem);
  };

  const product = {
    title: "PRODUCT - NAME",
    price: "192.00 DH",
    rating: 5,
    reviews: 11,
    inStock: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse adipisci eius ipsam quos quod expedita quis molestias praesentium omnis ullam Esse adipisci eius ipsam quos quod expedita quis molestias praesentium omnis ullam Esse adipisci eius ipsam quos quod expedita quis molestias praesentium omnis ullam",
    colors: [
      { name: "white", value: "#FFFFFF" },
      { name: "black", value: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/placeholder1.jpg",
      "/placeholder2.jpg",
      "/placeholder3.jpg",
      "/placeholder4.jpg",
    ],
  };

  return (
    <div className="bg-white min-h-screen font-serif">
      <SubHeader />
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-black transition">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">product - name</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Images Section */}
          <ProductImages
            images={product.images}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />

          {/* Product Info Section */}
          <ProductInfo
            title={product.title}
            description={product.description}
            price={product.price}
            stock={product.inStock}
            images={product.images}
            reviews={product.reviews}
            colors={product.colors}
            sizes={product.sizes}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            quantity={quantity}
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
            onQuantityChange={handleQuantityChange}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
