import React, {useState} from "react";
import { useFocusEffect } from '@react-navigation/native';
import {View, Text, Button, StyleSheet} from 'react-native';
import * as storage from '../../Storage';

export default function ProfileScreen( {navigation} ) {

    const [reflectionCount, setReflectionCount] = useState(0);

    useFocusEffect(() => {
        storage.get('reflectionData').then((results) => {
            setReflectionCount(results.reflections.length);
        });
    });


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Profile Screen</Text>
            <Text style={styles.p1}>
                This is the profile screen. Hopefully we can have some sexy data here but for
                now we have a boring paragraph :(
            </Text>

            <Text>Total Reflections: {reflectionCount} Reflections</Text>
            <Text>Seeds: {reflectionCount * 100} Seeds</Text>

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
            <Button
                title="View Past Reflections"
                onPress={() => {
                    navigation.navigate('ReflectionSearch');
                }}
            />
        </View>
    );
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
