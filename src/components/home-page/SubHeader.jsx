

const SubHeader = () => {
  return (
     <div className="hidden lg:flex bg-black text-white py-2 px-4">
        <div className=" max-w-7xl mx-auto flex items-center justify-center text-sm tracking-wide">
          <div className="flex gap-10">
            <span>
             Bienvenue chez nous ! Commencez à acheter et profitez de soldes allant jusqu'à 50 % de réduction – livraison gratuite !            </span>
            <a
              href="#"
              className="font-semibold  hover:opacity-80 transition"
            >
              Achetez maintenant
            </a>
          </div>
        </div>
      </div>
  )
}

export default SubHeader