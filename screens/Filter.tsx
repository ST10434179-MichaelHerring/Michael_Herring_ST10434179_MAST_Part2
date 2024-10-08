import React from 'react';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type FilterMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'Filter'>;

export default function FilterMenuScreen({ navigation }: FilterMenuScreenProps) {
  const { width, height } = Dimensions.get('window');
 

 

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/LaptopGuy.png')} style={styles.imgLaptop} />
      
      <View style={styles.box}>
        <Text style={styles.heading}>Select Course</Text>
        
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLaptop: {
    height: 160,
    width: 190,
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  box: {
    width: '100%',
    height: Dimensions.get('window').height * 0.70,
    backgroundColor: '#BF592B',
    borderRadius: 50,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
