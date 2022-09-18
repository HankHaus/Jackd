import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants/theme";
const { WHITE } = colors;
const Header = ({ navigation, onPress }) => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Workout Creator</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subTitle}>
            Here you'll be able to get a custom workout plan for the day.
          </Text>
          <Text style={styles.subTitle}>Tap the circle to get started!</Text>
        </View>
        <TouchableOpacity style={styles.circleContainer} onPress={onPress}>
          <LinearGradient
            style={styles.getStartedButtonBorder}
            colors={["#00CCFF", "#00FFF6"]}
            start={[0.7, 0.9]}
            end={[1.2, 0.3]}
          >
            <LinearGradient
              style={styles.getStartedButton}
              colors={["#0100FF", "#0100FF"]}
              start={[0.8, 0.9]}
              end={[1, 0.1]}
            ></LinearGradient>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: "-10%",
    alignSelf: "center",
    justifyContent: "center",
  },
  title: {
    // fontFamily: "Lobster_400Regular",
    alignSelf: "center",
    fontSize: 50,
    color: WHITE,
  },
  subTitle: {
    textAlign: "center",
    fontSize: 20,
    color: WHITE,
  },
  subtitleContainer: {
    width: "100%",
    // backgroundColor: "red",
    marginTop: 15,
  },
  getStartedButtonBorder: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: WHITE,
    justifyContent: "center",
    alignItems: "center",
  },
  getStartedButton: {
    width: 190,
    height: 190,
    borderRadius: 200,
    backgroundColor: WHITE,
    justifyContent: "center",
    alignItems: "center",
  },
  circleContainer: {
    width: 190,
    height: 190,
    borderRadius: 210,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    marginTop: "35%",
  },
});

export default Header;
