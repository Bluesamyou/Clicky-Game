import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header-container">
      Score : {props.score} | High Score : {props.highScore}
    </div>
  );
}

export default Header;
