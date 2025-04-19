import React from "react";
import styled from "styled-components/native";
import { LinkElement } from "./LinkElement";
import {
  CloseSideBarFigure,
  ConfigFigure,
  LeCafeFigure,
  LogOutFigure,
  MatchesFigure,
  MessageFigure,
  ProfileFigure,
  TutorialFigure,
} from "@/assets/svg/figures";
const image = require("@/assets/images/avatar1.png");

const Container = styled.View`
  width: 55%;
  flex: 1;
`;

const AvatarContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const AvatarTextContainer = styled.View``;

const ImageAvatarContainer = styled.View`
  width: 80px;
  height: 80px;
  borderRadius: 40px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const LinksContainer = styled.View`
  flex: 2;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: white;
`;

const Subtitle = styled.Text`
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color: white;
`;

const LogOutContainer = styled.View`
  flex: 1;
`;

export const SideBar = (): JSX.Element => {
  return (
    <Container>
      <AvatarContainer>
          <ImageAvatarContainer>
            <Image source={image} />
          </ImageAvatarContainer>
          <AvatarTextContainer>
            <Title>Andrea, 20</Title>
            <Subtitle>Surco</Subtitle>
          </AvatarTextContainer>
      </AvatarContainer>

      <LinksContainer>
        <LinkElement Icon={LeCafeFigure} text="Lecafe" />

        <LinkElement Icon={MessageFigure} text="Mensajes" />
        <LinkElement Icon={MatchesFigure} text="Matches" />
        <LinkElement Icon={ProfileFigure} text="Mi Perfil" />
        <LinkElement Icon={TutorialFigure} text="Tutorial" />
        <LinkElement Icon={ConfigFigure} text="Ajustes" />
      </LinksContainer>
      <LogOutContainer>
        <LinkElement Icon={LogOutFigure} text="Cerrar Sesion" />
      </LogOutContainer>
    </Container>
  );
};
