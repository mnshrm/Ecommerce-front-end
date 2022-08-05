import React from "react";

function Product(props) {
  return (
    <div className="product">
      <img className="productImage" src={props.src} alt="error" />
    </div>
  );
}

export default Product;
