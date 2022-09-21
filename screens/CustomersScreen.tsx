import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import Feather from 'react-native-vector-icons/Feather'


const CustomersScreen = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tw('text-blue-500')}>CustomerssssScreen</Text>
      
    </SafeAreaView>
  );
};

export default CustomersScreen;

const styles = StyleSheet.create({});
