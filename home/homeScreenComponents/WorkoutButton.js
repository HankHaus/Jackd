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
        <LinearGradient
          style={styles.buttonFill}
          colors={["#00FF02", "#7BFF7D"]}
          start={[0.2, 0.5]}
          locations={[0.8, 0.8]}
          end={[0.3, 0.1]}
        >
          <Text style={styles.buttonText}>I want to workout</Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonShape: {
    width: "75%",
    alignSelf: "center",
    borderWidth: 1,
    height: 60,
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
    color: BLACK,
  },
  buttonFill: {
    justifyContent: "center",
    weight: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default WorkoutButton;
