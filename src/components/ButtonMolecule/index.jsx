import React from "react";
import ButtonAtom from "../ButtonAtom";

const ButtonMolecule = ({ children, onClick, disabled, backgroundColor, textColor }) => {
    return (
      <ButtonAtom disabled={disabled} onClick={onClick} backgroundColor={backgroundColor} textColor={textColor}>
        {children}
      </ButtonAtom>
    );
  };

export default ButtonMolecule;