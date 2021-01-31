import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Header.css";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="header__logo"
        />
      </Link>
      <div className="header__search" type="text">
        <input className="header__searchInput" type="text" />
        <div className="header__searchIcon">
          <SearchIcon />
        </div>
      </div>

      <Link to={!user && "/login"}>
        <div onClick={handleAuthentication}>
          <div className="header__nav">
            <div className="header__option">
              <span className="header__optionLineOne">
                Hello {user ? user.email : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Returns &</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
