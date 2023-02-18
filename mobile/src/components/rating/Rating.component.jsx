import { RatingStyles, RatingStars, RatingIcon } from "./Rating.styles";

function Rating({ value }) {
  return (
    <RatingStyles>
      <RatingStars>
        {value >= 1 ? (
          <RatingIcon name="star" />
        ) : value >= 0.5 ? (
          <RatingIcon name="star-half" />
        ) : (
          ""
        )}
      </RatingStars>

      <RatingStars>
        {value >= 2 ? (
          <RatingIcon name="star" />
        ) : value >= 1.5 ? (
          <RatingIcon name="star-half" />
        ) : (
          ""
        )}
      </RatingStars>

      <RatingStars>
        {value >= 3 ? (
          <RatingIcon name="star" />
        ) : value >= 2.5 ? (
          <RatingIcon name="star-half" />
        ) : (
          ""
        )}
      </RatingStars>

      <RatingStars>
        {value >= 4 ? (
          <RatingIcon name="star" />
        ) : value >= 3.5 ? (
          <RatingIcon name="star-half" />
        ) : (
          ""
        )}
      </RatingStars>

      <RatingStars>
        {value >= 5 ? (
          <RatingIcon name="star" />
        ) : value >= 4.5 ? (
          <RatingIcon name="star-half" />
        ) : (
          ""
        )}
      </RatingStars>
    </RatingStyles>
  );
}

export default Rating;
