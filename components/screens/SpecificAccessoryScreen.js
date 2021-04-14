import React from "react";
import * as storage from '../../Storage';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

export default function SpecificAccessoryScreen(props) {
    let item = props.route.params.item;
    let acc = storage.get("cur_accessory").then((results) => {
        return results;
    });
    let owned = storage.getOrDefault("accessories", []).then((result) => {
        return result;
    });
    let selected = acc == item.id;
    let purchased = owned.includes(item.id);
    return (
        <View>
            <Button
                title={purchased ? "Choose" : "Buy (" + item.cost + " Seeds)"}
                onPress= {() => {
                    if (!selected && purchased) {
                        storage.set("cur_accessory", item.id);
                        selected = true;
                    } else if (!purchased) {
                        let seeds = storage.get("seeds");
                        if (seeds >= cost) {
                            storage.set("seeds", seeds - cost);
                            owned.push(item.id);
                            storage.set("accessories", owned);
                            purchased = true;
                        }
                    }
                }}
            />
        </View>
    );
}