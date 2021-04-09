import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default function ReflectionReadScreen(props) {

    console.log(props);

    return (
        <View style={styles.previewContainer}>
            <Text style={styles.title}>{props.route.params.date}</Text>
            <Text style={styles.p1}>{props.route.params.body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    previewContainer: {
        margin: 'auto',
        width: '80%',
        paddingTop: 20,
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
