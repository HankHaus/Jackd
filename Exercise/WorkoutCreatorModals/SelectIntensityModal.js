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
import { GlossyButton } from "../../components/common";
const viewPosition = -500;
const { WHITE, LIGHT_SILVER_BLUE, SILVER_BLUE } = colors;

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
  onPressStartWorkout,
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
              {chest1 && (
                <TouchableOpacity onPress={setChest1}>
                  <LinearGradient
                    colors={["#FE96FF", "#FF0083"]}
                    start={(0, 0.4)}
                    end={(0, 1)}
                    style={styles.optionActiveBorder}
                  >
                    <Text style={styles.optionTextActive}>1</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {!chest1 && (
                <TouchableOpacity style={styles.number} onPress={setChest1}>
                  <Text style={styles.optionTextInactive}>1</Text>
                </TouchableOpacity>
              )}
              {chest5 && (
                <TouchableOpacity onPress={setChest5}>
                  <LinearGradient
                    colors={["#FE96FF", "#FF0083"]}
                    start={(0, 0.4)}
                    end={(0, 1)}
                    style={styles.optionActiveBorder}
                  >
                    <Text style={styles.optionTextActive}>5</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {!chest5 && (
                <TouchableOpacity style={styles.number} onPress={setChest5}>
                  <Text style={styles.optionTextInactive}>5</Text>
                </TouchableOpacity>
              )}
              {chest10 && (
                <TouchableOpacity onPress={setChest10}>
                  <LinearGradient
                    colors={["#FE96FF", "#FF0083"]}
                    start={(0, 0.4)}
                    end={(0, 1)}
                    style={styles.optionActiveBorder}
                  >
                    <Text style={styles.optionTextActive}>10</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {!chest10 && (
                <TouchableOpacity style={styles.number} onPress={setChest10}>
                  <Text style={styles.optionTextInactive}>10</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
        {back && (
          <View style={styles.option}>
            <Text style={styles.optionLabel}>Back:</Text>
            <View style={styles.intensityOptionStack}>
              {back1 && (
                <TouchableOpacity onPress={setBack1}>
                  <LinearGradient
                    colors={["#FE96FF", "#FF0083"]}
                    start={(0, 0.4)}
                    end={(0, 1)}
                    style={styles.optionActiveBorder}
                  >
                    <Text style={styles.optionTextActive}>1</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {!back1 && (
                <TouchableOpacity style={styles.number} onPress={setBack1}>
                  <Text style={styles.optionTextInactive}>1</Text>
                </TouchableOpacity>
              )}
              {back5 && (
                <TouchableOpacity onPress={setBack5}>
                  <LinearGradient
                    colors={["#FE96FF", "#FF0083"]}
                    start={(0, 0.4)}
                    end={(0, 1)}
                    style={styles.optionActiveBorder}
                  >
                    <Text style={styles.optionTextActive}>5</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {!back5 && (
                <TouchableOpacity style={styles.number} onPress={setBack5}>
                  <Text style={styles.optionTextInactive}>5</Text>
                </TouchableOpacity>
              )}
              {back10 && (
                <TouchableOpacity onPress={setBack10}>
                  <LinearGradient
                    colors={["#FE96FF", "#FF0083"]}
                    start={(0, 0.4)}
                    end={(0, 1)}
                    style={styles.optionActiveBorder}
                  >
                    <Text style={styles.optionTextActive}>10</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {!back10 && (
                <TouchableOpacity style={styles.number} onPress={setBack10}>
                  <Text style={styles.optionTextInactive}>10</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
        {arms && (
          <View style={styles.option}>
            <Text style={styles.optionLabel}>Arms:</Text>
            <View style={styles.intensityOptionStack}>
              {arms1 && (
                <TouchableOpacity onPress={setArms1}>
                  <LinearGradient
                    colors={["#FE96FF", "#FF0083"]}
                    start={(0, 0.4)}
                    end={(0, 1)}
                    style={styles.optionActiveBorder}
                  >
                    <Text style={styles.optionTextActive}>1</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {!arms1 && (
                <TouchableOpacity style={styles.number} onPress={setArms1}>
                  <Text style={styles.optionTextInactive}>1</Text>
                </TouchableOpacity>
              )}
              {arms5 && (
                <TouchableOpacity onPress={setArms5}>
                  <LinearGradient
                    colors={["#FE96FF", "#FF0083"]}
                    start={(0, 0.4)}
                    end={(0, 1)}
                    style={styles.optionActiveBorder}
                  >
                    <Text style={styles.optionTextActive}>5</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {!arms5 && (
                <TouchableOpacity style={styles.number} onPress={setArms5}>
                  <Text style={styles.optionTextInactive}>5</Text>
                </TouchableOpacity>
              )}
              {arms10 && (
                <TouchableOpacity onPress={setArms10}>
                  <LinearGradient
                    colors={["#FE96FF", "#FF0083"]}
                    start={(0, 0.4)}
                    end={(0, 1)}
                    style={styles.optionActiveBorder}
                  >
                    <Text style={styles.optionTextActive}>10</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {!arms10 && (
                <TouchableOpacity style={styles.number} onPress={setArms10}>
                  <Text style={styles.optionTextInactive}>10</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
        {legs && (
          <View style={styles.option}>
            <Text style={styles.optionLabel}>Legs:</Text>
            <View style={styles.intensityOptionStack}>
              {legs1 && (
                <TouchableOpacity onPress={setLegs1}>
                  <LinearGradient
                    colors={["#FE96FF", "#FF0083"]}
                    start={(0, 0.4)}
                    end={(0, 1)}
                    style={styles.optionActiveBorder}
                  >
                    <Text style={styles.optionTextActive}>1</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {!legs1 && (
                <TouchableOpacity style={styles.number} onPress={setLegs1}>
                  <Text style={styles.optionTextInactive}>1</Text>
                </TouchableOpacity>
              )}
              {legs5 && (
                <TouchableOpacity onPress={setLegs5}>
                  <LinearGradient
                    colors={["#FE96FF", "#FF0083"]}
                    start={(0, 0.4)}
                    end={(0, 1)}
                    style={styles.optionActiveBorder}
                  >
                    <Text style={styles.optionTextActive}>5</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {!legs5 && (
                <TouchableOpacity style={styles.number} onPress={setLegs5}>
                  <Text style={styles.optionTextInactive}>5</Text>
                </TouchableOpacity>
              )}
              {legs10 && (
                <TouchableOpacity onPress={setLegs10}>
                  <LinearGradient
                    colors={["#FE96FF", "#FF0083"]}
                    start={(0, 0.4)}
                    end={(0, 1)}
                    style={styles.optionActiveBorder}
                  >
                    <Text style={styles.optionTextActive}>10</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {!legs10 && (
                <TouchableOpacity style={styles.number} onPress={setLegs10}>
                  <Text style={styles.optionTextInactive}>10</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
        {arms1 ||
        arms5 ||
        arms10 ||
        legs1 ||
        legs5 ||
        legs10 ||
        back1 ||
        back5 ||
        back10 ||
        chest1 ||
        chest5 ||
        chest10 ? (
          <TouchableOpacity style={styles.button} onPress={onPressStartWorkout}>
            <GlossyButton
              height={50}
              width={"100%"}
              text="Start Workout"
              colorOne={LIGHT_SILVER_BLUE}
              colorTwo={SILVER_BLUE}
            />
          </TouchableOpacity>
        ) : null}

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
    marginTop: 20,
    height: 20,
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
  number: {
    // backgroundColor: "red",
    width: 35,
    height: 35,
    justifyContent: "center",
  },
});

export default SelectINtensityModal;
