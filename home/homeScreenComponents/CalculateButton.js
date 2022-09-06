import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { colors } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
const { PRIMARY, SECONDARY, SHADOW, WHITE } = colors;

const CalculateButton = ({
  navigation,
  onPress,
  barWeight,
  desiredWeight,
  perSide,
}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.calculate}
        onPress={() => onPress(barWeight, desiredWeight, perSide)}
      >
        <LinearGradient
          style={styles.buttonFill}
          colors={["#FF7518", "#FF7518"]}
          start={[1, 0.8]}
          end={[1, 0.2]}
        >
          <Text style={styles.buttonText}>Calculate</Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  calculate: {
    width: "50%",
    marginTop: 50,
    alignSelf: "center",
    borderWidth: 1,
    height: 50,
    borderColor: WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: SHADOW,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 30,
    alignSelf: "center",
    color: WHITE,
    fontFamily: "Lobster_400Regular",
  },
  buttonFill: {
    justifyContent: "center",
    weight: "100%",
    height: "100%",
    borderRadius: 30,
  },
});

export default CalculateButton;
