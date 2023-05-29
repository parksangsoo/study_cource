import React from 'react';
import { View, Button } from "react-native";

function HomeScreen({navigation}) {
    return (
        <View>
            <Button
                title="Detail1 열기"
                onPress={() => {
                    navigation.push('Detail', {id:1})
                }}
            ></Button>
            <Button
                title="Detail2 열기"
                onPress={() => {
                    navigation.push('Detail', {id:2})
                }}
            ></Button>
            <Button
                title="Detail3 열기"
                onPress={() => {
                    navigation.push('Detail', {id:3})
                }}
            ></Button>
        </View>
    )
}

export default HomeScreen;