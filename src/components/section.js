// import react from "react";
import "./styles/section.css";
import { Link } from "react-router-dom";
import bbq from "./img/bbq.png";
import meat from "./img/meat.png";
import rice from "./img/rice.png";
import pasta from "./img/pasta.png";
import pizza from "./img/pizza.png";

const Section = () => {
  const cate = [
    { name: "Meats", img: meat },
    { name: "Casserole", img: pizza },
    { name: "Pasta", img: pasta },
    { name: "Salads", img: rice },
    { name: "Soup and Stew", img: bbq },
    { name: "Stir Fry", img: rice },
    { name: "Pizza", img: pizza },
    { name: "BBQ and Grillings", img: bbq },
    { name: "Rice and beans", img: rice },
  ];
  const fooditems = cate.map((choice) => (
    <span key={Math.random()}>
      <Link to={`/Result/${choice.name.toLowerCase()}`}>
        <div className="food-items">
          <img src={choice.img} alt="" />
        </div>
        <p>{choice.name}</p>
      </Link>
    </span>
  ));
  return (
    <div className="categories">{fooditems}</div>
    // <div className="categories">
    //   <span>
    //     <Link to="/Result">
    //       <p>Meats</p>
    //     </Link>
    //   </span>
    //   <span>
    //     <Link to="/Result">
    //       <p>Casseroles</p>
    //     </Link>
    //   </span>
    //   <span>
    //     <Link to="/Result">
    //       <p>Pasta</p>
    //     </Link>
    //   </span>
    //   <span>
    //     <Link to="/Result">
    //       <p>Salads</p>
    //     </Link>
    //   </span>
    //   <span>
    //     <Link to="/Result">
    //       <p>Soups and Stews</p>
    //     </Link>
    //   </span>
    //   <span>
    //     <Link to="/Result">
    //       <p>Stir fry</p>
    //     </Link>
    //   </span>
    //   <span>
    //     <Link to="/Result">
    //       <p>Pizza</p>
    //     </Link>
    //   </span>
    //   <span>
    //     <Link to="/Result">
    //       <p>BBQ and Grillings</p>
    //     </Link>
    //   </span>
    //   <span>
    //     <Link to="/Result">
    //       <p>Rice and Beans</p>
    //     </Link>
    //   </span>
    // </div>
  );
};

export default Section;
