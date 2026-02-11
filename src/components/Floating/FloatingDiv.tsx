import React from "react";

import './FloatingDiv.css'


interface FloatingDivProps {
  img: string;
  text1: string;
  text2: string;
}

const FloatinDiv = ({ img, text1, text2 }: FloatingDivProps) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
