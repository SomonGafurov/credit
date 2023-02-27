import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const OnBtnClick = () => {
    localStorage.removeItem("user");
    Window.location.reload();
  };

  return (
    <div className="header">
      <Link to="/HumoOnline.tj" className="e-bank">
        Интернет-банк
      </Link>

      {OnBtnClick ? (
        <form onSubmit={OnBtnClick}>
          <button onSubmit={OnBtnClick} className="log-btn">
            Log out
          </button>
        </form>
      ) : (
        "none"
      )}
      <div></div>
    </div>
  );
};
export default Header;
