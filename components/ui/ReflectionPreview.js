import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default function ReflectionPreview(props) {


    function onPressed(props) {
        props.nav.navigate('ReflectionReadScreen', props);
    }

    return (
        <View style={styles.boxStyle} onClick={() => onPressed(props)}>
            <Text style={styles.p1}>{props.date} | {props.body.substr(0, 20)}...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    boxStyle: {
        backgroundColor: '#00B2EE',
        borderRadius: 20,
        padding: 10,
        margin: 10,
    },
    p1: {
        fontSize: 18,
        color: 'white',
    }
});
