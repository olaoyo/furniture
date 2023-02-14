import {
  NewArrivalsStyles,
  NewArrivalsImg,
  NewArivalsText,
  NewArrivalsParagraph,
  NewArrivalsHeader,
} from "./NewArrivals.styles";
import asgaardSofa from "./img/asgaardSofa.png";
import { OrderNowButton } from "../../../buttons/Buttons";

function NewArrivals() {
  return (
    <NewArrivalsStyles>
      <NewArrivalsImg src={asgaardSofa} />

      <NewArivalsText>
        <NewArrivalsParagraph>New Arrivals</NewArrivalsParagraph>
        <NewArrivalsHeader>Asgaard sofa</NewArrivalsHeader>
        <OrderNowButton>Order Now</OrderNowButton>
      </NewArivalsText>
    </NewArrivalsStyles>
  );
}

export default NewArrivals;
