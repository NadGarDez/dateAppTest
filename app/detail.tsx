import React from "react";
import { Text } from "react-native";
import {Link} from "expo-router";

const DetailScreen =():JSX.Element => {
    return (
        <>
        <Text>Index Screen</Text>
        <Link href="/match">Match route</Link>
        <Link href="/">Index route</Link>
        </>
    )
}

export default DetailScreen;
