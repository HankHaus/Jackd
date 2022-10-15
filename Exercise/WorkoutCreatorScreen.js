import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  MuscleGroupsModal,
  SelectIntensityModal,
} from "./WorkoutCreatorModals";
import { connect } from "react-redux";
import { getTheme } from "../src/actions";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./WorkoutCreatorComponents/Header";

const WorkoutCreatorScreen = ({ themeData }) => {
  const [muscleGroupsModal, setMuscleGroupsModal] = useState(false);
  const [selectIntensityModal, setSelectIntensityModal] = useState(false);
  const [modalsCompleted, SetModalsCompleted] = useState(false);

  const toggleMuscleGroupsModal = () => {
    setMuscleGroupsModal(!muscleGroupsModal);
  };

  const onPressNextMuscleGroupsModal = () => {
    setMuscleGroupsModal(!muscleGroupsModal);
    setSelectIntensityModal(!selectIntensityModal);
  };

  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={themeData.BACKGROUND_BLEND_PRIMARY}
        start={[0.8, 0.9]}
        end={[1, 0.1]}
      >
        <View style={styles.headerContainer}>
          <Header onPress={toggleMuscleGroupsModal} />
        </View>
        {muscleGroupsModal && (
          <MuscleGroupsModal onPressNext={onPressNextMuscleGroupsModal} />
        )}
        {selectIntensityModal && (
          <SelectIntensityModal
            onPressStartWorkout={() => SetModalsCompleted(!modalsCompleted)}
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
  themeData: state.theme.themeData,
});

export default connect(mapStateToProps, {
  getTheme,
})(WorkoutCreatorScreen);
