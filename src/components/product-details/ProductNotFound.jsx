import { Link } from "react-router-dom";

const ProductNotFound = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-black mb-3 uppercase tracking-tight">
          Produit Non Trouvé
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Désolé, le produit que vous recherchez n'existe pas ou a été supprimé.
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition uppercase tracking-wide text-sm"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default ProductNotFound;
