import React, { useEffect } from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import Animated, { useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import styled from "styled-components/native";

interface props {
  children: JSX.Element;
  active: boolean;
  onPress: () => void;
  message: string
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width: 58,
    height: 58,
    borderRadius: 27,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyles: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 34,
    letterSpacing: 0,
  },
});

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FilterItem = (props: props): JSX.Element => {
  const { children, active, onPress, message } = props;
  const opacity = useSharedValue<number>(active ? 1 : 0.5);
  const borderColor = useSharedValue<string>(active ? "#ffb1c7" : "#ffb1c700");
  const color = useSharedValue<string>(active ? "#FFF" : "transparent");

  useEffect(() => {
    if (active) {
      opacity.value = withTiming(1, {
        duration: 400
      });
      borderColor.value = withTiming("#ffb1c7", {
        duration:400
      });
      color.value = withSpring("#FFF",{
        duration: 400
      });
    } else {
      opacity.value = withTiming(0.5, {
        duration: 400
      });
      borderColor.value = withTiming("#ffb1c700", {
        duration: 400
      });
      color.value = withTiming("transparent",{
        duration: 400
      });
    }
  }, [active]);

  return (
    <Container>
      <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View
          style={{
            ...styles.container,
            opacity,
            borderColor,
          }}
        >
          {children}
        </Animated.View>
      </TouchableWithoutFeedback>

      <Animated.Text
        style={{
          ...styles.textStyles,
          color,
        }}
      >
        {message}
      </Animated.Text>
    </Container>
  );
};
