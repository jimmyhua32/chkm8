import React, {useState} from "react";
import { useFocusEffect } from '@react-navigation/native';
import {View, Text, Button, StyleSheet} from 'react-native';
import * as storage from '../../Storage';

import ReflectionPreview from "../ui/ReflectionPreview";

export default function ReflectionSearchScreen( {navigation} ) {

    const [reflections, setReflections] = useState([]);

    useFocusEffect(() => {
        storage.get('reflectionData').then((results) => {
            setReflections(results.reflections);
        });
    });

    const reflectionPreviews = reflections.map(item => <ReflectionPreview date={item.datetime} body={item.entry} nav={navigation}/>);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {reflectionPreviews}
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
