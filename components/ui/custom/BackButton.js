import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// const navigation = useNavigation();

// const BackBtn = (() => {
//     <TouchableOpacity
//         source = {require("../../../assets/back.png")}
//         onPress = {() => {
//             navigation.goBack();   
//         }}
//     />
// })

// const disableBackAndroid = () => {
//     useFocusEffect(() => {
//         BackHandler.addEventListener('hardwareBackPress', () => true);
//     })
// }

//export default BackBtn;