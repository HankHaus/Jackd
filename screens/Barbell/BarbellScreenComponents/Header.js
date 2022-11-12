import React from "react";
import { View, StyleSheet, Image } from "react-native";
import logo3 from "../../../assets/logo3.png";
import DARK_MODE_LOGO from "../../../assets/DARK_MODE_LOGO.png";
import { connect } from "react-redux";
import { getTheme } from "../../../src/actions";
const Header = ({ selectedTheme }) => {
  return (
    <>
      {selectedTheme.theme === "dark" ? (
        <View style={styles.titleContainer}>
          <Image source={DARK_MODE_LOGO} style={styles.logo} />
        </View>
      ) : (
        <View style={styles.titleContainer}>
          <Image source={logo3} style={styles.logo} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 5,
  },

  logo: {
    width: "88%",
    height: 120,
    resizeMode: "cover",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(Header);
