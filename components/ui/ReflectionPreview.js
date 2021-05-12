import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import WidePillButton2 from "./custom/WidePillButton2";
import WidePillButton from "./custom/WidePillButton";

export default function ReflectionPreview(props) {

    
    let date = new Date(props.date);
    // date function 'toLocaleString' would be perfect but it doesn't work on RN android
    let dateString = timeFormat(date);

    function onPressed(props) {
        props.nav.navigate('ReflectionReadScreen', props);
    }

    return (
        <View style={styles.container}>
            <WidePillButton2 title={dateString} onPress={() => onPressed(props)}></WidePillButton2>
        </View>

    );
}

const timeFormat = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let month = monthNames[date.getMonth()];
    let hour = date.getHours();
    let zone = hour < 12 ? "am" : "pm";
    if (hour > 12) {
        hour -= 12; 
    } else if (hour == 0) {
        hour = 12;
    }
    let minute = date.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    return month + " " + date.getDate() + ", " + date.getFullYear() + " (" + hour + ":" + minute + " " + zone + ")";
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
});
