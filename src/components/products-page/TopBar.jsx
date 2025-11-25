import { LayoutGrid, List, ChevronDown } from "lucide-react";
import { useState } from "react";

const TopBar = ({ productCount = 85, viewMode, setViewMode }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortOptions = [
    "Pertinence",
    "Prix croissant",
    "Prix décroissant",
    "Nouveautés",
  ];
  const [selectedSort, setSelectedSort] = useState("Pertinence");

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-gray-100 gap-4">
      <div className="text-sm text-gray-500 font-serif uppercase tracking-wide">
        Produits sélectionnés :{" "}
        <span className="text-black font-medium">{productCount}</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 relative">
          <span className="text-sm text-gray-500">Trier par</span>
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 text-sm font-medium text-black hover:opacity-70 transition"
          >
            <span>{selectedSort}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {isSortOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-20">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelectedSort(option);
                    setIsSortOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition ${
                    selectedSort === option
                      ? "font-medium bg-gray-50"
                      : "text-gray-600"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 border-l border-gray-200 pl-6">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded transition ${
              viewMode === "grid"
                ? "bg-black text-white"
                : "text-gray-400 hover:text-black"
            }`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded transition ${
              viewMode === "list"
                ? "bg-black text-white"
                : "text-gray-400 hover:text-black"
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
