import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function GeneralInformation() {
  return (
    <View style={styles.container}>
        <Text style={styles.temperature}>4°C</Text>
        <Text style={styles.city}>Sofia</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  temperature: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  city: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  }
});
