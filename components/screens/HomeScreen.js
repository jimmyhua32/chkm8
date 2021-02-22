import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

export default function HomeScreen( {navigation} ) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Home Screen</Text>
            <Text style={styles.p1}>
                This is the home screen. This one is definitely going to take the longest.
            </Text>
            <Button
                title="to profile"
                onPress={() => {
                    navigation.navigate('Profile');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 50,
    },
    p1: {
        fontSize: 18,
        paddingBottom: 50,
    },
});
