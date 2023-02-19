import { RatingStyles, RatingStars } from "./Rating.styles";

function Rating({ rating, margin }) {
  return (
    <RatingStyles margin={margin}>
        
      <RatingStars>
          {rating >= 1 ? (
            <span className={"material-symbols-outlined"}>stars</span>
          ) : rating >= 0.5 ? (
            <span className="material-symbols-outlined">star_half</span>
          ) : (
            ""
          )}
      </RatingStars>

      <RatingStars>
          {rating >= 2 ? (
            <span className={"material-symbols-outlined"}>stars</span>
          ) : rating >= 1.5 ? (
            <span className="material-symbols-outlined">star_half</span>
          ) : (
            ""
          )}
      </RatingStars>

      <RatingStars>
          {rating >= 3 ? (
            <span className={"material-symbols-outlined"}>stars</span>
          ) : rating >= 2.5 ? (
            <span className="material-symbols-outlined">star_half</span>
          ) : (
            ""
          )}
      </RatingStars>

      <RatingStars>
          {rating >= 4 ? (
            <span className={"material-symbols-outlined"}>stars</span>
          ) : rating >= 3.5 ? (
            <span className="material-symbols-outlined">star_half</span>
          ) : (
            ""
          )}
      </RatingStars>

      <RatingStars>
          {rating >= 5 ? (
            <span className={"material-symbols-outlined"}>stars</span>
          ) : rating >= 4.5 ? (
            <span className="material-symbols-outlined">star_half</span>
          ) : (
            ""
          )}
      </RatingStars>
      
    </RatingStyles>
  );
}

export default Rating;
