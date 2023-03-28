import { useLayoutEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";

import { saveShippingDetails } from "../../../../redux/actions/cartActions";

import { ActivityIndicator } from "react-native";
import Message from "../../../message/Message.component";

import { AuthButton } from "../../../buttons/Buttons";

import {
  AuthBackground,
  AuthCover,
  AuthCard,
  ShippingFormStyles,
} from "./ShippingForm.styles";

import {
  Form,
  TextInfo,
  InputCard,
  AuthInputGrid,
  AuthInput,
  ErrorContainer,
  LoginAndRegister,
} from "../../../inputs/formInputs/FormInputs.styles";

import Spacer from "../../../utils/spacer/Spacer.styles";

function ShippingForm() {
  const dispatch = useDispatch();

  const { loading, userInfo } = useSelector((state) => state.userLogin);

  const { shippingDetails } = useSelector((state) => state.cart);

  const { navigate } = useNavigation();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState(shippingDetails.address);
  const [city, setCity] = useState(shippingDetails.city);
  const [postalCode, setPostalCode] = useState(shippingDetails.postalCode);
  const [country, setCountry] = useState(shippingDetails.country);
  const [message, setMessage] = useState("");


  useLayoutEffect(() => {
    if (!userInfo) {
      navigate("Login");
    }

    if (shippingDetails.name && shippingDetails.surname) {
      setName(shippingDetails.name);
      setSurname(shippingDetails.surname);
    } else {
      setName(userInfo.name);
      setSurname(userInfo.surname);
    }
  }, [dispatch, navigate, shippingDetails, userInfo]);

  const continueHandler = () => {
    if (name === "") {
      setMessage("Invalid name. Please check the form and try again");
      return;
    }

    if (surname === "") {
      setMessage("Invalid surname. Please check the form and try again");
      return;
    }

    if (address === "" || undefined) {
      setMessage("Invalid address. Please check the form and try again");
      return;
    }

    if (city === "" || undefined) {
      setMessage("Invalid city. Please check the form and try again");
      return;
    }

    if (postalCode === "" || undefined) {
      setMessage("Invalid postal code. Please check the form and try again");
      return;
    }

    if (country === "" || undefined) {
      setMessage("Invalid country. Please check the form and try again");
      return;
    } 
    
    else {
      dispatch(
        saveShippingDetails({ name, surname, address, city, postalCode, country })
      );

      navigate("Payment", {
        name: shippingDetails.name,
        surname: shippingDetails.surname,
        address: shippingDetails.address,
        city: shippingDetails.city,
        postalCode: shippingDetails.postalCode,
        country: shippingDetails.country,
      });
    }
  };

  return (
    <>
      <AuthBackground>
        <AuthCover />
        <AuthCard>
          <ShippingFormStyles>
            <Form>
              <InputCard>
                {message.length ? (
                  <>
                    <TextInfo header>Shipping Details</TextInfo>

                    <Spacer verticalOne />

                    <AuthInputGrid>
                      <AuthInput
                        errorMedium
                        label="Name"
                        value={name}
                        placeholder="Your first name"
                        textContextType="text"
                        keyboardType="text"
                        autoCapitalize
                        onChangeText={(name) => setName(name)}
                      />

                      <AuthInput
                        errorMedium
                        label="Surname"
                        value={surname}
                        placeholder="Your last name"
                        textContextType="text"
                        keyboardType="text"
                        autoCapitalize
                        onChangeText={(surname) => setSurname(surname)}
                      />
                    </AuthInputGrid>

                    <Spacer verticalOne />

                    <AuthInput
                      error
                      label="Address"
                      value={address ? address : ""}
                      placeholder="Please add your address"
                      textContextType="emailAddress"
                      keyboardType="text"
                      autoCapitalize
                      onChangeText={(address) => setAddress(address)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      error
                      label="City"
                      value={city ? city : ""}
                      placeholder="Whats your city"
                      textContextType="text"
                      keyboardType="text"
                      autoCapitalize
                      onChangeText={(city) => setCity(city)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      error
                      label="Postal Code"
                      value={postalCode ? postalCode : ""}
                      placeholder="Whats your postal code"
                      textContextType="text"
                      keyboardType="text"
                      autoCapitalize
                      onChangeText={(postalCode) => setPostalCode(postalCode)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      error
                      label="Country"
                      value={country ? country : ""}
                      placeholder="Whats your country"
                      textContextType="text"
                      keyboardType="text"
                      autoCapitalize
                      onChangeText={(country) => setCountry(country)}
                    />

                    <Spacer verticalOne />

                    <LoginAndRegister>
                      <AuthButton
                        border
                        icon="arrow-right-bold-outline"
                        mode="contained"
                        onPress={continueHandler}
                      >
                        Continue
                      </AuthButton>
                    </LoginAndRegister>
                    {message.length && (
                      <ErrorContainer>
                        <TextInfo error>{message}</TextInfo>
                      </ErrorContainer>
                    )}
                  </>
                ) : loading ? (
                  <>
                    <ActivityIndicator size="large" />

                    <Message>Loading...</Message>
                  </>
                ) : (
                  <>
                    <TextInfo header>Shipping Details</TextInfo>

                    <Spacer verticalOne />

                    <AuthInputGrid>
                      <AuthInput
                        medium
                        label="Name"
                        value={name}
                        placeholder="Your first name"
                        textContextType="text"
                        keyboardType="text"
                        autoCapitalize
                        onChangeText={(name) => setName(name)}
                      />

                      <AuthInput
                        medium
                        label="Surname"
                        value={surname}
                        placeholder="Your last name"
                        textContextType="text"
                        keyboardType="text"
                        autoCapitalize
                        onChangeText={(surname) => setSurname(surname)}
                      />
                    </AuthInputGrid>

                    <Spacer verticalOne />

                    <AuthInput
                      label="Address"
                      value={address ? address : ""}
                      placeholder="Please add your address"
                      textContextType="text"
                      keyboardType="text"
                      autoCapitalize
                      onChangeText={(address) => setAddress(address)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      label="City"
                      value={city ? city : ""}
                      placeholder="Whats your city"
                      textContextType="text"
                      keyboardType="text"
                      autoCapitalize
                      onChangeText={(city) => setCity(city)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      label="Postal Code"
                      value={postalCode ? postalCode : ""}
                      placeholder="Whats your postal code"
                      textContextType="text"
                      keyboardType="text"
                      autoCapitalize
                      onChangeText={(postalCode) => setPostalCode(postalCode)}
                    />

                    <Spacer verticalOne />

                    <AuthInput
                      label="Country"
                      value={country ? country : ""}
                      placeholder="Whats your country"
                      textContextType="text"
                      keyboardType="text"
                      autoCapitalize
                      onChangeText={(country) => setCountry(country)}
                    />

                    <Spacer verticalOne />

                    <LoginAndRegister>
                      <AuthButton
                        border
                        icon="arrow-right-bold-outline"
                        mode="contained"
                        onPress={continueHandler}
                      >
                        Continue
                      </AuthButton>
                    </LoginAndRegister>
                  </>
                )}

                <Spacer verticalOne />
              </InputCard>
            </Form>
          </ShippingFormStyles>
        </AuthCard>
      </AuthBackground>
    </>
  );
}

export default ShippingForm;
