import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  MuscleGroupsModal,
  SelectIntensityModal,
} from "./WorkoutCreatorModals";
import { connect } from "react-redux";
import { getTheme, getMuscleGroups } from "../src/actions";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./WorkoutCreatorComponents/Header";

const WorkoutCreatorScreen = ({
  navigation,
  selectedTheme,
  muscleGroupsData,
  getMuscleGroups,
}) => {
  const [muscleGroupsModal, setMuscleGroupsModal] = useState(false);
  const [selectIntensityModal, setSelectIntensityModal] = useState(false);
  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState([]);

  const handleAddOrRemoveMuscleGroupFromSelctedMuscleGroups = (muscleGroup) => {
    if (selectedMuscleGroups.includes(muscleGroup)) {
      selectedMuscleGroups.splice(selectedMuscleGroups.indexOf(muscleGroup), 1);
    } else {
      selectedMuscleGroups.push(muscleGroup);
    }
  };
  const handleStartWorkout = () => {
    navigation.navigate("ExercisePlan");
  };

  const toggleMuscleGroupsModal = () => {
    setMuscleGroupsModal(!muscleGroupsModal);
  };

  const onPressNextMuscleGroupsModal = () => {
    setMuscleGroupsModal(!muscleGroupsModal);
    setSelectIntensityModal(!selectIntensityModal);
  };
  const handleSelectChest = () => {
    getMuscleGroups({
      ...muscleGroupsData,
      chest: !muscleGroupsData.chest,
    });
    handleAddOrRemoveMuscleGroupFromSelctedMuscleGroups("Chest");
  };

  const handleSelectArms = () => {
    getMuscleGroups({
      ...muscleGroupsData,
      arms: !muscleGroupsData.arms,
    });
    handleAddOrRemoveMuscleGroupFromSelctedMuscleGroups("Arms");
  };

  const handleSelectBack = () => {
    getMuscleGroups({
      ...muscleGroupsData,
      back: !muscleGroupsData.back,
    });
    handleAddOrRemoveMuscleGroupFromSelctedMuscleGroups("Back");
  };
  const handleSelectLegs = () => {
    getMuscleGroups({
      ...muscleGroupsData,
      legs: !muscleGroupsData.legs,
    });
    handleAddOrRemoveMuscleGroupFromSelctedMuscleGroups("Legs");
  };
  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={selectedTheme.BACKGROUND_BLEND_PRIMARY}
        start={[0.8, 0.9]}
        end={[1, 0.1]}
      >
        <View style={styles.headerContainer}>
          <Header onPress={toggleMuscleGroupsModal} />
        </View>
        {muscleGroupsModal && (
          <MuscleGroupsModal
            onPressNext={onPressNextMuscleGroupsModal}
            selectedMuscleGroups={selectedMuscleGroups}
            handleSelectChest={handleSelectChest}
            handleSelectArms={handleSelectArms}
            handleSelectBack={handleSelectBack}
            handleSelectLegs={handleSelectLegs}
          />
        )}
        {selectIntensityModal && (
          <SelectIntensityModal
            selectedMuscleGroups={selectedMuscleGroups}
            onPressStartWorkout={handleStartWorkout}
          />
        )}
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
  headerContainer: {
    width: "100%",
    position: "absolute",
    top: "15%",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
  muscleGroupsData: state.workoutCreator.muscleGroupsData,
});

export default connect(mapStateToProps, {
  getTheme,
  getMuscleGroups,
})(WorkoutCreatorScreen);
