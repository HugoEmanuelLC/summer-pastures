import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";


function Page1AdminScreen({ navigation }) {
    return <View>
        <Text>Page 1 Screen admin</Text>
        <Button
            title="Go to home admin"
            onPress={() => navigation.navigate("Home")}
        />
    </View>
}


export default Page1AdminScreen;