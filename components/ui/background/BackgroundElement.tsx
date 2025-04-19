import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  LeftBottomFigure,
  LeftTopFigure,
  RightBottomFigure,
  RightTopFigure,
} from "@/assets/svg/figures";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import RootHeader from "../headers/rootHeader";

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    position: "relative",
  },
  image: {
    width: "50%",
    height: "50%",
    opacity: 0.5,
  },
  figure: {
    position: "fixed",
    top: 0,
    zIndex: 3,
  },
  gradientContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -3,
  },
  sideContainer: {
    position: "absolute",
    top: 0,
    width: width,
    height: "100%",
    zIndex: -1,
    backgroundColor: "#FFB1C7",
  },
  leftBottomStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -2,
  },
  rightBottomStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: -2,
  },
  rightTopStyle: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: -2,
  },
  leftTopStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -2,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 29,
    paddingBottom: 29,
  },
});

type types = "first" | "second" | "third";

const colors: Record<types, Array<string>> = {
  first: ["#7086E3", "#9072E5"],
  second: ["#FFB03A", "#FF6B86"],
  third: ["#FF58A4", "#FF6B86"],
};

interface props {
  type: types;
  children: JSX.Element;
}

export const BackgroundElement = (props: props): JSX.Element => {
  const [sideBarVisible, setSideBarVisible] = useState<boolean>(false);

  const left = useSharedValue<number>(-width);

  const traslateX = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => ({
    left: left.value,
  }));

  const traslationAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: traslateX.value,
      },
    ],
  }));

  const { type, children } = props;

  const showSideBar = () => {
    console.log("show");
    left.value = withTiming(0, {
      duration: 400,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });

    traslateX.value = withDelay(
      300,
      withTiming(width * 0.55, {
        duration: 400,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );
  };

  const hideSideBar = () => {
    left.value = withTiming(-width, {
      duration: 400,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });

    traslateX.value = withDelay(
      300,
      withTiming(0, {
        duration: 400,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );
  };
  const onPressMenu = () => {
    setSideBarVisible(!sideBarVisible);
    if (sideBarVisible) {
      hideSideBar();
    } else {
      showSideBar();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.gradientContainer}>
        <LinearGradient
          colors={colors[type as keyof object]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.5, 1]}
        />
      </View>
      <Animated.View
        style={[styles.sideContainer, animatedStyle]}
      ></Animated.View>
      <View style={styles.leftBottomStyle}>
        <LeftBottomFigure color="white" />
      </View>
      <View style={styles.rightBottomStyle}>
        <RightBottomFigure color="white" />
      </View>
      <View style={styles.rightTopStyle}>
        <RightTopFigure color="white" />
      </View>
      <View style={styles.leftTopStyle}>
        <LeftTopFigure color="white" />
      </View>
      <View style={[styles.contentContainer, traslationAnimatedStyle]}>
        <RootHeader {...{ onPressMenu }} />
        <Animated.View style={[{flex:1},traslationAnimatedStyle]}>
          {children}
        </Animated.View>
      </View>
    </View>
  );
};
