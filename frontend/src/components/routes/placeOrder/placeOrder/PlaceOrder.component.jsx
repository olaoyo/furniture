import { useEffect } from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import {
  createOrder,
  resetOrder,
} from "../../../../redux/actions/orderActions";

import Message from "../../../message/Message.component";

import {
  // Order Details
  PlaceOrderStyles,

  // Shipping & Payment Method
  DetailsGrid,
  OrderAndPaymentDetailsGrid,
  OrderFurniture,
  PaymentMethod,

  // Furniture, Qty & Price
  FurnitureKey,
  FurnitureGrid,
  FurnitureImage,

  // Order Summary
  SummaryGrid,
  SummaryContentGrid,
  SummaryParagraphGrid,
  SummaryAmount,
  SummaryLine,
} from "./PlaceOrder.styles";

import {
  Header,
  Paragraph,
} from "../../../inputs/formInputs/FormInputs.styles";

import { AddToCartButton as PlaceOrderButton } from "../../../buttons/Buttons";

import { routeURL } from "../../../../api/api";

import formatCurrency from "../../../../utils/formatCurrency";

function PlaceOrderDetails() {
  const dispatch = useDispatch();

  const { cartItems, shippingDetails, paymentMethod } = useSelector(
    (state) => state.cart
  );

  const { error, loading, order, success } = useSelector(
    (state) => state.orderCreate
  );

  const navigate = useNavigate();

  const furniturePrice = cartItems.reduce(
    (total, furniture) => total + furniture.price * furniture.qty,
    0
  );

  const shippingPrice = furniturePrice > 10000 ? 0 : 2000;

  const taxPrice = +(0.05 * furniturePrice);

  const totalPrice = furniturePrice + shippingPrice + taxPrice;

  if (!paymentMethod) {
    navigate(routeURL.payment);
  }

  useEffect(() => {
    if (success) {
      navigate(routeURL.orderDetails(order._id));

      dispatch(resetOrder());
    }
  }, [dispatch, navigate, order, success]);

  const placeOrder = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress: shippingDetails,
        paymentMethod: paymentMethod,
        furniturePrice: furniturePrice,
        shippingPrice: shippingPrice,
        taxPrice: taxPrice,
        totalPrice: totalPrice,
      })
    );
  };

  return (
    <>
      {/* SHIPPING & PAYMENT METHOD */}

      <PlaceOrderStyles>
        <DetailsGrid>
          <>
            <OrderAndPaymentDetailsGrid>
              <OrderFurniture>
                <Header>Place Order</Header>
                <Paragraph regular>
                  Shipping: {shippingDetails.address}, {shippingDetails.city}{" "}
                  {shippingDetails.postalCode}, {shippingDetails.country}
                </Paragraph>
              </OrderFurniture>
              <PaymentMethod>
                <Header>Payment Method</Header>
                <Paragraph regular>Method: {paymentMethod}</Paragraph>
              </PaymentMethod>
            </OrderAndPaymentDetailsGrid>
          </>

          {/* FURNITURE, QTY & PRICE */}

          {cartItems.length === 0 ? (
            <Message>Your cart is empty</Message>
          ) : (
            <>
              {cartItems.map((furniture, index) => (
                <FurnitureKey key={index}>
                  <Link to={routeURL.furniture.details(furniture.id)}>
                    <FurnitureGrid>
                      <FurnitureImage
                        src={furniture.image}
                        alt={furniture.name}
                      />
                      <Paragraph regular>{furniture.name}</Paragraph>
                      <Paragraph regular>{furniture.qty}</Paragraph>
                      <Paragraph regular>x</Paragraph>
                      <Paragraph regular>
                        {formatCurrency(furniture.qty * furniture.price)}
                      </Paragraph>
                    </FurnitureGrid>
                  </Link>
                </FurnitureKey>
              ))}
            </>
          )}
        </DetailsGrid>

        {/* ORDER SUMMARY */}

        <SummaryGrid>
          <SummaryContentGrid center>
            <Header>Order Summary</Header>
            <SummaryLine>&nbsp;</SummaryLine>
          </SummaryContentGrid>

          <SummaryContentGrid>
            <SummaryParagraphGrid>
              <Paragraph>Furniture:</Paragraph>
              <SummaryAmount>{formatCurrency(furniturePrice)}</SummaryAmount>
            </SummaryParagraphGrid>
            <SummaryLine>&nbsp;</SummaryLine>
          </SummaryContentGrid>

          <SummaryContentGrid>
            <SummaryParagraphGrid>
              <Paragraph>Shipping:</Paragraph>
              <SummaryAmount>{formatCurrency(shippingPrice)}</SummaryAmount>
            </SummaryParagraphGrid>
            <SummaryLine>&nbsp;</SummaryLine>
          </SummaryContentGrid>

          <SummaryContentGrid>
            <SummaryParagraphGrid>
              <Paragraph>Tax (5%):</Paragraph>
              <SummaryAmount>{formatCurrency(taxPrice)}</SummaryAmount>
            </SummaryParagraphGrid>
            <SummaryLine>&nbsp;</SummaryLine>
          </SummaryContentGrid>

          <SummaryContentGrid>
            <SummaryParagraphGrid>
              <Paragraph>
                <strong>Total:</strong>
              </Paragraph>
              <SummaryAmount gold>{formatCurrency(totalPrice)}</SummaryAmount>
            </SummaryParagraphGrid>
            <SummaryLine>&nbsp;</SummaryLine>
          </SummaryContentGrid>

          <SummaryContentGrid centerNoMarginTop>
            {loading ? (
              <PlaceOrderButton
                type="button"
                disabled={cartItems === 0 || loading}
                onClick={placeOrder}
              >
                Processing ...
              </PlaceOrderButton>
            ) : (
              <PlaceOrderButton
                type="button"
                disabled={cartItems === 0}
                onClick={placeOrder}
              >
                Place Order
              </PlaceOrderButton>
            )}
          </SummaryContentGrid>

          <>{error && <Message smallGold>{error}</Message>}</>
        </SummaryGrid>
      </PlaceOrderStyles>
    </>
  );
}

export default PlaceOrderDetails;
