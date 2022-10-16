import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { getTheme } from "../../src/actions";
const Header = ({ onPress, selectedTheme }) => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: selectedTheme.TEXT_PRIMARY }]}>
          Workout Creator
        </Text>
        <View style={styles.subtitleContainer}>
          <Text
            style={[styles.subTitle, { color: selectedTheme.TEXT_PRIMARY }]}
          >
            Here you'll be able to get a custom workout plan for the day.
          </Text>
          <Text
            style={[styles.subTitle, { color: selectedTheme.TEXT_PRIMARY }]}
          >
            Tap the circle to get started!
          </Text>
        </View>
        <TouchableOpacity style={styles.circleContainer} onPress={onPress}>
          <LinearGradient
            style={styles.getStartedButtonBorder}
            colors={selectedTheme.GET_STARTED_BUTTON_BORDER_BLEND_PRIMARY}
            start={[0.7, 0.9]}
            end={[1.2, 0.3]}
          >
            <LinearGradient
              style={styles.getStartedButton}
              colors={selectedTheme.GET_STARTED_BUTTON_BLEND_PRIMARY}
              start={[1, 0.1]}
              end={[1, 0.9]}
            ></LinearGradient>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: "-10%",
    alignSelf: "center",
    justifyContent: "center",
  },
  title: {
    alignSelf: "center",
    fontSize: 50,
  },
  subTitle: {
    textAlign: "center",
    fontSize: 20,
  },
  subtitleContainer: {
    width: "100%",
    marginTop: 15,
  },
  getStartedButtonBorder: {
    width: 200,
    height: 200,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  getStartedButton: {
    width: 195,
    height: 195,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  circleContainer: {
    width: 190,
    height: 190,
    borderRadius: 210,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "35%",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(Header);
