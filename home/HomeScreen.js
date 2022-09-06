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
  Header,
  WeightInputs,
  CalculateButton,
  PlatesPerSide,
} from "./homeScreenComponents";
import { colors } from "../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
const { MILKY_WHITE, BACKGROUND } = colors;

const HomeScreen = ({ navigation }) => {
  const [barWeight, setBarWeight] = useState(0);
  const [desiredWeight, setDesiredWeight] = useState(0);
  const [perSide, setPerSide] = useState(0);
  const [fortyFives, setFortyFives] = useState(0);
  const [twentyFives, setwentyFives] = useState(0);
  const [tens, setTens] = useState(0);
  const [fives, setFives] = useState(0);
  const [twoAndAHalves, setTwoAndAHalves] = useState(0);

  const onChangeBarWeight = (value) => {
    setBarWeight(check(value));
  };
  const onChangeDesiredWeight = (value) => {
    setDesiredWeight(check(value));
  };

  const calc = (barWeight, desiredWeight) => {
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
  };
  function check(x) {
    if (x === NaN) {
      return null;
    }
    return x;
  }
  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={BACKGROUND}
        // colors={["#63666A", "#63666A"]}
        start={[0.8, 0.9]}
        end={[1, 0.1]}
      >
        <Header />
        <WeightInputs
          onChangeBarWeight={onChangeBarWeight}
          onChangeDesiredWeight={onChangeDesiredWeight}
        />
        <CalculateButton
          onPress={calc}
          barWeight={barWeight}
          desiredWeight={desiredWeight}
          perSide={perSide}
        />
        <PlatesPerSide
          perSide={perSide}
          fortyFives={fortyFives}
          twentyFives={twentyFives}
          tens={tens}
          fives={fives}
          twoAndAHalves={twoAndAHalves}
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
    // backgroundColor: MILKY_WHITE,
  },
});

export default HomeScreen;
