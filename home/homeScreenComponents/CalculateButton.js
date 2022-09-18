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
          colors={["#FF7518", "#FF9A55"]}
          start={[0.2, 0.5]}
          locations={[0.8, 0.8]}
          end={[0.3, 0.1]}
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
    borderRadius: 10,

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
    borderRadius: 10,
  },
});

export default CalculateButton;
