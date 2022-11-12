import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { getTheme } from "../../../src/actions";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const SettingsButton = ({ navigation, selectedTheme }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SettingsScreen");
        }}
        style={styles.settingButtonBacking}
      >
        <LinearGradient
          colors={selectedTheme.SELECTED_OPTION_DOT_BLEND_PRIMARY}
          start={[0, 0.8]}
          end={[0, 0]}
          style={styles.buttonFill}
        >
          <Ionicons name="settings-sharp" size={30} color={"white"} />
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  settingButtonBacking: {
    backgroundColor: "white",
    padding: 2,
    width: 50,
    height: 50,
    borderRadius: 50,
    position: "absolute",
    top: 50,
    right: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonFill: {
    width: "100%",
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
})(SettingsButton);
