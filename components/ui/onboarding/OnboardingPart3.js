import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import SpeechBubble from "./SpeechBubble";
import * as images from "../../../Images";

export default function OnboardingPart3(props) {

    return (
        <View style={styles.background}>
            <View style={styles.mountainContainer}>
                <Image source={images.onboarding.mountains} style={styles.mountain}/>
            </View>

            <View style={styles.singleColumn}>

                <SpeechBubble text={<Text style={styles.p1}>Let’s familiarize ourselves with our main tasks. Your <Text style={styles.bold}>profile</Text>, taking <Text style={styles.bold}>breaks</Text>, and <Text style={styles.bold}>reflection</Text>.</Text>}/>
                <View style={styles.leftAlign}>
                    <Image source={images.leafy['leafy-0f']} style={styles.leafySmall}/>
                </View>
            </View>

            <View style={styles.singleColumn2}>
                <View style={styles.iconInfoPill}>
                    <Image source={images.icons['profile']} style={styles.icon}/>
                    <Text style={styles.p2}>This is your profile. Access this to view previous reflections and explore some accessories.</Text>
                </View>

                <View style={styles.iconInfoPill}>
                    <Image source={images.icons['reflect']} style={styles.icon}/>
                    <Text style={styles.p2}>Take a break! At anytime in your journey, take a break. <Text style={styles.bold2}>You must take a break in order to reflect.</Text></Text>
                </View>

                <View style={styles.iconInfoPill}>
                    <Image source={images.icons['rest']} style={styles.icon}/>
                    <Text style={styles.p2}>Reflect on what’s going on. Pause admist any chaos and take some time to reflect.</Text>
                </View>


            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    icon: {
        width: 110,
        height: 110,
        marginLeft: -10
    },
    iconInfoPill: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 300,
        height: 100,
        margin: 'auto',
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        marginBottom: 10
    },
    leafySmall: {
        width: 60,
        height: 92,
        position: 'absolute',
        top: -35,
        left: 0,
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
    bold2: {
        fontSize: 14,
        fontFamily: 'Montserrat-Alternates-Bold',
        padding: 20,
        color: '#80A2C5',
    },
    p2: {
        fontSize: 14,
        width: 250,
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
    },
    singleColumn2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        alignItems: 'center',
        width: '100%',
        margin: 'auto',
        position: 'absolute',
        top: "50%",
        left: 0,
        right: 0,
        bottom: 0
    }
});