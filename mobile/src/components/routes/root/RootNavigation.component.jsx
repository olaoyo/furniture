import { useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import AppNavigation from "../app/AppNavigation.component";
import AuthNavigation from "../auth/AuthNavigation.component";

function RootNavigation() {
  const { userInfo } = useSelector((state) => state.userLogin);
  
  return (
    <NavigationContainer>
      {userInfo !== {} ? <AuthNavigation /> : <AppNavigation />}
    </NavigationContainer>
  );
}

export default RootNavigation;
