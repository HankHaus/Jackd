import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
const { PRIMARY, SECONDARY, SHADOW, WHITE } = colors;

const GlossyButton = ({ colorOne, colorTwo, width, height, text }) => {
  return (
    <>
      <View
        style={[styles.buttonShape, (width = { width }), (height = { height })]}
      >
        <LinearGradient
          style={styles.buttonFill}
          colors={[colorOne, colorTwo]}
          start={[0.0, 0.7]}
          end={[0.0, 1.0]}
        >
          <LinearGradient
            style={styles.buttonFillOverlay}
            colors={["rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.1)"]}
            start={[0.0, 0.0]}
            end={[0.0, 0.5]}
          ></LinearGradient>
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonShape: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: WHITE,
    borderRadius: 10,
    shadowColor: SHADOW,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 30,
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
    color: WHITE,
    fontFamily: "Lobster_400Regular",
  },
  buttonFill: {
    justifyContent: "center",
    weight: "100%",
    height: "100%",
    borderRadius: 8,
  },
  buttonFillOverlay: {
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "50%",
    borderRadius: 8,
  },
});

export default GlossyButton;
