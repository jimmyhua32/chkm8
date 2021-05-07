import React, {useState} from "react";
import { useFocusEffect } from '@react-navigation/native';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as storage from '../../Storage';
import * as images from '../../Images';
import { BackBtn } from '../ui/custom/BackButton';

export default function ProfileScreen( {navigation} ) {

    const [reflectionCount, setReflectionCount] = useState(0);
    const [seeds, setSeeds] = useState(0);

    useFocusEffect(() => {
        storage.get('reflectionData').then((results) => {
            if (results) {
                setReflectionCount(results.reflections.length);
            }
        });
        storage.get('seeds').then((results) => {
            if (results) {
                setSeeds(results);
            }
        });
    });

    return (
        <View style={styles.background}>
            <Text style={styles.title}>Profile</Text>

            <View style={styles.statsFlexBox}>
                <View style={styles.columnFlex}>
                    <Text style={[styles.statsNumber, styles.statReflections]}>{reflectionCount}</Text>
                    <Text style={[styles.statsLabel, styles.statReflections]}>Reflections</Text>
                </View>
                <View style={styles.separator}></View>
                <View style={styles.columnFlex}>
                    <Text style={[styles.statsNumber, styles.statSeeds]}>{seeds}</Text>
                    <Text style={[styles.statsLabel, styles.statSeeds]}>Seeds</Text>
                </View>
            </View>

            <View style={styles.panelFlexBox}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ReflectionSearch');
                    }}
                >
                    <View style={styles.panelButton}>
                        <Image source={images.icons.reflect} style={styles.panelButtonIcon}/>
                        <Text style={styles.panelButtonText}>Past Reflections</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Accessories');
                    }}
                >
                    <View style={styles.panelButton}>
                        <Image source={images.icons.customize} style={styles.panelButtonIcon}/>
                        <Text style={styles.panelButtonText}>Accessories</Text>
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#DEEFFF',
        height: '100%'
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        textAlign: 'center',
        fontFamily: 'Montserrat-Alternates',
        color: '#80A2C5',
        paddingTop: 100
    },
    p1: {
        fontSize: 18,
        paddingBottom: 50,
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
        textAlign: 'center',
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
        margin: 10,
        width: 150,
        height: 150,
        borderRadius: 40,
        backgroundColor: '#80A2C5',
        flexDirection:'column',
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    panelButtonIcon: {
        margin: 'auto',
    },
    panelButtonText: {
        margin: 'auto',
        textAlign: 'center',
        fontFamily: 'Montserrat-Alternates',
        fontSize: 15,
        color: 'white',
        width: '100%'
    }

});
