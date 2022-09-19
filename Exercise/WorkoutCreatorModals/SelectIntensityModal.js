import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

// import { colors } from '../../constants/theme';
import { colors } from "../../constants/theme";
// import { SORT_MODAL_TYPE } from '../../constants/arrays';
import LinearBottomSheet from "../../components/common/LinearBottomSheet";
import { LinearGradient } from "expo-linear-gradient";
const viewPosition = -500;
const { WHITE } = colors;

const SelectINtensityModal = ({
  onPressClose,
  opacity,
  chest,
  arms,
  back,
  legs,
  chest1,
  arms1,
  back1,
  legs1,
  chest5,
  arms5,
  back5,
  legs5,
  chest10,
  arms10,
  back10,
  legs10,
  setChest1,
  setArms1,
  setBack1,
  setLegs1,
  setChest5,
  setArms5,
  setBack5,
  setLegs5,
  setChest10,
  setArms10,
  setBack10,
  setLegs10,
}) => {
  return (
    <View style={styles.modalStyle}>
      <LinearBottomSheet
        viewPosition={viewPosition}
        onPressClose={onPressClose}
        opacity={opacity}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Select your intensity level for each muscle group
          </Text>
        </View>
        {chest && (
          <View style={styles.option}>
            <Text style={styles.optionLabel}>Chest:</Text>
            <View style={styles.intensityOptionStack}>
              <Text style={styles.optionTextInactive}>1</Text>

              <LinearGradient
                colors={["#FE96FF", "#FF0083"]}
                start={(0, 0.4)}
                end={(0, 1)}
                style={styles.optionActiveBorder}
              >
                <Text style={styles.optionTextActive}>5</Text>
              </LinearGradient>

              <Text style={styles.optionTextInactive}>10</Text>
            </View>
          </View>
        )}

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
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  spacer: {
    width: "100%",
    marginTop: 20,
    height: 100,
  },
  option: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  intensityOptionStack: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: "blue",
  },
  optionLabel: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    justifySelf: "center",
    alignSelf: "center",
  },
  optionTextInactive: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    opacity: 0.5,
  },
  optionTextActive: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
  optionInactiveBorder: {
    width: 35,
    height: 35,
    borderRadius: 50,
    // borderWidth: 1,
    // borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  optionActiveBorder: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default SelectINtensityModal;
