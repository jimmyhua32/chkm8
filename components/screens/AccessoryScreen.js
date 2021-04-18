import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {View, Text, StyleSheet, Image} from 'react-native';
import * as images from "../../Images";

export default function AccessoryScreen( {navigation} ) {
    let accessories = require('../../assets/accessories.json').accessories;
    return (
        <View style={{backgroundColor: '#BBD9F8', height: '100%'}}>
            <View style={styles.list}>
            {
                accessories.map(item => <IdvCosmetic item={item} nav={navigation}/>)
            }
            </View>
        </View>
    );
}

const IdvCosmetic = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={
                () => {
                    props.nav.navigate("SpecificAccessory", {
                        item: props.item
                    })
                }
            }>
                <Image source={images.accessories[props.item.id]}/>
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
        justifyContent: 'center'
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        marginTop: '10%',
    },
    name: {
        fontFamily: 'Montserrat-Alternates',
    }
});
