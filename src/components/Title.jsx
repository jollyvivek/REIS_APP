import React from "react";
import "../styles/style.css";

const Title = ({subTitle,title}) => {
  return (
    <div className="title-cont">
      <p className="text-center">{subTitle}</p>
      <h2 className="text-info">{title}</h2>
    </div>
  );
};

export default Title;
