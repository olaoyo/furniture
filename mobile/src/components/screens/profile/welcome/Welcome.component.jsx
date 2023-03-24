import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import {
  WelcomeStyles,
  UserNameLogout,
  UserName,
} from "./Welcome.styles";

import { AuthButton } from "../../../buttons/Buttons";

function Welcome({ user, logout }) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <WelcomeStyles>
      <UserNameLogout>
        <UserName>Hi👋🏼 {user.name}</UserName>
        <AuthButton icon="logout" border onPress={logoutHandler}>
          Logout
        </AuthButton>
      </UserNameLogout>
    </WelcomeStyles>
  );
}

export default Welcome;
