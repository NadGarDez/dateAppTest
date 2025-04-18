import { CheckFigure, HeartFigure, XFigure } from "@/assets/svg/figures";
import React from "react";
import styled from "styled-components/native";
import { AnimatedButton } from "../buttons/AnimatedButton";

const Container = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const FirstCircle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #d0bfbf;
  width: 58px;
  height: 58px;
  border-radius: 29px;
`;
const SecondCircle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 58px;
  height: 58px;
  border-radius: 29px;
`;
const ThirdCircle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #feb5db;
  width: 58px;
  height: 58px;
  border-radius: 29px;
`;

interface props {
  onLove: () => void;
  onCheck: () => void;
  onCancel: () => void;
}

export const UserInteractions = (props: props) => {
  const { onCancel, onCheck, onLove } = props;
  return (
    <Container>
      <AnimatedButton onPress={onCancel}>
        <FirstCircle>
          <XFigure />
        </FirstCircle>
      </AnimatedButton>
      <AnimatedButton onPress={onLove}>
        <SecondCircle>
          <HeartFigure />
        </SecondCircle>
      </AnimatedButton>
      <AnimatedButton onPress={onCheck}>
        <ThirdCircle>
          <CheckFigure />
        </ThirdCircle>
      </AnimatedButton>
    </Container>
  );
};
