import React from "react";
import { Platform } from "react-native";
import {View, Button, StyleSheet, TouchableOpacity, Text, Image, TextInput, Keyboard} from "react-native";

const ReflectionInput = ({ onChange, inputText, numberOfLines, placeholder}) => (
    <View style={styles.whiteBackground}>
        <TextInput
            style={styles.reflectionBox}
            onChangeText={text => onChange(text)}
            value={inputText}
            multiline={numberOfLines > 1 ? true : false}
            numberOfLines={numberOfLines}
            minHeight={(Platform.OS === 'ios' && numberOfLines) ? (13 * numberOfLines) : null}
            blurOnSubmit={true}
            placeholder = {placeholder}
            onSubmitEditing={()=>{Keyboard.dismiss()}}
            textAlignVertical='top'
        />

    </View>
);

const styles = StyleSheet.create({
    whiteBackground: {
        backgroundColor: '#fff',
        borderRadius: 50,
        width: '80%',
        marginBottom: 15
    },
    reflectionBox: {
        borderWidth: 0,
        margin: 'auto',
        padding: 20,
        fontFamily: 'Montserrat-Alternates',
        textAlignVertical: 'top',
        maxHeight: 450,
    },
});

export default ReflectionInput;
