import { createNativeStackNavigator } from "@react-navigation/native-stack";


import AuthNavigation from "../auth/AuthNavigation.component";
import BottomTabs from "../tabs/BottomTabs.component";
import Details from "../../screens/details/Details";
import Checkout from "../../screens/chekout/Checkout";

import Account from "../../screens/profile/account/Account.component";
import Orders from "../../screens/profile/orders/Orders.component";

import { theme } from "../../../themes/themes";

const { Navigator, Screen } = createNativeStackNavigator();

function AppNavigation() {
  return (
    <>
      <Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.primary },
          headerTintColor: theme.colors.black,
          contentStyle: { backgroundColor: theme.colors.secondary },
        }}
      >
        <Screen
          name="Authentication"
          component={AuthNavigation}
          options={{
            headerShown: false,
          }}
        />

        <Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
        
        <Screen
          name="Details"
          component={Details}
          options={{
            title: "Furniture Details",
          }}
        />
        
        <Screen
          name="Checkout"
          component={Checkout}
          options={{
            title: "Checkout",
          }}
        />
        
        <Screen
          name="Account"
          component={Account}
          options={{
            title: "My Account",
          }}
        />
        
        <Screen
          name="Orders"
          component={Orders}
          options={{
            title: "My Orders",
          }}
        />
      </Navigator>
    </>
  );
}

export default AppNavigation;
