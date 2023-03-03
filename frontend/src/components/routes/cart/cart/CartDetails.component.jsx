import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import Loading from "../../../loading/Loading.component"
import Message from "../../../message/Message.component"
import { addFurnitureToCart } from "../../../../redux/actions/cartActions";
import { APILink } from "../../../../api/api";

import { CartDetailsStyles } from "./CartDetails.styles"

function CartDetails() {
  

  return (
    <CartDetailsStyles>CartDetails</CartDetailsStyles>
  )
}

export default CartDetails