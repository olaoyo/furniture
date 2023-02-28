import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { detailFurniture } from "../../../redux/actions/furnitureActions";

import DetailsNav from "../../navigation/details/DetailsNav.component";
import Purchase from "./purchase/Purchase.component";
import Description from "./description/Description.component";
import Related from "./related/Related.component";
import FurnitureList from "../list/List.component";
import View from "./view/View.component";


function Details() {

  const dispatch = useDispatch();

  const { loading, furniture, error } = useSelector((state) => state.furnitureDetails)
  
  const { furnitureId } = useParams();

  useEffect(() => {
    dispatch(detailFurniture(furnitureId))
  }, [dispatch, furnitureId])

  

  return (
    <>
      <DetailsNav home="Home" shop="Shop" furniture={furniture} error={error} />
      <Purchase loading={loading} furniture={furniture} error={error} furnitureId={furnitureId} />
      <Description loading={loading} furniture={furniture} error={error} />
      <Related />
      <FurnitureList />
      <View />
    </>
  );
}

export default Details;
