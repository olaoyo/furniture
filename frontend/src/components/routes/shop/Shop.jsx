import Banner from "../../banner/Banner.component";
import Furniture from "./furniture/Furniture.component";
import FurnitureList from "../list/List.component";
import Info from "../../info/Info.component";

function Shop() {
  return (
    <>
      <Banner header="Shop" route="Shop" />
      <Furniture />
      <FurnitureList />
      <Info />
    </>
  );
}

export default Shop;
