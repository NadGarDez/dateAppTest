import { CollapseFigure, ExpandFigure, InfoFigure } from "@/assets/svg/figures";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const styles = StyleSheet.create({
  buttom: {
    display: "flex",
    flexDirection: "row",
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: "#ff6b86",
  },
});

interface props {
  onChange: (value: boolean) => void;
}

export const ExpandButton = ({ onChange }: props): JSX.Element => {
  const [opened, setOpened] = useState<boolean>(false);

  const scale = useSharedValue<number>(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));



  const manage = () => {
    setOpened(!opened);
    onChange(!opened);
  };

  const localOnPress = () => {
    manage();
    scale.value = withSequence(
      withTiming(0.8, {
        duration: 100,
      }),
      withTiming(1.1, {})
    );
  };

  return (
    <TouchableWithoutFeedback onPress={localOnPress}>
      <Animated.View style={[styles.buttom, animatedStyle]}>
        {opened ? <CollapseFigure /> : <ExpandFigure />}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
