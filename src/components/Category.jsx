import React from "react";

function Category(props) {
  const backgroundImgUrl = {
    background: "url(" + props.src + ") no-repeat center center/cover",
  };

  return (
    <div className="category" style={backgroundImgUrl}>
      <button>
        <h1 className="heading">{props.name}</h1>
      </button>
    </div>
  );
}

export default Category;
