import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

// import { colors } from '../../constants/theme';
import { colors } from "../../constants/theme";
// import { SORT_MODAL_TYPE } from '../../constants/arrays';
import LinearBottomSheet from "../../components/common/LinearBottomSheet";
import { LinearGradient } from "expo-linear-gradient";
const viewPosition = -500;
const { WHITE } = colors;

const MuscleGroupsModal = ({
  visible,
  onPressClose,
  opacity,
  data,
  onPress,
}) => {
  const [chest, setChest] = useState(false);
  const [biceps, setBiceps] = useState(false);
  const [triceps, setTriceps] = useState(false);
  const [back, setBack] = useState(false);
  const [shoulders, setShoulders] = useState(false);
  const [forearms, setForearms] = useState(false);
  const [abs, setAbs] = useState(false);

  return (
    <View style={styles.modalStyle}>
      <LinearBottomSheet
        viewPosition={viewPosition}
        onPressClose={onPressClose}
        opacity={opacity}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Which Muscle Groups Do you want to focus on today?
          </Text>
        </View>

        <ScrollView style={styles.optionStack}>
          {chest && (
            <View style={styles.option}>
              <Text style={styles.optionText}>Chest</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setChest(!chest);
                }}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!chest && (
            <View style={styles.option}>
              <Text style={styles.optionTextInactive}>Chest</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setChest(!chest);
                }}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {back && (
            <View style={styles.option}>
              <Text style={styles.optionText}>Back</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setBack(!back);
                }}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!back && (
            <View style={styles.option}>
              <Text style={styles.optionTextInactive}>Back</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setBack(!back);
                }}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}

          {biceps && (
            <View style={styles.option}>
              <Text style={styles.optionText}>Biceps</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setBiceps(!biceps);
                }}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!biceps && (
            <View style={styles.option}>
              <Text style={styles.optionTextInactive}>Biceps</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setBiceps(!biceps);
                }}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {triceps && (
            <View style={styles.option}>
              <Text style={styles.optionText}>Triceps</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setTriceps(!triceps);
                }}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!triceps && (
            <View style={styles.option}>
              <Text style={styles.optionTextInactive}>Triceps</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setTriceps(!triceps);
                }}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {shoulders && (
            <View style={styles.option}>
              <Text style={styles.optionText}>Shoulders</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setShoulders(!shoulders);
                }}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!shoulders && (
            <View style={styles.option}>
              <Text style={styles.optionTextInactive}>Shoulders</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setShoulders(!shoulders);
                }}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {forearms && (
            <View style={styles.option}>
              <Text style={styles.optionText}>Forearms</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setForearms(!forearms);
                }}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!forearms && (
            <View style={styles.option}>
              <Text style={styles.optionTextInactive}>Forearms</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setForearms(!forearms);
                }}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {abs && (
            <View style={styles.option}>
              <Text style={styles.optionText}>Abs</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setAbs(!abs);
                }}
              >
                <View style={styles.optionDotBorder}>
                  <View style={styles.optionDot} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {!abs && (
            <View style={styles.option}>
              <Text style={styles.optionTextInactive}>Abs</Text>
              <TouchableOpacity
                style={styles.dotWrapper}
                onPress={() => {
                  setAbs(!abs);
                }}
              >
                <View style={styles.optionDotInactiveBorder}>
                  <View style={styles.optionDotInactive} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
        <View style={styles.spacer} />
      </LinearBottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
  flatListContentWrapper: {
    paddingHorizontal: 20,
    backgroundColor: "red",
  },

  titleContainer: {
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  optionStack: {
    width: "80%",
    height: 300,
    alignSelf: "center",
    marginTop: 20,
    // backgroundColor: "white",
  },
  spacer: {
    width: "100%",
    marginTop: 100,
  },
  option: {
    width: "55%",
    alignSelf: "center",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  optionTextInactive: {
    fontSize: 25,
    opacity: 0.4,
  },
  optionDotInactiveBorder: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginHorizontal: 10,
    backgroundColor: "blue",
    alignItems: "center",
    opacity: 0.4,
  },
  optionDotInactive: {
    width: 28,
    height: 28,
    borderRadius: 28,
    backgroundColor: "#9EFFB7",
    opacity: 0.4,
  },
  optionDotBorder: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginHorizontal: 10,
    backgroundColor: "blue",
    alignItems: "center",
  },
  optionDot: {
    width: 28,
    height: 28,
    borderRadius: 28,
    backgroundColor: "#9EFFB7",
  },
  dotWrapper: {
    flexDirection: "row",
  },
});

export default MuscleGroupsModal;
