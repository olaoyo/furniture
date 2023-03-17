import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Search from "../../inputs/search/Search.component";

import BottomTabs from "../tabs/BottomTabs.component";
import Details from "../../screens/details/Details";
import Checkout from "../../screens/chekout/Checkout";
import { theme } from "../../../themes/themes";

const { Navigator, Screen } = createNativeStackNavigator();

function AppNavigation() {
  return (
    <>
      <Search />
      <Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.primary },
          headerTintColor: theme.colors.black,
          contentStyle: { backgroundColor: theme.colors.secondary },
        }}
      >
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
      </Navigator>
    </>
  );
}

export default AppNavigation;
