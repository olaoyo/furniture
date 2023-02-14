import {
  InstagramStyles,
  InstagramCard,
  InstagramImg,
  InstagramHeader,
  InstagramParagraph,
} from "./Instagram.styles";
import instagram from "./img/instagram.jpg";
import { FollowUsButton } from "../../../buttons/Buttons";

function Instagram() {
  return (
    <InstagramStyles>
      <InstagramCard>
        <InstagramImg src={instagram} />
        
          <InstagramHeader>Our Instagram</InstagramHeader>
          <InstagramParagraph>
            Our Follow our store on Instagram
          </InstagramParagraph>
          <FollowUsButton>Follow Us</FollowUsButton>
        
      </InstagramCard>
    </InstagramStyles>
  );
}

export default Instagram;
