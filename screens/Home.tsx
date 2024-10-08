// screens/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { Image, View, Text, Button, FlatList, StyleSheet, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  {/* constants for adding items to the menu*/}
  const [menuItems, setMenuItems] = useState<{ dishName: string, description: string, course: string, price: number }[]>([]);

  useEffect(() => {
    // Check if newItem exists and is defined in route.params
    if (route.params?.newItem) {
      setMenuItems((prevItems) => [...prevItems, route.params.newItem as { dishName: string; description: string; course: string; price: number }]);
    }
  }, [route.params?.newItem]);

  // Get the device's width and height (if needed later)
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to</Text>
      <Text style={styles.title}>Chef's Menu</Text> 
      <Image source={require('../assets/images/BowlofFood.png')} style={styles.imgBowl}/>

      <View style={styles.box}>

        <Text style={styles.CurrentMenu}>Current Menu</Text>

        

        <View style={styles.MenuBox}>
{/* Displays total amount of items on menu*/}
          <Text style={styles.TotalItems}>Total Items: {menuItems.length}</Text>

    {/*flatlist displaying all items on the menu aswel as added items*/}
          <FlatList
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text>{item.dishName} - {item.course}</Text>
              <Text>{item.description}</Text>
              <Text>${item.price.toFixed(2)}</Text>
            </View>
          )}
          />
          
        </View>
{/* buttons to navigate to add menu/items screen and filter screen*/}
        <Button title="Add Menu" onPress={() => navigation.navigate('AddItems')} />
        <Button title="Filter Menu" onPress={() => navigation.navigate('Filter')} />

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 30,
  },
  title: {
    fontSize: 45,
    marginBottom: 20,
  },
  TotalItems: {
    textAlign: 'center',
    fontSize: 20,
  },
  CurrentMenu: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
  },
  imgBowl: {
   height: 100,
   width: 130,
  },
  box: {
    flex: 1,
    width: '110%',
    height: Dimensions.get('window').height * 0.70,
    backgroundColor: '#BF592B',
    borderRadius: 50,
    justifyContent: 'center',  // Centers vertically
    alignItems: 'center',      // Centers horizontally    
    bottom: -37,    
  },
  menuItem: {
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  MenuBox: {
    borderRadius: 50,
    backgroundColor: '#EDBEA4',
    width: '80%',  // Adjust to desired width
    height: '70%',
    justifyContent: 'center',   // Center content vertically within the box
    alignItems: 'center',       // Center content horizontally within the box
  },
  
});
