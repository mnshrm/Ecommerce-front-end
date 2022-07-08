import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <p className="brand">Smart Zone</p>
      <div className="navOptions">
        <ul className="navigation">
          <li>
            <button className="navLink">Shop</button>
          </li>
          <li>
            <button className="navLink">About us</button>
          </li>
          <li>
            <button className="navLink">Cart</button>
          </li>
          <li>
            <span>
              <button className="avatarLink">
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
