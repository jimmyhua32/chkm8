import React from "react";
import {View, Button, StyleSheet, TouchableOpacity, Text, Image, TextInput, Keyboard} from "react-native";

const TitleInput = ({ onChange, inputText, numberOfLines, placeholder}) => (
    <View style={styles.background}>
        <TextInput
            style={styles.reflectionBox}
            onChangeText={text => onChange(text)}
            value={inputText}
            multiline={numberOfLines > 1 ? true : false}
            numberOfLines={numberOfLines}
            blurOnSubmit={true}
            placeholderTextColor={'#99b4d0'}
            placeholder = {placeholder}
            onSubmitEditing={()=>{Keyboard.dismiss()}}
        />

    </View>
);

const styles = StyleSheet.create({
    background: {
        width: '80%',
        marginBottom: 30
    },
    reflectionBox: {
        borderWidth: 0,
        margin: 'auto',
        padding: 30,
        fontFamily: 'Montserrat-Alternates',
        textAlignVertical: 'top',
        maxHeight: 450,
        fontSize: 30,
        color: '#80A2C5'
    },
});

export default TitleInput;
