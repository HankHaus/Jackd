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
import { GlossyButton } from "../../components/common";
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
        style={styles.buttonContainer}
        onPress={() => onPress(barWeight, desiredWeight, perSide)}
      >
        <GlossyButton
          height={50}
          width={"100%"}
          text="Calculate"
          colorOne={"#9FA4C4"}
          colorTwo={"#D7DBF3"}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "50%",
    marginTop: 50,
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "red",
  },
});

export default CalculateButton;
