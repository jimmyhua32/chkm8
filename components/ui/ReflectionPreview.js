import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default function ReflectionPreview(props) {


    function onPressed(props) {
        props.nav.navigate('ReflectionReadScreen', props);
    }

    return (
        <View>
            <div style={{
                backgroundColor: '#00B2EE',
                borderRadius: 20,
            }}
            onClick={() => onPressed(props)}>
                <p>{props.date} | {props.body.substr(0, 20)}...</p>
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
