import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../constants/theme";
import { GlossyButton } from "../../components/common";
const { DARK_ORANGE, LIGHT_ORANGE } = colors;

const CalculateButton = ({ onPress, barWeight, desiredWeight, perSide }) => {
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
          colorOne={DARK_ORANGE}
          colorTwo={LIGHT_ORANGE}
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

export default CalculateButton;
