import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import React, { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/store";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Navigator from "./routes/homeStack";
import {
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { Lobster_400Regular } from "@expo-google-fonts/lobster";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       await Font.loadAsync({
  //         Oswald_200ExtraLight,
  //         Oswald_300Light,
  //         Oswald_400Regular,
  //         Oswald_500Medium,
  //         Oswald_600SemiBold,
  //         Oswald_700Bold,
  //         Lobster_400Regular,
  //       });
  //       //wait for fonts to load
  //  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);
  useEffect(() => {
    async function prepare() {
      // load fonts, wait for fonts to load and hide splash screen
      try {
        await Font.loadAsync({
          Oswald_200ExtraLight,
          Oswald_300Light,
          Oswald_400Regular,
          Oswald_500Medium,
          Oswald_600SemiBold,
          Oswald_700Bold,
          Lobster_400Regular,
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <DismissKeyboard>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <Navigator />
          <StatusBar style="auto" />
        </View>
      </DismissKeyboard>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
