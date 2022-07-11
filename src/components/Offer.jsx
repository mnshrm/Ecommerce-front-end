import React from "react";
import Product from "./Product";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

function Offer() {
  return (
    <div className="outerOffer">
      <div className="offer">
        <div className="heading">
          <h1>Latest smartphones at 30% off</h1>
        </div>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <button className="icon noButtonStyle">
          <ReadMoreIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default Offer;
