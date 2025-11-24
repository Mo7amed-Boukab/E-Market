const TextAreaField = ({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  className = "",
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-4 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all resize-none"
      ></textarea>
    </div>
  );
};

export default TextAreaField;
