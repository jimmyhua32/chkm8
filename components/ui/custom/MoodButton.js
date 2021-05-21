import React from "react";
import {View, Button, StyleSheet, TouchableOpacity, Text, Image} from "react-native";

const MoodButton = ({ onPress, image}) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.appButtonContainer}
    >
        <Image source={image}/>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
        borderRadius: 0,
        padding: 10,
        //display: 'inline-block'
    },
    appButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: 'center',
        textTransform: "uppercase",
        width: 25,
        height: 25,
    }
});

export default MoodButton;