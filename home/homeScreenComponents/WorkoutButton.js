import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { GlossyButton } from "../../components/common";
import { colors } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
const { PRIMARY, SECONDARY, SHADOW, BLACK, WHITE } = colors;

const WorkoutButton = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.buttonShape}
        onPress={() => {
          navigation.navigate("WorkoutCreator");
        }}
      >
        <GlossyButton
          width={"100%"}
          height={50}
          text="Workout Creator"
          colorOne={"#9FA4C4"}
          colorTwo={"#D7DBF3"}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonShape: {
    width: "75%",
    alignSelf: "center",
    borderRadius: 10,
  },
});

export default WorkoutButton;
