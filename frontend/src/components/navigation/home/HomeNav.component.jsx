import { NavLink } from "react-router-dom";
import {
  HomeNavStyles,
  HomeParagraphs,
  HomeNavArrowActive,
} from "./HomeNav.styles";

function HomeNav({ route }) {
  return (
    <HomeNavStyles>
      <HomeParagraphs medium>
        <NavLink to="/">Home</NavLink>
      </HomeParagraphs>

      <HomeNavArrowActive>
        <span className="material-symbols-outlined">keyboard_arrow_right</span>
      </HomeNavArrowActive>
      <HomeParagraphs>{route}</HomeParagraphs>
    </HomeNavStyles>
  );
}

export default HomeNav;
