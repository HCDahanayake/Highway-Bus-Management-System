import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Menu = () => {
    
  const items = [
    { id: 1, title: 'Special Notice', color: '#69B0C7' },
    { id: 2, title: 'Bus Ride Cancellation', color: '#69B0C7' },
    { id: 3, title: 'Updated Timetable', color: '#69B0C7' },
    
    
  ];

  return (
    <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={() => console.log('Back button pressed')}>
          <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

        <View style={styles.head}>
            <Text style={styles.text}>Main News</Text>
        </View>
      <ScrollView>
        {items.map((item) => (
          <TouchableOpacity key={item.id} style={[styles.box, { backgroundColor: item.color }]}>

            <Text style={styles.title}>{item.title}</Text>
            
            <Text style={styles.subtext }>Due to heavy rain all the highway buses will be delayed by 30 minutes. </Text>

          </TouchableOpacity>
          
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  box: {
    width: 300,
    height: 150,
    margin: 10,
    justifyConten: 'center',
    alignItems: 'left',
    borderRadius: 10,
  },
  title: {
    color: 'darkblue',
    fontSize: 20,
    fontWeight: 'light',
    textAlign: 'center',
    marginBottom:'10',
    
  },

  head: {
    marginBottom:60,
    justifyContent:'left',
    alignItems: 'center'
  },

  text:{
    fontSize:30,
    fontWeight:'bold',
    color:'darkblue',
 },

 container: {
  flex: 1,
  backgroundColor: '#FFFFFF',
},
backButton: {
  position: 'absolute',
  top: 20,
  left: 20,
  zIndex: 1,
},
});

export default Menu;