import React, {useState} from "react";
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import MoodButton from '../../components/ui/custom/MoodButton';
import * as images from "../../Images";

export default function MoodScreen( {navigation} ) {

    function onPressed(mood) {
        navigation.navigate("Reflection", {mood: mood});
    }

    return(
        <View style={styles.singleColumn}>
            <Text style={[styles.title, styles.titlePrompt]}>How are you feeling?</Text>
            <View style={styles.moodButtonBox}>
                <MoodButton image={images.icons['mood-happy-leafy']} onPress={() => { onPressed('HAPPY') }}/>
                <MoodButton image={images.icons['mood-neutral-leafy']} onPress={() => { onPressed('NEUTRAL') }}/>
                <MoodButton image={images.icons['mood-sad-leafy']} onPress={() => { onPressed('SAD') }}/>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Montserrat-Alternates-Bold',
        color: '#80A2C5',
    },
    titlePrompt: {
        width: 300,
        height: 'auto',
        paddingBottom: 15,
        paddingTop: 100,
        fontWeight: '600',
    },
    moodButtonBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        flexWrap: 'nowrap',
        alignItems: 'center',
        width: "100%",
    },
    singleColumn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        alignItems: 'center',
        margin: 'auto',
        backgroundColor: '#BBD9F8',
    }
})
