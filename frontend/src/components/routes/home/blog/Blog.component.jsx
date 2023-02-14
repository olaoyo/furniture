import {
  BlogStyles,
  BlogTextGrid,
  BlogHeader,
  BlogParagraph,
  BlogList,
} from "./Blog.styles";
import { ShopNowButton } from "../../../buttons/Buttons";
import BlogCard from "./BlogCard.component";
import macBookOne from "./img/macBookOne.png";
import macBookTwo from "./img/macBookTwo.png";
import macBookThree from "./img/macBookThree.png";

function Blog() {
  return (
    <BlogStyles>
      <BlogTextGrid>
        <BlogHeader>Our Blogs</BlogHeader>
        <BlogParagraph>
          Find a bright ideal to suit your taste with our great selection
        </BlogParagraph>
      </BlogTextGrid>

      <BlogList>
        <BlogCard
          image={macBookOne}
          paragraph="Going all-in with millennial design"
        />
        <BlogCard
          image={macBookTwo}
          paragraph="A touch of Gen X, Y & Z"
        />
        <BlogCard
          image={macBookThree}
          paragraph="Classic workspace for all careers"
        />
        
      </BlogList>

      <ShopNowButton>View Posts</ShopNowButton>
    </BlogStyles>
  );
}

export default Blog;
