import { useParams } from "react-router-dom";
import DetailsNav from "../../navigation/details/DetailsNav.component";
import Purchase from "./purchase/Purchase.component";
import Description from "./description/Description.component";
import Related from "./related/Related.component";
import FurnitureList from "../list/List.component";
import View from "./view/View.component";
import furnitures from "../../../furniture";

function Details() {
  const { furnitureId } = useParams();
  const furniture = furnitures.find(
    (furniture) => furniture.id === furnitureId
  );

  return (
    <>
      <DetailsNav home="Home" shop="Shop" furniture={furniture} />
      <Purchase furniture={furniture} />
      <Description furniture={furniture} />
      <Related />
      <FurnitureList />
      <View />
    </>
  );
}

export default Details;
