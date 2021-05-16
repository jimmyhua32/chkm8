import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput, ScrollView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import MoodButton from '../../components/ui/custom/MoodButton';
import WidePillButton from "../../components/ui/custom/WidePillButton";
import * as storage from '../../Storage';

export default function ReflectionScreen( {route, navigation} ) {
    const [reflectionText, onChangeReflectionText] = useState('');
    const [reflectionTitle, onChangeReflectionTitle] = useState('');

    // April 30th, 2021
    let curDate = dateFormat(new Date());

    // mood is passed in with navigation object from MoodScreen.js, reference with 'route.params.mood'



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
                        mood: route.params.mood,
                        title: reflectionTitle
                    }
                ]
            })
        } else {

            // If reflections exists, then add it to the existing reflection array
            let updatedReflections = currentReflections.reflections;

            updatedReflections.push({entry: reflectionText, datetime: Date.now(), mood: route.params.mood, title: reflectionTitle});
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
            <Text style={[styles.title, styles.titlePrompt, styles.bold]}>{curDate}</Text>
            <TextInput
                style={styles.titleBox}
                onChangeText={text => onChangeReflectionTitle(text)}
                value={reflectionTitle}
                blurOnSubmit={true}
                onSubmitEditing={()=>{Keyboard.dismiss()}}
            />
            {/*
            <View style={styles.whiteBackground2}>
                <TextInput
                    style={styles.titleBox}
                    onChangeText={text => onChangeReflectionTitle(text)}
                    value={reflectionTitle}
                    blurOnSubmit={true}
                    onSubmitEditing={()=>{Keyboard.dismiss()}}
                />
            </View>

            <View style={styles.whiteBackground}>
                <TextInput
                    style={styles.reflectionBox}
                    onChangeText={text => onChangeReflectionText(text)}
                    value={reflectionText}
                    multiline
                    numberOfLines={10}
                    blurOnSubmit={true}
                    placeholder = "Today was a pretty good day!"
                    onSubmitEditing={()=>{Keyboard.dismiss()}}
                />

            </View>
            */}
            <View style={styles.buttonContainer}>
                <WidePillButton
                    title="Done"
                    onPress={submitReflection}
                />
            </View>

        </View>
    );
}

const dateFormat = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let month = monthNames[date.getMonth()];
    return month + " " + date.getDate() + ", " + date.getFullYear();
}

const styles = StyleSheet.create({
    reflectionView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#BBD9F8',
        width: '100%',
        height: '100%'
    },
    whiteBackground: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '80%',
        marginTop: '10%',
        flex: 1,
    },
    whiteBackground2: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '80%',
        height: 10,
        marginTop: '10%',
        flex: 1,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Montserrat-Alternates',
        color: '#80A2C5',
    },
    titlePrompt: {
        width: 300,
        backgroundColor: '#fff',
        height: 'auto',
        paddingBottom: 15,
        paddingTop: 100,
        fontWeight: '600',
    },
    p1: {
        fontSize: 18,
    },
    bold: {
        fontFamily: 'Montserrat-Alternates-Bold'
    },
    reflectionBox: {
        height: 100,
        borderWidth: 0,
        margin: 'auto',
        padding: 30,
        fontFamily: 'Montserrat-Alternates',
        textAlignVertical: 'top'
    },
    titleBox: {
        height: 100,
        borderWidth: 0,
        margin: 'auto',
        padding: 30,
        fontFamily: 'Montserrat-Alternates',
        textAlignVertical: 'top'
    },
    moodButtonBox: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 150
    },
    buttonContainer: {
        paddingTop: 25,
        paddingBottom: 25,
        margin: 'auto',
        flex: 1,
        alignItems: 'center'
    }
});
