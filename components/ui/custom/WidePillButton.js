import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

// Fatter, dark blue varient
const WidePillButton = ({ onPress, title }) => (
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
        backgroundColor: "#46698C",
        borderRadius: 25,
        padding: 10,
        paddingBottom: 8,
        width: 250,
        height: 50,
        margin: 'auto'
    },
    appButtonText: {
        fontSize: 14,
        color: "#fff",
        alignSelf: "center",
        textAlign: 'center',
        margin: 'auto',
        paddingTop: 5,
        fontFamily: 'Montserrat-Alternates',
    }
});

export default WidePillButton;
