import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Lost_items from './Lost_items';
import Found_items from './Found_items';
import Submit from './Submit';
import Instructions from './Instructions';

const Menu = ({ navigation }) => {
  const items = [
    { id: 1, title: 'Lost Items', color: '#69B0C7' },
    { id: 2, title: 'Found Items', color: '#69B0C7' },
    { id: 3, title: 'Submit Lost / Found Items', color: '#69B0C7' },
    { id: 4, title: 'Instructions', color: '#69B0C7' },
  ];

  const handleLostItemList = (item) => {
    switch(item.title) {
      case 'Lost Items': 
        navigation.navigate('Lost_items', { Lost_items });
        break;
      case 'Found Items': 
        navigation.navigate('Found_items', { Found_items });
        break;
      case 'Submit Lost / Found Items':
        navigation.navigate('Submit', { Submit });
        break;
      case 'Instructions':
        navigation.navigate('Instructions', {Instructions} );
        break;
      default: 
        alert('Invalid route.');


    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.box, { backgroundColor: item.color }]}
            onPress={() => handleLostItemList(item)}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  head: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'darkblue'
  },
  box: {
    padding: 50,
    marginBottom: 60,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Menu