import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";


function page1UserScreen({ navigation }) {
    return <View>
        <Text>Home Screen user</Text>
        <Button
            title="Go to Admin"
            onPress={() => navigation.navigate("Home")}
        />
    </View>
}


export default page1UserScreen;