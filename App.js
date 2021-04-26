import React, { useCallback, useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Storage from './Storage';

// Screens
import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import ReflectionScreen from './components/screens/ReflectionScreen';
import ReflectionSearchScreen from "./components/screens/ReflectionSearchScreen";
import ReflectionReadScreen from './components/screens/ReflectionReadScreen';
import AccessoryScreen from './components/screens/AccessoryScreen';
import SpecificAccessoryScreen from './components/screens/SpecificAccessoryScreen';

export default function App() {
    // const [isReady, setReady] = useState(false);
    // const [accessoryState, setAccessory] = useState(0);
    // useEffect(() => {
    //     async function prepare() {
    //         try {
    //             await SplashScreen.preventAutoHideAsync();
    //             useFonts({'Montserrat-Alternates': require('./assets/fonts/MontserratAlternates-Medium.ttf')});
    //             let acc = await Storage.getOrDefault("cur_accessory", 0);
    //             setAccessory(acc);
    //         } catch (e) {
    //             console.warn(e);
    //         } finally {
    //             setReady(true);
    //         }
    //     }
    //     prepare();
    // }, []);

    // const Stack = createStackNavigator();

    // const onLayoutRootView = useCallback(async () => {
    //     if (isReady) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [isReady]);

    // if (!isReady) {
    //     return null;
    // }

    const Stack = createStackNavigator();

    useFonts({'Montserrat-Alternates': require('./assets/fonts/MontserratAlternates-Medium.ttf')});

    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
              <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
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
