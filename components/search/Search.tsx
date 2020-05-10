import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getWeather } from '../../service/weather.service';

export default function Search() {
    const [text, setText] = useState('');

    function submit() {
        if (text != '' && text != undefined) {
            getWeather(text);
            setText('');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={text => setText(text)} defaultValue={text} />
            <TouchableOpacity
                style={styles.button} onPress={submit}
            >
                <Icon name="search" size={20} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: Constants.statusBarHeight + 20,
    },
    input: {
        height: 40,
        width: 250,
        backgroundColor: 'rgba(4, 2, 1, 0.2)',
        borderColor: 'transparent',
        borderRadius: 50,
        padding: 12,
        marginRight: 5
    },
    button: {
        alignItems: "center",
        backgroundColor: 'rgba(4, 2, 1, 0.2)',
        height: 40,
        width: 50,
        borderRadius: 50,
        borderColor: 'transparent',
        padding: 10
    },
});
