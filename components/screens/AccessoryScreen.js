import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {View, Text, StyleSheet, Image} from 'react-native';

export default function AccessoryScreen( {navigation} ) {
    let accessories = require('../../assets/accessories.json').accessories;
    return (
        <View style={styles.list}>
            {
                accessories.map(item => <IdvCosmetic item={item} nav={navigation}/>)
            }
        </View>
    );
}

const IdvCosmetic = (props) => {
    console.log(props.item.image);
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={
                () => {
                    props.nav.navigate("SpecificAccessory", {
                        item: props.item
                    })
                }
            }>
                <Image source={props.item.image}/>
                <Text>{props.item.name}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        padding: 10
    },
    list: {
        display: 'flex'
    }
});
