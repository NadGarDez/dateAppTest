import {
  DatingFigure,
  FriendShipFigure,
  RelationshipFigure,
} from "@/assets/svg/figures";
import { FilterItem } from "@/components/FilterItem";
import React, { useState } from "react";
import styled from "styled-components/native";

const ItemsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
`;

const items = [ FriendShipFigure,DatingFigure, RelationshipFigure];
const textItems = ['Amistad', 'Cita', 'Relacion']

export const UserFilter = (): JSX.Element => {
  const [active, setActive] = useState<number>(0);

  return (
    <ItemsContainer>
      {items.map((Item, index) => (
        <FilterItem
          active={active === index}
          key={`finter_item_${index}`}
          onPress={() => {
            setActive(index);
          }}
          message={textItems[index]}
        >
          <Item />
        </FilterItem>
      ))}
    </ItemsContainer>
  );
};
