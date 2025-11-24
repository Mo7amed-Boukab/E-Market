const Button = ({ btnName, onClick, background = "white" }) => {
  const baseClasses =
    "text-sm px-12 py-3 font-serif tracking-wide transition duration-300 uppercase";

  const secondaryClasses = {
    white: "border-2 border-black text-black hover:bg-black hover:text-white",
    black: "bg-black text-white hover:bg-white hover:text-black border-2 border-black",
  };

  return (
    <button
      className={`${baseClasses} ${secondaryClasses[background]}`}
      onClick={onClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
