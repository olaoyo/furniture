import { useLayoutEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Welcome from "./welcome/Welcome.component";
import ProfileButtons from "./profileButtons/ProfileButtons.component";

import { getUserProfile, logout } from "../../../redux/actions/userActions";

import Message from "../../message/Message.component";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../../../themes/themes";
import { PressLogin } from "./welcome/Welcome.styles";

function Profile({ navigation }) {

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userProfile);

  // Check if user is logged in
  const { userInfo } = useSelector((state) => state.userLogin);

  // Check if updateProfile returned success and  re-rendender for useEffect
  const { success } = useSelector((state) => state.userProfileUpdate);

  useLayoutEffect(() => {
    if (!userInfo) {

      navigation.navigate("Login");

    } else {
      
      if (!user || !user.name || success) {
        dispatch(getUserProfile("profile"))
      }
    }
  }, [dispatch, navigation, success, user, userInfo])

  const loginHandler = () => {
    navigation.navigate("Login");
  };

  return (
    <>
    {/* userInfo used in place of user because userInfo comes from AsyncStorage while user comes from the db and requires component refreshing to be invoked */}

    {/* && user is included to avoid an empty user object pushed to <Welcome user={user} />. If the user is logged out, it invokes an error instead of the else statement below */}
      {userInfo && user ? (
        <>
          <Welcome user={user} logout={logout} />
          <ProfileButtons user={user} />
        </>
      ) : (
        <>
          <Message>Please press the Login icon below</Message>
          <Message>
            <PressLogin onPress={loginHandler} activeOpacity={0.5}>
              <Entypo name="login" size={150} color={theme.colors.grey.one} />
            </PressLogin>
          </Message>
        </>
      )}
    </>
  );
}

export default Profile;
