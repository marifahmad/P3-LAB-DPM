import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#4f8dfc',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
        }}
      >
        <Stack.Screen
          name="Data Mahasiswa"
          component={HomeScreen}
          options={{
            title: 'Data Mahasiswa',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;