import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default function ReflectionPreview(props) {


    return (
        <View>
            <p>{props.date}</p>
            <p>{props.body.substr(0, 20)}...</p>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 25,
    },
    p1: {
        fontSize: 18,
    },
    reflectionBox: {
        height: 400,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 25,
        padding: 10,
    }
});
