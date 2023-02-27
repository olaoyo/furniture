import { ActivityIndicator } from "react-native";

import Message from "../../../message/Message.component";
import { theme } from "../../../../themes/themes";

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

import { baseURL } from "../../../../api/api";

function Purchase({ loading, furniture: { name, image, price, rating }, error }) {
  return (
    <DetailsStyles>
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.yellow} />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <ImgAndPurchase>
            <ImgBg large>
              <Img large source={{ uri: baseURL + image }} />
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
              <Img small source={{ uri: baseURL + image }} />
            </ImgBg>
            <ImgBg small>
              <Img small source={{ uri: baseURL + image }} />
            </ImgBg>
            <ImgBg small>
              <Img small source={{ uri: baseURL + image }} />
            </ImgBg>
            <ImgBg small>
              <Img small source={{ uri: baseURL + image }} />
            </ImgBg>
          </ImgSmallContainer>
        </>
      )}
    </DetailsStyles>
  );
}

export default Purchase;
