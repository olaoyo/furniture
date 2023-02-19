import {
  PurchaseStyles,
  ImgSmallGrid,
  ImgSmall,
  ImgBigGrid,
  ImgBig,
  DetailsGrid,
  DetailsHeader,
  DetailsP1P2,
  DetailsP3P5,
  DetailsP6,
  Reviews,
  RatingGrid,
  ReviewsButton,
  Description,
  SizeAndColorGrid,
  SizeAndColor,
  SizeBg,
  ColorBg1,
  ColorBg2,
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

function Purchase({ furniture }) {
  return (
    <PurchaseStyles>
      <ImgSmallGrid>
        <ImgSmall src={furniture.image} />
        <ImgSmall src={furniture.image} />
        <ImgSmall src={furniture.image} />
        <ImgSmall src={furniture.image} />
      </ImgSmallGrid>

      <ImgBigGrid>
        <ImgBig src={furniture.image} />
      </ImgBigGrid>

      <DetailsGrid>
        <DetailsHeader>{furniture.name}</DetailsHeader>
        <DetailsP1P2 p1 grey>
          ${furniture.price}
        </DetailsP1P2>

        <Reviews>
          <RatingGrid>
            <Rating rating={furniture.rating} />
          </RatingGrid>

          <ReviewsButton>
            <DetailsP6 p6 grey>
              {furniture.numReviews} Customer Reviews
            </DetailsP6>
          </ReviewsButton>
        </Reviews>

        <Description>
          <DetailsP6>{furniture.description}</DetailsP6>
        </Description>

        <SizeAndColorGrid>
          <DetailsP3P5 grey>Size</DetailsP3P5>

          <SizeAndColor>
            <SizeBg selected>
              <DetailsP6>L</DetailsP6>
            </SizeBg>
            <SizeBg>
              <DetailsP6>XL</DetailsP6>
            </SizeBg>
            <SizeBg>
              <DetailsP6>XS</DetailsP6>
            </SizeBg>
          </SizeAndColor>

          <DetailsP3P5 grey>Color</DetailsP3P5>

          <SizeAndColor>
            <ColorBg1 purple />
            <ColorBg1 />
            <ColorBg2 />
          </SizeAndColor>
        </SizeAndColorGrid>

        <QtyAddToCart>
          <Qty>
            <AddRemove>
              <span className="material-symbols-outlined">remove</span>
            </AddRemove>
            <DetailsP3P5 p3>1</DetailsP3P5>
            <AddRemove>
              <span className="material-symbols-outlined">add</span>
            </AddRemove>
          </Qty>

          <AddToCartButton>Add To Cart</AddToCartButton>
        </QtyAddToCart>

        <Tags>
          <Tag>
            <DetailsP3P5 grey>SKL</DetailsP3P5>
            <DetailsP3P5 grey ml>
              : SS001
            </DetailsP3P5>
          </Tag>
          <Tag>
            <DetailsP3P5 grey>Category</DetailsP3P5>
            <DetailsP3P5 grey ml>
              : Sofas
            </DetailsP3P5>
          </Tag>
          <Tag>
            <DetailsP3P5 grey>Tags</DetailsP3P5>
            <DetailsP3P5 grey ml>
              : {furniture.category}
            </DetailsP3P5>
          </Tag>
          <Tag>
            <DetailsP3P5 grey>Share</DetailsP3P5>
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
  );
}

export default Purchase;