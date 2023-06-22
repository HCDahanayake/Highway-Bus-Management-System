import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Found_items = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/founditems/')
      .then((response) => response.json())
      .then((result) => {
        // Handle the response from the server if needed
        setData(result);
        console.log(result);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map((item) => (
          <TouchableOpacity key={item._id} style={[styles.box, { backgroundColor: "rgb(105, 176, 199)" }]}>
            <Text style={styles.title}>
              {item.Subject}
              <Ionicons name="checkmark-circle" size={30} color="green" style={styles.tickIcon} />
            </Text>
            <Text style={styles.text}>{item.Message}</Text>
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
    height: 350,
    margin: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'darkblue',
  },
  tickIcon: {
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'light',
    color: '#0A244B',
    textAlign: 'left',
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});

export default Found_items;
