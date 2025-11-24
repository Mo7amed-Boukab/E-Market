import { Link } from "react-router-dom";

const LayoutAuthPage = ({ name, link, introductionText }) => {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-black text-white p-12 flex-col justify-between">
      <div>
        <div className="flex items-center my-4 ml-8">
          <span className="text-3xl"></span>
          <h3 className="text-3xl font-bold">E Market</h3>
        </div>
      </div>

      <div className="ml-8">
        <h1 className="text-5xl font-bold leading-tight">
          Bienvenue à E Market
        </h1>
        <p className="mt-4 text-base">
          {introductionText}
        </p>

        <Link
          to={link}
          className="inline-block mt-8 px-8 py-2 text-white border-2 border-white rounded-md hover:bg-white hover:text-black transition duration-300"
        >
          {name}
        </Link>
      </div>
      
      <div></div>
    </div>
  );
};

export default LayoutAuthPage; 