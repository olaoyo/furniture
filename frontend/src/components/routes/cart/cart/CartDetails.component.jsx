import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../message/Message.component";
import { increaseFurnitureQty, decreaseFurnitureQty, removeFurnitureFromCart } from "../../../../redux/actions/cartActions";
import { routeURL } from "../../../../api/api";

import {
  CartDetailsStyles,
  FurnitureDetails,
  DetailsHeader,
  Header,
  DetailsBody,
  Body,
  Image,
  Paragraph,
  AddRemove,
  FurnitureTotal,
  Subtotal,
} from "./CartDetails.styles";

import { CheckOutButton } from "../../../buttons/Buttons";

import formatCurrency from "../../../../utils/formatCurrency";

function CartDetails() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  
  const increaseFurnitureQtyHandler = (furnitureId) => {
    dispatch(increaseFurnitureQty(furnitureId));
  };

  const decreaseFurnitureQtyHandler = (furnitureId) => {
    dispatch(decreaseFurnitureQty(furnitureId));
  };

  const subtotal = cartItems.reduce((total, furniture) => total + (furniture.qty * furniture.price), 0);

  const total = subtotal;

  const checkoutHandler = () => {
    navigate(routeURL.checkout);
  };

  const deleteFromCartHandler = (furnitureId) => {
    dispatch(removeFurnitureFromCart(furnitureId));
  };


  return (
    <>
      {cartItems.length === 0 ? (
        <Message>Your Cart Is Empty</Message>
      ) : (
        <CartDetailsStyles>
          <FurnitureDetails>
            <DetailsHeader>
              <Header product>
                <Paragraph black p3>
                  Product
                </Paragraph>
              </Header>
              <Header price>
                <Paragraph black p3>
                  Price
                </Paragraph>
              </Header>
              <Header quantity>
                <Paragraph black p3>
                  Quantity
                </Paragraph>
              </Header>
              <Header subtotal>
                <Paragraph black p3>
                  Subtotal
                </Paragraph>
              </Header>
            </DetailsHeader>
            {cartItems.map((furniture) => (
              <DetailsBody key={furniture.id}>
                <Image src={furniture.image} />
                <Body product>
                  <Paragraph grey p3>
                    <Link to={routeURL.furniture.details(furniture.id)}>{furniture.name}</Link>
                  </Paragraph>
                </Body>
                <Body price>
                  <Paragraph grey p3>
                     {formatCurrency(furniture.price)}
                  </Paragraph>
                </Body>
                <Body quantity>
                  <AddRemove onClick={() => decreaseFurnitureQtyHandler(furniture.id)}>
                    <span className="material-symbols-outlined">remove</span>
                  </AddRemove>
                  <Paragraph grey p3 border>
                    {furniture.qty}
                  </Paragraph>
                  <AddRemove onClick={() => increaseFurnitureQtyHandler(furniture.id)}>
                    <span className="material-symbols-outlined">add</span>
                  </AddRemove>
                </Body>
                <Body subtotal>
                  <Paragraph grey p3>
                     {formatCurrency(furniture.price * furniture.qty)}
                  </Paragraph>
                </Body>
                <Body onClick={() => deleteFromCartHandler(furniture.id)} trash>
                  <span className="material-symbols-outlined">delete</span>
                </Body>
              </DetailsBody>
            ))}
          </FurnitureDetails>

          <FurnitureTotal>
            <Paragraph h6 semiBold>
              Cart Totals
            </Paragraph>
            <Subtotal>
              <Paragraph p3 medium left>
                Subtotal
              </Paragraph>
              <Paragraph p3 regular grey right>
                 {formatCurrency(subtotal)}
              </Paragraph>
            </Subtotal>
            <Subtotal>
              <Paragraph p3 medium left>
                Total
              </Paragraph>
              <Paragraph p2 medium gold right>
                 {formatCurrency(total)}
              </Paragraph>
            </Subtotal>
            <CheckOutButton
              onClick={checkoutHandler}
              type="button"
              disabled={cartItems.length === 0}
            >Check Out</CheckOutButton>
          </FurnitureTotal>
        </CartDetailsStyles>
      )}
    </>
  );
}

export default CartDetails;

