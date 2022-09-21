import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import {useNavigation} from '@react-navigation/native';


export type RootStackParamList = {
  Main: undefined;
  MyModal: {userId: string; name: string};
  Order: {order: any};
};

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const navigation = useNavigation();

  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
