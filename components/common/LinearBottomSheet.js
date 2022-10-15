import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { getTheme } from "../../src/actions";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("window");

const LinearBottomSheet = ({
  themeData,
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
      colors={themeData.BEHIND_MODAL_BLEND_PRIMARY}
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
          { shadowColor: themeData.SHADOW_PRIMARY },
        ]}
      >
        <LinearGradient
          colors={themeData.MODAL_BACKGROUND_BLEND_PRIMARY}
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
    backgroundColor: "transparent",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 5,
    position: "absolute",
  },
  linearWrapper: {
    width: "100%",
  },
});

const mapStateToProps = (state) => ({
  themeData: state.theme.themeData,
});

export default connect(mapStateToProps, {
  getTheme,
})(LinearBottomSheet);
