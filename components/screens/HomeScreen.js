import { useFocusEffect } from "@react-navigation/native";
import React, {useState, useMemo} from "react";
import {View, Text, Button, StyleSheet, Image, ImageBackground, TouchableOpacity, Platform} from 'react-native';
import * as images from "../../Images";
import * as storage from "../../Storage";

const assetsRoot = '../../assets/';

export default function HomeScreen( {navigation} ) {
    let on = images.icons.reflect;
    let off = images.icons["reflect-grey"];
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
    const [key, changeKey] = useState("");
    useFocusEffect(() => {
        storage.getOrDefault("cur_accessory", 0).then(
            (results) => {
                changeKey("leafy-" + results);
            }
        );
    });
    let front = images.leafy[key + "f"];
    let back = images.leafy[key + "b"];

    let journey = images.icons.journey;
    let rest = images.icons.rest;

    const [reflect, toggleReflect] = useState(false);
    const [reflectImg, changeImg] = useState(off);
    const [bgImg, changeBg] = useState(background);
    const [leafy, changeLeafy] = useState(back);
    const [resticon, changeIcon] = useState(rest);

    useMemo(() => {
        front = images.leafy[key + "f"];
        back = images.leafy[key + "b"];
        changeLeafy(reflect ? front : back); 
    }, [key]);

    useMemo(() => {
        changeImg(reflect ? on : off);
        changeBg(reflect ? camp : background);
        changeLeafy(reflect ? front : back);
        changeIcon(reflect ? journey : rest);
    }, [reflect]);

    return (
        <View style={styles.screenView}>
            <ImageBackground style={styles.backgroundContainer} source={bgImg}>
                <Image style={styles.character} source={leafy} key={leafy}/>
                <View style={styles.buttonBar}>
                    <TouchableOpacity title="Profile" onPress={() => {navigation.navigate("Profile")}}>
                        <Image style={styles.menuButton} source={images.icons.profile}/>
                    </TouchableOpacity>
                    <TouchableOpacity title="Rest"
                        onPress={() => {
                            toggleReflect(!reflect);
                        }
                    }>
                        <Image style={styles.menuButton} source={resticon}/>
                    </TouchableOpacity>
                    <TouchableOpacity title="Reflect"
                        onPress={() => {
                            if (reflect) { 
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
        resizeMode: 'contain',
        height: '18%',
        minHeight: '18%',
        ...Platform.select({
            ios: {
                marginTop: '110%',
            },
            android: {
                marginTop: '140%',
            },
            default: {
                marginTop: '110%',
            }
        })
    },
    menuButton: {
        maxHeight: '85%',
        resizeMode: 'contain'
    }
});
