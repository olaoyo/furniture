import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { PaymentMethodStyles } from "./PaymentMethod.styles";

import {
  Header,
  Form,
  LabelAndInput,
  Label,
  Input,
} from "../../../inputs/formInputs/FormInputs.styles";

import { AddToCartButton as PaymentMethodButton } from "../../../buttons/Buttons";

import { routeURL } from "../../../../api/api";

import { savePaymentMethod } from "../../../../redux/actions/cartActions";

function PaymentMethod() {

  const { shippingDetails: { address } } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  if (!address) {
    navigate(routeURL.shipping);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate(routeURL.placeOrder);
  };

  return (
    <PaymentMethodStyles>
      <Form center onSubmit={submitHandler}>
        <Header>Payment Method</Header>
        <LabelAndInput gridColumn>
          <Input
            radio
            type="radio"
            label="PayPal or Credit Card"
            id="paypal"
            name="paymentMethod"
            checked
            onChange={(event) => setPaymentMethod(event.target.value)}
          />
          <Label>PayPal or Credit Card</Label>
        </LabelAndInput>
        <PaymentMethodButton type="submit">Continue</PaymentMethodButton>
      </Form>
    </PaymentMethodStyles>
  );
}

export default PaymentMethod;
