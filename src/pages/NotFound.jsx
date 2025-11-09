import { useNavigate } from "react-router-dom";
import Button from "../components/home-page/Button";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 font-serif">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1
            className="text-[150px] md:text-[200px] font-bold text-black leading-none"
            style={{ letterSpacing: "-0.02em" }}
          >
            404
          </h1>
          <div className="w-32 h-1 bg-black mx-auto"></div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 uppercase">
            PAGE NON TROUVÉE
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            Oups ! La page que vous recherchez n'existe pas.
          </p>
          <p className="text-gray-500 text-sm">
            Il se peut qu'elle ait été déplacée ou supprimée.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={() => navigate(-1)} btnName={"Retour"} />
          <Button
            onClick={() => navigate("/")}
            btnName={"Page d'accueil"}
            background="black"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
