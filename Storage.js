import AsyncStorage from '@react-native-async-storage/async-storage';

export const set = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log(e);
    }
}

export const get = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log(e);
    }
}

export const getOrDefault = async (key, other) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : other
    } catch(e) {
        console.log(e);
    }
}

export const clear = async() => {
    try {
        await AsyncStorage.clear();
        console.log('storage cleared');
    } catch(e) {
        console.log(e);
    }
}

