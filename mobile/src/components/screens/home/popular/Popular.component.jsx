import {
  PopularStyles,
  PopularGrid,
  PopularSideTable,
  PopularSofa,
  PopularHeader,
} from "./Popular.styles";

import sideTable from "./img/sideTable.png";
import sofa from "./img/sofa.png"

function Popular() {
  return (
    <PopularStyles>
      <PopularGrid>
        <PopularSideTable source={sideTable} />
        <PopularHeader>Table</PopularHeader>
      </PopularGrid>

      <PopularGrid>
        <PopularSofa source={sofa} />
        <PopularHeader>Couch</PopularHeader>
      </PopularGrid>
    </PopularStyles>
  );
}

export default Popular;
