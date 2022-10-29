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
import { getTheme } from "../../src/actions";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const ThemeSelectionSwitch = ({ navigation, getTheme, selectedTheme }) => {
  const handleDarkMode = () => {
    getTheme({
      ...selectedTheme,
      BACKGROUND_BLEND_PRIMARY: ["#002B5B", "#0F3E72"],
      BEHIND_MODAL_BLEND_PRIMARY: ["#FF0000", "transparent"],
      BUTTON_BLEND_PRIMARY: ["#7B113A", "#A62E5D"],
      BUTTON_TEXT_PRIMARY: "#FFF8EA",
      SHADOW_PRIMARY: "#FFFFFF",
      MODAL_BACKGROUND_BLEND_PRIMARY: ["#C3FFCD", "#7B7A72"],
      GET_STARTED_BUTTON_BORDER_BLEND_PRIMARY: ["#000A3D", "#C3FFCD"],
      GET_STARTED_BUTTON_BLEND_PRIMARY: ["#2AFF4E", "#C3FFCD"],
      TEXT_PRIMARY: "#FFF8EA",
      OPTION_DOT_BORDER_INACTIVE_PRIMARY: "#C3FFCD",
      OPTION_DOT_INACTIVE_PRIMARY: "#C3FFCD",
      OPTION_DOT_BORDER_ACTIVE_PRIMARY: "#C800FF",
      OPTION_DOT_ACTIVE_PRIMARY: "#FF9D4C",
      SELECTED_OPTION_DOT_BLEND_PRIMARY: ["#000A3D", "#8C0718"],
      FORTY_FIVES_PLATE: "#AAFF00",
      TWENTY_FIVES_PLATE: "#8885A4",
      TENS_PLATE: "#B9B04D",
      FIVES_PLATE: "#41FF8F",
      TWO_AND_A_HALVES_PLATE: "#A76B6B",
      INPUT_BLEND_PRIMARY: ["#FFFFFF", "#E0E0E0"],
    });
  };
  const handleLightMode = () => {
    getTheme({
      ...selectedTheme,
      BACKGROUND_BLEND_PRIMARY: ["#A2D2FF", "#FEF9EF"],
      BEHIND_MODAL_BLEND_PRIMARY: ["#000000", "transparent"],
      BUTTON_BLEND_PRIMARY: ["#ff865e", "#FFA081"],
      BUTTON_TEXT_PRIMARY: "#34000E",
      SHADOW_PRIMARY: "#000000",
      MODAL_BACKGROUND_BLEND_PRIMARY: ["#6C464F", "#B891A9"],
      GET_STARTED_BUTTON_BORDER_BLEND_PRIMARY: ["#31CF0A", "#C7F0BD"],
      GET_STARTED_BUTTON_BLEND_PRIMARY: ["#24AB03", "#197502"],
      TEXT_PRIMARY: "#000000",
      OPTION_DOT_BORDER_INACTIVE_PRIMARY: "#76B486",
      OPTION_DOT_INACTIVE_PRIMARY: "#9EFFB7",
      OPTION_DOT_BORDER_ACTIVE_PRIMARY: "#FF00B7",
      OPTION_DOT_ACTIVE_PRIMARY: "#F8FF4C",
      SELECTED_OPTION_DOT_BLEND_PRIMARY: ["#FE96FF", "#FF0083"],
      FORTY_FIVES_PLATE: "#00FF46",
      TWENTY_FIVES_PLATE: "#1B00FF",
      TENS_PLATE: "#FFEC00",
      FIVES_PLATE: "#538668",
      TWO_AND_A_HALVES_PLATE: "#FF4141",
      INPUT_BLEND_PRIMARY: ["#FFFFFF", "#E0E0E0"],
    });
  };

  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={selectedTheme.BACKGROUND_BLEND_PRIMARY}
        start={[0.8, 0.9]}
        end={[1, 0.1]}
      >
        <View style={styles.labelAndSwitchWrapper}>
          <Text style={styles.label}>Theme</Text>
          <View style={styles.switchShape}>
            <LinearGradient
              colors={selectedTheme.INPUT_BLEND_PRIMARY}
              start={[0, 0.8]}
              end={[0, 0]}
              style={styles.switchFill}
            >
              <LinearGradient
                colors={selectedTheme.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                start={[0, 0.8]}
                end={[0, 0]}
                style={styles.lightActive}
              >
                <Text style={styles.switchOptionText}>Light</Text>
              </LinearGradient>
              <Text style={styles.switchOptionText}>Dark</Text>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelAndSwitchWrapper: {
    marginTop: 100,
    width: "100%",
    flexDirection: "row",
    height: 80,
    // backgroundColor: "red",
    alignItems: "center",
    fontFamily: "Oswald_400Regular",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  label: {
    fontSize: 30,
  },
  switchShape: {
    // backgroundColor: "red",
    width: 150,
    height: 50,
    padding: 2,
    backgroundColor: "white",
    borderRadius: 50,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  switchFill: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
  },
  switchOptionText: {
    fontSize: 20,
  },
  lightActive: {
    width: 75,
    height: "100%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(ThemeSelectionSwitch);
