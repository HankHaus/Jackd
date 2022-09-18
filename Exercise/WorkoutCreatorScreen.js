import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { MuscleGroupsModal } from "./WorkoutCreatorModals";
import { colors } from "../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./WorkoutCreatorComponents/Header";
const { MILKY_WHITE, BACKGROUND } = colors;

const WorkoutCreatorScreen = ({ navigation }) => {
  const [muscleGroupsModal, setMuscleGroupsModal] = useState(false);
  const toggleMuscleGroupsModal = () => {
    setMuscleGroupsModal(!muscleGroupsModal);
    console.log("toggleMuscleGroupsModal");
  };
  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={BACKGROUND}
        // colors={["#63666A", "#63666A"]}
        start={[0.8, 0.9]}
        end={[1, 0.1]}
      >
        <View style={styles.headerContainer}>
          <Header onPress={toggleMuscleGroupsModal} />
        </View>
        {/* <Text>I'm Exercises screen</Text> */}
        {muscleGroupsModal && <MuscleGroupsModal />}
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    // backgroundColor: MILKY_WHITE,
  },
  headerContainer: {
    width: "100%",
    position: "absolute",
    top: "15%",
  },
});

export default WorkoutCreatorScreen;
