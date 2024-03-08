import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";


function homeUserScreen({ navigation }) {
    return <View>
        <Text>Home Screen user</Text>
        <Button
            title="Go to Admin"
            onPress={() => navigation.navigate("Page1")}
        />
    </View>
}


export default homeUserScreen;