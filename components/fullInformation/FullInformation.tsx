import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, FlatList, SafeAreaView } from 'react-native';
import { getData } from '../../service/weather.service';
import WeatherItem from './WeatherItem';
import Day from '../../interfaces/Day';

let { width } = Dimensions.get('window');

export default function FullInformation() {
  const [days, setDays] = useState<Day[]>();
  getData().subscribe(d => {
    setDays(d.data)
  });

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.details}>Weather Forecast - 16 days</Text>
      </View>
      <View>
        <SafeAreaView>
          <FlatList
            data={days}
            renderItem={({item}) => <WeatherItem data={item}/>}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width,
    borderColor: 'transparent',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15
  },
  details: {
    color: 'black',
    fontSize: 25,
  },
  show: {
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: 'transparent',
    padding: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'black'
  },
});
