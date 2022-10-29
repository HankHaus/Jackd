import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import {
  Header,
  WeightInputs,
  CalculateButton,
  WorkoutButton,
  BarbellAnimation,
  SettingsButton,
} from "./homeScreenComponents";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { getTheme } from "../src/actions";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const HomeScreen = ({ navigation, getTheme, selectedTheme }) => {
  const [barWeight, setBarWeight] = useState(0);
  const [desiredWeight, setDesiredWeight] = useState(0);
  const [perSide, setPerSide] = useState(0);
  const [fortyFives, setFortyFives] = useState(0);
  const [twentyFives, setwentyFives] = useState(0);
  const [tens, setTens] = useState(0);
  const [fives, setFives] = useState(0);
  const [twoAndAHalves, setTwoAndAHalves] = useState(0);
  const [runPlateAnimation, setRunPlateAnimation] = useState(false);

  const onChangeBarWeight = (value) => {
    setBarWeight(check(value));
  };
  const onChangeDesiredWeight = (value) => {
    setDesiredWeight(check(value));
  };

  const calc = (barWeight, desiredWeight) => {
    Keyboard.dismiss();
    const initialWeight = (desiredWeight -= barWeight);
    const perSide = initialWeight / 2;
    let totalWeightPerSide = initialWeight / 2;
    const numberOfFortyFivesPerSide = Math.floor(totalWeightPerSide / 45);
    setFortyFives(numberOfFortyFivesPerSide);
    const weightPerSideAfter45s = (totalWeightPerSide -=
      45 * numberOfFortyFivesPerSide);
    const numberOfTwentyFivesPerSide = Math.floor(weightPerSideAfter45s / 25);
    setwentyFives(numberOfTwentyFivesPerSide);
    const weightPerSideAfter25s = (totalWeightPerSide -=
      25 * numberOfTwentyFivesPerSide);
    const numberOfTensPerSide = Math.floor(weightPerSideAfter25s / 10);
    setTens(numberOfTensPerSide);
    const weightPerSideAfter10s = (totalWeightPerSide -=
      10 * numberOfTensPerSide);
    const numberOfFivesPerSide = Math.floor(weightPerSideAfter10s / 5);
    setFives(numberOfFivesPerSide);
    const weightPerSideAfter5s = (totalWeightPerSide -=
      5 * numberOfFivesPerSide);
    const numberOfTwoAndAHalvesPerSide = Math.floor(weightPerSideAfter5s / 2.5);
    setTwoAndAHalves(numberOfTwoAndAHalvesPerSide);
    setPerSide(perSide);
    setRunPlateAnimation(false);
    setTimeout(() => {
      setRunPlateAnimation(true);
    }, 301);
  };
  function check(x) {
    if (x === NaN) {
      return null;
    }
    return x;
  }
  const handleDarkMode = () => {
    getTheme({
      ...selectedTheme,
      BACKGROUND_BLEND_PRIMARY: ["#002B5B", "#0F3E72"],
      BEHIND_MODAL_BLEND_PRIMARY: ["#FF0000", "transparent"],
      BUTTON_BLEND_PRIMARY: ["#7B113A", "#A62E5D"],
      BUTTON_TEXT_PRIMARY: "#FFF8EA",
      SHADOW_PRIMARY: "#FFFFFF",
      MODAL_BACKGROUND_BLEND_PRIMARY: ["#C3FFCD", "#7B7A72"],
      GET_STARTED_BUTTON_BORDER_BLEND_PRIMARY: ["#000A3D", "#C3FFCD"],
      GET_STARTED_BUTTON_BLEND_PRIMARY: ["#2AFF4E", "#C3FFCD"],
      TEXT_PRIMARY: "#FFF8EA",
      OPTION_DOT_BORDER_INACTIVE_PRIMARY: "#C3FFCD",
      OPTION_DOT_INACTIVE_PRIMARY: "#C3FFCD",
      OPTION_DOT_BORDER_ACTIVE_PRIMARY: "#C800FF",
      OPTION_DOT_ACTIVE_PRIMARY: "#FF9D4C",
      SELECTED_OPTION_DOT_BLEND_PRIMARY: ["#000A3D", "#8C0718"],
      FORTY_FIVES_PLATE: "#AAFF00",
      TWENTY_FIVES_PLATE: "#8885A4",
      TENS_PLATE: "#B9B04D",
      FIVES_PLATE: "#41FF8F",
      TWO_AND_A_HALVES_PLATE: "#A76B6B",
      INPUT_BLEND_PRIMARY: ["#FFFFFF", "#E0E0E0"],
    });
  };
  const handleLightMode = () => {
    getTheme({
      ...selectedTheme,
      BACKGROUND_BLEND_PRIMARY: ["#A2D2FF", "#FEF9EF"],
      BEHIND_MODAL_BLEND_PRIMARY: ["#000000", "transparent"],
      BUTTON_BLEND_PRIMARY: ["#ff865e", "#FFA081"],
      BUTTON_TEXT_PRIMARY: "#34000E",
      SHADOW_PRIMARY: "#000000",
      MODAL_BACKGROUND_BLEND_PRIMARY: ["#6C464F", "#B891A9"],
      GET_STARTED_BUTTON_BORDER_BLEND_PRIMARY: ["#31CF0A", "#C7F0BD"],
      GET_STARTED_BUTTON_BLEND_PRIMARY: ["#24AB03", "#197502"],
      TEXT_PRIMARY: "#000000",
      OPTION_DOT_BORDER_INACTIVE_PRIMARY: "#76B486",
      OPTION_DOT_INACTIVE_PRIMARY: "#9EFFB7",
      OPTION_DOT_BORDER_ACTIVE_PRIMARY: "#FF00B7",
      OPTION_DOT_ACTIVE_PRIMARY: "#F8FF4C",
      SELECTED_OPTION_DOT_BLEND_PRIMARY: ["#FE96FF", "#FF0083"],
      FORTY_FIVES_PLATE: "#00FF46",
      TWENTY_FIVES_PLATE: "#1B00FF",
      TENS_PLATE: "#FFEC00",
      FIVES_PLATE: "#538668",
      TWO_AND_A_HALVES_PLATE: "#FF4141",
      INPUT_BLEND_PRIMARY: ["#FFFFFF", "#E0E0E0"],
    });
  };

  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={selectedTheme.BACKGROUND_BLEND_PRIMARY}
        start={[0.8, 0.9]}
        end={[1, 0.1]}
      >
        <Header />
        <WeightInputs
          onChangeBarWeight={onChangeBarWeight}
          onChangeDesiredWeight={onChangeDesiredWeight}
        />
        <SettingsButton navigation={navigation} />
        <CalculateButton
          onPress={calc}
          barWeight={barWeight}
          desiredWeight={desiredWeight}
          perSide={perSide}
        />

        {/* <PlatesPerSide
          perSide={perSide}
          fortyFives={fortyFives}
          twentyFives={twentyFives}
          tens={tens}
          fives={fives}
          twoAndAHalves={twoAndAHalves}
        /> */}
        <BarbellAnimation
          perSide={perSide}
          fortyFives={fortyFives}
          twentyFives={twentyFives}
          tens={tens}
          fives={fives}
          twoAndAHalves={twoAndAHalves}
          runPlateAnimation={runPlateAnimation}
        />
        {/* <View style={styles.textContainer}>
          <TouchableOpacity onPress={handleDarkMode}>
          <Text style={[styles.text, { color: selectedTheme.TEXT_PRIMARY }]}>
          dark
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLightMode}>
          <Text style={[styles.text, { color: selectedTheme.TEXT_PRIMARY }]}>
          light
          </Text>
          </TouchableOpacity>
        </View> */}
        <WorkoutButton navigation={navigation} />
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: -60,
    marginBottom: 60,
    width: "100%",
  },
  weightInputsContainer: {
    backgroundColor: "blue",
    width: "100%",
    marginTop: "-10%",
  },
  workoutButtonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignItems: "center",
  },
  barbellContainer: {
    position: "relative",
    top: 20,
    backgroundColor: "yellow",
  },
  textContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "green",
  },
  text: {
    fontSize: 20,
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(HomeScreen);
