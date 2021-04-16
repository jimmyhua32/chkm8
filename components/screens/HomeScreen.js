import React, {useState} from "react";
import {View, Text, Button, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native';

const assetsRoot = '../../assets/';


export default function HomeScreen( {navigation} ) {
    let on = require(assetsRoot + 'reflect.png');
    let off = require(assetsRoot + 'reflect-off.png');
    const [reflect, toggleReflect] = useState(false);
    const [reflectImg, changeImg] = useState(reflect ? on : off);
    return (
        <View style={styles.screenView}>
            {/*
                <View style={{alignSelf: 'flex-start'}}>
                <Button
                    title="Options"
                />
            </View>
            */}
            <ImageBackground style={styles.backgroundContainer} source={require(assetsRoot + 'day_test.png')}>
                <Image style={styles.character} source={require(assetsRoot + 'blob-back.png')}/>
                <View style={styles.buttonBar}>
                    <TouchableOpacity style={styles.menuButton}title="Profile" onPress={() => {navigation.navigate("Profile")}}>
                        <Image source={require(assetsRoot + 'profile.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton} title="Rest"
                        onPress={() => {
                            toggleReflect(!reflect);
                            changeImg(reflect ? on : off);
                            console.log(reflect);
                            console.log(reflectImg);
                        }
                    }>
                        <Image source={require(assetsRoot + "rest.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton} title="Reflect"
                        onPress={() => {
                            console.log(reflect);
                            if (reflect) {
                                navigation.navigate("Reflection");
                            }
                        }
                    }>
                        <Image source={reflectImg}/>
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
        marginTop: '10%'
    },
    backgroundContainer: {
        height: '100%',
        width: '100%'
    },
    character: {
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginTop: '95%'
    },
    menuButton: {
        resizeMode: 'cover'
    }
});
