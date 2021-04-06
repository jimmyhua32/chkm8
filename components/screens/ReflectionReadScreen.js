import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default function ReflectionReadScreen(props) {

    console.log(props);

    return (
        <View>
            <div>
                <h1>{props.route.params.date}</h1>
                <p>{props.route.params.body}</p>
            </div>
        </View>
    );
}

const styles = StyleSheet.create({
    p1: {
        fontSize: 18,
        color: 'white',
    },
});
