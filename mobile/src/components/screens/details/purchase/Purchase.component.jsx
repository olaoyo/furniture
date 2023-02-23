import {
  DetailsStyles,
  ImgAndPurchase,
  ImgBg,
  Img,
  InfoAndCartButton,
  Info,
  RatingContainer,
  QtyAndAddToCart,
  ImgSmallContainer,
} from "./Purchase.styles";
import Rating from "../../../rating/Rating.component";

import {
  CustomButton as AddToCart,
  ButtonText,
} from "../../../buttons/Buttons";

function Purchase({ furniture: { name, price, rating } }) {
  return (
    <DetailsStyles>
      <ImgAndPurchase>
        <ImgBg large>
          <Img large />
        </ImgBg>
        <InfoAndCartButton>
          <Info name>{name}</Info>
          <Info price>${price}</Info>
          <RatingContainer>
            <Rating rating={rating} />
          </RatingContainer>
          <QtyAndAddToCart>
            <AddToCart>
              <ButtonText>Add to Cart</ButtonText>
            </AddToCart>
            <Info qty>1</Info>
          </QtyAndAddToCart>
        </InfoAndCartButton>
      </ImgAndPurchase>
      <ImgSmallContainer>
        <ImgBg small>
          <Img small />
        </ImgBg>
        <ImgBg small>
          <Img small />
        </ImgBg>
        <ImgBg small>
          <Img small />
        </ImgBg>
        <ImgBg small>
          <Img small />
        </ImgBg>
      </ImgSmallContainer>
    </DetailsStyles>
  );
}

export default Purchase;
