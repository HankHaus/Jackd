import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { GlossyButton } from "../../components/common";
import { connect } from "react-redux";
import { getTheme, getMuscleGroups } from "../../src/actions";

const WorkoutButton = ({
  navigation,
  selectedTheme,
  muscleGroupsData,
  getMuscleGroups,
}) => {
  const handleWorkoutButtonPress = () => {
    getMuscleGroups({
      ...muscleGroupsData,
      chestIntensity: null,
      armsIntensity: null,
      backIntensity: null,
      legsIntensity: null,
      chest: false,
      arms: false,
      back: false,
      legs: false,
    });
    navigation.navigate("WorkoutCreator");
  };
  return (
    <>
      <TouchableOpacity
        style={styles.buttonShape}
        onPress={handleWorkoutButtonPress}
      >
        <GlossyButton
          width={"100%"}
          height={50}
          text="Workout Creator"
          colors={selectedTheme.BUTTON_BLEND_PRIMARY}
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

const mapStateToProps = (state) => ({
  muscleGroupsData: state.workoutCreator.muscleGroupsData,
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getMuscleGroups,
  getTheme,
})(WorkoutButton);
