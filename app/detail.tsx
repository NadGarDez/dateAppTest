import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, useNavigation } from "expo-router";
import DetailHeader from "@/components/ui/headers/detailHeader";
import styled from "styled-components/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { ExpandButton } from "@/components/ui/ExpandButton";
import { items } from "@/components/ui/user/userList/constants";

const viewHeight = 375;

const Container = styled.ImageBackground`
  flex: 1;

  padding-bottom: 29px;
`;

const UpperContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Col = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  height: 32px;
`;

const NameText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: black;
  line-height: 25px;
`;

const DirectionContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const DirectionText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0px;
  color: black;
`;


const ParagraphText = styled.Text`
font-weight: 400;
font-size: 14px;
line-height: 16px;
letter-spacing: 0px;
color: black;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: #ff6b86;
`;

const styles = StyleSheet.create({
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    height: viewHeight,
    width: Dimensions.get("screen").width,
    backgroundColor: "white",
    borderTopLeftRadius: 60,
    position: "absolute",
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    display: "flex",
    position: "relative",
    top: -30 - 22,
  },
});

const DetailScreen = (): JSX.Element => {
  const { source, name, age, city, country } = items[0];

  const { goBack } = useNavigation();

  const bottom = useSharedValue<number>(-270);

  const animatedStyle = useAnimatedStyle(() => ({
    bottom: bottom.value,
  }));

  const onChange = (value: boolean) => {
    if (value) {
      bottom.value = withTiming(0, {
        duration: 400,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    } else {
      bottom.value = withTiming(-270, {
        duration: 400,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    }
  };

  return (
    <Container source={source}>
      <DetailHeader
        onPresClose={() => {
          goBack();
        }}
      />
      {/* <Text>Index Screen</Text>
      <Link href="/match">Match route</Link>
      <Link href="/">Index route</Link> */}
      <Animated.View style={[styles.infoContainer, animatedStyle]}>
        <UpperContainer>
          <Col>
            <TitleContainer>
              <NameText>{`${name}, ${age}`}</NameText>
            </TitleContainer>
            <DirectionContainer>
              <DirectionText>{`${city}, ${country}`}</DirectionText>
            </DirectionContainer>
          </Col>
          <View style={styles.buttonContainer}>
            <ExpandButton onChange={onChange} />
          </View>
        </UpperContainer>
        <View style={{
          marginTop:25
        }}>
          <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dui non elit tristique semper. Nam in tincidunt ex. Integer non turpis non lorem molestie euismod. Nullam eget tempus nisl. Nullam vitae tincidunt lorem, at sollicitudin risus. Phasellus aliquam massa nec sem porta, vitae iaculis enim efficitur. Nunc suscipit purus eu massa tempor, vitae commodo eros scelerisque. Nulla non augue mi. Fusce in fringilla eros. Nulla aliquam, justo sed porta aliquam, elit massa mattis lectus, mollis tristique metus nisi vel lacus. Maecenas suscipit aliquet enim id pellentesque. Cras pharetra egestas tortor sit amet cursus. Maecenas libero erat, pretium non efficitur lobortis, vulputate eget leo.
          </Text>
        </View>
      </Animated.View>
    </Container>
  );
};

export default DetailScreen;
