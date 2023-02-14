import {
    PopularStyles,
    PopularImgGrid,
    PopularSideTable,
    PopularSofa,
    PopularTextGrid,
    PopularHeader,
  } from "./Popular.styles";
  import sideTable from "./img/sideTable.png";
  import sofa from "./img/sofa.png";
  import { ShopNowButton } from "../../../buttons/Buttons";
  
  function Popular() {
    return (
      <PopularStyles>
        <PopularImgGrid>
          <PopularSideTable src={sideTable} />
          <PopularTextGrid>
              <PopularHeader>Granite Side Table</PopularHeader>
              <ShopNowButton>View More</ShopNowButton>
          </PopularTextGrid>
        </PopularImgGrid>
        <PopularImgGrid>
          <PopularSofa src={sofa} />
          <PopularTextGrid>
              <PopularHeader>Cloud Sofa</PopularHeader>
              <ShopNowButton>View More</ShopNowButton>
          </PopularTextGrid>
        </PopularImgGrid>
      </PopularStyles>
    );
  }
  
  export default Popular;
  