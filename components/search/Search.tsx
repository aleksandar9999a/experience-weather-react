import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Search() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
            <TouchableOpacity
                style={styles.button}
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
        borderWidth: 0.7,
        padding: 12,
        marginRight: 5
    },
    button: {
        alignItems: "center",
        backgroundColor: 'rgba(4, 2, 1, 0.2)',
        height: 40,
        width: 50,
        borderRadius: 50,
        borderWidth: 0.7,
        borderColor: 'transparent',
        padding: 10
    },
});
