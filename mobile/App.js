import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import Search from "./src/components/inputs/search/Search.component";

import { SafeAreaiOS, SafeAreaAndroid } from "./src/components/utils/SafeArea.styles";


import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/themes/themes";

import BottomTabs from "./src/components/routes/tabs/BottomTabs.component";

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor={theme.colors.primary} />
      <ThemeProvider theme={theme}>
        {Platform.OS === "android" ? <SafeAreaAndroid /> : <SafeAreaiOS />}
        <Search />
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
