import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../screens/auth/login/Login";
import Register from "../../screens/auth/register/Register"


const { Navigator, Screen } = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default AuthNavigator;
