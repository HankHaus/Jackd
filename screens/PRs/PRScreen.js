import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { getTheme } from "../../src/actions";
import { PR, PRMODAL } from "./PRComponents/index";
import AbsoluteBottomSheet from "../../components/common/AbsoluteBottomSheet";
import { Ionicons } from "@expo/vector-icons";
const SCREEN_WIDTH = Dimensions.get("window").width;
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const PRScreen = ({ navigation, selectedTheme }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [showOverheadBarbellPressModal, setShowOverheadBarbellPressModal] =
    useState(false);
  const [showBenchPressModal, setShowBenchPressModal] = useState(false);
  const [showDeadliftModal, setShowDeadliftModal] = useState(false);
  const [showBarbellRowModal, setShowBarbellRowModal] = useState(false);
  const [showSquatModal, setShowSquatModal] = useState(false);

  ////////////////////////////////////////////////////////////////////////

  const bottomSheetRefOverheadBarbellPress = useRef(null);
  const bottomSheetRefBenchPress = useRef(null);
  const bottomSheetRefDeadlift = useRef(null);
  const bottomSheetRefBarbellRow = useRef(null);
  const bottomSheetRefSquat = useRef(null);

  ////////////////////////////////////////////////////////////////////////

  const handleCloseBottomOverheadBarbellPress = (item) => {
    const checkType = typeof item;
    if (checkType !== "number") {
      bottomSheetRefOverheadBarbellPress.current.scrollTo(0);
    }
    setTimeout(() => {
      setShowOverheadBarbellPressModal(false);
      setDisplayModal(false);
    }, 500);
  };
  const handleCloseBottomBenchPress = (item) => {
    const checkType = typeof item;
    if (checkType !== "number") {
      bottomSheetRefBenchPress.current.scrollTo(0);
    }
    setTimeout(() => {
      setShowBenchPressModal(false);
      setDisplayModal(false);
    }, 500);
  };
  const handleCloseBottomDeadlift = (item) => {
    const checkType = typeof item;
    if (checkType !== "number") {
      bottomSheetRefDeadlift.current.scrollTo(0);
    }
    setTimeout(() => {
      setShowDeadliftModal(false);
      setDisplayModal(false);
    }, 500);
  };
  const handleCloseBottomBarbellRow = (item) => {
    const checkType = typeof item;
    if (checkType !== "number") {
      bottomSheetRefBarbellRow.current.scrollTo(0);
    }
    setTimeout(() => {
      setShowBarbellRowModal(false);
      setDisplayModal(false);
    }, 500);
  };
  const handleCloseBottomSquat = (item) => {
    const checkType = typeof item;
    if (checkType !== "number") {
      bottomSheetRefSquat.current.scrollTo(0);
    }
    setTimeout(() => {
      setShowSquatModal(false);
      setDisplayModal(false);
    }, 500);
  };

  ////////////////////////////////////////////////////////////////////////
  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={selectedTheme.BACKGROUND_BLEND_PRIMARY}
        start={[0.8, 0.9]}
        end={[1, 0.1]}
      >
        <ScrollView>
          <TouchableOpacity
            style={styles.backButtonWrap}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="chevron-back-sharp"
              size={SCREEN_WIDTH / 15}
              color={selectedTheme.theme === "dark" ? "white" : "black"}
              style={styles.backButton}
            />
          </TouchableOpacity>
          <Text style={[styles.heading, { color: selectedTheme.TEXT_PRIMARY }]}>
            PRs
          </Text>
          <PR
            title={"Overhead Barbell Press"}
            weightItem={"overheadBarbellPressWeight"}
            repsItem={"overheadBarbellPressReps"}
            displayModal={displayModal}
            onPress={() => {
              setShowOverheadBarbellPressModal(true);
              setDisplayModal(true);
            }}
          />
          <PR
            title={"Bench Press"}
            weightItem={"benchPressWeight"}
            repsItem={"benchPressReps"}
            displayModal={displayModal}
            onPress={() => {
              setShowBenchPressModal(true);
              setDisplayModal(true);
            }}
          />
          <PR
            title={"Deadlift"}
            weightItem={"deadliftWeight"}
            repsItem={"deadliftReps"}
            displayModal={displayModal}
            onPress={() => {
              setShowDeadliftModal(true);
              setDisplayModal(true);
            }}
          />
          <PR
            title={"Barbell Row"}
            weightItem={"barbellRowWeight"}
            repsItem={"barbellRowReps"}
            displayModal={displayModal}
            onPress={() => {
              setShowBarbellRowModal(true);
              setDisplayModal(true);
            }}
          />
          <PR
            title={"Squat"}
            weightItem={"squatWeight"}
            repsItem={"squatReps"}
            displayModal={displayModal}
            onPress={() => {
              setShowSquatModal(true);
              setDisplayModal(true);
            }}
          />
        </ScrollView>
        {showOverheadBarbellPressModal && (
          <AbsoluteBottomSheet
            ref={bottomSheetRefOverheadBarbellPress}
            onSlideOut={handleCloseBottomOverheadBarbellPress}
            onPressClose={handleCloseBottomOverheadBarbellPress}
            startingHeight={-SCREEN_HEIGHT / 1.2}
          >
            <PRMODAL
              title={"Overhead Barbell Press"}
              weightItem={"overheadBarbellPressWeight"}
              repsItem={"overheadBarbellPressReps"}
            />
          </AbsoluteBottomSheet>
        )}
        {showBenchPressModal && (
          <AbsoluteBottomSheet
            ref={bottomSheetRefBenchPress}
            onSlideOut={handleCloseBottomBenchPress}
            onPressClose={handleCloseBottomBenchPress}
            startingHeight={-SCREEN_HEIGHT / 1.2}
          >
            <PRMODAL
              title={"Bench Press"}
              weightItem={"benchPressWeight"}
              repsItem={"benchPressReps"}
            />
          </AbsoluteBottomSheet>
        )}
        {showDeadliftModal && (
          <AbsoluteBottomSheet
            ref={bottomSheetRefDeadlift}
            onSlideOut={handleCloseBottomDeadlift}
            onPressClose={handleCloseBottomDeadlift}
            startingHeight={-SCREEN_HEIGHT / 1.2}
          >
            <PRMODAL
              title={"Deadlift"}
              weightItem={"deadliftWeight"}
              repsItem={"deadliftReps"}
            />
          </AbsoluteBottomSheet>
        )}
        {showBarbellRowModal && (
          <AbsoluteBottomSheet
            ref={bottomSheetRefBarbellRow}
            onSlideOut={handleCloseBottomBarbellRow}
            onPressClose={handleCloseBottomBarbellRow}
            startingHeight={-SCREEN_HEIGHT / 1.2}
          >
            <PRMODAL
              title={"Barbell Row"}
              weightItem={"barbellRowWeight"}
              repsItem={"barbellRowReps"}
            />
          </AbsoluteBottomSheet>
        )}
        {showSquatModal && (
          <AbsoluteBottomSheet
            ref={bottomSheetRefSquat}
            onSlideOut={handleCloseBottomSquat}
            onPressClose={handleCloseBottomSquat}
            startingHeight={-SCREEN_HEIGHT / 1.2}
          >
            <PRMODAL
              title={"Squat"}
              weightItem={"squatWeight"}
              repsItem={"squatReps"}
            />
          </AbsoluteBottomSheet>
        )}
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SCREEN_WIDTH / 6,
  },
  heading: {
    fontSize: SCREEN_WIDTH / 10,
    textAlign: "center",
    fontFamily: "Oswald_500Medium",
    marginBottom: SCREEN_WIDTH / 10,
  },
  backButtonWrap: {
    marginLeft: SCREEN_WIDTH / 30,
    width: SCREEN_WIDTH / 10,
  },
  backButton: {
    marginLeft: "5%",
  },
});

const mapStateToProps = (state) => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps, {
  getTheme,
})(PRScreen);
