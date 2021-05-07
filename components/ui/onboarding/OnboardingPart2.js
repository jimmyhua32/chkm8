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
                <SpeechBubble text={<Text style={styles.p1}>I’ll be walking with you throughout your <Text style={styles.bold}>journey</Text>. Your journey doesn’t end, but let’s take <Text style={styles.bold}>breaks</Text> together so we can take some time to <Text style={styles.bold}>reflect</Text> on your well being.</Text>}/>
                <View style={styles.leftAlign}>
                    <Image source={images.leafy['leafy-0f']} style={styles.leafySmallLeft}/>
                </View>


                <SpeechBubble text={<Text style={styles.p1}>Your well-being is important. I’m here to help you pause for a second, and untangle anything you come across throughout your journey.</Text>}/>
                <View style={styles.rightAlign}>
                    <Image source={images.leafy['leafy-0f']} style={styles.leafySmallRight}/>
                </View>


            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    leafySmallLeft: {
        width: 60,
        height: 92,
        position: 'absolute',
        top: -35,
        left: 0,
        right: 0,
        bottom: 0
    },
    leafySmallRight: {
        width: 60,
        height: 92,
        position: 'absolute',
        top: -35,
        left: 250,
        right: 0,
        bottom: 0
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
    bold: {
        fontSize: 16,
        fontFamily: 'Montserrat-Alternates-Bold',
        padding: 20,
        color: '#80A2C5',
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
