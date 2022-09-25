import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlatesPerSide = ({
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
        {fortyFives !== 0 ? (
          <Text style={styles.plateText}>45s: {fortyFives}</Text>
        ) : (
          ""
        )}
        {twentyFives !== 0 ? (
          <Text style={styles.plateText}>25s: {twentyFives}</Text>
        ) : (
          ""
        )}
        {tens !== 0 ? <Text style={styles.plateText}>10s: {tens}</Text> : ""}
        {fives !== 0 ? <Text style={styles.plateText}>5s: {fives}</Text> : ""}
        {twoAndAHalves !== 0 ? (
          <Text style={styles.plateText}>2.5s: {twoAndAHalves}</Text>
        ) : (
          ""
        )}
        {perSide !== 0 ? (
          <Text style={styles.outputText}>
            total weight per side: {perSide}
          </Text>
        ) : (
          ""
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  perSide: {
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  perSideText: {
    fontSize: 30,
    alignSelf: "center",
  },
  output: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
    height: 200,
  },
  outputText: {
    fontFamily: "Oswald_400Regular",
    fontSize: 22,
    alignSelf: "center",
  },
  plateText: {
    fontSize: 25,
    fontFamily: "Oswald_400Regular",
    alignSelf: "center",
  },
});

export default PlatesPerSide;
