import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Account from "../../screens/profile/account/Account.component";
import Orders from "../../screens/profile/orders/Orders.component";

function ProfileNavigation() {
  const { Navigator, Screen } = createNativeStackNavigator;

  return (
    <Navigator>
      <Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />

      <Screen
        name="Orders"
        component={Orders}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default ProfileNavigation;
