import React, { useEffect } from "react";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";
import { UserFilter } from "../UserFilter";
import { UserInfo } from "../UserInfo";
import { UserInteractions } from "../UseInteraction";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

interface props {
  user: {
    source: ImageSourcePropType;
    name: string;
    age: number;
    city: string;
    country: string;
    index: number
  };
  stage: number;
}

const AnimatedContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const Container = styled.View`
  flex: 1;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Image = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const ItemsContainer = styled.View`
  padding: 20px 30px 20px 30px;
  flex: 1;
`;

const ListContainer = styled.View``;

const RestContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ListUserSubItem = (props: props): JSX.Element => {
  const {
    user: { source, ...rest },
    stage,
  } = props;

  const scale = useSharedValue<number>(1);
  const top = useSharedValue<number>(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        scaleX: scale.value,
      },
    ],
    top: top.value,
  }));

  const onCancel = () => {};

  const onLove = () => {};

  const onCheck = () => {};

  const secondStage = () => {
    top.value = -14;

    top.value = withTiming(0, {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });

    scale.value = withTiming(1, {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  };

  const firstStage = () => {
    top.value = withDelay(
      610,
      withTiming(-14, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );

    scale.value = withDelay(
      610,
      withTiming(0.85, {
        duration: 100,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );
  };

  useEffect(() => {
    if (stage === 1) {
      firstStage();
    } else {
      secondStage();
    }
  }, [stage]);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          width: "100%",
          position: "relative",
          zIndex: 1,
        },
        animatedStyles,
      ]}
    >
      <Container>
        <Image source={source}>
          <ItemsContainer>
            <ListContainer>
              <UserFilter {...{stage}} />
            </ListContainer>
            <RestContainer>
              <UserInfo {...rest} />
              <UserInteractions {...{ onCancel, onLove, onCheck }} />
            </RestContainer>
          </ItemsContainer>
        </Image>
      </Container>
    </Animated.View>
  );
};

export default ListUserSubItem;
