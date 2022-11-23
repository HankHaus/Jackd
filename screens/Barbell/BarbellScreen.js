import React, { useState } from "react";
import { StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import {
  Header,
  WeightInputs,
  CalculateButton,
  BarbellAnimation,
  MenuButton,
  PerSideOrTotalToggle,
} from "./BarbellScreenComponents";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { getTheme } from "../../src/actions";

const BarbellScreen = ({ navigation, selectedTheme }) => {
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
    if (totalWeightPerSide % 2.5 === 0) {
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
      const numberOfTwoAndAHalvesPerSide = Math.floor(
        weightPerSideAfter5s / 2.5
      );
      setTwoAndAHalves(numberOfTwoAndAHalvesPerSide);
      setPerSide(perSide);
      setRunPlateAnimation(false);
      setTimeout(() => {
        setRunPlateAnimation(true);
      }, 301);
    } else {
      alert(
        "Please enter a weight that allows for even distribution of plates"
      );
    }
  };
  function check(x) {
    if (x === NaN) {
      return null;
    }
    return x;
  }

  return (
    <>
      <TouchableWithoutFeedback
        activeOpacity={1}
        onPress={() => Keyboard.dismiss()}
      >
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
          <MenuButton navigation={navigation} />
          <CalculateButton
            onPress={calc}
            barWeight={barWeight}
            desiredWeight={desiredWeight}
            perSide={perSide}
          />
          <PerSideOrTotalToggle />

          <BarbellAnimation
            perSide={perSide}
            fortyFives={fortyFives}
            twentyFives={twentyFives}
            tens={tens}
            fives={fives}
            twoAndAHalves={twoAndAHalves}
            runPlateAnimation={runPlateAnimation}
          />
        </LinearGradient>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(BarbellScreen);
