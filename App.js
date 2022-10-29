import React, { useState, useEffect } from "react";
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
import HomeScreen from "./home/HomeScreen";
import { Lobster_400Regular } from "@expo-google-fonts/lobster";
import Navigator from "./routes/homeStack";
import {
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Lobster_400Regular,
    Oswald_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <DismissKeyboard>
        <View style={styles.container}>
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
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
