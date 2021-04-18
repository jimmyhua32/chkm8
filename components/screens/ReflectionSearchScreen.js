import React, {useState} from "react";
import { useFocusEffect } from '@react-navigation/native';
import {View, Text, Button, StyleSheet} from 'react-native';
import * as storage from '../../Storage';

import ReflectionPreview from "../ui/ReflectionPreview";

export default function ReflectionSearchScreen( {navigation} ) {

    const [reflections, setReflections] = useState([]);

    useFocusEffect(() => {
        storage.get('reflectionData').then((results) => {
            if (results) {
                setReflections(results.reflections);
            }
        });
    });

    const reflectionPreviews = reflections.map(item => <ReflectionPreview date={item.datetime} body={item.entry} nav={navigation}/>);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Past Reflections</Text>
            {reflectionPreviews}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DEEFFF',
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        textAlign: 'center',
        fontFamily: 'Montserrat-Alternates',
        color: '#80A2C5',
        paddingTop: 100,
        paddingBottom: 75
    },
    p1: {
        fontSize: 18,
        paddingBottom: 50,
    },
});
