import { useState } from "react";
import Header from "../components/home-page/Header";
import Footer from "../components/home-page/Footer";
import SidebarFilters from "../components/products-page/SidebarFilters";
import TopBar from "../components/products-page/TopBar";
import Pagination from "../components/products-page/Pagination";
import ProductCard from "../components/home-page/ProductCard";

const Products = () => {
    const [viewMode, setViewMode] = useState("grid");

    // Mock products data
    const products = Array(9)
        .fill(null)
        .map((_, index) => ({
            id: index,
            title: "Titre de card",
            price: 360,
            reviews: 45,
            badge: index % 3 === 0 ? "NEW" : null,
            discount: index % 2 === 0 ? "-35%" : null,
            images: [
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            ],
        }));

    return (
        <div className="bg-white font-serif min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
                <div className="flex gap-8">
                    {/* Sidebar */}
                    <SidebarFilters />

                    {/* Main Content */}
                    <div className="flex-1">
                        <TopBar viewMode={viewMode} setViewMode={setViewMode} />

                        <div
                            className={`grid gap-6 ${viewMode === "grid"
                                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                                    : "grid-cols-1"
                                }`}
                        >
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    productIndex={product.id}
                                    title={product.title}
                                    price={product.price}
                                    reviews={product.reviews}
                                    badge={product.badge}
                                    discount={product.discount}
                                    images={product.images}
                                    viewMode={viewMode}
                                />
                            ))}
                        </div>

                        <Pagination />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Products;
