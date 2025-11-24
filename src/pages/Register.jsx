import React from "react";
import LayoutAuthPage from "../components/auth-pages/LayoutAuthPage";
import FormRegister from "../components/auth-pages/FormRegister";


const Register = () => {
  return (

      <div className="h-screen">
        <div className="flex h-full">
          <LayoutAuthPage
            name="Se connecter"
            link="/login"
            introductionText="Rejoignez notre communauté dès aujourd'hui et commencez votre voyage inspirant avec nous."
          />
          <FormRegister />
        </div>
      </div>

  );
};

export default Register;
