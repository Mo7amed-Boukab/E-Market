import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";

const CartSidebar = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Camera DSLR",
      price: 199,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
      size: "M",
      color: "Blanc",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 399,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww",
      size: "32mm",
      color: "white",
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed inset-0 z-60 flex justify-end ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-20" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`relative w-full max-w-md bg-white h-full shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-bold uppercase tracking-wide flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Mon Panier
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Votre panier est vide
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                On dirait que vous n'avez encore rien ajouté à votre panier.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-black text-white text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition rounded"
              >
                Commencer vos achats
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 shrink-0 bg-gray-100 rounded overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.color} / {item.size}
                      </p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        {item.price} MAD
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-gray-200 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1.5 hover:bg-gray-50 transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1.5 hover:bg-gray-50 transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-base font-medium text-gray-900">
              Sous-total
            </span>
            <span className="text-lg font-bold text-gray-900">
              {subtotal.toFixed(2)} MAD
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Taxes et frais de port calculés à la caisse.
          </p>
          <button
            disabled={cartItems.length === 0}
            className={`w-full py-3 text-sm font-bold uppercase tracking-wide rounded transition ${
              cartItems.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Passer la commande
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
