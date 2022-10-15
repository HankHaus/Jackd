import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { GlossyButton } from "../../components/common";
import { connect } from "react-redux";
import { getTheme } from "../../src/actions";
import { colors } from "../../constants/theme";
const { DARK_ORANGE, LIGHT_ORANGE } = colors;

const WorkoutButton = ({ navigation, themeData }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.buttonShape}
        onPress={() => {
          navigation.navigate("WorkoutCreator");
        }}
      >
        <GlossyButton
          width={"100%"}
          height={50}
          text="Workout Creator"
          colors={themeData.BUTTON_BLEND_PRIMARY}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonShape: {
    width: "75%",
    alignSelf: "center",
    borderRadius: 10,
  },
});

const mapStateToProps = (state) => ({
  themeData: state.theme.themeData,
});

export default connect(mapStateToProps, {
  getTheme,
})(WorkoutButton);
