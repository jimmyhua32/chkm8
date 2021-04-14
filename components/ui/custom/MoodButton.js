import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const MoodButton = ({ onPress, title }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.appButtonContainer}
    >
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 25,
        padding: 10,
        display: 'inline-block'
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