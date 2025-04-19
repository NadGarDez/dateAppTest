import { InfoFigure } from "@/assets/svg/figures";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";

interface props {
  name: string;
  age: number;
  city: string;
  country: string;
  index: number;
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Col = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  height: 32px;
`;

const NameText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: white;
  line-height: 25px;
`;

const DirectionContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const DirectionText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0px;
  color: white;
`;

const styles = StyleSheet.create({
  buttom: {
    display: "flex",
    flexDirection: "row",
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "#ff6b86",
  },
});

export const UserInfo = (props: props): JSX.Element => {
  const { name, age, city, country, index } = props;
  const scale = useSharedValue<number>(1);

  const { push } = useRouter();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPress = () => {
    scale.value = withSequence(
      withTiming(0.8, {
        duration: 100,
      }),
      withSpring(1.1, {}, () => {
        runOnJS(push)({
          pathname: "/detail",
          params: {
            index,
          },
        });
      })
    );
  };
  return (
    <Container>
      <Row>
        <Col>
          <TitleContainer>
            <NameText>{`${name}, ${age}`}</NameText>
          </TitleContainer>
          <DirectionContainer>
            <DirectionText>{`${city}, ${country}`}</DirectionText>
          </DirectionContainer>
        </Col>
        <TouchableWithoutFeedback onPress={onPress}>
          <Animated.View style={[styles.buttom, animatedStyle]}>
            <InfoFigure />
          </Animated.View>
        </TouchableWithoutFeedback>
      </Row>
    </Container>
  );
};
