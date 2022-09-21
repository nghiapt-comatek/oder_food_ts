import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import AppSecond from './AppSecond';
import CustomersScreen from './screens/CustomersScreen';
import utilities from './tailwind.json';

const App = () => {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <CustomersScreen />
      </NavigationContainer>
    </TailwindProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
