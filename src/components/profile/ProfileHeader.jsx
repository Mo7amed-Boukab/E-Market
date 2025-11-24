const ProfileHeader = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="px-4 py-2 bg-black text-white text-sm font-medium rounded-sm hover:bg-gray-800 transition-colors"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ProfileHeader;
