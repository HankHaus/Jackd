import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "../../constants/theme";

const { TEXT_BLACK, BLACK, TRANSPARENT } = colors;

const { height } = Dimensions.get("window");

const LinearBottomSheet = ({
  viewPosition,
  onPressClose,
  disabled,
  contentContainerStyle,
  children,
  sheetStyle,
  linearStyle,
  borderRadius,
}) => {
  const sliderInView = useRef(new Animated.Value(viewPosition)).current;

  useEffect(() => {
    Animated.timing(sliderInView, {
      toValue: 0,
      friction: 3,
      useNativeDriver: false,
    }).start();
  }, []);

  const borderTopRightRadius = borderRadius || 50;
  const borderTopLeftRadius = borderRadius || 50;

  return (
    <LinearGradient
      colors={[BLACK, "transparent"]}
      start={[0, 0.7]}
      end={[0, 0.0]}
      style={[contentContainerStyle, styles.container]}
    >
      <TouchableWithoutFeedback onPress={onPressClose} disabled={disabled}>
        <View style={styles.blankWrapper} />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          { bottom: sliderInView, maxHeight: height - 150 },
          sheetStyle,
          styles.contentWrapper,
        ]}
      >
        <LinearGradient
          colors={["#6C464F", "#B891A9"]}
          start={[1, 1.4]}
          end={[1, 0]}
          style={[
            { borderTopRightRadius, borderTopLeftRadius },
            linearStyle,
            styles.linearWrapper,
          ]}
        >
          {children}
        </LinearGradient>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blankWrapper: {
    flex: 1,
  },
  contentWrapper: {
    width: "100%",
    backgroundColor: TRANSPARENT,
    shadowColor: BLACK,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 5,
    position: "absolute",
  },
  linearWrapper: {
    width: "100%",
  },
  headerWrapper: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTextStyle: {
    fontFamily: "PoppinsBold",
    fontSize: 12,
    color: TEXT_BLACK,
    paddingVertical: 10,
  },
  closeButtonStyle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default LinearBottomSheet;
