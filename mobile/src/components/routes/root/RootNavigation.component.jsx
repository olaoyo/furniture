// import { useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import AppNavigation from "../app/AppNavigation.component";

function RootNavigation() {
  
  return (
    <NavigationContainer>
       <AppNavigation />
    </NavigationContainer>
  );
}

export default RootNavigation;
