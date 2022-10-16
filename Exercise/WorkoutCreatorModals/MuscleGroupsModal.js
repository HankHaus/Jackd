import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getMuscleGroups, getTheme } from "../../src/actions";
import LinearBottomSheet from "../../components/common/LinearBottomSheet";
const viewPosition = -500;

const MuscleGroupsModal = ({
  selectedTheme,
  selectedMuscleGroups,
  handleSelectChest,

  handleSelectArms,
  handleSelectBack,
  handleSelectLegs,
  muscleGroupsData,
  getMuscleGroups,
  onPressClose,
  opacity,
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
          <Text style={[styles.title, { color: selectedTheme.TEXT_PRIMARY }]}>
            Which Muscle Groups Do you want to focus on today?
          </Text>
        </View>

        <View style={styles.optionStack}>
          {muscleGroupsData.chest && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectChest}>
                <Text
                  style={[
                    styles.optionText,
                    { color: selectedTheme.TEXT_PRIMARY },
                  ]}
                >
                  Chest
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectChest}
              >
                <View
                  style={[
                    styles.optionDotBorder,
                    {
                      backgroundColor:
                        selectedTheme.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.optionDot,
                      {
                        backgroundColor:
                          selectedTheme.OPTION_DOT_ACTIVE_PRIMARY,
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!muscleGroupsData.chest && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectChest}>
                <Text
                  style={[
                    styles.optionTextInactive,
                    { color: selectedTheme.TEXT_PRIMARY },
                  ]}
                >
                  Chest
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectChest}
              >
                <View
                  style={[
                    styles.optionDotInactiveBorder,
                    {
                      backgroundColor:
                        selectedTheme.OPTION_DOT_BORDER_INACTIVE_PRIMARY,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.optionDotInactive,
                      {
                        backgroundColor:
                          selectedTheme.OPTION_DOT_INACTIVE_PRIMARY,
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {muscleGroupsData.back && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectBack}>
                <Text
                  style={[
                    styles.optionText,
                    { color: selectedTheme.TEXT_PRIMARY },
                  ]}
                >
                  Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectBack}
              >
                <View
                  style={[
                    styles.optionDotBorder,
                    {
                      backgroundColor:
                        selectedTheme.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.optionDot,
                      {
                        backgroundColor:
                          selectedTheme.OPTION_DOT_ACTIVE_PRIMARY,
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!muscleGroupsData.back && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectBack}>
                <Text
                  style={[
                    styles.optionTextInactive,
                    { color: selectedTheme.TEXT_PRIMARY },
                  ]}
                >
                  Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectBack}
              >
                <View
                  style={[
                    styles.optionDotInactiveBorder,
                    {
                      backgroundColor:
                        selectedTheme.OPTION_DOT_BORDER_INACTIVE_PRIMARY,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.optionDotInactive,
                      {
                        backgroundColor:
                          selectedTheme.OPTION_DOT_INACTIVE_PRIMARY,
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}

          {muscleGroupsData.arms && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectArms}>
                <Text
                  style={[
                    styles.optionText,
                    { color: selectedTheme.TEXT_PRIMARY },
                  ]}
                >
                  Arms
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectArms}
              >
                <View
                  style={[
                    styles.optionDotBorder,
                    {
                      backgroundColor:
                        selectedTheme.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.optionDot,
                      {
                        backgroundColor:
                          selectedTheme.OPTION_DOT_ACTIVE_PRIMARY,
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!muscleGroupsData.arms && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectArms}>
                <Text
                  style={[
                    styles.optionTextInactive,
                    { color: selectedTheme.TEXT_PRIMARY },
                  ]}
                >
                  Arms
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectArms}
              >
                <View
                  style={[
                    styles.optionDotInactiveBorder,
                    {
                      backgroundColor:
                        selectedTheme.OPTION_DOT_BORDER_INACTIVE_PRIMARY,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.optionDotInactive,
                      {
                        backgroundColor:
                          selectedTheme.OPTION_DOT_INACTIVE_PRIMARY,
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {muscleGroupsData.legs && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectLegs}>
                <Text
                  style={[
                    styles.optionText,
                    { color: selectedTheme.TEXT_PRIMARY },
                  ]}
                >
                  Legs
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectLegs}
              >
                <View
                  style={[
                    styles.optionDotBorder,
                    {
                      backgroundColor:
                        selectedTheme.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.optionDot,
                      {
                        backgroundColor:
                          selectedTheme.OPTION_DOT_ACTIVE_PRIMARY,
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!muscleGroupsData.legs && (
            <View style={styles.option}>
              <TouchableOpacity onPress={handleSelectLegs}>
                <Text
                  style={[
                    styles.optionTextInactive,
                    { color: selectedTheme.TEXT_PRIMARY },
                  ]}
                >
                  Legs
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={handleSelectLegs}
              >
                <View
                  style={[
                    styles.optionDotInactiveBorder,
                    {
                      backgroundColor:
                        selectedTheme.OPTION_DOT_BORDER_INACTIVE_PRIMARY,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.optionDotInactive,
                      {
                        backgroundColor:
                          selectedTheme.OPTION_DOT_INACTIVE_PRIMARY,
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.spacer}>
          {muscleGroupsData.chest ||
          muscleGroupsData.back ||
          muscleGroupsData.arms ||
          muscleGroupsData.legs ? (
            <TouchableOpacity
              style={styles.nextButtonContainer}
              onPress={onPressNext}
            >
              <Text
                style={[
                  styles.nextButtonText,
                  { color: selectedTheme.TEXT_PRIMARY },
                ]}
              >
                Next
              </Text>
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
  },
  optionTextInactive: {
    fontSize: 25,
    opacity: 0.4,
  },
  optionDotInactiveBorder: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.4,
  },
  optionDotInactive: {
    width: 28,
    height: 28,
    borderRadius: 28,
    opacity: 0.4,
    alignSelf: "center",
  },
  optionDotBorder: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  optionDot: {
    width: 28,
    height: 28,
    borderRadius: 28,
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
  },
});

const mapStateToProps = (state) => ({
  muscleGroupsData: state.workoutCreator.muscleGroupsData,
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getMuscleGroups,
  getTheme,
})(MuscleGroupsModal);
