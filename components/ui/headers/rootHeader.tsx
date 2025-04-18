import { FilterIcon, MenuIcon } from "@/assets/svg/icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 45px;
  padding-bottom: 20px;
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

const RootHeader = (): JSX.Element => {
  return (
    <>
      <StatusBar style="light" />
      <Container>
        <ColumnLeft>
          <TouchableOpacity onPress={() => {}}>
            <MenuIcon />
          </TouchableOpacity>
        </ColumnLeft>
        <ColumnRight>
          <TouchableOpacity onPress={() => {}}>
            <FilterIcon />
          </TouchableOpacity>
        </ColumnRight>
      </Container>
    </>
  );
};

export default RootHeader;
