import ProductCard from "./ProductCard";
import Button from "./Button";

const Products = () => {

  const products = [
    {
      id: 1,
      title: "Titre de card",
      price: "360 DH",
      rating: 5,
      reviews: 45,
      isNew: true,
      discount: "-35%",
      image: null,
    },
    {
      id: 2,
      title: "Titre de card",
      price: "360 DH",
      rating: 5,
      reviews: 45,
      isNew: false,
      discount: "-35%",
      image: null,
    },
    {
      id: 3,
      title: "Titre de card",
      price: "360 DH",
      rating: 5,
      reviews: 45,
      isNew: false,
      discount: "-35%",
      image: null,
    },
    {
      id: 4,
      title: "Titre de card",
      price: "360 DH",
      rating: 5,
      reviews: 45,
      isNew: false,
      discount: "-35%",
      image: null,
    },
    {
      id: 5,
      title: "Titre de card",
      price: "360 DH",
      rating: 5,
      reviews: 45,
      isNew: false,
      discount: null,
      image: null,
    },
    {
      id: 6,
      title: "Titre de card",
      price: "360 DH",
      rating: 5,
      reviews: 45,
      isNew: false,
      discount: null,
      image: null,
    },
     {
      id: 7,
      title: "Titre de card",
      price: "360 DH",
      rating: 5,
      reviews: 45,
      isNew: false,
      discount: null,
      image: null,
    },
     {
      id: 8,
      title: "Titre de card",
      price: "360 DH",
      rating: 5,
      reviews: 45,
      isNew: false,
      discount: null,
      image: null,
    }
  ];


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
          {products && products.map((product, index) => (
            <ProductCard 
            key={index}
            title={product.title}
            price={product.price}
            reviews={product.reviews}
            badge={product.isNew}
            discount={product.discount}
            />
          ))}
        </div>


        <div className="flex justify-center">
          <Button btnName={"VOIR PLUS"}/>
        </div>
      </div>
    </section>
  );
};

export default Products;
