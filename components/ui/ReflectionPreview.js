import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import WidePillButton2 from "./custom/WidePillButton2";
import WidePillButton from "./custom/WidePillButton";
import * as images from "../../Images";

export default function ReflectionPreview(props) {

    
    let date = new Date(props.date);
    // date function 'toLocaleString' would be perfect but it doesn't work on RN android
    let dateString = dateFormat(date);

    function onPressed(props) {
        props.nav.navigate('ReflectionReadScreen', props);
    }

    let moodIcon;
    if (props.mood == 'HAPPY') {
        moodIcon = <Image style={styles.moodIcon} source={images.icons["mood-happy"]}/>
    } else if (props.mood == "NEUTRAL") {
        moodIcon = <Image style={styles.moodIcon} source={images.icons["mood-neutral"]}/>
    } else if (props.mood == "SAD") {
        moodIcon = <Image style={styles.moodIcon} source={images.icons["mood-sad"]}/>
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onPressed(props)}
                style={styles.appButtonContainer}
            >
                <Text style={ [styles.appButtonText, styles.bold] }>{dateString}</Text>
                <Text style={styles.appButtonText}>{props.title.length < 20 ? props.title : props.title.substring(0, 19) + '...'}</Text>
                {moodIcon}
            </TouchableOpacity>
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

const dateFormat = (date) => {
    return date.getMonth() + "/" + date.getDate();
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#80A2C5",
        borderRadius: 25,
        padding: 10,
        width: 300,
        height: 50,
        margin: 'auto',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    appButtonText: {
        fontSize: 14,
        color: "#fff",
        alignSelf: "center",
        textAlign: 'center',
        margin: 'auto',
        fontFamily: 'Montserrat-Alternates',
    },
    bold: {
        fontFamily: 'Montserrat-Alternates-Bold'
    },
    moodIcon: {
        width: 20,
        height: 20
    }
});
