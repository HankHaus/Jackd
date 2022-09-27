import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const BarbellAnimation = ({
  perSide,
  fortyFives,
  twentyFives,
  tens,
  fives,
  twoAndAHalves,
}) => {
  return (
    <>
      <View style={styles.output}>
        <LinearGradient
          start={[0.0, 0.0]}
          end={[0.0, 1.0]}
          colors={["#000000", "#FFFFFF", "#000000", "#000000", "#c0c0c0"]}
          locations={[0.0, 0.2, 0.4, 0.6, 0.8]}
          style={styles.barbell}
        />
        <LinearGradient
          start={[0.0, 0.0]}
          end={[0.0, 1.0]}
          colors={["#000000", "#FFFFFF", "#000000", "#000000", "#c0c0c0"]}
          locations={[0.0, 0.3, 0.4, 0.6, 0.9]}
          style={styles.barbellStopper}
        ></LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  output: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
    height: 200,
  },
  barbell: {
    width: "75%",
    position: "absolute",
    left: 0,
    height: 25,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  barbellStopper: {
    width: 10,
    height: 40,
    marginLeft: "10%",
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
  },
});

export default BarbellAnimation;
