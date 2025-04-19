import { CloseSideBarFigure } from "@/assets/svg/figures";
import { MenuIcon } from "@/assets/svg/icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface props {
  onPresClose: () => void;
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 45px;
  padding-bottom: 20px;
  padding-left: 29px;
  padding-right: 29px;
`;

const ColumnLeft = styled.View`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const ColumnRight = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-grow: 1;
`;

const DetailHeader = (props: props): JSX.Element => {
  const { onPresClose } = props;
  return (
    <>
      <StatusBar style="light" />
      <Container>
        <ColumnLeft>
          <TouchableOpacity onPress={onPresClose}>
            <CloseSideBarFigure color="black" />
          </TouchableOpacity>
        </ColumnLeft>
      </Container>
    </>
  );
};

export default DetailHeader;
