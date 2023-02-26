import React, { useState } from "react";
import "./ButtonToTop.css";

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    window.location.href='https://chhawinder.github.io/HelpRight_newpost/';
  };


  return (
    <button
      className={`button-to-top ${isVisible ? "visible" : ""}`}
      onClick={handleClick}
    >
    <i class="fa-solid fa-plus"></i>
    </button>
  );
};

export default ButtonToTop;