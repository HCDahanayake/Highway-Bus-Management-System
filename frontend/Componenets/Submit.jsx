import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, Picker, Modal  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DocPicker from './DocPicker';
import DropdownMenu from './Dropdown';
import React, { useState } from 'react';

const Submit = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [dropdownError, setDropdownError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSubmission = () => {
    if (selectedValue === '') {
      setDropdownError(true);
      setModalVisible(true);
    } else {
      setDropdownError(false);
    }

    // Check if subject is empty
    if (subject === '') {
      setSubjectError(true);
    } else {
      setSubjectError(false);
    }

    // Check if message is empty
    if (message === '') {
      setMessageError(true);
    } else {
      setMessageError(false);
    }

    if (selectedValue === '' || subject === '' || message === '') {
    return; // Don't proceed further if any of the fields are empty
    }

    {/*setDropdownError(false);
    setSubjectError(false);
    setMessageError(false);*/}
    
    console.log('Entered the function');
    // Create an object with the data to be sent
    const data = {
      PrimarySubject: selectedValue,
      Subject: subject,
      Message: message,
    };

    if (data.PrimarySubject === "lost") {
      // Make an HTTP POST request to the server's API endpoint
      fetch('http://localhost:5001/lostitems/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          // Handle the response from the server if needed
          console.log(result);
          navigation.pop();
        })
        .catch((error) => {
          // Handle any errors that occur during the request
          console.error(error);
        });
    } else {
      // Make an HTTP POST request to the server's API endpoint
      fetch('http://localhost:5001/founditems/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          // Handle the response from the server if needed
          console.log(result);
          navigation.pop();
        })
        .catch((error) => {
          // Handle any errors that occur during the request
          console.error(error);
        });
    }
  };

  return (
    
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Choose subject</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={(itemValue) => {
            setSelectedValue(itemValue)
            setDropdownError(false); // Add this line to reset the dropdownError state
          }}
        >
          <Picker.Item label="" value="blank" />
          <Picker.Item label="Lost" value="lost" />
          <Picker.Item label="Found" value="found" />
        </Picker>
        {dropdownError && <Text style={styles.errorText}>Subject was  not selected. Please Select!</Text>}

      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Subject</Text>
        <TextInput
          style={[
            styles.input,
            subjectError && styles.errorInput // Apply errorInput style when subjectError is true
          ]}
          value={subject}
          onChangeText={(text) => {
            setSubject(text);
            setSubjectError(false); // Reset subjectError when input changes
          }}
          placeholder='Enter your Subject'
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[
            styles.input,
            styles.messageInput,
            messageError && styles.errorInput // Apply errorInput style when messageError is true
          ]}
          multiline
          textAlignVertical="top"
          value={message}
          onChangeText={(text) => {
            setMessage(text);
            setMessageError(false); // Reset messageError when input changes
          }}
          placeholder="Enter your message"
        />
      </View>

      {/* File input */}
      <View style={styles.docPickerContianer}>
         <DocPicker />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmission}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}><b>Please choose a subject!</b></Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  errorInput: {
    borderColor: 'red',
  },

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
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 40,
  },

  docPickerContianer: {
    backgroundColor: '#5680E9',
    backgroundColor: 'lightblue',
  },

  header: {
    marginBottom: 20,
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  picker: {
    borderColor: '#0A244B',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
  },

  inputContainer: {
    marginBottom: 20,
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  input: {
    height: 40,
    width: '100%',
    borderColor: '#0A244B',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom:20,
  },

  messageInput: {
    height: 250, // Increase the height to make the text box bigger
    textAlignVertical: 'top',
    
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: '#5680E9',
    alignSelf: 'center',
    marginTop: 20,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },

  errorText: {
    color: 'black',
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'bold',
    backgroundColor: 'red',
    borderRadius:5,
    height:25,
    marginBottom:8
  },
});

export default Submit;
