const ButtonSubmitAuthForm = ({ name }) => {
 return (
   <button
     type="submit"
     className="w-full py-3 text-sm font-medium text-white bg-black rounded"
   >
     {name}
   </button>
 );
};

export default ButtonSubmitAuthForm;
