import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as storage from './Storage';

// Screens
import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import ReflectionScreen from './components/screens/ReflectionScreen';
import ReflectionSearchScreen from "./components/screens/ReflectionSearchScreen";
import ReflectionReadScreen from './components/screens/ReflectionReadScreen';
import AccessoryScreen from './components/screens/AccessoryScreen';
import SpecificAccessoryScreen from './components/screens/SpecificAccessoryScreen';
import OnboardingScreen from "./components/screens/OnboardingScreen";

export default function App() {

    const [initialScreen, setInitialScreen] = useState('Onboarding');

    const Stack = createStackNavigator();

    // returns a boolean
    useFonts({'Montserrat-Alternates': require('./assets/fonts/MontserratAlternates-Medium.ttf')});
    useFonts({'Montserrat-Alternates-Bold': require('./assets/fonts/MontserratAlternates-Bold.ttf')});

    useEffect(() => {
        let getOnboardedData = async () => {
            let isOnboarded = await storage.get('onboarded');
            if (isOnboarded == null || isOnboarded == false) {
                console.log("Show one time screen set to true");
                setInitialScreen('Onboarding');
            } else {
                console.log("Show one time screen set to false");
                setInitialScreen('Home');
            }
        }
        getOnboardedData();
    }, []);

    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName={initialScreen} screenOptions={{headerShown: false}}>
              <Stack.Screen name='Onboarding' component={OnboardingScreen} />
              <Stack.Screen name='Home' component={HomeScreen} />
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
