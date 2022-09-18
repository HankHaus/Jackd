import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// import { colors } from '../../constants/theme';
import { colors } from "../../constants/theme";
// import { SORT_MODAL_TYPE } from '../../constants/arrays';
import LinearBottomSheet from "../../components/common/LinearBottomSheet";
import { LinearGradient } from "expo-linear-gradient";
const viewPosition = -500;
const { WHITE } = colors;

const MuscleGroupsModal = ({
  visible,
  onPressClose,
  opacity,
  data,
  onPress,
}) => {
  const [chest, setChest] = useState(false);
  return (
    <View style={styles.modalStyle}>
      <LinearBottomSheet
        viewPosition={viewPosition}
        onPressClose={onPressClose}
        opacity={opacity}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Which Muscle Groups Do you want to focus on today?
          </Text>
        </View>
        <View style={styles.optionStack}>
          {chest && (
            <View style={styles.option}>
              <Text style={styles.optionText}>Chest</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setChest(!chest);
                }}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!chest && (
            <View style={styles.option}>
              <Text style={styles.optionTextInactive}>Chest</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setChest(!chest);
                }}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.spacer} />
      </LinearBottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },

  titleContainer: {
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  optionStack: {
    width: "80%",
    height: 300,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    // backgroundColor: "red",
  },
  spacer: {
    width: "100%",
    marginTop: 100,
  },
  option: {
    width: "55%",
    alignSelf: "center",
    height: 50,
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  optionText: {
    fontSize: 25,
    fontWeight: "bold",
    // color: WHITE,
  },
  optionTextInactive: {
    fontSize: 25,
    // fontWeight: "bold",
    opacity: 0.5,
    // color: WHITE,
  },
  optionDotInactiveBorder: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginHorizontal: 10,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  optionDotInactive: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginHorizontal: 10,
    backgroundColor: "#9EFFB7",
    opacity: 0.5,
  },
  optionDotBorder: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginHorizontal: 10,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    // opacity: 0.5,
  },
  optionDot: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginHorizontal: 10,
    backgroundColor: "#9EFFB7",
    // opacity: 0.5,
  },
  dotWrapper: {
    flexDirection: "row",
    // backgroundColor: "pink",
  },
});

export default MuscleGroupsModal;
