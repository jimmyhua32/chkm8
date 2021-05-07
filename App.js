import React, { useCallback, useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { Image, LogBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import ReflectionScreen from './components/screens/ReflectionScreen';
import ReflectionSearchScreen from "./components/screens/ReflectionSearchScreen";
import ReflectionReadScreen from './components/screens/ReflectionReadScreen';
import AccessoryScreen from './components/screens/AccessoryScreen';
import SpecificAccessoryScreen from './components/screens/SpecificAccessoryScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {

    const Stack = createStackNavigator();
    LogBox.ignoreAllLogs(true);

    useFonts({'Montserrat-Alternates': require('./assets/fonts/MontserratAlternates-Medium.ttf')});

    const clearStorage = async () => {
        console.log("clearing storage");
        try {
            await AsyncStorage.clear();
        } catch (e) {
            console.log(e);
        }
    }
    clearStorage();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerTransparent: true,
                headerTitle: '', // overrides the screen name field
                headerBackTitleVisible: false,
                headerBackImage: () => { // requires a JSX element
                    return(
                        <Image style={{marginLeft: 15, marginTop: 20}} source={require('./assets/back.png')}/>
                    )
                },
                gestureEnabled: false
            }}>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name='Profile' component={ProfileScreen} />
                <Stack.Screen name='Reflection' component={ReflectionScreen} />
                <Stack.Screen name='ReflectionSearch' component={ReflectionSearchScreen} />
                <Stack.Screen name='ReflectionReadScreen' component={ReflectionReadScreen} />
                <Stack.Screen name='Accessories' component={AccessoryScreen} />
                <Stack.Screen name='SpecificAccessory' component={SpecificAccessoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
