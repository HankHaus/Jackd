import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../constants/theme";
import { GlossyButton } from "../../components/common";
const { LIGHT_SILVER_BLUE, SILVER_BLUE } = colors;

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
          colorOne={LIGHT_SILVER_BLUE}
          colorTwo={SILVER_BLUE}
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
