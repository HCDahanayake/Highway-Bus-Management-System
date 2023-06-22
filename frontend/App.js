import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Instruction from './Componenets/Instructions';
import Submit from './Componenets/Submit';
import Lost_and_found_items from './Componenets/Lost_and_found_items'
import Main_news from './Componenets/Main_news';
import Lost_items from './Componenets/Lost_items'
import Sign_up from './Componenets/Sign_up'
import DocPicker from './Componenets/DocPicker';
import Found_items from './Componenets/Found_items';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Lost and Found Items" 
        component={Lost_and_found_items}
        options={{
          title: 'Lost and Found',
          headerStyle: {
            backgroundColor: 'lightblue',
          },
          headerTintColor: 'darkblue',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
         }}
        />

        <Stack.Screen 
        name="Lost_items" 
        component={Lost_items} 
        options={{
          title: 'Lost Items',
          headerStyle: {
            backgroundColor: 'lightblue',
          },
          headerTintColor: 'darkblue',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
         }} />
         
        <Stack.Screen
        name="Found_items" 
        component={Found_items}
        options={{
          title: 'Found Items',
          headerStyle: {
            backgroundColor: 'lightblue',
          },
          headerTintColor: 'darkblue',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
         }}
        />
        
         
        <Stack.Screen 
        name="Submit" 
        component={Submit}
        options={{
          title: 'Submit',
          headerStyle: {
            backgroundColor: 'lightblue',
          },
          headerTintColor: 'darkblue',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
         }}
        />
        <Stack.Screen 
        name="Instructions" 
        component={Instruction}
        options={{
          title: 'Instruction',
          headerStyle: {
            backgroundColor: 'lightblue',
          },
          headerTintColor: 'darkblue',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
         }}
        />
      </Stack.Navigator>

    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

