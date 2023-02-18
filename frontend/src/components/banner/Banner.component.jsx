import {
  BannerStyles,
  BannerBox,
  BannerImg,
  BannerGrid,
  BannerHeader,
} from "./Banner.styles";
import shopBanner from "./img/shopBanner.jpg";
import Logo from "../logo/Logo.component";
import HomeNav from "../navigation/home/HomeNav.component";

function Banner({ header }) {
  return (
    <BannerStyles>
      <BannerBox>
        <BannerImg src={shopBanner} />
        <BannerGrid>
          <Logo />
          <BannerHeader>{header}</BannerHeader>
          <HomeNav route="Shop" />
        </BannerGrid>
      </BannerBox>
    </BannerStyles>
  );
}

export default Banner;
