import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  PurchaseStyles,
  ImgSmallGrid,
  ImgSmall,
  ImgBigGrid,
  ImgBig,
  DetailsGrid,
  DetailsHeader,
  Details,
  Reviews,
  RatingGrid,
  ReviewsButton,
  Description,
  SizeAndColorGrid,
  SizeAndColor,
  SizeBg,
  ColorBg,
  QtyAddToCart,
  Qty,
  AddRemove,
  Tags,
  Tag,
  SocialMedia,
  Social,
} from "./Purchase.styles";
import Rating from "../../../rating/Rating.component";
import { AddToCartButton } from "../../../buttons/Buttons";

import {
  addFurnitureToCart,
  increaseFurnitureQty,
  decreaseFurnitureQty,
} from "../../../../redux/actions/cartActions";

import Loading from "../../../loading/Loading.component";
import Message from "../../../message/Message.component";

import { routeURL } from "../../../../api/api";

function Purchase({ loading, furniture, error, furnitureId }) {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  // Check if furniture is in cart and use qty in cart instead of default of 1
  const currentFurniture = cartItems.find(
    (furniture) => furniture.id === +furnitureId
  );

  const navigate = useNavigate();

  const addFurniture = () => {
    setQty(qty + 1);
  };

  const removeFurniture = () => {
    setQty(qty > 1 ? qty - 1 : qty);
  };

  const onChangeHandler = (event) => {
    setQty(event.target.value);
  };

  const increaseFurnitureQtyHandler = (furnitureId) => {
    dispatch(increaseFurnitureQty(furnitureId));
  };

  const decreaseFurnitureQtyHandler = (furnitureId) => {
    dispatch(decreaseFurnitureQty(furnitureId));
  };

  const addToCartHandler = () => {
    dispatch(addFurnitureToCart(furnitureId, qty));
    navigate(routeURL.cart);
  };
  
  const addToCartItemsHandler = () => {
    dispatch(addFurnitureToCart(furnitureId, currentFurniture.qty));
    navigate(routeURL.cart);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message>{error}</Message>
      ) : currentFurniture ? (
        // Qty from localStorage cartItems
        <PurchaseStyles>
          <ImgSmallGrid>
            <ImgSmall src={furniture.image} alt={furniture.name} />
            <ImgSmall src={furniture.image} alt={furniture.name} />
            <ImgSmall src={furniture.image} alt={furniture.name} />
            <ImgSmall src={furniture.image} alt={furniture.name} />
          </ImgSmallGrid>
          <ImgBigGrid>
            <ImgBig src={furniture.image} />
          </ImgBigGrid>
          <DetailsGrid>
            <DetailsHeader>{furniture.name}</DetailsHeader>
            <Details p1 grey>
              ${furniture.price}
            </Details>
            <Reviews>
              <RatingGrid>
                <Rating rating={furniture.rating} />
              </RatingGrid>
              <ReviewsButton>
                <Details p6 grey>
                  {furniture.numReviews} Customer Reviews
                </Details>
              </ReviewsButton>
            </Reviews>
            <Description>
              <Details p7>{furniture.description}</Details>
            </Description>
            <SizeAndColorGrid>
              <Details grey>Size</Details>
              <SizeAndColor>
                <SizeBg selected>
                  <Details>L</Details>
                </SizeBg>
                <SizeBg>
                  <Details>XL</Details>
                </SizeBg>
                <SizeBg>
                  <Details>XS</Details>
                </SizeBg>
              </SizeAndColor>
              <Details grey>Color</Details>
              <SizeAndColor>
                <ColorBg purple />
                <ColorBg black />
                <ColorBg gold />
              </SizeAndColor>
            </SizeAndColorGrid>
            <QtyAddToCart>
              {furniture.countInStock > 0 ? (
                <>
                  <Qty>
                    <AddRemove onClick={() => decreaseFurnitureQtyHandler(currentFurniture.id)}>
                      <span className="material-symbols-outlined">remove</span>
                    </AddRemove>
                    <Details p3>
                      {currentFurniture.qty}
                    </Details>
                    <AddRemove onClick={() => increaseFurnitureQtyHandler(currentFurniture.id)}>
                      <span className="material-symbols-outlined">add</span>
                    </AddRemove>
                  </Qty>
                  <AddToCartButton onClick={addToCartItemsHandler}>
                    Add To Cart
                  </AddToCartButton>
                </>
              ) : (
                <>
                  <Qty>
                    <AddRemove onClick={removeFurniture} nohover>
                      <span className="material-symbols-outlined">
                        sentiment_dissatisfied
                      </span>
                    </AddRemove>
                    <Details p3>
                      {furniture.countInStock}
                    </Details>
                    <AddRemove onClick={addFurniture} nohover>
                      <span className="material-symbols-outlined">
                        sentiment_very_dissatisfied
                      </span>
                    </AddRemove>
                  </Qty>
                  <AddToCartButton onClick={addToCartHandler} disabled nohover>
                    Out of Stock
                  </AddToCartButton>
                </>
              )}
            </QtyAddToCart>
            <Tags>
              <Tag>
                <Details grey>SKL</Details>
                <Details grey ml>
                  : SS001
                </Details>
              </Tag>
              <Tag>
                <Details grey>Category</Details>
                <Details grey ml>
                  : Sofas
                </Details>
              </Tag>
              <Tag>
                <Details grey>Tags</Details>
                <Details grey ml>
                  : {furniture.category}
                </Details>
              </Tag>
              <Tag>
                <Details grey>Share</Details>
                <SocialMedia grey ml>
                  :
                  <Social>
                    <span className="material-symbols-outlined">thumb_up</span>
                  </Social>
                  <Social>
                    <span className="material-symbols-outlined">share</span>
                  </Social>
                </SocialMedia>
              </Tag>
            </Tags>
          </DetailsGrid>
        </PurchaseStyles>
      ) : (
        // Qty from useState(1)
        <PurchaseStyles>
          <ImgSmallGrid>
            <ImgSmall src={furniture.image} alt={furniture.name} />
            <ImgSmall src={furniture.image} alt={furniture.name} />
            <ImgSmall src={furniture.image} alt={furniture.name} />
            <ImgSmall src={furniture.image} alt={furniture.name} />
          </ImgSmallGrid>
          <ImgBigGrid>
            <ImgBig src={furniture.image} />
          </ImgBigGrid>
          <DetailsGrid>
            <DetailsHeader>{furniture.name}</DetailsHeader>
            <Details p1 grey>
              ${furniture.price}
            </Details>
            <Reviews>
              <RatingGrid>
                <Rating rating={furniture.rating} />
              </RatingGrid>
              <ReviewsButton>
                <Details p6 grey>
                  {furniture.numReviews} Customer Reviews
                </Details>
              </ReviewsButton>
            </Reviews>
            <Description>
              <Details p7>{furniture.description}</Details>
            </Description>
            <SizeAndColorGrid>
              <Details grey>Size</Details>
              <SizeAndColor>
                <SizeBg selected>
                  <Details>L</Details>
                </SizeBg>
                <SizeBg>
                  <Details>XL</Details>
                </SizeBg>
                <SizeBg>
                  <Details>XS</Details>
                </SizeBg>
              </SizeAndColor>
              <Details grey>Color</Details>
              <SizeAndColor>
                <ColorBg purple />
                <ColorBg black />
                <ColorBg gold />
              </SizeAndColor>
            </SizeAndColorGrid>
            <QtyAddToCart>
              {furniture.countInStock > 0 ? (
                <>
                  <Qty>
                    <AddRemove onClick={removeFurniture}>
                      <span className="material-symbols-outlined">remove</span>
                    </AddRemove>
                    <Details p3 value={qty} onChange={onChangeHandler}>
                      {qty}
                    </Details>
                    <AddRemove onClick={addFurniture}>
                      <span className="material-symbols-outlined">add</span>
                    </AddRemove>
                  </Qty>
                  <AddToCartButton onClick={addToCartHandler}>
                    Add To Cart
                  </AddToCartButton>
                </>
              ) : (
                <>
                  <Qty>
                    <AddRemove onClick={removeFurniture} nohover>
                      <span className="material-symbols-outlined">
                        sentiment_dissatisfied
                      </span>
                    </AddRemove>
                    <Details p3 value={qty} onChange={onChangeHandler}>
                      {furniture.countInStock}
                    </Details>
                    <AddRemove onClick={addFurniture} nohover>
                      <span className="material-symbols-outlined">
                        sentiment_very_dissatisfied
                      </span>
                    </AddRemove>
                  </Qty>
                  <AddToCartButton onClick={addToCartHandler} disabled nohover>
                    Out of Stock
                  </AddToCartButton>
                </>
              )}
            </QtyAddToCart>
            <Tags>
              <Tag>
                <Details grey>SKL</Details>
                <Details grey ml>
                  : SS001
                </Details>
              </Tag>
              <Tag>
                <Details grey>Category</Details>
                <Details grey ml>
                  : Sofas
                </Details>
              </Tag>
              <Tag>
                <Details grey>Tags</Details>
                <Details grey ml>
                  : {furniture.category}
                </Details>
              </Tag>
              <Tag>
                <Details grey>Share</Details>
                <SocialMedia grey ml>
                  :
                  <Social>
                    <span className="material-symbols-outlined">thumb_up</span>
                  </Social>
                  <Social>
                    <span className="material-symbols-outlined">share</span>
                  </Social>
                </SocialMedia>
              </Tag>
            </Tags>
          </DetailsGrid>
        </PurchaseStyles>
      )}
    </>
  );
}

export default Purchase;
