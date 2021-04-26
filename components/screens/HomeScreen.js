import { useFocusEffect } from "@react-navigation/native";
import React, {useMemo, useState} from "react";
import {View, Text, Button, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native';
import * as images from "../../Images";
import * as storage from "../../Storage";

const assetsRoot = '../../assets/';

export default function HomeScreen( {navigation}) {
    let on = require(assetsRoot + 'reflect.png');
    let off = require(assetsRoot + 'reflect-off.png');
    let time = new Date().getHours();
    let stringTime = "day"; // default
    if (time >= 5 && time < 9) {
        stringTime = "sunrise";
    } else if (time >= 9 && time < 18) {
        stringTime = "day";
    } else if (time >= 18  && time < 21) {
        stringTime = "sunset";
    } else {
        stringTime = "night";
    }
    let background = images.reflectBackground[stringTime];
    let camp = images.reflectCampBackground[stringTime + "-camp"];
    const [key, changeKey] = useState("leafy-0");
    useFocusEffect(() => {
        storage.getOrDefault("cur_accessory", 0).then(
            (results) => {
                changeKey("leafy-" + results);
            }
        );
    });
    let front = images.leafy[key + "f"];
    let back = images.leafy[key + "b"];
    useMemo(() => {
        front = images.leafy[key + "f"];
        back = images.leafy[key + "b"];
    }, [key]);

    const [reflect, toggleReflect] = useState(false);
    const [reflectImg, changeImg] = useState(reflect ? on : off);
    const [bgImg, changeBg] = useState(reflect ? camp : background);
    const [leafy, changeLeafy] = useState(reflect ? front : back);
    return (
        <View style={styles.screenView}>
            {/*
                <View style={{alignSelf: 'flex-start'}}>
                <Button
                    title="Options"
                />
            </View>
            */}
            <ImageBackground style={styles.backgroundContainer} source={bgImg}>
                <Image style={styles.character} source={leafy} onLoad={() => {console.log(leafy)}} key={leafy}/>
                <View style={styles.buttonBar}>
                    <TouchableOpacity title="Profile" onPress={() => {navigation.navigate("Profile")}}>
                        <Image style={styles.menuButton} source={require(assetsRoot + 'profile.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity title="Rest"
                        onPress={() => {
                            toggleReflect(!reflect);
                            changeImg(reflect ? on : off);
                            changeBg(reflect ? camp : background);
                            changeLeafy(reflect ? front : back);
                        }
                    }>
                        <Image style={styles.menuButton} source={require(assetsRoot + "rest.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity title="Reflect"
                        onPress={() => {
                            if (!reflect) { // literally makes no sense
                                navigation.navigate("Reflection");
                            }
                        }
                    }>
                        <Image style={styles.menuButton} source={reflectImg}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    screenView: {
        position: 'relative', 
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttonBar: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        marginTop: '5%'
    },
    backgroundContainer: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        flex: 1,
        resizeMode: 'cover'
    },
    character: {
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginTop: '110%',
        resizeMode: 'contain',
        height: '18%',
        minHeight: '18%'
    },
    menuButton: {
        maxHeight: '85%',
        resizeMode: 'contain'
    }
});
