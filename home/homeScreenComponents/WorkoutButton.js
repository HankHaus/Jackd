import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { GlossyButton } from "../../components/common";
import { colors } from "../../constants/theme";
const { DARK_ORANGE, LIGHT_ORANGE } = colors;

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
          colorOne={DARK_ORANGE}
          colorTwo={LIGHT_ORANGE}
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
