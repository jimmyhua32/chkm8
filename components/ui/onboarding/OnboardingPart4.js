import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SpeechBubble from "./SpeechBubble";
import * as images from "../../../Images";

export default function OnboardingPart4(props) {

    return (
        <View style={styles.background}>
            <View style={styles.mountainContainer}>
                <Image source={images.onboarding.mountains} style={styles.mountain}/>
            </View>

            <View style={styles.singleColumn}>
                <SpeechBubble text={<Text style={styles.p1}>Everytime you reflect, you’ll receive <Text style={styles.bold}>seeds</Text> that you can use towards accessories. You can discover <Text style={styles.bold}>past reflections</Text> and accessories in your profile.</Text>}/>
                <View style={styles.leftAlign}>
                    <Image source={images.leafy['leafy-0f']} style={styles.leafySmall}/>
                </View>
            </View>

            <View style={styles.spacer}>
                <View style={styles.statsFlexBox}>
                    <View style={styles.columnFlex}>
                        <Text style={[styles.statsNumber, styles.statReflections]}>17</Text>
                        <Text style={[styles.statsLabel, styles.statReflections]}>Reflections</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.columnFlex}>
                        <Text style={[styles.statsNumber, styles.statSeeds]}>170</Text>
                        <Text style={[styles.statsLabel, styles.statSeeds]}>Seeds</Text>
                    </View>
                </View>

                <View style={styles.panelFlexBox}>
                    <View style={styles.panelButton}>
                        <Image source={images.icons['reflect-inverted']} style={styles.panelButtonIcon}/>
                        <Text style={styles.panelButtonText}>Past Reflections</Text>
                    </View>

                    <View style={styles.panelButton}>
                        <Image source={images.icons.customize} style={styles.panelButtonIcon}/>
                        <Text style={styles.panelButtonText}>Accessories</Text>
                    </View>
                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    spacer: {
        marginTop: 5
    },
    statsFlexBox: {
        flexDirection:'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    columnFlex: {
        flexDirection:'column',
        flexWrap:'wrap',
        alignItems: 'center'
    },
    statReflections: {
        color: '#F3C644',
        textAlign: 'center'
    },
    statSeeds: {
        fontFamily: 'Montserrat-Alternates',
        color: '#86CD6F',
        textAlign: 'center',
    },
    statsNumber: {
        fontFamily: 'Montserrat-Alternates',
        fontSize: 50,
        fontWeight: 'bold'
    },
    statsLabel: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    separator: {
        backgroundColor: '#80A2C5',
        width: 2,
        height: 50
    },
    panelFlexBox: {
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    panelButton: {
        margin: 20,
        padding: 10,
        width: 140,
        height: 140,
        borderRadius: 40,
        backgroundColor: '#80A2C5',
        flexDirection:'column',
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    panelButtonIcon: {
        margin: 'auto'
    },
    panelButtonText: {
        margin: 'auto',
        textAlign: 'center',
        fontFamily: 'Montserrat-Alternates',
        fontSize: 15,
        color: 'white',
        width: '100%',
        paddingTop: 5
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
        top: 140,
        left: 0,
        right: 0,
        bottom: 0
    }
});
