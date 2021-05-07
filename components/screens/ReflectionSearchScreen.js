import React, {useState} from "react";
import { useFocusEffect } from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import * as storage from '../../Storage';
import { SearchBar } from 'react-native-elements';

import ReflectionPreview from "../ui/ReflectionPreview";

let lastSearch = '';
let cachedCopy = []; // save the previous copy to reduce compute time

export default function ReflectionSearchScreen( {navigation} ) {
    const [reflections, setReflections] = useState([]);
    const [search, updateSearch] = useState('');

    // get all reflections
    useFocusEffect(() => {
        storage.get('reflectionData').then((results) => {
            if (results) {
                setReflections(results.reflections.reverse()); // reverse to have most recent at the top
            }
        });
    });

    let reflectionPreviews = reflections.map(item => <ReflectionPreview key={item.datetime} date={item.datetime} body={item.entry} nav={navigation}/>);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Past Reflections</Text>
            <SearchBar
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.inputContainer}
                placeholder='Filter reflections...'
                onChangeText={(text) => {updateSearch(text)}}
                value={search}
            />
            {filterPreviews(search, reflectionPreviews)}
        </View>
    );
}

// returns an array of JSX elements after being filtered by a search string
const filterPreviews = (search, previews) => {
    if (search == '') {
        return previews;
    }
    if (lastSearch == search) { // this function runs constantly so save the previous output to save time/memory
        return cachedCopy;
    }
    lastSearch = search;
    let copy = [];
    search = search.toUpperCase();
    previews.forEach((item) => {
        let body = item.props.body.toUpperCase();
        if (body.includes(search)) {
            copy.push(item);
        }
    });
    cachedCopy = copy;
    return cachedCopy;
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
