import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getWeatherByLocation, getWeatherByCoords } from '../../service/weather.service';

export default function Search() {
    const [text, setText] = useState('');

    function submit() {
        if (text != '' && text != undefined) {
            getWeatherByLocation(text);
            setText('');
        }
    }

    function searchCurrLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async pos => {
                const latitude = pos.coords.latitude;
                const longitude = pos.coords.longitude;

                getWeatherByCoords(latitude, longitude);
            });
        }
    }

    function setSearchText(newText: string) {
        setText(newText);
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Search your city'
                placeholderTextColor="black"
                style={styles.input}
                onChangeText={setSearchText}
                defaultValue={text}
            />
            <TouchableOpacity style={styles.button} onPress={submit} >
                <Icon name="search" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={searchCurrLocation} >
                <Icon name="location-arrow" size={20} />
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
    },
    button: {
        alignItems: "center",
        backgroundColor: 'rgba(4, 2, 1, 0.2)',
        height: 40,
        width: 40,
        borderRadius: 50,
        borderColor: 'transparent',
        padding: 10,
        marginLeft: 5
    },
});
