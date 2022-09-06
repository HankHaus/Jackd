import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { colors } from "../../constants/theme";
const { WHITE } = colors;
const WeightInputs = ({ onChangeBarWeight, onChangeDesiredWeight }) => {
  return (
    <>
      <View style={styles.inputContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Bar Weight:</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.weightInputField}
            onChangeText={onChangeBarWeight}
          >
            {/* {check(barWeight)} */}
          </TextInput>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Desired Weight:</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.weightInputField}
            onChangeText={onChangeDesiredWeight}
          >
            {/* {check(desiredWeight)} */}
          </TextInput>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "center",
    // backgroundColor: "#000",
  },
  label: {
    fontFamily: "Oswald_400Regular",
    color: WHITE,
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  row: {
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    width: "80%",
    justifyContent: "space-between",
  },
  weightInputField: {
    color: WHITE,
    fontSize: 25,
    borderWidth: 1,
    textAlign: "center",
    borderBottomColor: WHITE,
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    width: "30%",
    alignSelf: "center",
  },
});

export default WeightInputs;
