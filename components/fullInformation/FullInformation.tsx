import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let { height, width } = Dimensions.get('window');

export default function FullInformation() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.details}>Details</Text>
        <TouchableOpacity style={styles.show} >
          <Icon name="chevron-up" size={20} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width,
    height: height - 100,
    borderColor: 'transparent',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 30
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  details: {
    color: 'black',
    fontSize: 30
  },
  show: {
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: 'transparent',
    padding: 10
  }
});
