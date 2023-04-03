import {
  ShippingDetailsStyles,
  DetailsGrid,
  ShippingInfo,
} from "./ShippingDetails.styles";

import { TextInfo } from "../../../inputs/formInputs/FormInputs.styles";

import Center from "../../../utils/center/CenterItems.styles";

import Spacer from "../../../utils/spacer/Spacer.styles";

function ShippingDetails({
  shippingDetails: { address, postalCode, city, country },
  paymentMethod,
}) {
    
  return (
    <ShippingDetailsStyles>
      <Spacer verticalTwo />

      <Center>
        <TextInfo header>Shipping Details</TextInfo>
      </Center>

      <Spacer verticalTwo />

      <DetailsGrid>
        <ShippingInfo>Street:</ShippingInfo>
        <ShippingInfo>{address}</ShippingInfo>
      </DetailsGrid>

      <Spacer verticalTwo />

      <DetailsGrid>
        <ShippingInfo>Postal Code:</ShippingInfo>
        <ShippingInfo>{postalCode}</ShippingInfo>
      </DetailsGrid>

      <Spacer verticalTwo />

      <DetailsGrid>
        <ShippingInfo>City:</ShippingInfo>
        <ShippingInfo>{city}</ShippingInfo>
      </DetailsGrid>

      <Spacer verticalTwo />

      <DetailsGrid>
        <ShippingInfo>Country:</ShippingInfo>
        <ShippingInfo>{country}</ShippingInfo>
      </DetailsGrid>

      <Spacer verticalTwo />

      <DetailsGrid>
        <ShippingInfo>Payment Method:</ShippingInfo>
        <ShippingInfo>{paymentMethod}</ShippingInfo>
      </DetailsGrid>

      <Spacer verticalTwo />

      <Spacer verticalTwo />
    </ShippingDetailsStyles>
  );
}

export default ShippingDetails;
