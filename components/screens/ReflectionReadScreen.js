import React, {useMemo, useState} from "react";
import {View, Text, Button, StyleSheet, TextInput, ScrollView} from 'react-native';

export default function ReflectionReadScreen(props) {

    const [date, setDate] = useState(props.route.params.date);
    const [body, setBody] = useState(props.route.params.body);
    const [index, setIndex] = useState(props.route.params.index);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let dateObj = new Date(date);
    // date function 'toLocaleString' would be perfect but it doesn't work on RN android
    let dateString = monthNames[dateObj.getMonth()] + " " +
        dateObj.getDate() + ", " +
        dateObj.getFullYear();

    let reflections = props.route.params.reflections;

    useMemo(() => {
        let ref = reflections[index];
        setDate(ref.datetime);
        setBody(ref.entry);
    }, [index]);

    return (
        <View style={styles.previewContainer}>
            <Text style={styles.title}>{dateString}</Text>
            <View style={styles.btnContainer}>
                <Button style={styles.left} title='left' onPress={
                    () => {
                        if (index < reflections.length - 1) {
                            setIndex(index + 1);
                        }

                    }
                }/>
                <Button style={styles.right} title='right' onPress={
                    () => {
                        if (index > 0) {
                            setIndex(index - 1);
                        }
                    }
                }/>
            </View>
            <ScrollView style={styles.whiteBackground}>
                <Text style={styles.p1}>{body}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    previewContainer: {
        margin: 'auto',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DEEFFF'
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        textAlign: 'center',
        fontFamily: 'Montserrat-Alternates',
        color: '#80A2C5',
        paddingTop: 100,
        paddingBottom: 75
    },
    p1: {
        fontSize: 18,
        padding: 50,
        fontFamily: 'Montserrat-Alternates',
        margin: 'auto'
    },
    whiteBackground: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: '100%',
        height: '100%'
    },
    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        marginBottom: '5%'
    },
    left: {
        alignSelf: 'flex-start'
    },
    right: {
        alignSelf: 'flex-end'
    }
});
