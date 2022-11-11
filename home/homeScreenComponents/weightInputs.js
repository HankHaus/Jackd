import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import { getTheme } from "../../src/actions";
import { LinearGradient } from "expo-linear-gradient";
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
                onChangeText={onChangeBarWeight}
                maxLength={3}
              ></TextInput>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: selectedTheme.TEXT_PRIMARY }]}>
            Desired Weight:
          </Text>
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
                maxLength={5}
                onChangeText={onChangeDesiredWeight}
              ></TextInput>
            </LinearGradient>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    alignSelf: "center",
    height: 100,
    marginTop: "12%",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "Oswald_400Regular",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  row: {
    marginBottom: 20,
    alignSelf: "center",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  weightInputField: {
    fontSize: 25,
    flex: 1,
  },
  inputShape: {
    width: 100,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
  inputFill: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    borderRadius: 50,
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(WeightInputs);
