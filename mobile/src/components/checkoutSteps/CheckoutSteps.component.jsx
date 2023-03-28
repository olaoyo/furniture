import { useNavigation } from "@react-navigation/native";

import {
  CheckoutStepsStyles,
  CheckoutStepsItemsGrid,
  CheckoutTouch,
  CheckoutStepsStatus,
} from "./CheckoutSteps.styles";

import { Entypo } from '@expo/vector-icons';

import { theme } from "../../themes/themes";

function CheckoutSteps({ step1, step2, step3 }) {

  const { navigate } = useNavigation();

  const shippingNavigation = () => {
    navigate("Shipping")
  };

  const paymentNavigation = () => {
    navigate("Payment")
  };

  const placeOrder = () => {
    navigate("Place Order")
  }

  return (
    <CheckoutStepsStyles>
      <CheckoutStepsItemsGrid>
        <>
          {step1 ? (
            <CheckoutTouch onPress={shippingNavigation} activeOpacity={0.5}>
              <CheckoutStepsStatus active>Shipping</CheckoutStepsStatus>
            </CheckoutTouch>
          ) : (
            <CheckoutStepsStatus inactive disabled>
              Shipping
            </CheckoutStepsStatus>
          )}
        </>

        <>
          {step1 ? (
              <Entypo name="chevron-right" size={24} color={theme.colors.black} />
          ) : (
              <Entypo name="chevron-right" size={24} color={theme.colors.grey.one} />
          )}
        </>

        <>
          {step2 ? (
            <CheckoutTouch onPress={paymentNavigation} activeOpacity={0.5}>
              <CheckoutStepsStatus active>Payment</CheckoutStepsStatus>
            </CheckoutTouch>
          ) : (
            <CheckoutStepsStatus inactive disabled>
              Payment
            </CheckoutStepsStatus>
          )}
        </>

        <>
          {step2 ? (
              <Entypo name="chevron-right" size={24} color={theme.colors.black} />
          ) : (
              <Entypo name="chevron-right" size={24} color={theme.colors.grey.one} />
          )}
        </>

        <>
          {step3 ? (
            <CheckoutTouch onPress={placeOrder} activeOpacity={0.5}>
              <CheckoutStepsStatus active>Place Order</CheckoutStepsStatus>
            </CheckoutTouch>
          ) : (
            <CheckoutStepsStatus inactive disabled>
              Place Order
            </CheckoutStepsStatus>
          )}
        </>
      </CheckoutStepsItemsGrid>
    </CheckoutStepsStyles>
  );
}

export default CheckoutSteps;
