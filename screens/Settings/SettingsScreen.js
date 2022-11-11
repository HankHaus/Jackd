import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { getTheme } from "../../redux/actions";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import ThemeSelectionSwitch from "./SettingsScreenComponents/ThemeSelectionSwitch";

const SettingsScreen = ({ navigation, getTheme, selectedTheme }) => {
  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={selectedTheme.BACKGROUND_BLEND_PRIMARY}
        start={[0.8, 0.9]}
        end={[1, 0.1]}
      >
        {/* <TouchableOpacity style={styles.backButton}></TouchableOpacity> */}
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
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "red",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(SettingsScreen);
