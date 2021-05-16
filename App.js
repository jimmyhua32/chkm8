import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { Image, LogBox } from 'react-native';
import * as storage from './Storage';
import AppLoading from 'expo-app-loading';

// Screens
import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import ReflectionScreen from './components/screens/ReflectionScreen';
import ReflectionSearchScreen from "./components/screens/ReflectionSearchScreen";
import ReflectionReadScreen from './components/screens/ReflectionReadScreen';
import AccessoryScreen from './components/screens/AccessoryScreen';
import SpecificAccessoryScreen from './components/screens/SpecificAccessoryScreen';
import OnboardingScreen from "./components/screens/OnboardingScreen";
import MoodScreen from './components/screens/MoodScreen';

export default function App() {

    const [initialScreen, setInitialScreen] = useState('Onboarding');
    const [isReady, setReady] = useState(false);

    const Stack = createStackNavigator();
    LogBox.ignoreAllLogs(true);

    useFonts({'Montserrat-Alternates': require('./assets/fonts/MontserratAlternates-Medium.ttf')});
    useFonts({'Montserrat-Alternates-Bold': require('./assets/fonts/MontserratAlternates-Bold.ttf')});

    // purely for testing
    const clearStorage = async () => {
        console.log("clearing storage");
        await storage.clear();
    }
    clearStorage();

    const loadData = async () => {
        let isOnboarded = await storage.get('onboarded');
        if (isOnboarded == null || isOnboarded == false) {
            console.log("Show one time screen set to true");
            setInitialScreen('Onboarding');
        } else {
            console.log("Show one time screen set to false");
            setInitialScreen('Home');
        }
    }

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadData}
                onFinish={() => setReady(true)}
                onError={console.warn}
            />
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialScreen} screenOptions={{
                headerTransparent: true,
                headerTitle: '', // overrides the screen name field
                headerBackTitleVisible: false,
                headerBackImage: () => { // requires a JSX element
                    return(
                        <Image style={{marginLeft: 15, marginTop: 20}} source={require('./assets/back.png')}/>
                    )
                }
            }}>
                <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{headerShown: false}}/>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name='Profile' component={ProfileScreen} />
                <Stack.Screen name='Reflection' component={ReflectionScreen} />
                <Stack.Screen name='ReflectionSearch' component={ReflectionSearchScreen} />
                <Stack.Screen name='ReflectionReadScreen' component={ReflectionReadScreen} />
                <Stack.Screen name='ReflectionMoodScreen' component={MoodScreen} />
                <Stack.Screen name='Accessories' component={AccessoryScreen} />
                <Stack.Screen name='SpecificAccessory' component={SpecificAccessoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
