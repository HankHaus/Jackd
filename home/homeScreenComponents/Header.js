import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/theme";
const { TEXT_BURGUNDY } = colors;
const Header = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Weight_Adder</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: "-10%",
    alignSelf: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Lobster_400Regular",
    alignSelf: "center",
    fontSize: 50,
    color: TEXT_BURGUNDY,
  },
});

export default Header;
