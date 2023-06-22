import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const Instructions = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleContactSupport = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Instructions for Lost and Found Items</Text>
      </View>
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsText}>
          If you find something that belongs to someone else inside the bus or around the premises:
        </Text>
        <Text style={styles.subheaderText}>(01). Instructions if you found an item:</Text>
        <Text style={styles.numberedText}>
          1. Hand over the item to the nearest bus stand.
        </Text>
        <Text style={styles.numberedText}>
          2. Submit a found note by mentioning the item details, time, and place using the found item feature.
        </Text>
        <Text style={styles.numberedText}>
          3. Ensure that the item does not go into the wrong hands when submitting the information.
        </Text>
        <Text style={styles.numberedText}>
          4. You will receive an email confirming that we have received your found submission note.
        </Text>
        <Text style={styles.subheaderText}>(02). Instructions if you lost an item:</Text>
        <Text style={styles.numberedText}>
          1. Report the lost item to the nearest bus stand.
        </Text>
        <Text style={styles.numberedText}>
          2. Provide relevant details about the lost item, including time and place.
        </Text>
        <Text style={styles.numberedText}>
          3. Ensure that the item does not go into the wrong hands when submitting the information.
        </Text>
        <Text style={styles.numberedText}>
          4. You will receive an email confirming that we have received your found submission note.
        </Text>
        <Text style={styles.numberedText}>
          5. Ensure that the item does not go into the wrong hands when submitting the information.
        </Text>
        <Text style={styles.numberedText}>
          6. You will receive an email confirming that we have received your found submission note.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContactSupport}>
        <Text style={styles.buttonText}>Contact Support</Text>
      </TouchableOpacity>

      {/* Modal for displaying contact number */}
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Contact Support: <b>+94-76-456-7890</b></Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555555',
  },
  modalButton: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    backgroundColor: 'darkblue',
    alignSelf: 'center',
  },
  modalButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },

  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkblue',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  instructionsContainer: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: 'lightblue',
    elevation: 2,
  },
  instructionsText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#555555',
  },
  subheaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'darkblue',
  },
  numberedText: {
    fontSize: 16,
    marginVertical: 5,
    marginLeft: 20,
    color: '#333333',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    backgroundColor: 'darkblue',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});

export default Instructions;
