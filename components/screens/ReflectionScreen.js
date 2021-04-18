import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput, ScrollView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import MoodButton from '../../components/ui/custom/MoodButton';
import WidePillButton from "../../components/ui/custom/WidePillButton";
import * as storage from '../../Storage';

export default function ReflectionScreen( {navigation} ) {
    const [reflectionText, onChangeReflectionText] = useState('What\'s on your mind?');

    const [reflectionMood, onChangeReflectionMood] = useState('Normal');

    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );

    async function viewAllReflections() {
        await console.log("Reflections submitted already:");
        await storage.get('reflectionData').then(results => console.log(results));
    }

    async function submitReflection() {

        // Store new reflection
        let currentReflections = await storage.get('reflectionData');
        if (!currentReflections) {
            await storage.set('reflectionData', {
                reflections: [
                    {
                        entry: reflectionText,
                        datetime: Date.now(),
                        mood: reflectionMood,
                    }
                ]
            })
        } else {
            let updatedReflections = currentReflections.reflections;

            updatedReflections.push({entry: reflectionText, datetime: Date.now(), mood: reflectionMood});
            await storage.set('reflectionData', {reflections: updatedReflections});
        }

        // Update seeds
        await storage.get("seeds").then( (curSeeds) => {
            storage.set('seeds', curSeeds + 100);
        });

        // Close keyboard and clear input, navigate away to home
        Keyboard.dismiss();
        onChangeReflectionText('');
        navigation.navigate('Home');

    }

    return (
        <View style={styles.reflectionView}>
            <Text style={[styles.title, styles.titlePrompt]}>Hey there, what's on your mind?</Text>
            <View style={styles.moodButtonBox}>
                {/*
                <MoodButton title="1" onPress={() => {onChangeReflectionMood("1")}}/>
                <MoodButton title="2" onPress={() => {onChangeReflectionMood("2")}}/>
                <MoodButton title="3" onPress={() => {onChangeReflectionMood("3")}}/>
                <MoodButton title="4" onPress={() => {onChangeReflectionMood("4")}}/>
                <MoodButton title="5" onPress={() => {onChangeReflectionMood("5")}}/>
                */}
            </View>
            <View style={styles.whiteBackground}>

                <TextInput
                    style={styles.reflectionBox}
                    onChangeText={text => onChangeReflectionText(text)}
                    value={reflectionText}
                    multiline
                    numberOfLines={10}
                    blurOnSubmit={true}
                    onSubmitEditing={()=>{Keyboard.dismiss()}}
                />



                <WidePillButton
                    title="Done"
                    onPress={submitReflection}
                />
            </View>

            <Button
                title="See all reflections (debugging purposes, remove later)"
                onPress={viewAllReflections}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    reflectionView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BBD9F8',
        width: '100%',
    },
    whiteBackground: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Montserrat-Alternates',
        color: '#80A2C5',
    },
    titlePrompt: {
        width: 300,
        height: 'auto',
        paddingBottom: 15,
        fontWeight: '600',
    },
    p1: {
        fontSize: 18,
    },
    reflectionBox: {
        height: 400,
        width: 300,
        borderWidth: 0,
        margin: 'auto',
        padding: 10,
        //outlineWidth: 0,
        fontFamily: 'Montserrat-Alternates',
    },
    moodButtonBox: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 150
    }
});
