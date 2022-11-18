import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  Animated,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { connect } from "react-redux";
import {
  getTheme,
  getMuscleGroups,
  getCurrentChestWorkout,
} from "../../src/actions";
import { Foundation, Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import chestExercises from "../../src/chestExercises";
import armExercises from "../../src/armExercises";
import backExercises from "../../src/backExercises";
import legExercises from "../../src/legExercises";
import GlossyButton from "../../components/common/GlossyButton";

const SPACING = 20;
const AVATAR_SIZE = 70;
const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
const ExercisePlanScreen = ({
  navigation,
  selectedTheme,
  muscleGroupsData,
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

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={selectedTheme.BACKGROUND_BLEND_PRIMARY}
        start={[0.8, 0.9]}
        end={[1, 0.1]}
      >
        <Animated.FlatList
          data={totalLifts}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          contentContainerStyle={{
            padding: SPACING,
            paddingTop: StatusBar.currentHeight || 42,
            paddingBottom: "20%",
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            const inputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2),
            ];
            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            });
            return (
              <Animated.View
                style={{
                  flexDirection: "row",
                  // padding: SPACING,
                  marginBottom: SPACING,
                  backgroundColor: "red",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 12,
                  elevation: 5,

                  borderRadius: 16,
                  transform: [{ scale }],
                }}
              >
                <LinearGradient
                  style={styles.card}
                  colors={["rgba(114, 195, 227, 1)", "rgba(0, 81, 153, 1)"]}
                >
                  <View
                    style={{
                      marginRight: SPACING / 2,
                      width: AVATAR_SIZE / 200,
                      height: AVATAR_SIZE,
                      borderRadius: AVATAR_SIZE,
                      backgroundColor: "transparent",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></View>
                  <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={[styles.name, { opacity: 0.8 }]}>
                      Sets: {item.sets}
                    </Text>
                  </View>
                </LinearGradient>
              </Animated.View>
            );
          }}
        />
        <LinearGradient
          colors={[
            "rgba(0, 0, 0, 1)",
            "rgba(145, 145, 145, 0.6)",
            "rgba(0, 0, 0, 1)",
          ]}
          start={[0.0, 0.0]}
          end={[0.0, 1]}
          locations={[0.0, 0.5, 1]}
          style={styles.bottomBlock}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.buttonContainer}
          >
            <GlossyButton
              height={"100%"}
              width={"80%"}
              text="Home"
              colors={selectedTheme.BUTTON_BLEND_PRIMARY}
            />
          </TouchableOpacity>
        </LinearGradient>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  buttonContainer: {
    width: "50%",
    alignSelf: "center",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomBlock: {
    height: "10%",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "black",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  card: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    borderRadius: 16,
    padding: SPACING,
  },
  name: {
    fontSize: SCREEN_WIDTH / 19,
    fontFamily: "Oswald_400Regular",
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
