const Button = ({btnName}) => {
  return (
    <button className="border-2 border-black text-sm px-12 py-3 text-black font-serif tracking-wide hover:bg-black hover:text-white transition duration-300">
        {btnName}
    </button>
  )
}

export default Button