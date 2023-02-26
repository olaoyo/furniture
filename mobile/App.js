import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import Search from "./src/components/inputs/search/Search.component";

import {
  SafeAreaiOS,
  SafeAreaAndroid,
} from "./src/components/utils/SafeArea.styles";

import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "./src/redux/store/store";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/themes/themes";

import StackNavigation from "./src/components/routes/stack/Stack.component";

import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!poppinsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor={theme.colors.primary} />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {Platform.OS === "android" ? <SafeAreaAndroid /> : <SafeAreaiOS />}
          <Search />
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    </>
  );
}
