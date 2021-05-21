import React, {useMemo, useState} from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

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
            <View style={styles.whiteBackground}>
                <Text style={styles.p1}>{body}</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.left} onPress={
                    () => {
                        if (index < reflections.length - 1) {
                            setIndex(index + 1);
                        }
                        
                    }
                }>
                    <Image source={require('../../assets/left.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.right} onPress={
                    () => {
                        if (index > 0) {
                            setIndex(index - 1);
                        }
                    }
                }>
                    <Image source={require('../../assets/right.png')}/>
                </TouchableOpacity>
            </View>
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
        paddingBottom: '5%'
    },
    p1: {
        fontSize: 18,
        padding: 50,
        fontFamily: 'Montserrat-Alternates',
        width: '80%',
        margin: 'auto'
    },
    whiteBackground: {
        flex: 8,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginBottom: '5%',
        width: '100%',
        height: '100%'
    },
    btnContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '7%',
        marginBottom: '5%'
    },
    left: {
        alignSelf: 'flex-start'
    },
    right: {
        alignSelf: 'flex-end'
    }
});
