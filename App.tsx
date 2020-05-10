import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Search from './components/search/Search';
import GeneralInformation from './components/generalInformation/GeneralInformation';
import FullInformation from './components/fullInformation/FullInformation';

const mountain = require('./assets/mountain.jpg');

export default function App() {
  return (
    <ImageBackground source={mountain} style={styles.image} >
      <View style={styles.container}>
        <View style={styles.search}>
          <Search />
        </View>
        <View style={styles.general} >
          <GeneralInformation />
        </View>
        <View style={styles.full} >
          <FullInformation />
        </View>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
  },
  search: {
    flex: 1
  },
  general: {
    flex: 2
  },
  full: {
    flex: 3
  }
});
