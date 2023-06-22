import React, { useState } from 'react';
import { View, Picker } from 'react-native';

const DropdownMenu = () => {
    const [selectedValue, setSelectedValue] = useState('');
  
    return (
      <View>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
        <Picker.Item label="" value="blank" />
        <Picker.Item label="Lost" value="lost" />
        <Picker.Item label="Found" value="found" />
        </Picker>
      </View>
    );
  };
  
  export default DropdownMenu;
  