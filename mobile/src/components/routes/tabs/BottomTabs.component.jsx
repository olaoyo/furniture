import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { theme } from "../../../themes/themes";

import { Ionicons } from "@expo/vector-icons";

import Home from "../../screens/home/Home.component";
import Furnitures from "../../screens/shop/Furnitures.component";
import Profile from "../../screens/profile/Profile.component";
import Cart from "../../screens/cart/Cart.component";

const { Navigator, Screen } = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Navigator
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.colors.primary },
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          let routeName = route.name;

          if (routeName === "Home") {
            icon = focused ? "home" : "home-outline";
          } else if (routeName === "Furniture") {
            icon = focused ? "bed" : "bed-outline";
          } else if (routeName === "Profile") {
            icon = focused ? "person" : "person-outline";
          } else if (routeName === "Cart") {
            icon = focused ? "cart" : "cart-outline"
          }

          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: theme.colors.black,
          tabBarInactiveTintColor: theme.colors.grey.one,
        }}
      />

      <Screen
        name="Furniture"
        component={Furnitures}
        options={{
          tabBarLabel: "Furniture",
          tabBarActiveTintColor: theme.colors.black,
          tabBarInactiveTintColor: theme.colors.grey.one,
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarActiveTintColor: theme.colors.black,
          tabBarInactiveTintColor: theme.colors.grey.one,
        }}
      />

      <Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Cart",
          tabBarLabel: "Cart",
          tabBarActiveTintColor: theme.colors.black,
          tabBarInactiveTintColor: theme.colors.grey.one,
        }}
      />
    </Navigator>
  );
}

export default BottomTabs;
