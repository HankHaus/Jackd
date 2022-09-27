import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../constants/theme";
import logo3 from "../../assets/logo3.png";
const { TEXT_BURGUNDY } = colors;
const Header = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Image source={logo3} style={styles.logo} />
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
  logo: {
    width: "100%",
    height: 150,
  },
});

export default Header;
