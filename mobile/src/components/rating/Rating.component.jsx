import { RatingStyles, RatingStars, RatingIcon } from "./Rating.styles";

function Rating({ rating }) {
  return (
    <RatingStyles>
      <RatingStars>
        {rating >= 1 ? (
          <RatingIcon name="star" />
        ) : rating >= 0.5 ? (
          <RatingIcon name="star-half" />
        ) : (
          ""
        )}
      </RatingStars>

      <RatingStars>
        {rating >= 2 ? (
          <RatingIcon name="star" />
        ) : rating >= 1.5 ? (
          <RatingIcon name="star-half" />
        ) : (
          ""
        )}
      </RatingStars>

      <RatingStars>
        {rating >= 3 ? (
          <RatingIcon name="star" />
        ) : rating >= 2.5 ? (
          <RatingIcon name="star-half" />
        ) : (
          ""
        )}
      </RatingStars>

      <RatingStars>
        {rating >= 4 ? (
          <RatingIcon name="star" />
        ) : rating >= 3.5 ? (
          <RatingIcon name="star-half" />
        ) : (
          ""
        )}
      </RatingStars>

      <RatingStars>
        {rating >= 5 ? (
          <RatingIcon name="star" />
        ) : rating >= 4.5 ? (
          <RatingIcon name="star-half" />
        ) : (
          ""
        )}
      </RatingStars>
    </RatingStyles>
  );
}

export default Rating;
