import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

<div className="preFooter"></div>;
function PreFooter() {
  return (
    <div className="preFooter">
      <ul className="infoList">
        <li>
          <h2 className="Heading">Categories</h2>
        </li>
        <li>SmartPhone</li>
        <li>Tablet</li>
        <li>Laptop</li>
        <li>Accessories</li>
      </ul>
      <ul className="infoList">
        <li>
          <h2 className="Heading">Make money with us</h2>
        </li>
        <li>Become a seller</li>
        <li>Affiliate marketing</li>
        <li>Sell old goods</li>
        <li>Advertise your products</li>
      </ul>
      <ul className="infoList">
        <li>
          <h2 className="Heading">Let us Help you</h2>
        </li>
        <li>Covid-19</li>
        <li>Your Account</li>
        <li>Return center</li>
        <li>100% purchase protections</li>
      </ul>
      <ul className="infoList">
        <li>
          <h2 className="Heading">Contact us</h2>
        </li>
        <li className="socialIcon">
          <button
            className="noButtonStyle"
            onClick={() => window.open("https://twitter.com/", "_blank")}
          >
            <TwitterIcon />
          </button>
        </li>
        <li className="socialIcon">
          <button
            className="noButtonStyle"
            onClick={() => window.open("https://www.facebook.com/", "_blank")}
          >
            <FacebookIcon />
          </button>
        </li>
        <li className="socialIcon">
          <button
            className="noButtonStyle"
            onClick={() => window.open("https://www.instagram.com/", "_blank")}
          >
            <InstagramIcon />
          </button>
        </li>
        <li className="socialIcon">
          <button
            className="noButtonStyle"
            onClick={() => window.open("https://gmail.com/", "_blank")}
          >
            <EmailIcon />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default PreFooter;
