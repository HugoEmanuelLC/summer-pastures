import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";


function Page1UserScreen({ navigation }) {
    return <View>
        <Text>Page 1 Screen user</Text>
        <Button
            title="Go to home of user"
            onPress={() => navigation.navigate("Home")}
        />
    </View>
}


export default Page1UserScreen;