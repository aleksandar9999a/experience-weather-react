import React from 'react';
import { StyleSheet, View, ImageBackground, ScrollView, Dimensions } from 'react-native';
import Search from './components/search/Search';
import GeneralInformation from './components/generalInformation/GeneralInformation';
import FullInformation from './components/fullInformation/FullInformation';
let { height, width } = Dimensions.get('window');

const mountain = require('./assets/mountain.jpg');

export default function App() {
  return (
    <ImageBackground source={mountain} style={styles.image} >
      <ScrollView scrollEventThrottle={16} >
        <View style={styles.container}>
          <View style={styles.search}>
            <Search />
          </View>
          <View style={styles.general} >
            <GeneralInformation />
          </View>
        </View>
        <View style={styles.full} >
            <FullInformation />
          </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height
  },
  image: {
  },
  search: {
    flex: 0.5,
    justifyContent: 'center',
  },
  general: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  full: {
    justifyContent: 'center',
    marginTop: -230
  }
});
