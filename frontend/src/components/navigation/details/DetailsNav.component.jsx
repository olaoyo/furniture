import { NavLink } from "react-router-dom";
import {
  DetailsNavStyles,
  DetailsParagraphs,
  DetailsNavArrowActive,
  DetailsNavButton,
} from "./DetailsNav.styles";

function DetailsNav({ home, shop, furniture }) {
  return (
    <DetailsNavStyles>
      <DetailsParagraphs>
        <NavLink to="/">{home}</NavLink>
      </DetailsParagraphs>

      <DetailsNavArrowActive>
        <span className="material-symbols-outlined">keyboard_arrow_right</span>
      </DetailsNavArrowActive>

      <DetailsParagraphs>
        <NavLink to="/shop">{shop}</NavLink>
      </DetailsParagraphs>

      <DetailsNavArrowActive>
        <span className="material-symbols-outlined">keyboard_arrow_right</span>
      </DetailsNavArrowActive>

      <DetailsNavButton>
        <DetailsParagraphs black>{furniture.name}</DetailsParagraphs>
      </DetailsNavButton>
    </DetailsNavStyles>
  );
}

export default DetailsNav;