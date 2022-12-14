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
                  src="https://media-exp2.licdn.com/dms/image/https://media-exp1.licdn.com/dms/image/D4D35AQHQMJ-_tcRwCw/profile-framedphoto-shrink_100_100/0/1655535867905?e=1666281600&v=beta&t=q2RJ_S4EzwOBDuhB1kC_r7Pw6XNvHFkDjbBXav-uXxg-_tcRwCw/profile-framedphoto-shrink_100_100/0/1655535867905?e=1658761200&v=beta&t=UGiWRovNt2Gl-GmuH7CI-H4s4cVeOs-5V4qUuWjBkJc"
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
