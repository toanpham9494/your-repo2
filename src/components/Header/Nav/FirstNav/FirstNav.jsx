
import { useState } from "react";
import "./FirstNav.css";

const FirstNav = () => {
  const [name, setName] = useState("Home");

  const buttonClickHandler = (e) => {
    console.log(e.target.innerText);
    setName(e.target.innerText);
  };

  return (
    <ul className="firstNav">
      <li>
        <a
          className={name === "Home" ? "firstNavItem--active" : ""}
          onClick={buttonClickHandler}
          href="/#"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={name === "TV Show" ? "firstNavItem--active" : ""}
          onClick={buttonClickHandler}
          href="/#"
        >
          TV Show
        </a>
      </li>
      <li>
        <a
          className={name === "Movies" ? "firstNavItem--active" : ""}
          onClick={buttonClickHandler}
          href="/#"
        >
          Movies
        </a>
      </li>
      <li>
        <a
          className={name === "Popular" ? "firstNavItem--active" : ""}
          onClick={buttonClickHandler}
          href="/#"
        >
          Popular
        </a>
      </li>
      <li>
        <a
          className={name === "My list" ? "firstNavItem--active" : ""}
          onClick={buttonClickHandler}
          href="/#"
        >
          My list
        </a>
      </li>
    </ul>
  );
};

export default FirstNav;
