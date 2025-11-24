const EmptyState = ({
  icon: Icon,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-white rounded-sm border border-gray-100 p-8 text-center h-full flex flex-col justify-center">
      <div>
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="text-gray-400" size={32} />
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="mt-6 px-6 py-2 bg-black text-white text-sm font-medium rounded-sm hover:bg-gray-800 transition-colors"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
