import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "../tabs/BottomTabs.component";
import Details from "../../screens/details/Details";
import { theme } from "../../../themes/themes";

const { Navigator, Screen } = createNativeStackNavigator();

function StackNavigation() {
  return (
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
    </Navigator>
  );
}

export default StackNavigation;
