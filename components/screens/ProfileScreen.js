import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

export default function ProfileScreen( {navigation} ) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Profile Screen</Text>
            <Text style={styles.p1}>
                This is the profile screen. Hopefully we can have some sexy data here but for
                now we have a boring paragraph :(
            </Text>
            <Button
                title="to home"
                onPress={() => {
                    navigation.navigate('Home');
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
