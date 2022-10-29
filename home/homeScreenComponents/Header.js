import React from "react";
import { View, StyleSheet, Image } from "react-native";
import logo3 from "../../assets/logo3.png";
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
    paddingVertical: 5,
    marginTop: "12%",
  },

  logo: {
    width: "88%",
    height: 120,
    resizeMode: "cover",
  },
});

export default Header;
