import {
  DescriptionStyles,
  Paragraph,
  Furniture,
  FurnitureCard,
  FurnitureImg,
} from "./Description.styles";

import Loading from "../../../loading/Loading.component";
import Message from "../../../message/Message.component";

function Description({ loading, furniture, error }) {
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <DescriptionStyles>
          <Paragraph p1>Description</Paragraph>
          <Paragraph grey>{furniture.description}</Paragraph>
          <Furniture>
            <FurnitureCard>
              <FurnitureImg src={furniture.image} />
            </FurnitureCard>
            <FurnitureCard>
              <FurnitureImg src={furniture.image} />
            </FurnitureCard>
          </Furniture>
        </DescriptionStyles>
      )}
    </>
  );
}

export default Description;
