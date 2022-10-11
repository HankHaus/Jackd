import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import {
  MuscleGroupsModal,
  SelectIntensityModal,
} from "./WorkoutCreatorModals";
import { colors } from "../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./WorkoutCreatorComponents/Header";
const { MILKY_WHITE, BACKGROUND } = colors;

const WorkoutCreatorScreen = ({ navigation }) => {
  const [muscleGroupsModal, setMuscleGroupsModal] = useState(false);
  const [selectIntensityModal, setSelectIntensityModal] = useState(false);
  const [chest1, setChest1] = useState(false);
  const [arms1, setArms1] = useState(false);
  const [back1, setBack1] = useState(false);
  const [legs1, setLegs1] = useState(false);
  const [chest5, setChest5] = useState(false);
  const [arms5, setArms5] = useState(false);
  const [back5, setBack5] = useState(false);
  const [legs5, setLegs5] = useState(false);
  const [chest10, setChest10] = useState(false);
  const [arms10, setArms10] = useState(false);
  const [back10, setBack10] = useState(false);
  const [legs10, setLegs10] = useState(false);
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
        colors={BACKGROUND}
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
            chest={chest}
            chest1={chest1}
            chest5={chest5}
            chest10={chest10}
            arms={arms}
            arms1={arms1}
            arms5={arms5}
            arms10={arms10}
            back={back}
            back1={back1}
            back5={back5}
            back10={back10}
            legs={legs}
            legs1={legs1}
            legs5={legs5}
            legs10={legs10}
            setArms1={() => {
              setArms1(!arms1);
              setArms5(false);
              setArms10(false);
            }}
            setArms5={() => {
              setArms1(false);
              setArms5(!arms5);
              setArms10(false);
            }}
            setArms10={() => {
              setArms1(false);
              setArms5(false);
              setArms10(!arms10);
            }}
            setChest1={() => {
              setChest1(!chest1);
              setChest5(false);
              setChest10(false);
            }}
            setChest5={() => {
              setChest1(false);
              setChest5(!chest5);
              setChest10(false);
            }}
            setChest10={() => {
              setChest1(false);
              setChest5(false);
              setChest10(!chest10);
            }}
            setBack1={() => {
              setBack1(!back1);
              setBack5(false);
              setBack10(false);
            }}
            setBack5={() => {
              setBack1(false);
              setBack5(!back5);
              setBack10(false);
            }}
            setBack10={() => {
              setBack1(false);
              setBack5(false);
              setBack10(!back10);
            }}
            setLegs1={() => {
              setLegs1(!legs1);
              setLegs5(false);
              setLegs10(false);
            }}
            setLegs5={() => {
              setLegs1(false);
              setLegs5(!legs5);
              setLegs10(false);
            }}
            setLegs10={() => {
              setLegs1(false);
              setLegs5(false);
              setLegs10(!legs10);
            }}
            onPressStartWorkouut={() => SetModalsCompleted(!modalsCompleted)}
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

export default WorkoutCreatorScreen;
