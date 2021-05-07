import React, { useMemo, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {View, Text, StyleSheet, Image} from 'react-native';
import * as images from "../../Images";
import { useFocusEffect } from "@react-navigation/native";
import * as storage from '../../Storage';

let curId;

export default function AccessoryScreen( {navigation} ) {
    let accessories = require('../../assets/accessories.json').accessories;
    let [cur, setCur] = useState(-1);
    useFocusEffect(
        () => {
            storage.getOrDefault('cur_accessory', 0).then((results) => {
                setCur(results);
            })
        }
    )
    useMemo(() => {
        curId = cur;
    }, [cur]);
    return (
        <View style={{backgroundColor: '#BBD9F8', height: '100%'}}>
            <View style={styles.list}>
            {
                accessories.map(item => <IdvCosmetic key={item.id} item={item} nav={navigation}/>)
            }
            </View>
        </View>
    );
}

const IdvCosmetic = (props) => {
    let style = props.item.id == curId ? styles.buttonHighlighted : styles.button;
    return (
        <View>
            <TouchableOpacity style={style} onPress={
                () => {
                    props.nav.navigate("SpecificAccessory", {
                        item: props.item
                    })
                }
            }>
                <Image style={{maxHeight: '80%', resizeMode: 'contain'}} source={images.accessories[props.item.id]}/>
                <Text style={styles.name}>{props.item.name}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        padding: 10,
        height: 100,
        width: 100,
        margin: 10,
        alignItems: 'center',
        backgroundColor: '#DEEFFF',
        //justifyContent: 'center' // causes issues with "None" accessory
    },
    buttonHighlighted: {
        borderRadius: 20,
        padding: 10,
        height: 100,
        width: 100,
        margin: 10,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        marginTop: '25%',
    },
    name: {
        fontFamily: 'Montserrat-Alternates',
    }
});
