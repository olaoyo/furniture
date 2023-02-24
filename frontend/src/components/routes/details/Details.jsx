import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsNav from "../../navigation/details/DetailsNav.component";
import Purchase from "./purchase/Purchase.component";
import Description from "./description/Description.component";
import Related from "./related/Related.component";
import FurnitureList from "../list/List.component";
import View from "./view/View.component";
import API from "../../../api/api";

import axios from "axios";

function Details() {
  const [furniture, setFurniture] = useState([])
  
  const { furnitureId } = useParams();

  useEffect(() => {
    async function fetchFurniture() {
      const { data } = await axios.get(API.furniture.details(furnitureId))
      setFurniture(data)
    }

    fetchFurniture()
  }, [furnitureId])

  

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
