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

const MuscleGroupsModal = ({
  onPressClose,
  opacity,
  onPressChest,
  onPressArms,
  onPressBack,
  onPressLegs,
  chest,
  arms,
  back,
  legs,
  onPressNext,
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
                  onPressChest();
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
                  onPressChest();
                }}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {back && (
            <View style={styles.option}>
              <Text style={styles.optionText}>Back</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  onPressBack();
                }}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!back && (
            <View style={styles.option}>
              <Text style={styles.optionTextInactive}>Back</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  onPressBack();
                }}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}

          {arms && (
            <View style={styles.option}>
              <Text style={styles.optionText}>Arms</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  onPressArms();
                }}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!arms && (
            <View style={styles.option}>
              <Text style={styles.optionTextInactive}>Arms</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  onPressArms();
                }}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {legs && (
            <View style={styles.option}>
              <Text style={styles.optionText}>Legs</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  onPressLegs();
                }}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!legs && (
            <View style={styles.option}>
              <Text style={styles.optionTextInactive}>Legs</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  onPressLegs();
                }}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.spacer}>
          {chest || back || arms || legs ? (
            <TouchableOpacity
              style={styles.nextButtonContainer}
              onPress={onPressNext}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
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
  flatListContentWrapper: {
    paddingHorizontal: 20,
    backgroundColor: "red",
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
    color: WHITE,
  },
  optionStack: {
    width: "80%",
    alignSelf: "center",
    marginTop: 20,
  },
  spacer: {
    width: "100%",
    marginTop: 20,
    height: 100,
  },
  option: {
    width: "55%",
    alignSelf: "center",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: {
    fontSize: 25,
    fontWeight: "bold",
    color: WHITE,
  },
  optionTextInactive: {
    fontSize: 25,
    opacity: 0.4,
    color: WHITE,
  },
  optionDotInactiveBorder: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginHorizontal: 10,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.4,
  },
  optionDotInactive: {
    width: 28,
    height: 28,
    borderRadius: 28,
    backgroundColor: "#9EFFB7",
    opacity: 0.4,
    alignSelf: "center",
  },
  optionDotBorder: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginHorizontal: 10,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  optionDot: {
    width: 28,
    height: 28,
    borderRadius: 28,
    backgroundColor: "#9EFFB7",
    alignSelf: "center",
  },
  dotWrapper: {
    flexDirection: "row",
  },
  nextButtonContainer: {
    width: "80%",
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
  },
  nextButtonText: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    textDecorationLine: "underline",
    color: "#271519",
  },
});

export default MuscleGroupsModal;
