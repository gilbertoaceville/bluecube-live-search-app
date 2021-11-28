import React from "react";
import classes from "./button.module.css";

/**
 * 
 * @param {*} params (props)
 * @returns button
 */
const Button = ({ label, onclick, disabled, type, ariaLabel }) => {
  const { btn } = classes;
  return (
    <button
      className={btn}
      onClick={onclick}
      disabled={disabled}
      type={type || "button"}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
};

export default Button;
