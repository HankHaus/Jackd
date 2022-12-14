import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
  Keyboard,
  Text,
} from "react-native";
import { connect } from "react-redux";
import {
  getTheme,
  getMenuToggleStatus,
  getMuscleGroups,
} from "../../../src/actions";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const SCREEN_WIDTH = Dimensions.get("window").width;
const MenuButton = ({
  navigation,
  selectedTheme,
  menuToggleState,
  getMenuToggleStatus,
  getMuscleGroups,
  muscleGroupsData,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const moveSettingsButtonLeft = useRef(new Animated.Value(0)).current;
  const moveWeightButtonVertical = useRef(new Animated.Value(0)).current;
  const moveWeightButtonHorizontal = useRef(new Animated.Value(0)).current;
  const moveProfileButtonVertical = useRef(new Animated.Value(0)).current;
  const handleOpenMenu = () => {
    Keyboard.dismiss();
    getMenuToggleStatus({
      ...menuToggleState,
      open: true,
    });
  };
  const handleCollapseMenu = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1200,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      Animated.timing(moveSettingsButtonLeft, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();
    }, 600);

    setTimeout(() => {
      Animated.timing(moveWeightButtonVertical, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();
    }, 500);

    setTimeout(() => {
      Animated.timing(moveWeightButtonHorizontal, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();
    }, 500);
    setTimeout(() => {
      Animated.timing(moveProfileButtonVertical, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();
    }, 400);
    setTimeout(() => {
      getMenuToggleStatus({
        ...menuToggleState,
        open: false,
      });
    }, 1000);
  };

  useEffect(() => {
    if (menuToggleState.open) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      setTimeout(() => {
        Animated.timing(moveSettingsButtonLeft, {
          toValue: -SCREEN_WIDTH / 2.5,
          duration: 400,
          useNativeDriver: false,
        }).start();
      }, 400);
      setTimeout(() => {
        Animated.timing(moveWeightButtonHorizontal, {
          toValue: -SCREEN_WIDTH / 4,
          duration: 400,
          useNativeDriver: false,
        }).start();
      }, 500);
      setTimeout(() => {
        Animated.timing(moveWeightButtonVertical, {
          toValue: SCREEN_WIDTH / 4,
          duration: 400,
          useNativeDriver: false,
        }).start();
      }, 500);

      setTimeout(() => {
        Animated.timing(moveProfileButtonVertical, {
          toValue: SCREEN_WIDTH / 2.5,
          duration: 400,
          useNativeDriver: false,
        }).start();
      }, 600);
    } else {
      null;
    }
  }, [menuToggleState.open]);

  return (
    <>
      {menuToggleState.open === false && (
        <TouchableOpacity
          onPress={() => {
            handleOpenMenu();
          }}
          style={styles.menuButtonBacking}
        >
          <LinearGradient
            colors={selectedTheme.SELECTED_OPTION_DOT_BLEND_PRIMARY}
            start={[0, 0.8]}
            end={[0, 0]}
            style={styles.buttonFill}
          >
            <Entypo name="menu" size={SCREEN_WIDTH / 11} color={"white"} />
          </LinearGradient>
        </TouchableOpacity>
      )}
      {menuToggleState.open === true && (
        <>
          <TouchableOpacity
            onPress={() => {
              handleCollapseMenu();
            }}
            style={styles.menuButtonBacking}
          >
            <LinearGradient
              colors={selectedTheme.SELECTED_OPTION_DOT_BLEND_PRIMARY}
              start={[0, 0.8]}
              end={[0, 0]}
              style={styles.buttonFill}
            >
              <AntDesign
                name="close"
                size={SCREEN_WIDTH / 11}
                color={"white"}
              />
            </LinearGradient>
          </TouchableOpacity>
          <Animated.View
            style={[
              styles.startingPointForMenuOptions,
              {
                transform: [{ translateX: moveSettingsButtonLeft }],
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                handleCollapseMenu();
                navigation.navigate("SettingsScreen");
              }}
              style={[styles.settingButtonBacking]}
            >
              <LinearGradient
                colors={selectedTheme.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                start={[0, 0.8]}
                end={[0, 0]}
                style={styles.buttonFill}
              >
                <Ionicons
                  name="settings-sharp"
                  size={SCREEN_WIDTH / 13}
                  color={"white"}
                />
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={[
              styles.startingPointForMenuOptions,
              {
                transform: [
                  {
                    translateY: moveWeightButtonVertical,
                  },
                  {
                    translateX: moveWeightButtonHorizontal,
                  },
                ],
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                handleCollapseMenu();
                navigation.navigate("WorkoutCreator");
                getMuscleGroups({});
              }}
              style={[styles.settingButtonBacking]}
            >
              <LinearGradient
                colors={selectedTheme.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                start={[0, 0.8]}
                end={[0, 0]}
                style={styles.buttonFill}
              >
                <MaterialCommunityIcons
                  name="weight-lifter"
                  size={SCREEN_WIDTH / 14}
                  color={"white"}
                />
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={[
              styles.startingPointForMenuOptions,
              {
                transform: [
                  {
                    translateY: moveProfileButtonVertical,
                  },
                ],
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                handleCollapseMenu();
                navigation.navigate("PRScreen");
              }}
              style={[styles.settingButtonBacking]}
            >
              <LinearGradient
                colors={selectedTheme.SELECTED_OPTION_DOT_BLEND_PRIMARY}
                start={[0, 0.8]}
                end={[0, 0]}
                style={styles.buttonFill}
              >
                <Text style={styles.prText}>PR</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={[styles.overlayTest, { opacity: opacity }]} />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  startingPointForMenuOptions: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 2,
  },
  menuButtonBacking: {
    backgroundColor: "white",
    padding: 2,
    width: SCREEN_WIDTH / 8,
    height: SCREEN_WIDTH / 8,
    borderRadius: SCREEN_WIDTH / 8,
    position: "absolute",
    zIndex: 10,
    top: 50,
    right: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  settingButtonBacking: {
    backgroundColor: "white",
    padding: 2,
    width: SCREEN_WIDTH / 8,
    height: SCREEN_WIDTH / 8,
    borderRadius: SCREEN_WIDTH / 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  overlayTest: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  buttonFill: {
    width: "100%",
    height: "100%",
    borderRadius: SCREEN_WIDTH / 8,
    justifyContent: "center",
    alignItems: "center",
  },
  prText: {
    color: "white",
    fontSize: SCREEN_WIDTH / 20,
    fontFamily: "Oswald_700Bold",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
  menuToggleState: state.menu.menuToggleState,
  muscleGroupsData: state.workoutCreator.muscleGroupsData,
});

export default connect(mapStateToProps, {
  getTheme,
  getMenuToggleStatus,
  getMuscleGroups,
})(MenuButton);
