import {
  BlogDetails,
  BlogImg,
  BlogParagraph2,
  BlogIconDateTimeGrid,
  BlogIconDateTime,
  BlogIcon,
  BlogDateTime,
} from "./Blog.styles";
import { ShopNowButton } from "../../../buttons/Buttons";

function BlogCard({ image, paragraph }) {
  return (
    <BlogDetails>
      <BlogImg src={image} />
      <BlogParagraph2>{paragraph}</BlogParagraph2>
      <ShopNowButton>Read More</ShopNowButton>
      <BlogIconDateTimeGrid>
        <BlogIconDateTime>
          <BlogIcon>
            <span className="material-symbols-outlined">schedule</span>
          </BlogIcon>
          <BlogDateTime>5 min</BlogDateTime>
        </BlogIconDateTime>

        <BlogIconDateTime>
          <BlogIcon>
            <span className="material-symbols-outlined">calendar_today</span>
          </BlogIcon>
          <BlogDateTime>
            12<sup>th</sup> Oct 2022
          </BlogDateTime>
        </BlogIconDateTime>
      </BlogIconDateTimeGrid>
    </BlogDetails>
  );
}

export default BlogCard;
