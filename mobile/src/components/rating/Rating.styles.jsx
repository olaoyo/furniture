import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const RatingStyles = styled.View`
  flex-direction: row;
`;

export const RatingStars = styled.View`
  flex: 1;
  padding-top: 10px;
`;

export const RatingIcon = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;
