import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

import { SafeAreaiOS, SafeAreaAndroid } from "./src/components/utils/safeArea/SafeArea.styles";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store/store";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/themes/themes";

import RootNavigation from "./src/components/routes/root/RootNavigation.component";

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
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            {Platform.OS === "android" ? <SafeAreaAndroid /> : <SafeAreaiOS />}
            <RootNavigation />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

