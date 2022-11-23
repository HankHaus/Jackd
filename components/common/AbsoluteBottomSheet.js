import React, {
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT / 1.2;
const AbsoluteBottomSheet = forwardRef(
  (
    {
      viewPosition,
      onPressClose,
      disabled,
      title,
      containerBackgroundColor,
      showHeader,
      showCloseButton,
      closeButtonColor,
      contentContainerStyle,
      children,
      sheetStyle,
      contentBackgroundColor,
      backgroundColor,
      paneBackgroundColor,
      showPane,
      startingHeight,
      onSlideOut,
    },
    ref
  ) => {
    const STARTING_SHEET_HEIGHT = startingHeight || -SCREEN_HEIGHT / 2;
    const translateY = useSharedValue(0);
    const context = useSharedValue({ y: 0 });

    useEffect(() => {
      scrollTo(STARTING_SHEET_HEIGHT);
    }, []);

    const checkTranslationY = useCallback(() => {
      return translateY.value;
    }, []);

    const scrollTo = useCallback((destination) => {
      "worklet";

      translateY.value = withSpring(destination, { damping: 50 });
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, checkTranslationY }), [
      scrollTo,
      checkTranslationY,
    ]);

    const handleGesture = Gesture.Pan()
      .enabled(!disabled)
      .onStart(() => {
        context.value = { y: translateY.value };
      })
      .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        runOnJS(Keyboard.dismiss)();
        if (
          translateY.value < STARTING_SHEET_HEIGHT / 2 &&
          translateY.value > -SCREEN_HEIGHT / 2
        ) {
          scrollTo(STARTING_SHEET_HEIGHT);
        } else if (translateY.value > -SCREEN_HEIGHT / 1.5) {
          scrollTo(0);
          runOnJS(onSlideOut)(Math.round(translateY.value));
        } else if (translateY.value < -SCREEN_HEIGHT / 2.5) {
          scrollTo(MAX_TRANSLATE_Y);
        }
      });

    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolate.CLAMP
      );
      const opacity = interpolate(
        translateY.value,
        [STARTING_SHEET_HEIGHT, 0],
        [1, 0],
        Extrapolate.CLAMP
      );
      return {
        // borderRadius,
        // opacity,
        height: -translateY.value,
        transform: [{ translateY: translateY.value }],
      };
    });

    const rBottomWrapperSheetStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        translateY.value,
        [STARTING_SHEET_HEIGHT, 0],
        [0.7, 0],
        Extrapolate.CLAMP
      );
      return {
        backgroundColor: `rgba(0, 0, 0, ${opacity.toString()})`,
        // opacity,
      };
    });

    const customContainerStyle = {
      backgroundColor: backgroundColor || "red",
    };

    const customPaneStyle = {
      backgroundColor: paneBackgroundColor || "red",
    };

    return (
      <Animated.View style={[rBottomWrapperSheetStyle, styles.modalStyle]}>
        <TouchableWithoutFeedback disabled={disabled}>
          <View style={styles.blankWrapper} />
        </TouchableWithoutFeedback>
        <GestureDetector gesture={handleGesture}>
          <Animated.View
            style={[
              customContainerStyle,
              styles.bottomSheetContainer,
              rBottomSheetStyle,
            ]}
          >
            {showPane && (
              <View style={[customPaneStyle, styles.linepaneStyle]} />
            )}
            {children}
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  modalStyle: {
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    ...StyleSheet.absoluteFillObject,
    // bottom: 0,
    position: "absolute",
    // top: 0,
    zIndex: 100000000000000000000000,
    bottom: 0,
    // left: 0,
    width: "100%",
    // height: "130%",
    // backgroundColor: "green",
    // marginBottom: -50,
  },
  blankWrapper: {
    flex: 1,
  },
  bottomSheetContainer: {
    width: "100%",
    position: "absolute",
    top: Platform.OS === "ios" ? SCREEN_HEIGHT : 40 + SCREEN_HEIGHT,
    overflow: "hidden",
    // borderRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // marginBottom: 80,
    // height: 9999,
  },
  linepaneStyle: {
    width: 75,
    height: 4,
    borderRadius: 2,
    alignSelf: "center",
    marginVertical: 10,
    zIndex: 100000000000000,
  },
});

export default AbsoluteBottomSheet;
