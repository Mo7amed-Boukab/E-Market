import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button className="p-2 text-gray-400 hover:text-black transition disabled:opacity-50">
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button className="w-10 h-10 flex items-center justify-center bg-black text-white text-sm font-medium font-serif rounded">
        1
      </button>
      <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm font-medium font-serif transition rounded">
        2
      </button>
      <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm font-medium font-serif transition rounded">
        3
      </button>
      <span className="w-10 h-10 flex items-center justify-center text-gray-400 text-sm font-medium font-serif rounded">
        ...
      </span>
      <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm font-medium font-serif transition rounded">
        12
      </button>

      <button className="p-2 text-gray-400 hover:text-black transition">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
