import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { getTheme } from "../../src/actions";
const BarbellAnimation = ({
  fortyFives,
  twentyFives,
  tens,
  fives,
  twoAndAHalves,
  selectedTheme,
}) => {
  const progress = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);
  useEffect(() => {
    Animated.timing(slide, {
      toValue: -120,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

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
        {fortyFives !== 0 ? (
          <Animated.View
            style={[
              styles.fortyFivesBlock,
              { backgroundColor: selectedTheme.FORTY_FIVES_PLATE },
              { opacity: progress },
              { transform: [{ translateX: slide }] },
            ]}
          >
            <Text style={styles.plateText}>45lb</Text>
            <Text style={styles.numberOfPlates}>{fortyFives}</Text>
          </Animated.View>
        ) : (
          //TOGGLE THE ABOVE VS THE BELOW BEING COMMENTED TO SEE THE ANIMATION, IT'S A BIT BUGGY
          //RELOAD BETWEEN EACH TOGGLE
          ""
          // <Animated.View
          //   style={[
          //     styles.fortyFivesBlock,
          // {backgroundColor: selectedTheme.FORTY_FIVES_PLATE}
          //     { opacity: progress },
          //     { transform: [{ translateX: slide }] },
          //   ]}
          // >
          //   <Text style={styles.plateText}>45lb</Text>
          //   <Text style={styles.numberOfPlates}>{fortyFives}</Text>
          // </Animated.View>
        )}
        {twentyFives !== 0 ? (
          <View
            style={[
              styles.twentyFivesBlock,
              { backgroundColor: selectedTheme.TWENTY_FIVES_PLATE },
            ]}
          >
            <Text style={styles.plateText}>25lb</Text>
            <Text style={styles.numberOfPlates}>{twentyFives}</Text>
          </View>
        ) : (
          ""
        )}
        {tens !== 0 ? (
          <View
            style={[
              styles.tensBlock,
              { backgroundColor: selectedTheme.TENS_PLATE },
            ]}
          >
            <Text style={styles.plateText}>10lb</Text>
            <Text style={styles.numberOfPlates}>{tens}</Text>
          </View>
        ) : (
          ""
        )}
        {fives !== 0 ? (
          <View
            style={[
              styles.fivesBlock,
              { backgroundColor: selectedTheme.FIVES_PLATE },
            ]}
          >
            <Text style={styles.plateText}>5lb</Text>
            <Text style={styles.numberOfPlates}>{fives}</Text>
          </View>
        ) : (
          ""
        )}
        {twoAndAHalves !== 0 ? (
          <View
            style={[
              styles.twoAndAHalvesBlock,
              { backgroundColor: selectedTheme.TWO_AND_A_HALVES_PLATE },
            ]}
          >
            <Text style={styles.plateText}>2.5lb</Text>
            <Text style={styles.numberOfPlates}>{twoAndAHalves}</Text>
          </View>
        ) : (
          ""
        )}
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
    width: "85%",
    height: 25,
    position: "absolute",
    top: 102,
    left: 0,
    marginLeft: -70,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  barbellStopper: {
    width: 10,
    height: 40,
    borderTopLeftRadius: 3,
    position: "absolute",
    left: "6%",
    top: 95,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
  },
  fortyFivesBlock: {
    paddingHorizontal: 10,
    height: 170,
    marginTop: -80,
    borderRadius: 10,
    justifyContent: "space-between",
    paddingVertical: "4%",
    alignItems: "center",
  },
  twentyFivesBlock: {
    paddingHorizontal: 5,
    height: 150,
    marginTop: -65,
    justifyContent: "space-between",
    paddingVertical: "5%",
    borderRadius: 10,
  },
  tensBlock: {
    paddingHorizontal: 5,
    height: 120,
    marginTop: -50,
    justifyContent: "space-between",
    paddingVertical: "4%",
    borderRadius: 10,
  },
  fivesBlock: {
    paddingHorizontal: 5,
    height: 100,
    marginTop: -40,
    justifyContent: "space-between",
    paddingVertical: "3%",
    borderRadius: 10,
  },
  twoAndAHalvesBlock: {
    paddingHorizontal: 5,
    height: 80,
    backgroundColor: "pink",
    marginTop: -30,
    justifyContent: "space-between",
    paddingVertical: "2%",
    borderRadius: 10,
  },
  numberOfPlates: {
    color: "white",
    fontSize: 20,
    fontFamily: "Oswald_400Regular",
    alignSelf: "center",
  },
  plateText: {
    fontSize: 20,
    fontFamily: "Oswald_400Regular",
    alignSelf: "center",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(BarbellAnimation);

// export default BarbellAnimation;
