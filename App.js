import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Screens
import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import ReflectionScreen from './components/screens/ReflectionScreen';
import ReflectionSearchScreen from "./components/screens/ReflectionSearchScreen";
import ReflectionReadScreen from './components/screens/ReflectionReadScreen';

export default function App() {

    const Stack = createStackNavigator();

  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen name='Home' component={HomeScreen} />
              <Stack.Screen name='Profile' component={ProfileScreen} />
              <Stack.Screen name='Reflection' component={ReflectionScreen} />
              <Stack.Screen name='ReflectionSearch' component={ReflectionSearchScreen} />
              <Stack.Screen name='ReflectionReadScreen' component={ReflectionReadScreen} />
          </Stack.Navigator>
      </NavigationContainer>

  );
}
