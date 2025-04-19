import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";

const Contaienr = styled.View`
  width: 100%;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items:center;
  padding-left: 4px;
`;

const Text = styled.Text`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0px;
  vertical-align: middle;
  margin-left: 4px;
  color: white;

`;

interface props {
  Icon: () => JSX.Element;
  text: string;
}

export const LinkElement = (props: props): JSX.Element => {
  const { Icon, text } = props;
  return (
    <Pressable>
      {({pressed}) => (
        <Contaienr style={{
            backgroundColor: pressed ? '#FFFFFF15' : 'transparent'
        }}>
          <Icon />
          <Text>{text}</Text>
        </Contaienr>
      )}
    </Pressable>
  );
};
