import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import { getTheme } from "../../src/actions";
const WeightInputs = ({
  onChangeBarWeight,
  onChangeDesiredWeight,
  selectedTheme,
}) => {
  return (
    <>
      <View style={styles.inputContainer}>
        <View style={styles.row}>
          <Text style={[styles.label, { color: selectedTheme.TEXT_PRIMARY }]}>
            Bar Weight:
          </Text>
          <TextInput
            keyboardType="numeric"
            style={[
              styles.weightInputField,
              {
                color: selectedTheme.TEXT_PRIMARY,
                borderBottomColor: selectedTheme.TEXT_PRIMARY,
              },
            ]}
            onChangeText={onChangeBarWeight}
          ></TextInput>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: selectedTheme.TEXT_PRIMARY }]}>
            Desired Weight:
          </Text>
          <TextInput
            keyboardType="numeric"
            style={[
              styles.weightInputField,
              {
                color: selectedTheme.TEXT_PRIMARY,
                borderBottomColor: selectedTheme.TEXT_PRIMARY,
              },
            ]}
            onChangeText={onChangeDesiredWeight}
          ></TextInput>
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
  },
  label: {
    fontFamily: "Oswald_400Regular",
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
    fontSize: 25,
    borderWidth: 1,
    textAlign: "center",
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    width: "30%",
    alignSelf: "center",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(WeightInputs);
