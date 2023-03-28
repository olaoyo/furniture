import styled from "styled-components/native";

export const AuthBackground = styled.ImageBackground.attrs({
  source: require("./images/Shipping.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AuthCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AuthCard = styled.View`
  background-color: rgba(255, 255, 255, 0.65);
  width: 340px;
  height: 600px;
  border-radius: 20px;
`;

export const ShippingFormStyles = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
