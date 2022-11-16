import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import {
  MuscleGroupsModal,
  SelectIntensityModal,
} from "./WorkoutCreatorModals";
import { connect } from "react-redux";
import {
  getTheme,
  getMuscleGroups,
  getCurrentChestWorkout,
} from "../../src/actions";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./WorkoutCreatorComponents/Header";
import chestExercises from "../../src/chestExercises";
import armExercises from "../../src/armExercises";
import backExercises from "../../src/backExercises";
import legExercises from "../../src/legExercises";

const ExercisePlanScreen = ({
  navigation,
  selectedTheme,
  muscleGroupsData,
  getMuscleGroups,
  getCurrentChestWorkout,
  currentChestWorkout,
}) => {
  const [runChest, setRunChest] = useState(false);
  const [runArms, setRunArms] = useState(false);
  const [runBack, setRunBack] = useState(false);
  const [runLegs, setRunLegs] = useState(false);

  const [chestLifts, setChestLifts] = useState(chestExercises);
  const [armLifts, setArmLifts] = useState(armExercises);
  const [backLifts, setBackLifts] = useState(backExercises);
  const [legLifts, setLegLifts] = useState(legExercises);

  const [addedChestLifts, setAddedChestLifts] = useState([]);
  const [addedArmLifts, setAddedArmLifts] = useState([]);
  const [addedBackLifts, setAddedBackLifts] = useState([]);
  const [addedLegLifts, setAddedLegLifts] = useState([]);

  const [totalLifts, setTotalLifts] = useState([]);

  /////ADD LIFT FUNCTIONS/////
  const addOneChestLift = () => {
    const chestLift = chestLifts[Math.floor(Math.random() * chestLifts.length)];
    const filtered = chestLifts.filter((lift) => lift.name !== chestLift.name);
    setChestLifts(filtered);
    totalLifts.push(chestLift);
    addedChestLifts.push(chestLift);
  };

  const addOneArmLift = () => {
    const armLift = armLifts[Math.floor(Math.random() * armLifts.length)];
    const filtered = armLifts.filter((lift) => lift.name !== armLift.name);
    setArmLifts(filtered);
    totalLifts.push(armLift);
    addedArmLifts.push(armLift);
  };

  const addOneBackLift = () => {
    const backLift = backLifts[Math.floor(Math.random() * backLifts.length)];
    const filtered = backLifts.filter((lift) => lift.name !== backLift.name);
    setBackLifts(filtered);
    totalLifts.push(backLift);
    addedBackLifts.push(backLift);
  };

  const addOneLegLift = () => {
    const legLift = legLifts[Math.floor(Math.random() * legLifts.length)];
    const filtered = legLifts.filter((lift) => lift.name !== legLift.name);
    setLegLifts(filtered);
    totalLifts.push(legLift);
    addedLegLifts.push(legLift);
  };
  /////////////////////////////

  /////DECIDE HOW MANY TO ADD FOR EACH MUSCLE GROUP/////
  useEffect(() => {
    if (runChest) {
      if (muscleGroupsData.chestIntensity === 1) {
        if (addedChestLifts.length < 3) {
          addOneChestLift();
        }
      }
      if (muscleGroupsData.chestIntensity === 5) {
        if (addedChestLifts.length < 5) {
          addOneChestLift();
        }
      }
      if (muscleGroupsData.chestIntensity === 10) {
        if (addedChestLifts.length < 6) {
          addOneChestLift();
        }
      }
    } else {
      if (muscleGroupsData.chestIntensity === 1 || 5 || 10) {
        setRunChest(true);
      } else {
        setRunChest(false);
      }
    }
  }, [chestLifts]);

  useEffect(() => {
    if (runArms) {
      if (muscleGroupsData.armsIntensity === 1) {
        if (addedArmLifts.length < 3) {
          addOneArmLift();
        }
      }
      if (muscleGroupsData.armsIntensity === 5) {
        if (addedArmLifts.length < 5) {
          addOneArmLift();
        }
      }
      if (muscleGroupsData.armsIntensity === 10) {
        if (addedArmLifts.length < 6) {
          addOneArmLift();
        }
      }
    } else {
      setRunArms(true);
    }
  }, [armLifts]);

  useEffect(() => {
    if (runBack) {
      if (muscleGroupsData.backIntensity === 1) {
        if (addedBackLifts.length < 3) {
          addOneBackLift();
        }
      }
      if (muscleGroupsData.backIntensity === 5) {
        if (addedBackLifts.length < 5) {
          addOneBackLift();
        }
      }
      if (muscleGroupsData.backIntensity === 10) {
        if (addedBackLifts.length < 6) {
          addOneBackLift();
        }
      }
    } else {
      setRunBack(true);
    }
  }, [backLifts]);

  useEffect(() => {
    if (runLegs) {
      if (muscleGroupsData.legsIntensity === 1) {
        if (addedLegLifts.length < 3) {
          addOneLegLift();
        }
      }
      if (muscleGroupsData.legsIntensity === 5) {
        if (addedLegLifts.length < 5) {
          addOneLegLift();
        }
      }
      if (muscleGroupsData.legsIntensity === 10) {
        if (addedLegLifts.length < 6) {
          addOneLegLift();
        }
      }
    } else {
      setRunLegs(true);
    }
  }, [legLifts]);
  ////////////////////////////////////////////////////

  useEffect(() => {
    muscleGroupsData.chest ? addOneChestLift() : null;
    muscleGroupsData.arms ? addOneArmLift() : null;
    muscleGroupsData.back ? addOneBackLift() : null;
    muscleGroupsData.legs ? addOneLegLift() : null;
  }, []);
  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={selectedTheme.BACKGROUND_BLEND_PRIMARY}
        start={[0.8, 0.9]}
        end={[1, 0.1]}
      >
        <FlatList
          contentContainerStyle={{
            alignItems: "center",
            marginTop: "50%",
          }}
          data={totalLifts}
          keyExtractor={(lift) => lift.name}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
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
  currentChestWorkout: state.workoutCreator.currentChestWorkout,
});

export default connect(mapStateToProps, {
  getTheme,
  getMuscleGroups,
  getCurrentChestWorkout,
})(ExercisePlanScreen);
