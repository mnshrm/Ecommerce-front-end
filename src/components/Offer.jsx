import React from "react";
import Product from "./Product";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

function Offer(props) {
  return (
    <div className="outerOffer">
      <div className="offer">
        <div className="heading">
          <h1>{props.heading}</h1>
        </div>
        <Product src="https://m.media-amazon.com/images/I/71yTvU9VgdL._AC_UY327_FMwebp_QL65_.jpg" />
        <Product src="https://m.media-amazon.com/images/I/811lrGbXwIL._AC_UY327_FMwebp_QL65_.jpg" />
        <Product src="https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY327_FMwebp_QL65_.jpg" />
        <Product src="https://m.media-amazon.com/images/I/71Y8rH2cJiL._AC_UY327_FMwebp_QL65_.jpg" />
        <Product src="https://m.media-amazon.com/images/I/714Mg+6MoFL._AC_UY327_FMwebp_QL65_.jpg" />

        <button className="icon noButtonStyle">
          <ReadMoreIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default Offer;
