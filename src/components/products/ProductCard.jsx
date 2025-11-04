import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-image">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <div className="placeholder-image">No Image</div>
          )}
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">
            {product.description?.substring(0, 100)}
            {product.description?.length > 100 ? '...' : ''}
          </p>
          <div className="product-footer">
            <span className="product-price">${product.price?.toFixed(2)}</span>
            {product.category && (
              <span className="product-category">{product.category}</span>
            )}
          </div>
        </div>
      </Link>
      <button onClick={handleAddToCart} className="btn-add-to-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
