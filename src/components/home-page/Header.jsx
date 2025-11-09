import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide uppercase">E-MARKET</div>

        <nav className="hidden md:flex gap-8 text-sm">
          <Link to="/" className="text-black hover:opacity-60 transition font-medium uppercase">
            HOME
          </Link>
          <Link to="/products" className="text-gray-400 hover:opacity-60 transition font-medium uppercase">
            PRODUCTS
          </Link>
          <Link to="/about" className="text-gray-400 hover:opacity-60 transition font-medium uppercase">
            ABOUT US
          </Link>
          <Link to="/contact" className="text-gray-400 hover:opacity-60 transition font-medium uppercase">
            CONTACT US
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2 bg-gray-100 rounded px-4 py-2 flex-1 max-w-xs mx-8">
          <input
            type="text"
            placeholder="Qu'est-ce que tu cherches ?"
            className="bg-transparent text-sm placeholder-gray-500 outline-none w-full"
          />
          <Search className="w-4 h-4 text-muted-black" />
        </div>

        <div className="flex items-center gap-6">
          <Heart className="w-5 h-5 text-black hidden lg:flex md:flex" />
          <ShoppingCart className="w-5 h-5 text-black" />
          <User className="w-5 h-5 text-black hidden lg:flex md:flex" />
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-black" />
            ) : (
              <Menu className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white md:hidden flex flex-col gap-3 border-t border-gray-200 pt-4 pb-4 px-4 shadow-lg z-50">
          <Link
            to="/"
            className="text-sm font-medium text-black hover:text-black transition py-2 uppercase"
          >
            HOME
          </Link>
          <Link
            to="/products"
            className="text-sm font-medium text-gray-600 hover:text-black transition py-2 uppercase"
          >
            PRODUCTS
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-gray-600 hover:text-black transition py-2 uppercase"
          >
            ABOUT US
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-600 hover:text-black transition py-2 uppercase"
          >
            CONTACT US
          </Link>

          <div className="flex items-center gap-2 bg-gray-100 rounded px-4 py-2 mt-2">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Qu'est-ce que tu cherches ?"
              className="bg-transparent text-sm placeholder-gray-500 outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-200">
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition">
              <Heart className="w-5 h-5" />
              <span>Favoris</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition">
              <User className="w-5 h-5" />
              <span>Compte</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
