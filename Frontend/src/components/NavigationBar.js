import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
// import './index.css'
import '../index.css'

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = Cookies.get("jwt_token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("jwt_token");
    setIsLoggedIn(false);
    history.push("/login");
  };

  return (
    <nav className="nav">
      <div className="title">Value Voyager</div>
      <div className="site">
        <ul>
          <li className="link-text">
            <Link to="/" className="link-text">Home</Link>
          </li>
          <li>
            <Link to="/CarPredict" className="link-text">Price Prediction</Link>
          </li>
          <li>
            <Link to="/Cars" className="link-text">Cars</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout}>Log out</button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="link-text">Sign Up</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
