import React from "react";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";
import { UserFilter } from "./UserFilter";
import { UserInfo } from "./UserInfo";
import { UserInteractions } from "./UseInteraction";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface props {
  source: ImageSourcePropType;
  name: string;
  age: number;
  city: string;
  country: string;
}

const Container = styled.View`
  flex: 1;
  border-radius: 30px;
  background-color: #7086e3;
  width: 100%;
  height: 675px;
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

export const ListUserItem = (props: props): JSX.Element => {
  const { source, ...rest } = props;

  const rotation = useSharedValue<number>(0);
  const traslation = useSharedValue<number>(0);
  const traslationY = useSharedValue<number>(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${rotation.value}deg`,
      },
      {
        translateX: traslation.value,
      },
      {
        translateY: traslationY.value,
      },
    ],
  }));

  const onCancel = () => {
    rotation.value = withDelay(
      200,
      withTiming(-5, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );

    traslation.value = withDelay(
      200,
      withTiming(-50, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );
  };

  const onLove = () => {
    rotation.value = 0;
    traslation.value = 0;
    traslationY.value = 0;

    traslationY.value = withDelay(
      200,
      withSequence(
        withTiming(-50, {
          duration: 500,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        }),
        withSpring(0, {
          duration: 800,
        })
      )
    );
  };

  const onCheck = () => {
    rotation.value = withDelay(
      200,
      withTiming(5, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );

    traslation.value = withDelay(
      200,
      withTiming(50, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );
  };

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          width: "100%",
        },
        animatedStyles,
      ]}
    >
      <Container>
        <Image source={source}>
          <ItemsContainer>
            <ListContainer>
              <UserFilter />
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
