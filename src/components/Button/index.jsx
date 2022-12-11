import React from "react";

function Button({ onClick, className, children, ...props }) {
  return (
    <button {...props} onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
}

export default Button;
