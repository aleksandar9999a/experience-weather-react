import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getData, getError } from '../../service/weather.service';
import Data from '../../interfaces/Data';

export default function GeneralInformation() {
  const [data, setData] = useState<Data>();
  const [error, setError] = useState<any>();

  getData().subscribe(d => setData(d));
  getError().subscribe(err => setError(err));

  return (
    <View style={styles.container}>
        <Text style={styles.temperature}>{data ? data.data[0].temp : null}°C</Text>
        <Text style={styles.city}>{data ? data.city_name : 'Unknown'}</Text>
        <Text style={styles.error}>{error ? error : null}</Text>
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
  },
  error: {
    fontSize: 75,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  }
});
