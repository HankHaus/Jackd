import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getTheme, getMuscleGroups } from "../src/actions";
import { LinearGradient } from "expo-linear-gradient";

const ExercisePlan = ({ selectedTheme, muscleGroupsData, getMuscleGroups }) => {
  const chestExercises = [
    {
      name: "Bench Press",
    },
    {
      name: "Incline Bench Press",
    },
    {
      name: "Decline Bench Press",
    },
    {
      name: "Dumbbell Fly",
    },
  ];
  const armsExercises = [
    {
      name: "Bicep Curl",
    },
    {
      name: "Tricep Extension",
    },
    {
      name: "Hammer Curl",
    },
    {
      name: "Skull Crusher",
    },
  ];
  const backExercises = [
    {
      name: "Seated Row",
    },
    {
      name: "Lat Pulldown",
    },
    {
      name: "Deadlift",
    },
    {
      name: "Pullup",
    },
  ];
  const legEcercises = [
    {
      name: "Squat",
    },
    {
      name: "Leg Press",
    },
    {
      name: "Leg Extension",
    },
    {
      name: "Leg Curl",
    },
  ];

  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={selectedTheme.BACKGROUND_BLEND_PRIMARY}
        start={[0.8, 0.9]}
        end={[1, 0.1]}
      >
        <TouchableOpacity>
          <Text>im exercise plan screen</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
  muscleGroupsData: state.workoutCreator.muscleGroupsData,
});

export default connect(mapStateToProps, {
  getTheme,
  getMuscleGroups,
})(ExercisePlan);
