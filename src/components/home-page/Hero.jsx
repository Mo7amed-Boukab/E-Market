import { BiTestTube } from "react-icons/bi";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <div className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 text-sm tracking-wide mb-6 font-serif">
            E-MARKET — VOTRE BOUTIQUE EN LIGNE DE CONFIANCE
          </p>

          <h1
            className="max-w-3xl text-5xl md:text-5xl lg:text-5xl font-bold text-black mb-6 leading-tight font-serif"
            style={{ letterSpacing: "-0.02em" }}
          >
            DÉCOUVREZ LES MEILLEURES OFFRES PRÈS DE CHEZ VOUS !
          </h1>

          <div className="w-full h-px bg-gray-300 my-6"></div>

          <p className="text-gray-700 text-base font-serif mb-8 max-w-lg">
            Achetez vos produits préférés et faites-vous livrer rapidement, en
            toute simplicité.
          </p>

          <Button btnName={"VOIR NOS PRODUITS"} />
        </div>
      </div>
      <div className="bg-black text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm tracking-wide font-serif">
            RESTEZ INFORMÉ DE NOS NOUVELLES OFFRES ET RÉDUCTIONS EXCLUSIVES
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
