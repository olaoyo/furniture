import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";

import { PaymentMethodStyles } from "./PaymentMethod.styles";

import {
  TextInfo,
  Form,
  AuthInputGrid as RadioGrid,
} from "../../../inputs/formInputs/FormInputs.styles";

import { AuthButton as PaymentMethodButton, Radio } from "../../../buttons/Buttons";

import Spacer from "../../../utils/spacer/Spacer.styles";

import { routeURL } from "../../../../api/api";

import { savePaymentMethod } from "../../../../redux/actions/cartActions";

function PaymentMethod() {
  const { shippingDetails: { address } } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const { navigate } = useNavigation();

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  if (!address) {
    navigate("Shipping", { paymentOption: pay});
  }

  const submitHandler = () => {
    dispatch(savePaymentMethod(paymentMethod));
    navigate("Place Order", { paymentMethod: paymentMethod });
  };

  return (
    <PaymentMethodStyles>
      <Form center>
        <TextInfo header>Payment Method</TextInfo>

        <Spacer verticalTwo />

        <RadioGrid spaceAround>
          <Radio
            checked
            value="PayPal"
            status="checked"
            onPress={() => setPaymentMethod("PayPal")}
          />

          <Spacer horizontalOne />

          <TextInfo button>PayPal or Credit Card</TextInfo>
        </RadioGrid>

        <Spacer verticalTwo />

        <PaymentMethodButton
          border
          icon="arrow-right-bold-outline"
          mode="contained"
          onPress={submitHandler}
          type="submit"
        >
          Continue
        </PaymentMethodButton>
      </Form>
    </PaymentMethodStyles>
  );
}

export default PaymentMethod;
