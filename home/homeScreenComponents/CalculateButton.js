import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { GlossyButton } from "../../components/common";
import { connect } from "react-redux";
import { getTheme } from "../../src/actions";

const CalculateButton = ({
  onPress,
  barWeight,
  desiredWeight,
  perSide,
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
          colors={themeData.BUTTON_BLEND_PRIMARY}
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
