import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { saveShippingDetails } from "../../../../redux/actions/cartActions";

import { ShippingFormStyles, ShippingDetails } from "./ShippingForm.styles";

import {
  Form,
  Header,
  LabelAndInput,
  Label,
  MediumInputGrid,
  Input,
  LoginAndRegister,
} from "../../../inputs/formInputs/FormInputs.styles";

import { AddToCartButton as ContinueButton } from "../../../buttons/Buttons";

import { routeURL } from "../../../../api/api";

function ShippingForm() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { user } = useSelector((state) => state.userProfile);

  const { shippingDetails } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState(shippingDetails.address);
  const [city, setCity] = useState(shippingDetails.city);
  const [postalCode, setPostalCode] = useState(shippingDetails.postalCode);
  const [country, setCountry] = useState(shippingDetails.country);

  useEffect(() => {
    if (!userInfo) {
      navigate(routeURL.auth.login);
    }
    if (shippingDetails.name && shippingDetails.surname) {
      setName(shippingDetails.name);
      setSurname(shippingDetails.surname);
      
    } else {
      setName(userInfo.name);
      setSurname(userInfo.surname);
    }
  }, [dispatch, navigate, shippingDetails, userInfo, user]);

  const continueHandler = (event) => {
    event.preventDefault();

    dispatch(
      saveShippingDetails({ name, surname, address, city, postalCode, country })
    );
    navigate(routeURL.payment);
  };

  return (
    <ShippingFormStyles>
      <ShippingDetails>
        <Form onSubmit={continueHandler}>
          <Header>Shipping Details</Header>
          <MediumInputGrid>
            <LabelAndInput gridStart>
              <Label>First Name</Label>
              <Input
                medium
                type="text"
                placeholder="Your first name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                id="name"
                required
              />
            </LabelAndInput>
            <LabelAndInput gridEnd>
              <Label>Last Name</Label>
              <Input
                medium
                type="text"
                placeholder="Your last name"
                value={surname}
                onChange={(event) => setSurname(event.target.value)}
                id="surname"
                required
              />
            </LabelAndInput>
          </MediumInputGrid>

          <LabelAndInput>
            <Label>Address</Label>
            <Input
              type="text"
              placeholder="Please add your address"
              value={address ? address : ""}
              onChange={(event) => setAddress(event.target.value)}
              id="address"
              required
            />
          </LabelAndInput>

          <LabelAndInput>
            <Label>City</Label>
            <Input
              type="text"
              placeholder="Whats your city"
              value={city ? city : ""}
              onChange={(event) => setCity(event.target.value)}
              id="city"
              required
            />
          </LabelAndInput>

          <LabelAndInput>
            <Label>Postal Code</Label>
            <Input
              type="text"
              placeholder="Whats your postal code"
              value={postalCode ? postalCode : ""}
              onChange={(event) => setPostalCode(event.target.value)}
              id="postalCode"
              required
            />
          </LabelAndInput>

          <LabelAndInput>
            <Label>Country</Label>
            <Input
              type="text"
              placeholder="Whats your country"
              value={country ? country : ""}
              onChange={(event) => setCountry(event.target.value)}
              id="country"
              required
            />
          </LabelAndInput>

          <LoginAndRegister>
            <ContinueButton type="submit">Continue</ContinueButton>
          </LoginAndRegister>
        </Form>
      </ShippingDetails>
    </ShippingFormStyles>
  );
}

export default ShippingForm;
