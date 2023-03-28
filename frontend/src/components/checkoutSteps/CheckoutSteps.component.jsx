import { NavLink } from "react-router-dom";
import {
  CheckoutStepsStyles,
  CheckoutStepsItemsGrid,
  CheckoutStepsStatus,
  CheckoutStepsArrow,
} from "./CheckoutSteps.styles";

import { routeURL } from "../../api/api";

function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <CheckoutStepsStyles>
      <CheckoutStepsItemsGrid>
        <>
          {step1 ? (
            <NavLink to={routeURL.auth.login}>
              <CheckoutStepsStatus active>Login</CheckoutStepsStatus>
            </NavLink>
          ) : (
            <CheckoutStepsStatus inactive disabled>
              Login
            </CheckoutStepsStatus>
          )}
        </>

        <>
          {step1 ? (
            <CheckoutStepsArrow active>
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </CheckoutStepsArrow>
          ) : (
            <CheckoutStepsArrow inactive>
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </CheckoutStepsArrow>
          )}
        </>

        <>
          {step2 ? (
            <NavLink to={routeURL.shipping}>
              <CheckoutStepsStatus active>Shipping</CheckoutStepsStatus>
            </NavLink>
          ) : (
            <CheckoutStepsStatus inactive disabled>
              Shipping
            </CheckoutStepsStatus>
          )}
        </>

        <>
          {step2 ? (
            <CheckoutStepsArrow active>
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </CheckoutStepsArrow>
          ) : (
            <CheckoutStepsArrow inactive>
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </CheckoutStepsArrow>
          )}
        </>

        <>
          {step3 ? (
            <NavLink to={routeURL.payment}>
              <CheckoutStepsStatus active>Payment</CheckoutStepsStatus>
            </NavLink>
          ) : (
            <CheckoutStepsStatus inactive disabled>
              Payment
            </CheckoutStepsStatus>
          )}
        </>

        <>
          {step3 ? (
            <CheckoutStepsArrow active>
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </CheckoutStepsArrow>
          ) : (
            <CheckoutStepsArrow inactive>
              <span className="material-symbols-outlined">
                keyboard_arrow_right
              </span>
            </CheckoutStepsArrow>
          )}
        </>

        <>
          {step4 ? (
            <NavLink to={routeURL.placeOrder}>
              <CheckoutStepsStatus active>Place Order</CheckoutStepsStatus>
            </NavLink>
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
