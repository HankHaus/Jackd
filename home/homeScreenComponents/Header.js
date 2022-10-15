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
    marginTop: "-10%",
    alignSelf: "center",
    justifyContent: "center",
  },

  logo: {
    width: "100%",
    height: 150,
  },
});

export default Header;
