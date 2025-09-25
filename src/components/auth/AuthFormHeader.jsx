import React from 'react';

const AuthFormHeader =  ({ isRegister }) => {
    return (
        <>
    <h2 className="text-2xl font-bold text-center text-dGray">
      {isRegister ? "Create your Account" : "Welcome to ScapeSync"}
    </h2>
    <p className="text-center text-lGray mt-2">
      {isRegister
        ? "When sports Meets smart Tech."
        : "Please share your login details so you can access the website."}
    </p>
  </>
    );
};

export default AuthFormHeader;



