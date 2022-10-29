import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
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
      <View style={styles.container}>
        <TouchableOpacity onPress={handleWorkoutButtonPress}>
          <GlossyButton
            width={"100%"}
            height={50}
            text="Workout Creator"
            colors={selectedTheme.BUTTON_BLEND_PRIMARY}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "75%",
    alignSelf: "center",
    position: "absolute",
    bottom: 50,
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
