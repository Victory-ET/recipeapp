import React from "react";
import "./styles/welcome.css";
import image from "./img/food.png";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

// import { Link } from "react-router-dom";

const Welcome = () => {
  const ref = useRef("");
  const location = useLocation();
  console.log(location.pathname);
  // location.pathname === "/" &&  location.href === location.origin
  window.onscroll = () => {
    if (location.pathname !== "/") {
      console.log("seconded");
    } else if (location.pathname === "/") {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        ref.current.classList.add("fred");
      } else {
        ref.current.classList.remove("fred");
      }
    }
  };
  // console.log(window.location.href);
  // console.log(window.location.pathname);
  // console.log("window.location.pathname");
  return (
    <div className="landing">
      <div className="orient-left">
        <h1 id="col">Get Simple Recipe Choices</h1>
        <p>
          <b>Hungry?</b> wandering what to eat. we've got you covered. Browse
          through
          <br />
          our huge sets of dishes, find the one that meets
          <br />
          your culinary demands.Recipes containing calories and nutrients
          <br />
          to help cater for your dietary needs.
          <br />
          Simple to prepare, well balanced dishes...
          <br />
          Simply delicious. Enjoy!
        </p>
        <button className="btng">Get Recipes</button>
      </div>
      <div className="orient-right">
        <img src={image} alt="" />
      </div>
      <div className="scroll" ref={ref}>
        <span></span>
      </div>
    </div>
  );
};

export default Welcome;
