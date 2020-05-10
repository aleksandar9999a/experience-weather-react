import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function WeatherItem({ data }: any) {
    return (
        <View key={data.valid_date} style={styles.cell}>
            <WeatherIcon temp={data.temp} />
            <Text style={styles.text}>{data.temp}°C</Text>
            <Text style={styles.text}>{data.valid_date}</Text>
        </View>
    )
}

function WeatherIcon({ temp }: any) {
    return temp > 18 ? <Sun /> : <Cold />
}

function Sun() {
    return <Image source={require('./../../assets/icons/sun.png')} style={styles.icon} />
}

function Cold() {
    return <Image source={require('./../../assets/icons/cold.png')} style={styles.icon} />
}

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 18,
        color: 'black',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    icon: {
        marginTop: 'auto',
        marginBottom: 'auto',
        height: 50,
        width: 50
    },
});