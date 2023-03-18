import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Text, View } from "react-native";

import { logout } from "../../../redux/actions/userActions";

import { AuthButton } from "../../buttons/Buttons";

import formatNameAtPositionZero from "../../../utils/formatName[0]";

function Profile() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { navigate } = useNavigation();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const loginHandler = () => {
    navigate("Authentication", {
      screen: "Login"
    })
  }

  return (
    <View>
      {userInfo ? (
        <>
          <Text>{userInfo.name}</Text>
          <Text>{userInfo.surname}</Text>
          <AuthButton
            border
            icon="logout"
            mode="contained"
            onPress={logoutHandler}
          >
            Logout
          </AuthButton>
        </>
      ) : (
        <>
          <Text>Not Logged In</Text>
          <AuthButton
            border
            icon="login"
            mode="contained"
            onPress={loginHandler}
          >
            Login
          </AuthButton>
        </>
      )}
    </View>
  );
}

export default Profile;
