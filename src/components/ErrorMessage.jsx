import React from "react";
import obiWan from "../images/obi-wan.jpg";

const ErrorMessage = () => {
  return (
    <div>
      <p>Estos no son los droides que está buscando</p>
      <img src={obiWan} alt="Obi-Wan Kenobi" />
    </div>
  );
};

export default ErrorMessage;