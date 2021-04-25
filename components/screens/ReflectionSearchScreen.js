import React, {useState} from "react";
import { useFocusEffect } from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import * as storage from '../../Storage';
import { SearchBar } from 'react-native-elements';

import ReflectionPreview from "../ui/ReflectionPreview";

export default function ReflectionSearchScreen( {navigation} ) {
    const [reflections, setReflections] = useState([]);
    const [search, updateSearch] = useState('');

    useFocusEffect(() => {
        storage.get('reflectionData').then((results) => {
            if (results) {
                setReflections(results.reflections);
            }
        });
    });

    let reflectionPreviews = reflections.map(item => <ReflectionPreview key={item.datetime} date={item.datetime} body={item.entry} nav={navigation}/>);

    const filterReflections = (text) => {
        reflectionsPreviews.forEach((item) => {
            if (item.body.includes(text)) {
                reflectionCopy.push(item);
            }
        });
        updateSearch(text);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Past Reflections</Text>
            <SearchBar
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.inputContainer}
                placeholder='Filter reflections...'
                onChangeText={(text) => {console.log("calling filter");filterReflections(text);}}
                value={search}
            />
            {reflectionPreviews}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DEEFFF',
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        textAlign: 'center',
        fontFamily: 'Montserrat-Alternates',
        color: '#80A2C5',
        paddingTop: 50,
        paddingBottom: 20
    },
    p1: {
        fontSize: 18,
        paddingBottom: 50,
    },
    searchContainer: {
        backgroundColor: '#DEEFFF',
        width: '75%',
        marginTop: '8%',
        marginBottom: '10%',
        borderTopColor: '#DEEFFF',
        borderBottomColor: '#DEEFFF'
    },
    inputContainer: {
        backgroundColor: 'white'
    }
});
