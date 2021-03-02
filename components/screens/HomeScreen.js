import { useLinkProps } from "@react-navigation/native";
import React from "react";
import {View, Text, Button, StyleSheet, Image, ImageBackground} from 'react-native';
// import Constants from 'expo-constants';
// import * as Notifications from 'expo-notifications';

const assetsRoot = '../../assets/';

export default function HomeScreen( {navigation} ) {
    return (
        <View style={{position: 'relative', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{alignSelf: 'flex-start'}}>
                <Button
                    title="Options"
                />
            </View>
            <GameView/>
            <View style={styles.buttonBar}>
                <MenuButton name="Profile" screen="Profile" nav={navigation}/>
                <MenuButton name="Reflect" screen="Reflection" nav={navigation}/>
                <MenuButton name="Customize" screen="Customize" nav={navigation}/>
            </View>
        </View>
    );
}

const MenuButton = (props) => {
    return (
        <Button style = {styles.menuButton}
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
            <View styles={styles.backgroundContainer}>
                <Image styles={styles.background} source={require(assetsRoot + 'day.png')}/>
            </View>
            <View styles={styles.groundContainer}>
                <Image styles={styles.foreground} source={require(assetsRoot + 'ground.png')}/>
            </View>
            <View styles={styles.characterContainer}>
                <Image styles={styles.character} source={require(assetsRoot + 'blob-back.png')}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    menuButton: {
        backgroundColor: '#008CBA',
        position: 'absolute'
    },
    buttonBar: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        marginBottom: '15%'
    },
    backgroundContainer: {
        position: 'absolute',
        height: '75%'
    },
    background: {
        position: 'relative'
    },
    groundContainer: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center'
    },
    foreground: {
        position: 'relative'
    },
    characterContainer: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center'
    },
    character: {
        opacity: 0.5
    }
});

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
