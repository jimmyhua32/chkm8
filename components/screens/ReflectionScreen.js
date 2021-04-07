import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

import ReflectionBox from '../ui/ReflectionBox';

export default function ReflectionScreen( {navigation} ) {
    return (
        <View style={styles.previewContainer}>
            <ReflectionBox />
        </View>
    );
}

const styles = StyleSheet.create({
    previewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
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
