import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Link} from "expo-router";
import RootHeader from "@/components/ui/headers/rootHeader";
import { BackgroundElement } from "@/components/ui/background/BackgroundElement";
import { ListUserItem } from "@/components/ui/user/ListUserItem";


const styles = StyleSheet.create({
    baseContainer: {
        flex:1,
        backgroundColor: "transparent"
    }, 
})


const colors = {
    fist: ["#7086E3", "#9072E5"],
    second: ["#FFB03A", "#FF6B86"],
    third: ["#FF58A4", "#FF6B86"]
}

const IndexScreen = ():JSX.Element => {
    return (
        <View style={styles.baseContainer}>
        <BackgroundElement  type="third">
           <>
            <RootHeader />

            <ListUserItem 
                source={require("@/assets/images/profile1.png")}
                name="Carmen"
                age={32}
                city="Miraflores"
                country="Peru"
            />
           </>
        </BackgroundElement>
            
        {/* <RootHeader />
        <Text>Index Screen</Text>
        <Link href="/match">Match route</Link>
        <Link href="/detail">detail</Link> */}
        </View>
    )
}

export default IndexScreen



