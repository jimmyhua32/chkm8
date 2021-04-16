import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {View, Text, StyleSheet, Image} from 'react-native';

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
                <Image source={images[props.item.id]}/>
                <Text>{props.item.name}</Text>
            </TouchableOpacity>
        </View>
    );
};

// React Native requires all images to be declared explictly
// Key is id, Value is img path
const images = {
    1 : require("../../assets/01.png"),
    2 : require("../../assets/02.png"),
    3 : require("../../assets/03.png"),
    4 : require("../../assets/04.png"),
    5 : require("../../assets/05.png"),
    6 : require("../../assets/blob-front.png")
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        padding: 10,
        alignItems: 'center'
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        marginTop: '10%'
    }
});
