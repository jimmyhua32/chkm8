import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import SpeechBubble from "./SpeechBubble";
import * as images from "../../../Images";

export default function OnboardingPart5(props) {

    return (
        <View style={styles.background}>
            <View style={styles.mountainContainer}>
                <Image source={images.onboarding.mountains} style={styles.mountain}/>
            </View>

            <View style={styles.singleColumn}>
                <SpeechBubble text={<Text style={styles.p1}>"We’re good to go now! Let’s get started with our journey!"</Text>}/>
                <Image source={images.leafy['leafy-0f']}/>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#DEEFFF',
        width: '100%',
        height: '90%'
    },
    title: {
        fontSize: 42,
        textAlign: 'center',
        fontFamily: 'Montserrat-Alternates-Bold',
        color: '#FFFFFF',
    },
    p1: {
        fontSize: 16,
        fontFamily: 'Montserrat-Alternates',
        padding: 20,
        color: '#80A2C5'
    },
    titleContainer: {
        position: 'absolute',
        top: 190,
        left: 0,
        right: 0,
        bottom: 0
    },
    mountain: {
        margin: 'auto',
        width: '100%'
    },
    mountainContainer: {
        marginTop: 20
    },
    buttonContainer: {
        marginTop: 200
    },
    speechBubble: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        height: 140,
        width: 250,
        margin: 'auto'
    },
    singleColumn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        alignItems: 'center',
        width: '100%',
        margin: 'auto',
        position: 'absolute',
        top: 250,
        left: 0,
        right: 0,
        bottom: 0
    }
});
