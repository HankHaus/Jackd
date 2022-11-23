import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { getTheme, getBarbellToggleStatus } from "../../../src/actions";

const BarbellAnimation = ({
  fortyFives,
  twentyFives,
  tens,
  fives,
  twoAndAHalves,
  runPlateAnimation,
  barbellToggleSelection,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (runPlateAnimation) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
    }
  }, [runPlateAnimation]);

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
        <View style={styles.platesStopperWrap}>
          <LinearGradient
            start={[0.0, 0.0]}
            end={[0.0, 1.0]}
            colors={["#000000", "#FFFFFF", "#000000", "#000000", "#c0c0c0"]}
            locations={[0.0, 0.3, 0.4, 0.6, 0.9]}
            style={styles.barbellStopper}
          ></LinearGradient>
          {fortyFives !== 0 ? (
            <Animated.View
              style={[styles.fortyFivesBlock, { opacity: opacity }]}
            >
              <LinearGradient
                style={styles.gradientFIll}
                start={[0.0, 0.0]}
                end={[0.0, 1.0]}
                colors={["#e0aa3e", "#f9f295", "#b88a44", "#EACE7A"]}
                locations={[0.0, 0.1, 0.3, 0.9]}
              >
                <Text style={styles.plateText}>45lb</Text>
                <Text style={styles.numberOfPlates}>
                  {barbellToggleSelection.perSide ? fortyFives : fortyFives * 2}
                </Text>
              </LinearGradient>
            </Animated.View>
          ) : (
            ""
          )}
          {twentyFives !== 0 ? (
            <Animated.View
              style={[styles.twentyFivesBlock, { opacity: opacity }]}
            >
              <LinearGradient
                style={styles.gradientFIll}
                start={[0.0, 0.0]}
                end={[0.0, 1.0]}
                colors={["#e0aa3e", "#f9f295", "#b88a44", "#EACE7A"]}
                locations={[0.0, 0.1, 0.3, 0.9]}
              >
                <Text style={styles.plateText}>25lb</Text>
                <Text style={styles.numberOfPlates}>
                  {barbellToggleSelection.perSide
                    ? twentyFives
                    : twentyFives * 2}
                </Text>
              </LinearGradient>
            </Animated.View>
          ) : (
            ""
          )}
          {tens !== 0 ? (
            <Animated.View style={[styles.tensBlock, { opacity: opacity }]}>
              <LinearGradient
                style={styles.gradientFIll}
                start={[0.0, 0.0]}
                end={[0.0, 1.0]}
                colors={["#e0aa3e", "#f9f295", "#b88a44", "#EACE7A"]}
                locations={[0.0, 0.1, 0.3, 0.9]}
              >
                <Text style={styles.plateText}>10lb</Text>
                <Text style={styles.numberOfPlates}>
                  {barbellToggleSelection.perSide ? tens : tens * 2}
                </Text>
              </LinearGradient>
            </Animated.View>
          ) : (
            ""
          )}
          {fives !== 0 ? (
            <Animated.View style={[styles.fivesBlock, { opacity: opacity }]}>
              <LinearGradient
                style={styles.gradientFIll}
                start={[0.0, 0.0]}
                end={[0.0, 1.0]}
                colors={["#e0aa3e", "#f9f295", "#b88a44", "#EACE7A"]}
                locations={[0.0, 0.1, 0.3, 0.9]}
              >
                <Text style={styles.plateText}>5lb</Text>
                <Text style={styles.numberOfPlates}>
                  {barbellToggleSelection.perSide ? fives : fives * 2}
                </Text>
              </LinearGradient>
            </Animated.View>
          ) : (
            ""
          )}
          {twoAndAHalves !== 0 ? (
            <Animated.View
              style={[styles.twoAndAHalvesBlock, { opacity: opacity }]}
            >
              <LinearGradient
                style={styles.gradientFIll}
                start={[0.0, 0.0]}
                end={[0.0, 1.0]}
                colors={["#e0aa3e", "#f9f295", "#b88a44", "#EACE7A"]}
                locations={[0.0, 0.1, 0.3, 0.9]}
              >
                <Text style={styles.plateText}>2.5lb</Text>
                <Text style={styles.numberOfPlates}>
                  {barbellToggleSelection.perSide
                    ? twoAndAHalves
                    : twoAndAHalves * 2}
                </Text>
              </LinearGradient>
            </Animated.View>
          ) : (
            ""
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  output: {
    alignSelf: "center",
    flex: 1,
    paddingLeft: "8%",
    width: "100%",
    flexDirection: "row",
    paddingTop: "25%",
    marginTop: "8%",
  },
  barbell: {
    width: "100%",
    height: 25,
    marginLeft: -70,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  barbellStopper: {
    width: 10,
    height: 40,
    borderTopLeftRadius: 3,
    top: -8,
    marginLeft: "-80%",
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
  },
  fortyFivesBlock: {
    height: 180,
    marginTop: -80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000000",
  },
  twentyFivesBlock: {
    height: 155,
    marginTop: -65,
    justifyContent: "space-between",
    borderRadius: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000000",
  },
  tensBlock: {
    height: 130,
    marginTop: -55,
    justifyContent: "space-between",
    borderRadius: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000000",
  },
  fivesBlock: {
    height: 110,
    marginTop: -45,
    justifyContent: "space-between",
    borderRadius: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000000",
  },
  twoAndAHalvesBlock: {
    height: 90,
    marginTop: -35,
    justifyContent: "space-between",
    borderRadius: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000000",
  },
  numberOfPlates: {
    color: "black",
    fontSize: 20,
    fontFamily: "Oswald_400Regular",
    alignSelf: "center",
  },
  plateText: {
    fontSize: 20,
    fontFamily: "Oswald_400Regular",
    alignSelf: "center",
  },
  platesStopperWrap: {
    width: "100%",
    flexDirection: "row",
  },
  gradientFIll: {
    width: "100.5%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "space-between",
    paddingVertical: "4%",
    paddingHorizontal: 4,
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
  barbellToggleSelection: state.barbell.barbellToggleSelection,
});

export default connect(mapStateToProps, {
  getTheme,
  getBarbellToggleStatus,
})(BarbellAnimation);
