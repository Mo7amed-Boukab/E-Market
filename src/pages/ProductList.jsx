import { useState, useEffect } from 'react';
import { productService } from '../services/productService';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    sort: '',
    priceRange: '',
  });

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productService.getAllProducts(filters);
      setProducts(Array.isArray(data) ? data : data.products || []);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products. Using demo data.');
      // Use demo data if API is not available
      setProducts(getDemoProducts());
    } finally {
      setLoading(false);
    }
  };

  const getDemoProducts = () => {
    const demoProducts = [
      {
        id: 1,
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 99.99,
        category: 'electronics',
        image: 'https://via.placeholder.com/300x200?text=Headphones',
      },
      {
        id: 2,
        name: 'Smart Watch',
        description: 'Feature-rich smartwatch with health tracking',
        price: 199.99,
        category: 'electronics',
        image: 'https://via.placeholder.com/300x200?text=Smart+Watch',
      },
      {
        id: 3,
        name: 'Running Shoes',
        description: 'Comfortable running shoes for athletes',
        price: 79.99,
        category: 'sports',
        image: 'https://via.placeholder.com/300x200?text=Shoes',
      },
      {
        id: 4,
        name: 'Coffee Maker',
        description: 'Automatic coffee maker with programmable settings',
        price: 49.99,
        category: 'home',
        image: 'https://via.placeholder.com/300x200?text=Coffee+Maker',
      },
      {
        id: 5,
        name: 'Laptop Backpack',
        description: 'Durable backpack with laptop compartment',
        price: 39.99,
        category: 'accessories',
        image: 'https://via.placeholder.com/300x200?text=Backpack',
      },
      {
        id: 6,
        name: 'Yoga Mat',
        description: 'Non-slip yoga mat for home workouts',
        price: 24.99,
        category: 'sports',
        image: 'https://via.placeholder.com/300x200?text=Yoga+Mat',
      },
    ];

    return applyFilters(demoProducts);
  };

  const applyFilters = (productList) => {
    let filtered = [...productList];

    // Apply search filter
    if (filters.search) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          p.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    // Apply price range filter
    if (filters.priceRange) {
      filtered = filtered.filter((p) => {
        if (filters.priceRange === '0-50') return p.price < 50;
        if (filters.priceRange === '50-100')
          return p.price >= 50 && p.price < 100;
        if (filters.priceRange === '100-200')
          return p.price >= 100 && p.price < 200;
        if (filters.priceRange === '200+') return p.price >= 200;
        return true;
      });
    }

    // Apply sort
    if (filters.sort) {
      filtered.sort((a, b) => {
        if (filters.sort === 'price-asc') return a.price - b.price;
        if (filters.sort === 'price-desc') return b.price - a.price;
        if (filters.sort === 'name-asc') return a.name.localeCompare(b.name);
        if (filters.sort === 'name-desc') return b.name.localeCompare(a.name);
        return 0;
      });
    }

    return filtered;
  };

  if (loading) {
    return (
      <div className="product-list-container">
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <h1>Products</h1>
      {error && <div className="error-message">{error}</div>}
      <ProductFilter filters={filters} onFilterChange={setFilters} />
      {products.length === 0 ? (
        <div className="no-products">No products found</div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
