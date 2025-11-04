import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productService } from '../services/productService';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productService.getProductById(id);
      setProduct(data);
    } catch (err) {
      console.error('Error fetching product:', err);
      setError('Product not found');
      // Use demo data
      const demoProduct = getDemoProduct(parseInt(id));
      if (demoProduct) {
        setProduct(demoProduct);
        setError(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const getDemoProduct = (productId) => {
    const demoProducts = {
      1: {
        id: 1,
        name: 'Wireless Headphones',
        description:
          'Premium wireless headphones with active noise cancellation. Features include 30-hour battery life, comfortable over-ear design, and superior sound quality.',
        price: 99.99,
        category: 'electronics',
        image: 'https://via.placeholder.com/500x400?text=Headphones',
        stock: 15,
      },
      2: {
        id: 2,
        name: 'Smart Watch',
        description:
          'Advanced smartwatch with health tracking, GPS, and smartphone notifications. Water-resistant and perfect for fitness enthusiasts.',
        price: 199.99,
        category: 'electronics',
        image: 'https://via.placeholder.com/500x400?text=Smart+Watch',
        stock: 8,
      },
      3: {
        id: 3,
        name: 'Running Shoes',
        description:
          'High-performance running shoes designed for comfort and durability. Features breathable mesh and cushioned sole.',
        price: 79.99,
        category: 'sports',
        image: 'https://via.placeholder.com/500x400?text=Shoes',
        stock: 25,
      },
      4: {
        id: 4,
        name: 'Coffee Maker',
        description:
          'Programmable coffee maker with auto-brew feature. Makes up to 12 cups of delicious coffee.',
        price: 49.99,
        category: 'home',
        image: 'https://via.placeholder.com/500x400?text=Coffee+Maker',
        stock: 12,
      },
      5: {
        id: 5,
        name: 'Laptop Backpack',
        description:
          'Durable laptop backpack with multiple compartments. Fits laptops up to 15.6 inches.',
        price: 39.99,
        category: 'accessories',
        image: 'https://via.placeholder.com/500x400?text=Backpack',
        stock: 30,
      },
      6: {
        id: 6,
        name: 'Yoga Mat',
        description:
          'Premium non-slip yoga mat perfect for all types of workouts. Eco-friendly and easy to clean.',
        price: 24.99,
        category: 'sports',
        image: 'https://via.placeholder.com/500x400?text=Yoga+Mat',
        stock: 20,
      },
    };
    return demoProducts[productId];
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  if (loading) {
    return (
      <div className="product-detail-container">
        <div className="loading">Loading product...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-detail-container">
        <div className="error">{error || 'Product not found'}</div>
        <button onClick={() => navigate('/')} className="btn-back">
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate('/')} className="btn-back">
        ← Back to Products
      </button>

      <div className="product-detail">
        <div className="product-image-large">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <div className="placeholder-image">No Image</div>
          )}
        </div>

        <div className="product-details">
          <h1>{product.name}</h1>
          {product.category && (
            <span className="category-badge">{product.category}</span>
          )}
          <p className="price">${product.price?.toFixed(2)}</p>
          <p className="description">{product.description}</p>

          {product.stock !== undefined && (
            <p className="stock">
              {product.stock > 0
                ? `In Stock: ${product.stock} available`
                : 'Out of Stock'}
            </p>
          )}

          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              max={product.stock || 99}
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="btn-add-to-cart-large"
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
