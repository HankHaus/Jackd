import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { themeData, getTheme } from "../../src/actions";
import { colors } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
const { SHADOW, TEXT_BURGUNDY } = colors;

const GlossyButton = ({
  colorOne,
  colorTwo,
  width,
  height,
  text,
  themeData,
  getTheme,
}) => {
  return (
    <>
      <View
        style={[styles.buttonShape, (width = { width }), (height = { height })]}
      >
        <LinearGradient
          style={styles.buttonFill}
          colors={[colorOne, colorTwo]}
          start={[0.0, 0.7]}
          end={[0.0, 1.0]}
        >
          <LinearGradient
            style={styles.buttonFillOverlay}
            colors={["rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.1)"]}
            start={[0.0, 0.0]}
            end={[0.0, 0.5]}
          ></LinearGradient>
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonShape: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: TEXT_BURGUNDY,
    borderRadius: 10,
    shadowColor: SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 30,
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
    color: TEXT_BURGUNDY,
    fontFamily: "Lobster_400Regular",
  },
  buttonFill: {
    justifyContent: "center",
    weight: "100%",
    height: "100%",
    borderRadius: 8,
  },
  buttonFillOverlay: {
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "50%",
    borderRadius: 8,
  },
});

const mapStateToProps = (state) => ({
  themeData: state.theme.themeData,
});

export default connect(mapStateToProps, {
  getTheme,
  themeData,
})(GlossyButton);

// export default GlossyButton;
