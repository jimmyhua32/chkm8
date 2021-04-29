import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import WidePillButton from "../ui/custom/WidePillButton";
import * as images from "../../Images";

export default function OnboardingScreen() {


    return (
        <View style={styles.background}>
            <View style={styles.mountainContainer}>
                <Image source={images.onboarding.mountains} style={styles.mountain}/>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Welcome!</Text>
            </View>

            <View style={styles.singleColumn}>
                <View style={styles.speechBubble}>
                    <Text style={styles.p1}>My name is Leafy, I'll be your journey companion and get you started with your own journey!</Text>
                </View>

                <Image source={images.leafy['leafy-0f']}/>

                <View style={styles.buttonContainer}>
                    <WidePillButton title={"Get started"}></WidePillButton>
                </View>

            </View>


        </View>
    );
}



const styles = StyleSheet.create({
    background: {
        backgroundColor: '#DEEFFF',
        width: '100%',
        height: '100%'
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
        top: 250,
        left: 0,
        right: 0,
        bottom: 0
    }
});
