import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { connect } from "react-redux";
import { getTheme, getBarbellToggleStatus } from "../../../src/actions";
import { LinearGradient } from "expo-linear-gradient";

const SCREEN_WIDTH = Dimensions.get("window");

const PerSideOrTotalToggle = ({
  selectedTheme,
  barbellToggleSelection,
  getBarbellToggleStatus,
}) => {
  const handlePlatesPerSide = () => {
    getBarbellToggleStatus({
      ...barbellToggleSelection,
      perSide: true,
    });
  };
  const handleTotalPlates = () => {
    getBarbellToggleStatus({
      ...barbellToggleSelection,
      perSide: false,
    });
  };
  return (
    <>
      <View style={styles.switchShape}>
        <LinearGradient
          colors={selectedTheme.INPUT_BLEND_PRIMARY}
          start={[0, 0.8]}
          end={[0, 0]}
          style={styles.switchFill}
        >
          <LinearGradient
            colors={
              !barbellToggleSelection.perSide
                ? ["transparent", "transparent"]
                : selectedTheme.SELECTED_OPTION_DOT_BLEND_PRIMARY
            }
            start={[0, 0.8]}
            end={[0, 0]}
            style={styles.active}
          >
            <TouchableOpacity onPress={handlePlatesPerSide}>
              <Text style={styles.switchOptionText}>Plates Per Side</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={
              !barbellToggleSelection.perSide
                ? selectedTheme.SELECTED_OPTION_DOT_BLEND_PRIMARY
                : ["transparent", "transparent"]
            }
            start={[0, 0.8]}
            end={[0, 0]}
            style={styles.active}
          >
            <TouchableOpacity onPress={handleTotalPlates}>
              <Text style={styles.switchOptionText}>Total Plates</Text>
            </TouchableOpacity>
          </LinearGradient>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 30,
  },
  switchShape: {
    alignSelf: "center",
    width: "75%",
    height: 50,
    padding: 2,
    marginTop: "5%",
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
  },

  switchOptionText: {
    fontFamily: "Oswald_400Regular",
    fontSize: SCREEN_WIDTH.width / 22,
  },
  active: {
    width: "50%",
    height: "100%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
  barbellToggleSelection: state.barbell.barbellToggleSelection,
});

export default connect(mapStateToProps, {
  getTheme,
  getBarbellToggleStatus,
})(PerSideOrTotalToggle);
