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
  const [chest, setChest] = useState(false);
  const [arms, setArms] = useState(false);
  const [back, setBack] = useState(false);
  const [legs, setLegs] = useState(false);
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
          <MuscleGroupsModal
            onPressChest={() => setChest(!chest)}
            onPressArms={() => setArms(!arms)}
            onPressBack={() => setBack(!back)}
            onPressLegs={() => setLegs(!legs)}
            chest={chest}
            arms={arms}
            back={back}
            legs={legs}
            onPressNext={onPressNextMuscleGroupsModal}
          />
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
            setArms1={setArms1}
            setArms5={setArms5}
            setArms10={setArms10}
            setChest1={setChest1}
            setChest5={setChest5}
            setChest10={setChest10}
            setBack1={setBack1}
            setBack5={setBack5}
            setBack10={setBack10}
            setLegs1={setLegs1}
            setLegs5={setLegs5}
            setLegs10={setLegs10}
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
