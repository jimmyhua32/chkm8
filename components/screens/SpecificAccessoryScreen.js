import React, {useState} from "react";
import * as storage from '../../Storage';
import { useFocusEffect } from '@react-navigation/native';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as images from "../../Images";

export default function SpecificAccessoryScreen(props) {
    let item = props.route.params.item;
    const [msg, changeMsg] = useState("Cost: " + item.cost);
    useFocusEffect(() => {
        storage.getOrDefault("accessories", [0]).then((results) => {
            if (results) {
                if (results.includes(item.id)) {
                    changeMsg("Choose");
                } else {
                    changeMsg("Buy (" + item.cost + " Seeds)");  
                }
            }
        }).catch(() => {
            console.log("something went wrong");
        });
    });
    return (
        <View style={styles.container}>
            <View style={styles.accessory}>
                <Image source={images.accessories[item.id]}/>
                <Text style={{marginTop: 20, fontFamily: 'Montserrat-Alternates'}}>{item.description}</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress= {async () => {
                    let acc = await storage.getOrDefault("cur_accessory", 0);
                    let owned = await storage.getOrDefault("accessories", [0]);
                    console.log(acc);
                    console.log(owned);
                    if (acc != item.id && owned.includes(item.id)) {
                        storage.set("cur_accessory", item.id);
                        Alert.alert("Changed accessory to " + item.name);
                    } else if (acc == item.id) {
                        Alert.alert("Already equipped " + item.name);
                    } else if (!owned.includes(item.id)) {
                        let seeds = await storage.get("seeds");
                        console.log("seeds: " + seeds);
                        if (seeds >= item.cost) {
                            storage.set("seeds", seeds - item.cost);
                            owned.push(item.id);
                            storage.set("accessories", owned);
                            Alert.alert("Purchased " + item.name);
                        } else {
                            Alert.alert("Not enough seeds!");
                        }
                    }
                    changeMsg("Choose");
                }}
            >
                <Text style={{color: 'white'}}>{msg}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#BBD9F8',
        height: '100%',
        alignItems: 'center'
    },
    accessory: {
        marginTop: '30%',
        alignItems: 'center',
        backgroundColor: '#80A2C5',
        paddingTop: 40,
        paddingHorizontal: 75,
        paddingBottom: 100,
        borderRadius: 45
    },
    button: {
        backgroundColor: '#46698C',
        justifyContent: 'flex-end',
        marginTop: '45%',
        padding: 20,
        paddingHorizontal: 30,
        borderRadius: 30
    }
});