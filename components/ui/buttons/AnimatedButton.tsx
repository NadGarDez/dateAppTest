import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface props {
  children: JSX.Element;
  onPress: () => void;
}

export const AnimatedButton = (props: props): JSX.Element => {
  const { children, onPress } = props;

  const scale = useSharedValue<number>(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const localOnPress = () => {
    scale.value = withSequence(
      withTiming(0.8, {
        duration: 100,
      }),
      withSpring(1.1, {
        duration: 100,
      })
    );
    onPress();
  };

  return (
    <TouchableWithoutFeedback onPress={localOnPress}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  );
};
