import React, { useEffect, useRef, useState } from "react";

import Item from "./item";
import SubItem from "./SubItem";
import { items } from "./constants";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const LayerA = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  zindex: 2;
`;

const LayerB = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  zindex: 3;
`;

const UserList = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [nextIndex, setNextIndex] = useState<number>(currentIndex + 1);

  const [animationStage, setAnimationStage] = useState<1 | 2>(1);

  const firstRender = useRef(true);

  const changeStage = (stage: 1 | 2) => {
    setAnimationStage(stage);
  };

  const moveCurrentIndex = () => {
    setCurrentIndex(nextIndex);
  };

  const moveNextIndex = () => {
    setTimeout(() => {
      if (currentIndex + 1 <= items.length - 1) {
      setNextIndex(currentIndex + 1);
    } else {
      setNextIndex(0);
    }
    }, 600);
    
  };

  useEffect(() => {
    if (animationStage === 1) {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
      moveCurrentIndex();
    }
  }, [animationStage]);

  useEffect(() => {
    moveNextIndex();
  }, [currentIndex]);

  return (
    <Container>
      <LayerA>
        <SubItem user={items[nextIndex]} stage={animationStage} />
      </LayerA>
      <LayerB>
        <Item
          user={items[currentIndex]}
          changeStage={changeStage}
          stage={animationStage}
        />
      </LayerB>
    </Container>
  );
};

export default UserList;
