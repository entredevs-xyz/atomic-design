import React from "react";
import ButtonMolecule from "../ButtonMolecule";

const ButtonOrganism = ({ children, disabled, loading, backgroundColor, textColor, onClick }) => {
  return (
    <ButtonMolecule
      disabled={disabled || loading}
      backgroundColor={backgroundColor}
      textColor={textColor}
      onClick={onClick}
    >
      {loading ? "Carregando..." : children}
    </ButtonMolecule>
  );
};

export default ButtonOrganism;