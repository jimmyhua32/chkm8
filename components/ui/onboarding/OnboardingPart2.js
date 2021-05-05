import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import SpeechBubble from "./SpeechBubble";
import * as images from "../../../Images";

export default function OnboardingPart2(props) {

    return (
        <View style={styles.background}>
            <View style={styles.mountainContainer}>
                <Image source={images.onboarding.mountains} style={styles.mountain}/>
            </View>

            <View style={styles.singleColumn}>
                <SpeechBubble text="I’ll be walking with you throughout  your journey. Your journey doesn’t end, but let’s take breaks together so we can take some time to reflect on your well-being."/>
                <View style={styles.leftAlign}>
                    <Image source={images.leafy['leafy-0f']} style={styles.leafySmall}/>
                </View>


                <SpeechBubble text="Your well-being is important. I’m here to help you pause for a second, and untangle anything you come across throughout your journey."/>
                <View style={styles.rightAlign}>
                    <Image source={images.leafy['leafy-0f']} style={styles.leafySmall}/>
                </View>


            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    leafySmall: {
        width: 60,
        height: 92
    },
    leftAlign: {
        flex: 1,
        alignItems: 'flex-start',
        width: '80%',
        margin: 'auto',
    },
    rightAlign: {
        flex: 1,
        alignItems: 'flex-end',
        width: '80%',
        margin: 'auto',
    },
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
        fontSize: 18,
        fontFamily: 'Montserrat-Alternates',
        padding: 10
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
        marginTop: 50
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
        top: 140,
        left: 0,
        right: 0,
        bottom: 0
    }
});
