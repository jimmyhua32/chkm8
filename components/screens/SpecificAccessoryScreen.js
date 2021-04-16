import React from "react";
import * as storage from '../../Storage';
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SpecificAccessoryScreen(props) {
    let item = props.route.params.item;
    return (
        <View style={styles.container}>
            <View style={styles.accessory}>
                <Image source={images[item.id]}/>
                <Text style={{marginTop: 20}}>{item.description}</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress= {async () => {
                    let acc = await storage.get("cur_accessory");
                    let owned = await storage.getOrDefault("accessories", []);
                    console.log(acc);
                    console.log(owned);
                    if (acc != item.id && owned.includes(item.id)) {
                        storage.set("cur_accessory", item.id);
                        Alert.alert("Changed accessory to " + item.name);
                    } else if (acc == item.id) {
                        Alert.alert("Already equipped " + item.name);
                    } else if (!owned.includes(item.id)) {
                        let seeds = await storage.get("seeds");
                        if (seeds >= item.cost) {
                            storage.set("seeds", seeds - item.cost);
                            owned.push(item.id);
                            storage.set("accessories", owned);
                            Alert.alert("Purchased " + item.name);
                        } else {
                            Alert.alert("Not enough seeds!");
                        }
                    }
                }}
            >
                <Text style={{color: 'white'}}>Cost: {item.cost}</Text>
            </TouchableOpacity>
        </View>
    );
}

const images = {
    1 : require("../../assets/blob-front.png"),
    2 : require("../../assets/blob-back.png"),
    3 : require("../../assets/blob-front.png"),
    4 : require("../../assets/blob-back.png"),
    5 : require("../../assets/blob-front.png"),
    6 : require("../../assets/blob-back.png")
};

async function accStatus(item) {
    let owned = await storage.getOrDefault("accessories", []);
    if (owned.includes(item.id)) {
        return "Choose";
    }
    return "Buy (" + item.cost + ") Seeds";    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#BBD9F8',
        height: '100%',
        alignItems: 'center'
    },
    accessory: {
        marginTop: '20%'
    },
    button: {
        backgroundColor: '#46698C',
        justifyContent: 'flex-end',
        marginTop: '70%',
        padding: 20,
        paddingHorizontal: 30,
        borderRadius: 30
    }
});