import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";


function HomeAdminScreen({ navigation }) {
    return <View>
        <Text>Home Screen admin</Text>
        <Button
            title="Go to page 1 admin"
            onPress={() => navigation.navigate("Page1")}
        />
    </View>
}


export default HomeAdminScreen;