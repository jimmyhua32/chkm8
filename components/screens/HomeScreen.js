import { useLinkProps } from "@react-navigation/native";
import React from "react";
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

export default function HomeScreen( {navigation} ) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{alignSelf: 'flex-start'}}>
                <Button
                    title="Options"
                />
            </View>
            <GameView/>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginBottom: '15%'}}>
                <MenuButton name="Profile" screen="Profile" nav={navigation}/>
                <MenuButton name="Reflect" screen="Reflection" nav={navigation}/>
                <MenuButton name="Customize" screen="Customize" nav={navigation}/>
            </View>
        </View>
    );
}

const MenuButton = (props) => {
    return (
        <Button
            title={props.name}
            onPress={() => {
                props.nav.navigate(props.screen);
             }}
        />
    );
};

const GameView = () => {
    return (
        <View>
            {/* not sure if image works for gif */}
            <Image id='Background'/>
            <Image id='Foreground'/>
            <Image id='Character'/>
        </View>
    )
};


{/* Setup for push notifications */}
/*
registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
};

 */
