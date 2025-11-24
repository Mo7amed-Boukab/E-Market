const InputField = ({
  label,
  type = "text",
  icon: Icon,
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        {Icon && (
          <Icon
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full ${
            Icon ? "pl-10" : "pl-4"
          } pr-4 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all`}
        />
      </div>
    </div>
  );
};

export default InputField;
