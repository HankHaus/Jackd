import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { getTheme } from "../../../src/actions";

const SCREEN_WIDTH = Dimensions.get("window").width;
const PRMODAL = ({ selectedTheme, weightItem, repsItem, title }) => {
  const [weight, setWeight] = useState(null);
  const [reps, setReps] = useState(null);

  const storeWeight = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      const jsonKey = JSON.stringify(weightItem);
      await AsyncStorage.setItem(jsonKey, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  const storeReps = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      const jsonKey = JSON.stringify(repsItem);
      await AsyncStorage.setItem(jsonKey, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    weight !== null && storeWeight(weight);
    weight === null && storeWeight(0);
  }, [weight]);

  useEffect(() => {
    reps !== null && storeReps(reps);
    reps === null && storeReps(0);
  }, [reps]);

  return (
    <>
      <TouchableWithoutFeedback
        activeOpacity={1}
        onPress={() => Keyboard.dismiss()}
      >
        <LinearGradient
          colors={selectedTheme.SELECTED_OPTION_DOT_BLEND_PRIMARY}
          start={[0.2, 1.8]}
          end={[0.0, 0.0]}
          style={styles.modalBackground}
        >
          <View
            style={[
              styles.topBar,
              {
                backgroundColor: selectedTheme.MODAL_TOP_BAR,
              },
            ]}
          />
          <Text style={styles.header}>Enter Your new {title} PR</Text>
          <View style={styles.inputContainerWrapper}>
            <View style={styles.inputShape}>
              <LinearGradient
                colors={selectedTheme.INPUT_BLEND_PRIMARY}
                start={[0, 0.8]}
                end={[0, 0]}
                style={styles.inputFill}
              >
                <TextInput
                  keyboardType="numeric"
                  style={[
                    styles.weightInputField,
                    {
                      color: selectedTheme.WEIGHT_INPUT_TEXT_PRIMARY,
                    },
                  ]}
                  onChangeText={(text) => setWeight(text)}
                  maxLength={4}
                >
                  <Text>{weight}</Text>
                </TextInput>
              </LinearGradient>
            </View>
            <Text style={styles.text}>lbs</Text>
            <Text style={styles.text}>X</Text>
            <View style={styles.inputShape}>
              <LinearGradient
                colors={selectedTheme.INPUT_BLEND_PRIMARY}
                start={[0, 0.8]}
                end={[0, 0]}
                style={styles.inputFill}
              >
                <TextInput
                  keyboardType="numeric"
                  style={[
                    styles.weightInputField,
                    {
                      color: selectedTheme.WEIGHT_INPUT_TEXT_PRIMARY,
                    },
                  ]}
                  onChangeText={(text) => setReps(text)}
                  maxLength={4}
                >
                  <Text>{reps}</Text>
                </TextInput>
              </LinearGradient>
            </View>
            <Text style={styles.text}>Reps</Text>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainerWrapper: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    top: "30%",
    alignItems: "center",
  },
  weightInputField: {
    fontSize: SCREEN_WIDTH / 12,
    flex: 1,
  },
  inputFill: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  inputShape: {
    width: "25%",
    height: "100%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },

  text: {
    fontSize: SCREEN_WIDTH / 16,
    textAlign: "center",
    fontFamily: "Oswald_500Medium",
  },

  header: {
    fontSize: SCREEN_WIDTH / 14,
    textAlign: "center",
    fontFamily: "Oswald_500Medium",
    position: "absolute",
    top: "15%",
  },

  topBar: {
    height: 7,
    width: "30%",
    position: "absolute",
    top: 10,
    alignSelf: "center",
    borderRadius: 50,
  },
  modalBackground: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(PRMODAL);
