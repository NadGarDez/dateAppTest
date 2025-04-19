import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { ImageSourcePropType, StyleSheet } from "react-native";
import { UserFilter } from "../UserFilter";
import { UserInfo } from "../UserInfo";
import { UserInteractions } from "../UseInteraction";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { BigCheckFigure, BigXFigure, SuperLike } from "@/assets/svg/figures";

interface props {
  user: {
    source: ImageSourcePropType;
    name: string;
    age: number;
    city: string;
    country: string;
  };
  changeStage: (stage: 1 | 2) => void;
  stage: number;
}

const styles = StyleSheet.create({
  layerStyles: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 20,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const figureSelector: Record<string, JSX.Element> = {
  love: <SuperLike />,
  check: <BigCheckFigure />,
  cancel: <BigXFigure />,
};

const Container = styled.View`
  flex: 1;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0px;
  z-index: 2;
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
  const {
    user: { source, ...rest },
    changeStage,
    stage,
  } = props;

  const [figure, setFigure] = useState<string>("");

  const rotation = useSharedValue<number>(0);
  const traslation = useSharedValue<number>(0);
  const traslationY = useSharedValue<number>(0);

  const containerOpacity = useSharedValue<number>(1);

  const layerDisplay = useSharedValue<"flex" | "none">("none");
  const layerColor = useSharedValue<string>("#00FFFF60");

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
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

  const layerStyles = useAnimatedStyle(() => ({
    display: layerDisplay.value,
    backgroundColor: layerColor.value,
  }));

  const onCancel = () => {
    changeStage(2);

    setFigure("cancel");
    layerColor.value = "#938E9060";
    layerDisplay.value = "flex";

    rotation.value = withDelay(
      200,
      withTiming(-6, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );

    traslation.value = withDelay(
      200,
      withTiming(-60, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );

    containerOpacity.value = withDelay(
      400,
      withTiming(
        0,
        {
          duration: 400,
        },
        () => {
          runOnJS(changeStage)(1);
        }
      )
    );
  };

  const onLove = () => {
    changeStage(2);

    setFigure("love");
    layerColor.value = "#FFB1C760";
    layerDisplay.value = "flex";

    rotation.value = 0;
    traslation.value = 0;
    traslationY.value = 0;

    layerDisplay.value = "flex";

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

    containerOpacity.value = withDelay(
      1300,
      withTiming(0, {
        duration: 400,
      })
    );

    setTimeout(() => {
      changeStage(1);
    }, 1700);
  };

  const onCheck = () => {
    changeStage(2);

    setFigure("check");
    layerColor.value = "#FFB1C760";
    layerDisplay.value = "flex";

    rotation.value = withDelay(
      200,
      withTiming(6, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );

    traslation.value = withDelay(
      200,
      withTiming(60, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    );

    containerOpacity.value = withDelay(
      400,
      withTiming(
        0,
        {
          duration: 400,
        },
        () => {
          runOnJS(changeStage)(1);
        }
      )
    );
  };

  const initializeItem = () => {
    setTimeout(() => {
      rotation.value = 0;
      traslation.value = 0;
      traslationY.value = 0;

      containerOpacity.value = 1;

      layerDisplay.value = "none";
      layerColor.value = "transparent";
    }, 500);
  };

  useEffect(() => {
    if (stage === 1) {
      initializeItem();
    }
  }, [stage]);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          width: "100%",
          position: "relative",
          top: 0,
          zIndex: 2,
        },
        animatedStyles,
      ]}
    >
      <Container>
        <Image source={source}>
          <ItemsContainer>
            <ListContainer>
              <UserFilter {...{stage}}/>
            </ListContainer>
            <RestContainer>
              <UserInfo {...rest} />
              <UserInteractions {...{ onCancel, onLove, onCheck }} />
            </RestContainer>
          </ItemsContainer>
        </Image>
      </Container>
      <Animated.View style={[styles.layerStyles, layerStyles]}>
        {figureSelector[figure as keyof object]}
      </Animated.View>
    </Animated.View>
  );
};

export default ListUserItem;
