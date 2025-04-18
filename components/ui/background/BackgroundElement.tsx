import React, { Children } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, View, Text} from "react-native";
import { LeftBottomFigure, LeftTopFigure, RightBottomFigure, RightTopFigure } from "@/assets/svg/figures";

const figure = require('@/assets/images/backgroundFigure.png');

console.log(figure)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '50%',
    height: '50%',
    opacity:0.5
  },
  figure: {
    position: 'fixed',
    top: 0, 
    zIndex: 3
  },
  gradientContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: -2
  },
  leftBottomStyle: {
    position: 'absolute',
    bottom: 0,
    left:0,
    zIndex: -1
  },
  rightBottomStyle: {
    position: 'absolute',
    bottom: 0,
    right:0,
    zIndex: -1
  },
  rightTopStyle: {
    position: 'absolute',
    top: 0,
    right:0,
    zIndex: -1
  },
  leftTopStyle: {
    position: 'absolute',
    top: 0,
    left:0,
    zIndex: -1
  },
  contentContainer: {
   flex:1,
   paddingHorizontal:29,
   paddingBottom:29
  }

});

type types = 'first' | 'second' | 'third'

const colors:Record<types, Array<string>> = {
  first: ["#7086E3", "#9072E5"],
  second: ["#FFB03A", "#FF6B86"],
  third: ["#FF58A4", "#FF6B86"]
}

interface props {
  type: types,
  children: JSX.Element
}

export const BackgroundElement = (props: props): JSX.Element => {

  const {type, children} = props

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
      <View style={styles.leftBottomStyle}>
       <LeftBottomFigure color="white"/>
      </View>
      <View style={styles.rightBottomStyle}>
        <RightBottomFigure color="white"/>
      </View>
      <View style={styles.rightTopStyle}>
        <RightTopFigure color="white"/>
      </View>
      <View style={styles.leftTopStyle}>
        <LeftTopFigure color="white"/>
      </View>
      <View style={styles.contentContainer}>
        {children}
      </View>
      
    </View>
  );
};


