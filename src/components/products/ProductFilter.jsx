import './ProductFilter.css';

const ProductFilter = ({ filters, onFilterChange }) => {
  const handleSearchChange = (e) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleCategoryChange = (e) => {
    onFilterChange({ ...filters, category: e.target.value });
  };

  const handleSortChange = (e) => {
    onFilterChange({ ...filters, sort: e.target.value });
  };

  const handlePriceRangeChange = (e) => {
    onFilterChange({ ...filters, priceRange: e.target.value });
  };

  return (
    <div className="product-filter">
      <div className="filter-group">
        <input
          type="text"
          placeholder="Search products..."
          value={filters.search || ''}
          onChange={handleSearchChange}
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <select
          value={filters.category || ''}
          onChange={handleCategoryChange}
          className="filter-select"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="home">Home & Garden</option>
          <option value="sports">Sports</option>
        </select>
      </div>

      <div className="filter-group">
        <select
          value={filters.sort || ''}
          onChange={handleSortChange}
          className="filter-select"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      <div className="filter-group">
        <select
          value={filters.priceRange || ''}
          onChange={handlePriceRangeChange}
          className="filter-select"
        >
          <option value="">All Prices</option>
          <option value="0-50">Under $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200+">$200+</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
