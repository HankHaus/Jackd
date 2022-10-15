import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../constants/theme";
import { GlossyButton } from "../../components/common";
import { connect } from "react-redux";
import { getTheme, themeData } from "../../src/actions";
const { DARK_ORANGE, LIGHT_ORANGE } = colors;

const CalculateButton = ({
  onPress,
  barWeight,
  desiredWeight,
  perSide,
  getTheme,
  themeData,
}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => onPress(barWeight, desiredWeight, perSide)}
      >
        <GlossyButton
          height={50}
          width={"100%"}
          text="Calculate"
          colorOne={themeData.DARK_ORANGE}
          colorTwo={themeData.LIGHT_ORANGE}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "50%",
    marginTop: 50,
    alignSelf: "center",
    borderRadius: 10,
  },
});

const mapStateToProps = (state) => ({
  themeData: state.theme.themeData,
});

export default connect(mapStateToProps, {
  getTheme,
})(CalculateButton);
