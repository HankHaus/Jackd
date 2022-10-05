import React from "react";
import { View, StyleSheet, Text } from "react-native";
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
        {/* <View style={styles.output}> */}
        {fortyFives !== 0 ? (
          // <Text style={styles.plateText}>45s: {fortyFives}</Text>
          <View style={styles.fortyFivesBlock}></View>
        ) : (
          ""
        )}
        {twentyFives !== 0 ? (
          // <Text style={styles.plateText}>25s: {twentyFives}</Text>
          <View style={styles.twentyFivesBlock}></View>
        ) : (
          ""
        )}
        {tens !== 0 ? (
          // <Text style={styles.plateText}>10s: {tens}</Text>
          <View style={styles.tensBlock}></View>
        ) : (
          ""
        )}
        {fives !== 0 ? (
          // <Text style={styles.plateText}>5s: {fives}</Text>
          <View style={styles.fivesBlock}></View>
        ) : (
          ""
        )}
        {twoAndAHalves !== 0 ? (
          // <Text style={styles.plateText}>2.5s: {twoAndAHalves}</Text>
          <View style={styles.twoAndAHalvesBlock}></View>
        ) : (
          ""
        )}
        {/* {perSide !== 0 ? (
        <Text style={styles.outputText}>total weight per side: {perSide}</Text>
        ) : (
          ""
        )} */}
        {/* </View> */}
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
    flexDirection: "row",
    paddingTop: 100,
  },
  barbell: {
    width: "75%",
    height: 25,
    marginLeft: -70,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  barbellStopper: {
    width: 10,
    height: 40,
    borderTopLeftRadius: 3,
    position: "absolute",
    left: 40,
    top: 93,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
  },
  fortyFivesBlock: {
    width: 50,
    height: 180,
    backgroundColor: "red",
    marginTop: -80,
    borderRadius: 10,
    marginLeft: -100,
  },
  twentyFivesBlock: {
    width: 45,
    height: 150,
    backgroundColor: "blue",
    marginTop: -65,
    borderRadius: 10,
  },
  tensBlock: {
    width: 35,
    height: 120,
    backgroundColor: "yellow",
    marginTop: -50,
    borderRadius: 10,
  },
  fivesBlock: {
    width: 35,
    height: 100,
    backgroundColor: "green",
    marginTop: -40,
    borderRadius: 10,
  },
  twoAndAHalvesBlock: {
    width: 35,
    height: 80,
    backgroundColor: "pink",
    marginTop: -30,
    borderRadius: 10,
  },
});

export default BarbellAnimation;
