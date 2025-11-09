import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 font-serif">E Market</h3>
            <p className="text-sm mb-4 font-serif">S'abonner</p>
            <p className="text-sm text-gray-400 mb-4 font-serif">
              Bénéficiez de 10 % de réduction sur votre première commande
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white rounded px-4 py-2.5 text-sm outline-none focus:border-gray-400 transition font-serif placeholder:text-gray-400"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 hover:opacity-80 transition">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-base font-medium mb-4 font-serif">Support</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-serif">
              <li>n 90, Rue:Alkaid Ahmed arrifi, rue 38, Nador</li>
              <li className="mt-4">e-market@store.ma</li>
              <li>+212 6 00 00 00 00</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-medium mb-4 font-serif">Compte</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-serif">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Mon Compte
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition">
                  Connexion / S'inscrire
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Panier
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Liste de souhaits
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Store
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-medium mb-4 font-serif">
              Lien Rapide
            </h4>
            <ul className="space-y-3 text-sm text-gray-300 font-serif">
              <li>
                <Link to="/" className="hover:text-white transition">
                  politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-medium mb-4 font-serif">
              Télécharger l'application
            </h4>
            <p className="text-xs text-gray-400 mb-3 font-serif">
              Économisez 10 % avec l'application (offre réservée aux nouveaux
              utilisateurs).
            </p>

            <div className="flex gap-2 mb-6">
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  className="border border-white rounded px-6 py-2 hover:bg-white hover:text-black transition"
                >
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[6px] font-small leading-none">
                        GET IT ON
                      </div>
                      <div className="text-[12px] font-medium leading-none">
                        App Store
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  to="/"
                  className="border border-white rounded px-6 py-2 hover:bg-white hover:text-black transition"
                >
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[6px] font-small leading-none">
                        GET IT ON
                      </div>
                      <div className="text-[12px] font-medium leading-none">
                        Google Play
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                to="/"
                className="hover:text-gray-400 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="hover:text-gray-400 transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="hover:text-gray-400 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="hover:text-gray-400 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-sm text-gray-500 font-serif">
            © Copyright 2025. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
