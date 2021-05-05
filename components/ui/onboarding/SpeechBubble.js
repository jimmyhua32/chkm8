import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';


export default function SpeechBubble(props) {

    return (
        <View style={styles.speechBubble}>
            <Text style={styles.p1}>{props.text}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    p1: {
        fontSize: 16,
        fontFamily: 'Montserrat-Alternates',
        padding: 20,
        color: '#80A2C5'
    },
    speechBubble: {
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        height: 'auto',
        width: 0,
        margin: 'auto'
    },
});
