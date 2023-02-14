import {
  TopPicksStyles,
  TopPicksTextGrid,
  TopPicksHeader,
  TopPicksParagraph,
  TopPicksProductsListGrid,
  TopPicksProducts,
  TopPicksImg,
  TopPicksDetails,
  TopPicksText,
  TopPicksViewMore,
} from "./TopPicks.styles";
import { ShopNowButton } from "../../../buttons/Buttons";
import trentonModular from "./img/trentonModular.png";
import dinningTable from "./img/dinningTable.png"
import barTable from "./img/barTable.png"
import plainConsole from "./img/plainConsole.png"

function TopPicks() {
  return (
    <TopPicksStyles>
      <TopPicksTextGrid>
        <TopPicksHeader>Top Picks For You</TopPicksHeader>
        <TopPicksParagraph>
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </TopPicksParagraph>
      </TopPicksTextGrid>

      <TopPicksProductsListGrid>

        <TopPicksProducts>
            <TopPicksImg src={trentonModular} />
            <TopPicksDetails>
            <TopPicksText>Trenton modular sofa</TopPicksText>
            <TopPicksText price>$ 1,000.00</TopPicksText>
            </TopPicksDetails>
        </TopPicksProducts>

        <TopPicksProducts>
            <TopPicksImg src={dinningTable} />
            <TopPicksDetails>
            <TopPicksText>Granite dining table with chairs</TopPicksText>
            <TopPicksText price>$ 1,500.00</TopPicksText>
            </TopPicksDetails>
        </TopPicksProducts>

        <TopPicksProducts>
            <TopPicksImg src={barTable} />
            <TopPicksDetails>
            <TopPicksText>Outdoor bar table and stools</TopPicksText>
            <TopPicksText price>$ 2,000.00</TopPicksText>
            </TopPicksDetails>
        </TopPicksProducts>

        <TopPicksProducts>
            <TopPicksImg src={plainConsole} />
            <TopPicksDetails>
            <TopPicksText>Plain console with teak mirror</TopPicksText>
            <TopPicksText price>$ 1,800.00</TopPicksText>
            </TopPicksDetails>
        </TopPicksProducts>

       
      </TopPicksProductsListGrid>


      <TopPicksViewMore>
          <ShopNowButton>View More</ShopNowButton>
      </TopPicksViewMore>
    </TopPicksStyles>
  );
}

export default TopPicks;
