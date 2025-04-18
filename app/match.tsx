import React from "react";
import {Text} from "react-native"
import {Link} from "expo-router"


const MatchScreen = ():JSX.Element => {
  return (
    <>  
    <Text>Match Screen</Text>
    <Link href="/detail">detail</Link>
    <Link href="/">Index route</Link>
    </>
  )

}

export default MatchScreen;
