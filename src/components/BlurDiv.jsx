import React from "react";

const BlurDiv = ({ blurAmount, children, className = "", style = {} }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        filter: `blur(${blurAmount}px)`,
        transition: "filter 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export default BlurDiv;
