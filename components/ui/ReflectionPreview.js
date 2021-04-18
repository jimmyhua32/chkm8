import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import WidePillButton2 from "./custom/WidePillButton2";
import WidePillButton from "./custom/WidePillButton";

export default function ReflectionPreview(props) {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let date = new Date(props.date);
    // date function 'toLocaleString' would be perfect but it doesn't work on RN android
    let dateString = date.getDate() + " " +
                     monthNames[date.getMonth()] + " " +
                     date.getFullYear();


    function onPressed(props) {
        props.nav.navigate('ReflectionReadScreen', props);
    }

    return (
        <View style={styles.container}>
            <WidePillButton2 title={dateString} onPress={() => onPressed(props)}></WidePillButton2>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
});
