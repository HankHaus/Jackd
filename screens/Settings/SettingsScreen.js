import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { getTheme } from "../../src/actions";
import ThemeSelectionSwitch from "./SettingsScreenComponents/ThemeSelectionSwitch";
import { Ionicons } from "@expo/vector-icons";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SettingsScreen = ({ navigation, selectedTheme }) => {
  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={selectedTheme.BACKGROUND_BLEND_PRIMARY}
        start={[0.8, 0.9]}
        end={[1, 0.1]}
      >
        <TouchableOpacity
          style={styles.backButtonWrap}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="chevron-back-sharp"
            size={SCREEN_WIDTH / 15}
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
  backButtonWrap: {
    marginTop: 42,
    marginLeft: SCREEN_WIDTH / 30,
    width: SCREEN_WIDTH / 10,
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
