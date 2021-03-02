import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import {get} from '../../Storage.js';

export default function ProfileScreen( {navigation} ) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Profile Screen</Text>
            <Text style={styles.p1}>
                This is the profile screen. Hopefully we can have some sexy data here but for
                now we have a boring paragraph :(
            </Text>
            <ReflectionLog/>
            <Button
                title="to home"
                onPress={() => {
                    navigation.navigate('Home');
                }}
            />
            <Button
                title="to reflection"
                onPress={() => {
                    navigation.navigate('Reflection');
                }}
            />
        </View>
    );
}

const ReflectionLog = () => {
    let json = get("key");
    if (json == null) {
        console.log("JSON for reflections is null");
        return;
    }
    return (
        <ScrollView>
            {/* first figure out how to retrieve/store reflections */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 50,
    },
    p1: {
        fontSize: 18,
        paddingBottom: 50,
    },
});
