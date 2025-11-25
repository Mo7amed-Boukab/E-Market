import { useState } from "react";
import { Search, ChevronDown, ChevronUp, Check } from "lucide-react";

const FilterSection = ({ title, children, isOpen: defaultIsOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-4 group"
      >
        <span className="text-sm font-bold uppercase tracking-wide text-black group-hover:opacity-70 transition">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-black" />
        ) : (
          <ChevronDown className="w-4 h-4 text-black" />
        )}
      </button>
      {isOpen && (
        <div className="animate-in slide-in-from-top-2 duration-200">
          {children}
        </div>
      )}
    </div>
  );
};

const CheckboxItem = ({ label, count, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer group mb-2">
    <div
      className={`w-5 h-5 border flex items-center justify-center transition ${
        checked
          ? "bg-black border-black"
          : "border-gray-300 bg-white group-hover:border-black"
      }`}
    >
      {checked && <Check className="w-3 h-3 text-white" />}
    </div>
    <input
      type="checkbox"
      className="hidden"
      checked={checked}
      onChange={onChange}
    />
    <span className="text-sm text-gray-600 group-hover:text-black transition flex-1">
      {label}
    </span>
    {count && <span className="text-xs text-gray-400">{count}</span>}
  </label>
);

const SidebarFilters = () => {
  const [priceRange, setPriceRange] = useState({ min: 99, max: 1999 });
  const [categories, setCategories] = useState([
    { id: 1, name: "CAT 1", count: 110, checked: true },
    { id: 2, name: "CAT 2", count: 125, checked: false },
    { id: 3, name: "CAT 3", count: 68, checked: false },
    { id: 4, name: "CAT 4", count: 44, checked: false },
    { id: 5, name: "CAT 5", count: 36, checked: false },
    { id: 6, name: "CAT 6", count: 10, checked: false },
  ]);

  const toggleCategory = (id) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, checked: !cat.checked } : cat
      )
    );
  };

  return (
    <div className="w-64 flex-shrink-0 pr-8 hidden lg:block">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-lg font-bold uppercase tracking-wide">
          Filters
        </span>
      </div>

      {/* Price Filter */}
      <FilterSection title="PRIX">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-gray-500 uppercase font-medium">
            <span>min</span>
            <span>max</span>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: parseInt(e.target.value) })
              }
              className="w-full border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black transition"
            />
            <span className="text-gray-300">—</span>
            <input
              type="number"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: parseInt(e.target.value) })
              }
              className="w-full border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black transition"
            />
          </div>
          {/* Dual Range Slider */}
          <div className="relative h-6 mt-4 mb-2">
            <input
              type="range"
              min="0"
              max="2000"
              value={priceRange.min}
              onChange={(e) => {
                const val = Math.min(
                  Number(e.target.value),
                  priceRange.max - 10
                );
                setPriceRange({ ...priceRange, min: val });
              }}
              className="absolute w-full h-1 bg-transparent pointer-events-none appearance-none z-20 top-1/2 -translate-y-1/2 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <input
              type="range"
              min="0"
              max="2000"
              value={priceRange.max}
              onChange={(e) => {
                const val = Math.max(
                  Number(e.target.value),
                  priceRange.min + 10
                );
                setPriceRange({ ...priceRange, max: val });
              }}
              className="absolute w-full h-1 bg-transparent pointer-events-none appearance-none z-20 top-1/2 -translate-y-1/2 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer"
            />

            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-200">
              <div
                className="absolute h-full bg-black"
                style={{
                  left: `${(priceRange.min / 2000) * 100}%`,
                  right: `${100 - (priceRange.max / 2000) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </FilterSection>

      {/* Categories Filter */}
      <FilterSection title="CATEGORIE">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 border-none px-4 py-2 pl-9 text-sm outline-none"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <div className="max-h-60 overflow-y-auto pr-2 space-y-1 custom-scrollbar">
          {categories.map((cat) => (
            <CheckboxItem
              key={cat.id}
              label={cat.name}
              count={cat.count}
              checked={cat.checked}
              onChange={() => toggleCategory(cat.id)}
            />
          ))}
        </div>
      </FilterSection>
    </div>
  );
};

export default SidebarFilters;
