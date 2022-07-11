import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <div className="navbar">
      <p className="brand">Smart Zone</p>
      <div className="navOptions">
        <ul className="navigation">
          <li>
            <button className="navLink noButtonStyle">Shop</button>
          </li>
          <li>
            <button className="navLink noButtonStyle">About us</button>
          </li>
          <li>
            <button id="icon" className="navLink noButtonStyle">
              <ShoppingCartIcon />
            </button>
          </li>
          <li>
            <span>
              <button className="avatarLink noButtonStyle">
                <img
                  className="avatar"
                  src="https://media-exp2.licdn.com/dms/image/D4D35AQHQMJ-_tcRwCw/profile-framedphoto-shrink_100_100/0/1655535867905?e=1657875600&v=beta&t=uNP_ovslEClnC2OwBaSr745mN_0Nw9Z2ZnPXvyYA3Ps"
                  alt="error"
                />
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
