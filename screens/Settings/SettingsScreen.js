import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { getTheme } from "../../src/actions";
import ThemeSelectionSwitch from "./SettingsScreenComponents/ThemeSelectionSwitch";
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen = ({ navigation, selectedTheme }) => {
  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={selectedTheme.BACKGROUND_BLEND_PRIMARY}
        start={[0.8, 0.9]}
        end={[1, 0.1]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-sharp"
            size={30}
            color={selectedTheme.theme === "dark" ? "white" : "black"}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <ThemeSelectionSwitch />
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: -60,
    marginBottom: 60,
    width: "100%",
  },
  weightInputsContainer: {
    backgroundColor: "blue",
    width: "100%",
    marginTop: "-10%",
  },
  workoutButtonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignItems: "center",
  },
  barbellContainer: {
    position: "relative",
    top: 20,
  },
  textContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "green",
  },
  text: {
    fontSize: 20,
  },
  backButton: {
    marginTop: "15%",
    marginLeft: "5%",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(SettingsScreen);
