import React from "react";
import "../styles/style.css";

const Title = ({subTitle,title}) => {
  return (
    <div className="title-cont">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
