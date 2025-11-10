import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import SubHeader from "../components/home-page/SubHeader";
import Header from "../components/home-page/Header";
import Footer from "../components/home-page/Footer";
import ProductImages from "../components/product-details/ProductImages";
import ProductInfo from "../components/product-details/ProductInfo";
// import ProductNotFound from "../components/product-details/ProductNotFound";
// import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { LoaderContext } from "../context/LoaderContext"


const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  // const [selectedColor, setSelectedColor] = useState("black");
  // const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState(0);

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(false);
 
  const { showLoader, hideLoader, isLoading } = useContext(LoaderContext);


  useEffect(() => {
    showLoader();
    const fetchProduct = async () => {
      try {
       // test loader
        // await new Promise(resolve => setTimeout(resolve, 5000));
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data.data.product);
      } catch (error) {
        console.error("Erreur lors de fetch details du produit :",error.response?.data?.message || error.message);
        throw error;
      } finally {
        hideLoader()
      }
    };
    fetchProduct();
  }, [id]);


  // const handleColorChange = (colorName) => {
  //   setSelectedColor(colorName);
  // };

  // const handleSizeChange = (size) => {
  //   setSelectedSize(size);
  // };

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      product_id: product._id,
      product: product.title,
      quantity: quantity,
      price: product.price,
      total: product.price * quantity,
    };
    console.log("Ajouté au panier:", cartItem);
  };

  // const product = {
  //   title: "PRODUCT - NAME",
  //   price: "192.00 DH",
  //   rating: 5,
  //   reviews: 11,
  //   inStock: true,
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse adipisci eius ipsam quos quod expedita quis molestias praesentium omnis ullam Esse adipisci eius ipsam quos quod expedita quis molestias praesentium omnis ullam Esse adipisci eius ipsam quos quod expedita quis molestias praesentium omnis ullam",
  //   colors: [
  //     { name: "white", value: "#FFFFFF" },
  //     { name: "black", value: "#000000" },
  //   ],
  //   sizes: ["XS", "S", "M", "L", "XL"],
  //   images: [
  //     "/placeholder1.jpg",
  //     "/placeholder2.jpg",
  //     "/placeholder3.jpg",
  //     "/placeholder4.jpg",
  //   ],
  // };

// if (isLoading) {
//   return (
//     <div className="bg-white min-h-screen font-serif">
//       <SubHeader />
//       <Header />
//         <Loader/>
//       <Footer />
//     </div>
//   );
// }

//  if (!product) {
//     return (
//       <div className="bg-white min-h-screen font-serif">
//         <SubHeader />
//         <Header />
//         <ProductNotFound />
//         <Footer />
//       </div>
//     );
//   }

  if (!product) return null; 

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
          <span className="text-gray-400">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Images Section */}
          <ProductImages
            images={product.imageUrls}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />

          {/* Product Info Section */}
          <ProductInfo
            title={product.title}
            description={product.description}
            price={product.price}
            stock={product.stock}
            // reviews={product.reviews}
            // colors={product.colors}
            // sizes={product.sizes}
            // selectedColor={selectedColor}
            // selectedSize={selectedSize}
            quantity={quantity}
            // onColorChange={handleColorChange}
            // onSizeChange={handleSizeChange}
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
