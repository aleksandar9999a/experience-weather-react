import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getData } from '../../service/weather.service';

export default function GeneralInformation() {
  const [data, setData] = useState<any>();
  getData().subscribe(d => setData(d));
  return (
    <View style={styles.container}>
        <Text style={styles.temperature}>{data ? data.data[0].temp : null}°C</Text>
        <Text style={styles.city}>{data ? data.city_name : 'Unknown'}</Text>
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
