import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
  View,
} from "react-native";
import AbsoluteBottomSheet from "../../../components/common/AbsoluteBottomSheet";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { getTheme } from "../../../src/actions";
// import PRTESTMODAL from "./PRTESTMODAL";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const SCREEN_WIDTH = Dimensions.get("window").width;
const PR = ({
  navigation,
  selectedTheme,
  weightItem,
  repsItem,
  title,
  onPress,
  displayModal,
}) => {
  const [weight, setWeight] = useState(null);
  const [reps, setReps] = useState(null);
  const bottomSheetRef = useRef(null);
  const handleCloseBottom = (item) => {
    const checkTranslationY = bottomSheetRef.current.checkTranslationY();
    const checkType = typeof item;
    if (checkType !== "number") {
      bottomSheetRef.current.scrollTo(0);
    }
    setTimeout(() => {
      setDisplayModal(false);
    }, 500);
  };

  const getValues = async () => {
    const jsonKey = JSON.stringify(weightItem);
    const data = await AsyncStorage.getItem(jsonKey);
    if (data !== null) {
      setWeight(JSON.parse(data));
    }
    if (data === null) {
      setWeight(0);
    }
    const jsonKey2 = JSON.stringify(repsItem);
    const data2 = await AsyncStorage.getItem(jsonKey2);
    if (data2 !== null) {
      setReps(JSON.parse(data2));
    }
    if (data2 === null) {
      setReps(0);
    }
  };

  useEffect(() => {
    {
      !displayModal ? getValues() : null;
    }
  }, [displayModal]);

  return (
    <>
      <TouchableOpacity style={styles.shadow} onPress={onPress}>
        <LinearGradient
          colors={selectedTheme.SELECTED_OPTION_DOT_BLEND_PRIMARY}
          start={[0.2, 1.5]}
          end={[0.0, 0.0]}
          style={styles.border}
        >
          <LinearGradient
            colors={selectedTheme.PR_CARD_BLEND_PRIMARY}
            start={[0.0, 0.0]}
            end={[0.0, 0.2]}
            style={styles.wrapper}
          >
            <Text style={styles.label}>{title}</Text>
            <View style={styles.inputWrapper}>
              {<Text style={styles.byText}>{weight} lbs</Text>}
              <Text style={styles.byText}>X</Text>
              {<Text style={styles.byText}>{reps} reps</Text>}
            </View>
          </LinearGradient>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: SCREEN_WIDTH / 16,
    textAlign: "center",
    fontFamily: "Oswald_500Medium",
    marginBottom: "5%",
    color: "#000",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 30,
  },
  border: {
    width: "90%",
    alignSelf: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    width: "100%",
    alignSelf: "center",
    paddingVertical: "5%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SCREEN_WIDTH / 7,
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    height: SCREEN_WIDTH / 8,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  byText: {
    fontSize: SCREEN_WIDTH / 18,
    textAlign: "center",
    fontFamily: "Oswald_500Medium",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(PR);
