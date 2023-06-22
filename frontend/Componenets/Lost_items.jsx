import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Lost_items = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/lostitems/')
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
              <Ionicons name="warning" size={30} color="red" style={styles.warningIcon} />
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
    height: 380,
    margin: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    color: 'darkblue',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  warningIcon: {
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'light',
    color: '#0A244B',
    textAlign: 'left',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});

export default Lost_items;
