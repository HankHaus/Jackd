import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getMuscleGroups, getTheme } from "../../src/actions";
import LinearBottomSheet from "../../components/common/LinearBottomSheet";
import { LinearGradient } from "expo-linear-gradient";
import { GlossyButton } from "../../components/common";
const viewPosition = -500;

const SelectIntensityModal = ({
  themeData,
  muscleGroupsData,
  getMuscleGroups,
  onPressClose,
  opacity,
  onPressStartWorkout,
}) => {
  const handleSelectChestIntensity = (intensityLevel) => {
    getMuscleGroups({
      ...muscleGroupsData,
      chestIntensity: intensityLevel,
    });
  };
  const handleSelectArmsIntensity = (intensityLevel) => {
    getMuscleGroups({
      ...muscleGroupsData,
      armsIntensity: intensityLevel,
    });
  };
  const handleSelectBackIntensity = (intensityLevel) => {
    getMuscleGroups({
      ...muscleGroupsData,
      backIntensity: intensityLevel,
    });
  };
  const handleSelectLegsIntensity = (intensityLevel) => {
    getMuscleGroups({
      ...muscleGroupsData,
      legsIntensity: intensityLevel,
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
            Select your intensity level for each muscle group
          </Text>
        </View>
        {muscleGroupsData.chest && (
          <View style={styles.option}>
            <Text
              style={[styles.optionLabel, { color: themeData.TEXT_PRIMARY }]}
            >
              Chest:
            </Text>
            <View style={styles.intensityOptionStack}>
              <TouchableOpacity
                onPress={() => handleSelectChestIntensity(1)}
                style={[
                  styles.intensityOption,
                  { opacity: muscleGroupsData.chestIntensity === 1 ? 1 : 0.5 },
                ]}
              >
                <LinearGradient
                  colors={themeData.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                  start={(0, 0.4)}
                  end={(0, 1)}
                  style={
                    muscleGroupsData.chestIntensity === 1
                      ? [
                          styles.optionActiveBorder,
                          {
                            borderColor:
                              themeData.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                          },
                        ]
                      : styles.optionInactiveBorder
                  }
                >
                  <Text
                    style={
                      muscleGroupsData.chestIntensity === 1
                        ? [
                            styles.optionTextActive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                        : [
                            styles.optionTextInactive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                    }
                  >
                    1
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectChestIntensity(5)}
                style={[
                  styles.intensityOption,
                  { opacity: muscleGroupsData.chestIntensity === 5 ? 1 : 0.5 },
                ]}
              >
                <LinearGradient
                  colors={themeData.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                  start={(0, 0.4)}
                  end={(0, 1)}
                  style={
                    muscleGroupsData.chestIntensity === 5
                      ? [
                          styles.optionActiveBorder,
                          {
                            borderColor:
                              themeData.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                          },
                        ]
                      : styles.optionInactiveBorder
                  }
                >
                  <Text
                    style={
                      muscleGroupsData.chestIntensity === 5
                        ? [
                            styles.optionTextActive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                        : [
                            styles.optionTextInactive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                    }
                  >
                    5
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectChestIntensity(10)}
                style={[
                  styles.intensityOption,
                  { opacity: muscleGroupsData.chestIntensity === 10 ? 1 : 0.5 },
                ]}
              >
                <LinearGradient
                  colors={themeData.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                  start={(0, 0.4)}
                  end={(0, 1)}
                  style={
                    muscleGroupsData.chestIntensity === 10
                      ? [
                          styles.optionActiveBorder,
                          {
                            borderColor:
                              themeData.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                          },
                        ]
                      : styles.optionInactiveBorder
                  }
                >
                  <Text
                    style={
                      muscleGroupsData.chestIntensity === 10
                        ? [
                            styles.optionTextActive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                        : [
                            styles.optionTextInactive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                    }
                  >
                    10
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {muscleGroupsData.arms && (
          <View style={styles.option}>
            <Text
              style={[styles.optionLabel, { color: themeData.TEXT_PRIMARY }]}
            >
              Arms:
            </Text>
            <View style={styles.intensityOptionStack}>
              <TouchableOpacity
                onPress={() => handleSelectArmsIntensity(1)}
                style={[
                  styles.intensityOption,
                  { opacity: muscleGroupsData.armsIntensity === 1 ? 1 : 0.5 },
                ]}
              >
                <LinearGradient
                  colors={themeData.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                  start={(0, 0.4)}
                  end={(0, 1)}
                  style={
                    muscleGroupsData.armsIntensity === 1
                      ? [
                          styles.optionActiveBorder,
                          {
                            borderColor:
                              themeData.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                          },
                        ]
                      : styles.optionInactiveBorder
                  }
                >
                  <Text
                    style={
                      muscleGroupsData.armsIntensity === 1
                        ? [
                            styles.optionTextActive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                        : [
                            styles.optionTextInactive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                    }
                  >
                    1
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectArmsIntensity(5)}
                style={[
                  styles.intensityOption,
                  { opacity: muscleGroupsData.armsIntensity === 5 ? 1 : 0.5 },
                ]}
              >
                <LinearGradient
                  colors={themeData.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                  start={(0, 0.4)}
                  end={(0, 1)}
                  style={
                    muscleGroupsData.armsIntensity === 5
                      ? [
                          styles.optionActiveBorder,
                          {
                            borderColor:
                              themeData.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                          },
                        ]
                      : styles.optionInactiveBorder
                  }
                >
                  <Text
                    style={
                      muscleGroupsData.armsIntensity === 5
                        ? [
                            styles.optionTextActive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                        : [
                            styles.optionTextInactive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                    }
                  >
                    5
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectArmsIntensity(10)}
                style={[
                  styles.intensityOption,
                  { opacity: muscleGroupsData.armsIntensity === 10 ? 1 : 0.5 },
                ]}
              >
                <LinearGradient
                  colors={themeData.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                  start={(0, 0.4)}
                  end={(0, 1)}
                  style={
                    muscleGroupsData.armsIntensity === 10
                      ? [
                          styles.optionActiveBorder,
                          {
                            borderColor:
                              themeData.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                          },
                        ]
                      : styles.optionInactiveBorder
                  }
                >
                  <Text
                    style={
                      muscleGroupsData.armsIntensity === 10
                        ? [
                            styles.optionTextActive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                        : [
                            styles.optionTextInactive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                    }
                  >
                    10
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {muscleGroupsData.back && (
          <View style={styles.option}>
            <Text
              style={[styles.optionLabel, { color: themeData.TEXT_PRIMARY }]}
            >
              Back:
            </Text>
            <View style={styles.intensityOptionStack}>
              <TouchableOpacity
                onPress={() => handleSelectBackIntensity(1)}
                style={[
                  styles.intensityOption,
                  { opacity: muscleGroupsData.backIntensity === 1 ? 1 : 0.5 },
                ]}
              >
                <LinearGradient
                  colors={themeData.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                  start={(0, 0.4)}
                  end={(0, 1)}
                  style={
                    muscleGroupsData.backIntensity === 1
                      ? [
                          styles.optionActiveBorder,
                          {
                            borderColor:
                              themeData.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                          },
                        ]
                      : styles.optionInactiveBorder
                  }
                >
                  <Text
                    style={
                      muscleGroupsData.backIntensity === 1
                        ? [
                            styles.optionTextActive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                        : [
                            styles.optionTextInactive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                    }
                  >
                    1
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectBackIntensity(5)}
                style={[
                  styles.intensityOption,
                  { opacity: muscleGroupsData.backIntensity === 5 ? 1 : 0.5 },
                ]}
              >
                <LinearGradient
                  colors={themeData.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                  start={(0, 0.4)}
                  end={(0, 1)}
                  style={
                    muscleGroupsData.backIntensity === 5
                      ? [
                          styles.optionActiveBorder,
                          {
                            borderColor:
                              themeData.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                          },
                        ]
                      : styles.optionInactiveBorder
                  }
                >
                  <Text
                    style={
                      muscleGroupsData.backIntensity === 5
                        ? [
                            styles.optionTextActive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                        : [
                            styles.optionTextInactive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                    }
                  >
                    5
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectBackIntensity(10)}
                style={[
                  styles.intensityOption,
                  { opacity: muscleGroupsData.backIntensity === 10 ? 1 : 0.5 },
                ]}
              >
                <LinearGradient
                  colors={themeData.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                  start={(0, 0.4)}
                  end={(0, 1)}
                  style={
                    muscleGroupsData.backIntensity === 10
                      ? [
                          styles.optionActiveBorder,
                          {
                            borderColor:
                              themeData.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                          },
                        ]
                      : styles.optionInactiveBorder
                  }
                >
                  <Text
                    style={
                      muscleGroupsData.backIntensity === 10
                        ? [
                            styles.optionTextActive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                        : [
                            styles.optionTextInactive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                    }
                  >
                    10
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {muscleGroupsData.legs && (
          <View style={styles.option}>
            <Text
              style={[styles.optionLabel, { color: themeData.TEXT_PRIMARY }]}
            >
              Legss:
            </Text>
            <View style={styles.intensityOptionStack}>
              <TouchableOpacity
                onPress={() => handleSelectLegsIntensity(1)}
                style={[
                  styles.intensityOption,
                  { opacity: muscleGroupsData.legsIntensity === 1 ? 1 : 0.5 },
                ]}
              >
                <LinearGradient
                  colors={themeData.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                  start={(0, 0.4)}
                  end={(0, 1)}
                  style={
                    muscleGroupsData.legsIntensity === 1
                      ? [
                          styles.optionActiveBorder,
                          {
                            borderColor:
                              themeData.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                          },
                        ]
                      : styles.optionInactiveBorder
                  }
                >
                  <Text
                    style={
                      muscleGroupsData.legsIntensity === 1
                        ? [
                            styles.optionTextActive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                        : [
                            styles.optionTextInactive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                    }
                  >
                    1
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectLegsIntensity(5)}
                style={[
                  styles.intensityOption,
                  { opacity: muscleGroupsData.legsIntensity === 5 ? 1 : 0.5 },
                ]}
              >
                <LinearGradient
                  colors={themeData.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                  start={(0, 0.4)}
                  end={(0, 1)}
                  style={
                    muscleGroupsData.legsIntensity === 5
                      ? [
                          styles.optionActiveBorder,
                          {
                            borderColor:
                              themeData.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                          },
                        ]
                      : styles.optionInactiveBorder
                  }
                >
                  <Text
                    style={
                      muscleGroupsData.legsIntensity === 5
                        ? [
                            styles.optionTextActive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                        : [
                            styles.optionTextInactive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                    }
                  >
                    5
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectLegsIntensity(10)}
                style={[
                  styles.intensityOption,
                  { opacity: muscleGroupsData.legsIntensity === 10 ? 1 : 0.5 },
                ]}
              >
                <LinearGradient
                  colors={themeData.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                  start={(0, 0.4)}
                  end={(0, 1)}
                  style={
                    muscleGroupsData.legsIntensity === 10
                      ? [
                          styles.optionActiveBorder,
                          {
                            borderColor:
                              themeData.OPTION_DOT_BORDER_ACTIVE_PRIMARY,
                          },
                        ]
                      : styles.optionInactiveBorder
                  }
                >
                  <Text
                    style={
                      muscleGroupsData.legsIntensity === 10
                        ? [
                            styles.optionTextActive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                        : [
                            styles.optionTextInactive,
                            { color: themeData.TEXT_PRIMARY },
                          ]
                    }
                  >
                    10
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={styles.bottomButtonContainer}>
          {muscleGroupsData.chestIntensity === 1 ||
          muscleGroupsData.armsIntensity === 1 ||
          muscleGroupsData.backIntensity === 1 ||
          muscleGroupsData.legsIntensity === 1 ||
          muscleGroupsData.chestIntensity === 5 ||
          muscleGroupsData.armsIntensity === 5 ||
          muscleGroupsData.backIntensity === 5 ||
          muscleGroupsData.legsIntensity === 5 ||
          muscleGroupsData.chestIntensity === 10 ||
          muscleGroupsData.armsIntensity === 10 ||
          muscleGroupsData.backIntensity === 10 ||
          muscleGroupsData.legsIntensity === 10 ? (
            <TouchableOpacity
              style={styles.button}
              onPress={onPressStartWorkout}
            >
              <GlossyButton
                height={50}
                width={"100%"}
                text="Start Workout"
                colors={themeData.BUTTON_BLEND_PRIMARY}
              />
            </TouchableOpacity>
          ) : null}
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
  button: {
    width: "50%",
    height: 50,
    marginTop: 20,
    alignSelf: "center",
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
    height: 40,
  },
  option: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  intensityOptionStack: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  optionLabel: {
    fontSize: 22,
    fontWeight: "bold",
    justifySelf: "center",
    alignSelf: "center",
  },
  optionTextInactive: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
    opacity: 0.5,
  },
  optionTextActive: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
  },
  optionInactiveBorder: {
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  optionActiveBorder: {
    width: 42,
    height: 42,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  bottomButtonContainer: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  intensityOption: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  muscleGroupsData: state.workoutCreator.muscleGroupsData,
  themeData: state.theme.themeData,
});

export default connect(mapStateToProps, {
  getMuscleGroups,
  getTheme,
})(SelectIntensityModal);
