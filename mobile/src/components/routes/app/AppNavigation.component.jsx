import { createNativeStackNavigator } from "@react-navigation/native-stack";


import AuthNavigation from "../auth/AuthNavigation.component";
import BottomTabs from "../tabs/BottomTabs.component";
import Details from "../../screens/details/Details";
import Shipping from "../../screens/shipping/Shipping";
import Payment from "../../screens/payment/Payment";
import PlaceOrder from "../../screens/placeOrder/PlaceOrder";
import OrderDetails from "../../screens/orderDetails/OrderDetails";

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
          name="Shipping"
          component={Shipping}
          options={{
            title: "Shipping",
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
        
        <Screen
          name="Payment"
          component={Payment}
          options={{
            title: "Payment",
          }}
        />
        
        <Screen
          name="Place Order"
          component={PlaceOrder}
          options={{
            title: "Place Order",
          }}
        />
        
        <Screen
          name="Order Details"
          component={OrderDetails}
          options={{
            title: "Order Details",
          }}
        />
      </Navigator>
    </>
  );
}

export default AppNavigation;
