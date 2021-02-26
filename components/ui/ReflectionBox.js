import React from "react";
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import * as storage from '../../Storage';

export default function ReflectionBox() {

    const [reflectionText, onChangeReflectionText] = React.useState('What\'s on your mind?');

    return (
        <View style={styles.reflectionView}>
            <Text style={styles.title}>Let's take a break and reflect...</Text>
            <Text style={styles.p1}>
                How was your day?
            </Text>
            <TextInput
                style={styles.reflectionBox}
                onChangeText={text => onChangeReflectionText(text)}
                value={reflectionText}
                multiline
                numberOfLines={10}
                autoCapitalize
                autoCompleteType
            />
            <Button
                title="See all reflections (debugging purposes, remove later)"
                onPress={async () => {
                    await console.log("Reflections submitted already:");
                    await storage.get('reflectionData').then(results => console.log(results));
                }}
            />
            <Button
                title="I'm Done!"
                onPress={async () => {
                    console.log("Reflection submitted");
                    let currentReflections = await storage.get('reflectionData');
                    if (!currentReflections) {
                        storage.set('reflectionData', {
                            reflections: [
                                {
                                    entry: reflectionText,
                                    datetime: "current date"
                                }
                            ]
                        })
                    } else {
                        let updatedReflections = currentReflections.reflections;
                        updatedReflections.push({entry: reflectionText, datetime: "currentDate"});
                        storage.set('reflectionData', updatedReflections);
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    reflectionView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 25,
    },
    p1: {
        fontSize: 18,
    },
    reflectionBox: {
        height: 400,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 25,
        padding: 10,
    }
});
