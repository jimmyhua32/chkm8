import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default function ReflectionReadScreen(props) {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let date = new Date(props.route.params.date);
    // date function 'toLocaleString' would be perfect but it doesn't work on RN android
    let dateString = monthNames[date.getMonth()] + " " + 
        date.getDate() + " " +
        date.getFullYear();

    return (
        <View style={styles.previewContainer}>
            <Text style={styles.title}>{dateString}</Text>
            <View style={styles.whiteBackground}>
                <Text style={styles.p1}>{props.route.params.body}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    previewContainer: {
        margin: 'auto',
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DEEFFF'
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
        padding: 50,
        fontFamily: 'Montserrat-Alternates',
        width: '80%',
        margin: 'auto'
    },
    whiteBackground: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: '100%'
    },
});
