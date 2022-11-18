import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getTheme } from "../../src/actions";
import { LinearGradient } from "expo-linear-gradient";

const GlossyButton = ({
  colors,
  width,
  height,
  text,
  selectedTheme,
  fontSize,
}) => {
  return (
    <>
      <View
        style={[
          styles.buttonShape,
          {
            borderColor: selectedTheme.BUTTON_TEXT_PRIMARY,
            shadowColor: selectedTheme.SHADOW_PRIMARY,
          },
          (width = { width }),
          (height = { height }),
        ]}
      >
        <LinearGradient
          style={styles.buttonFill}
          colors={colors}
          start={[0.0, 0.7]}
          end={[0.0, 1.0]}
        >
          <LinearGradient
            style={styles.buttonFillOverlay}
            colors={["rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.1)"]}
            start={[0.0, 0.0]}
            end={[0.0, 0.5]}
          ></LinearGradient>
          <Text
            style={[
              styles.buttonText,
              { color: selectedTheme.BUTTON_TEXT_PRIMARY, fontSize: fontSize },
            ]}
          >
            {text}
          </Text>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonShape: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  buttonText: {
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
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
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(GlossyButton);
