import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const DocPicker = () => {
  const [file, setFile] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'success') {
        setFile(result);
      } else {
        setFile(null);
      }
    } catch (error) {
      console.log('Error picking document', error);
    }
    
  };

  return (
    <View>
      <Button title="Attache file" onPress={pickDocument} >
      <FontAwesomeIcon icon="fa-solid fa-paperclip" />
        </Button>
      {file && (
        <Text>
          File name: {file.name} {"\n"}
          File size: {file.size} bytes
        </Text>
      )}
    </View>
  );
};

export default DocPicker;