import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import RootHeader from "@/components/ui/headers/rootHeader";
import { BackgroundElement } from "@/components/ui/background/BackgroundElement";
import { ListUserItem } from "@/components/ui/user/userList/item";
import UserList from "@/components/ui/user/userList/index";

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
});

const colors = {
  fist: ["#7086E3", "#9072E5"],
  second: ["#FFB03A", "#FF6B86"],
  third: ["#FF58A4", "#FF6B86"],
};

const items = [
  {
    source: require("@/assets/images/profile1.png"),
    name: "Carmen",
    age: 32,
    city: "Miraflores",
    country: "Peru",
  },

  {
    source: require("@/assets/images/profile2.png"),
    name: "Sandra Gomez",
    age: 32,
    city: "Surco",
    country: "Peru",
  },
  {
    source: require("@/assets/images/profile3.png"),
    name: "Beatriz",
    age: 32,
    city: "Lima",
    country: "Peru",
  },
];

const IndexScreen = (): JSX.Element => {
  return (
    <View style={styles.baseContainer}>
      <BackgroundElement type="third">
        <>
          <RootHeader />
          <UserList />
        </>
      </BackgroundElement>

      {/* <RootHeader />
        <Text>Index Screen</Text>
        <Link href="/match">Match route</Link>
        <Link href="/detail">detail</Link> */}
    </View>
  );
};

export default IndexScreen;
