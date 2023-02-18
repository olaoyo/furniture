import { RatingStyles, RatingStars } from "./Rating.styles";

function Rating({ value }) {
  return (
    <RatingStyles>
        
      <RatingStars>
          {value >= 1 ? (
            <span className={"material-symbols-outlined"}>stars</span>
          ) : value >= 0.5 ? (
            <span class="material-symbols-outlined">star_half</span>
          ) : (
            ""
          )}
      </RatingStars>

      <RatingStars>
          {value >= 2 ? (
            <span className={"material-symbols-outlined"}>stars</span>
          ) : value >= 1.5 ? (
            <span class="material-symbols-outlined">star_half</span>
          ) : (
            ""
          )}
      </RatingStars>

      <RatingStars>
          {value >= 3 ? (
            <span className={"material-symbols-outlined"}>stars</span>
          ) : value >= 2.5 ? (
            <span class="material-symbols-outlined">star_half</span>
          ) : (
            ""
          )}
      </RatingStars>

      <RatingStars>
          {value >= 4 ? (
            <span className={"material-symbols-outlined"}>stars</span>
          ) : value >= 3.5 ? (
            <span class="material-symbols-outlined">star_half</span>
          ) : (
            ""
          )}
      </RatingStars>

      <RatingStars>
          {value >= 5 ? (
            <span className={"material-symbols-outlined"}>stars</span>
          ) : value >= 4.5 ? (
            <span class="material-symbols-outlined">star_half</span>
          ) : (
            ""
          )}
      </RatingStars>
      
    </RatingStyles>
  );
}

export default Rating;
