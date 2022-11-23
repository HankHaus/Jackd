import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { getTheme } from "../../../src/actions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SCREEN_WIDTH = Dimensions.get("window").width;
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
            colors={selectedTheme.SELECTED_OPTION_DOT_BLEND_PRIMARY}
            start={[0.0, 0.0]}
            end={[0.0, 1.0]}
          >
            <LinearGradient
              style={styles.getStartedButton}
              colors={selectedTheme.SELECTED_OPTION_DOT_BLEND_PRIMARY}
              start={[0.0, 0.8]}
              end={[0.0, 0.0]}
            >
              <MaterialCommunityIcons
                name="weight-lifter"
                size={SCREEN_WIDTH / 4}
                color={"black"}
              />
            </LinearGradient>
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
    fontSize: SCREEN_WIDTH / 8,
  },
  subTitle: {
    textAlign: "center",
    fontSize: SCREEN_WIDTH / 18,
  },
  subtitleContainer: {
    width: "100%",
    marginTop: 15,
  },
  getStartedButtonBorder: {
    width: SCREEN_WIDTH / 1.8,
    height: SCREEN_WIDTH / 1.8,
    padding: SCREEN_WIDTH / 55,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  getStartedButton: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  circleContainer: {
    width: SCREEN_WIDTH / 1.8,
    height: SCREEN_WIDTH / 1.8,
    borderRadius: SCREEN_WIDTH / 1.8,
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
