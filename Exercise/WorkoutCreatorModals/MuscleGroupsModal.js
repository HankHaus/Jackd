import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

import { colors } from "../../constants/theme";
import { connect } from "react-redux";
import { selectIntensityData, getSelectIntensity } from "../../src/actions";
import LinearBottomSheet from "../../components/common/LinearBottomSheet";
import { LinearGradient } from "expo-linear-gradient";
const viewPosition = -500;
const { WHITE } = colors;

const MuscleGroupsModal = ({
  selectIntensityData,
  getSelectIntensity,
  onPressClose,
  opacity,
  onPressNext,
}) => {
  const handleSelectChest = () => {
    getSelectIntensity({
      ...selectIntensityData,
      chest: !selectIntensityData.chest,
    });
  };
  const handleSelectArms = () => {
    getSelectIntensity({
      ...selectIntensityData,
      arms: !selectIntensityData.arms,
    });
  };
  const handleSelectBack = () => {
    getSelectIntensity({
      ...selectIntensityData,
      back: !selectIntensityData.back,
    });
  };
  const handleSelectLegs = () => {
    getSelectIntensity({
      ...selectIntensityData,
      legs: !selectIntensityData.legs,
    });
  };

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
          {selectIntensityData.chest && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectChest}>
                <Text style={styles.optionText}>Chest</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectChest}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!selectIntensityData.chest && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectChest}>
                <Text style={styles.optionTextInactive}>Chest</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectChest}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {selectIntensityData.back && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectBack}>
                <Text style={styles.optionText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectBack}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!selectIntensityData.back && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectBack}>
                <Text style={styles.optionTextInactive}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectBack}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}

          {selectIntensityData.arms && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectArms}>
                <Text style={styles.optionText}>Arms</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectArms}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!selectIntensityData.arms && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectArms}>
                <Text style={styles.optionTextInactive}>Arms</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectArms}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {selectIntensityData.legs && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectLegs}>
                <Text style={styles.optionText}>Legs</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectLegs}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!selectIntensityData.legs && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectLegs}>
                <Text style={styles.optionTextInactive}>Legs</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectLegs}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.spacer}>
          {selectIntensityData.chest ||
          selectIntensityData.back ||
          selectIntensityData.arms ||
          selectIntensityData.legs ? (
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

const mapStateToProps = (state) => ({
  // userDetails: state.profile.userDetails,
  // coverPhoto: state.profile.coverPhoto,
  // profileScreenTabIndex: state.profile.profileScreenTabIndex,
  selectIntensityData: state.workoutCreator.selectIntensityData,
});

export default connect(mapStateToProps, {
  // getUserDetails,
  // getCoverPhoto,
  // getProfileScreenTabIndex,
  getSelectIntensity,
})(MuscleGroupsModal);

// export default MuscleGroupsModal;
