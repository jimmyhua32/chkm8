import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput, ScrollView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import MoodButton from '../../components/ui/custom/MoodButton';
import WidePillButton from "../../components/ui/custom/WidePillButton";
import ReflectionInput from "../ui/custom/ReflectionInput";
import TitleInput from "../ui/custom/TitleInput";
import * as storage from '../../Storage';

export default function ReflectionScreen( {route, navigation} ) {
    const [reflectionText, onChangeReflectionText] = useState('');
    const [reflectionTitle, onChangeReflectionTitle] = useState('');

    // ex: April 30th, 2021
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
            <Text style={styles.title}>{curDate}</Text>
            <ReflectionInput onChange={onChangeReflectionTitle} inputText={reflectionTitle} numberOfLines={1} placeholder={"Enter Title..."}/>
            <ReflectionInput onChange={onChangeReflectionText} inputText={reflectionText} numberOfLines={20} placeholder={"Today was a pretty good day!"}/>
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
    let day = date.getDate();
    let dayLastNum = day.toString().charAt(day.toString().length - 1);
    let placing = "th";
    if (dayLastNum == '1') {
        placing = "st";
    } else if (dayLastNum == '2') {
        placing = "nd";
    } else if (dayLastNum == '3') {
        placing = 'rd';
    }
    return month + " " + day + placing + ", " + date.getFullYear();
}

const styles = StyleSheet.create({
    reflectionView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#BBD9F8',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        margin: 'auto',
        paddingTop: 100
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Montserrat-Alternates-Bold',
        color: '#80A2C5',
        paddingBottom: 30
    },
    buttonContainer: {
        paddingTop: 25,
        paddingBottom: 25,
        margin: 'auto',
        flex: 1,
        alignItems: 'center'
    }
});
