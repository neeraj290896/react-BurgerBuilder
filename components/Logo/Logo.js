import React from "react";
import './Logo.css';

const logo = props => (
  <div className="Logo" style={props.style}>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAVHu-U0gXceGxIa0noijCM5mCFyzthfDZDg&usqp=CAU"
      alt="MyBurger"
    />
  </div>
);

export default logo;
