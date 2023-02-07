import React from "react";

const ButtonAtom = ({ children, backgroundColor, textColor, onClick, disabled }) => {
    return (
      <button disabled={disabled} onClick={onClick} style={{ backgroundColor, color: textColor }}>
        {children}
      </button>
    );
  };

export default ButtonAtom;