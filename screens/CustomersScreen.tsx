import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {TabStackParamList} from '../navigator/TabNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigator/RootNavigator';
import {Image, Input} from '@rneui/themed';
import {useQuery} from '@apollo/client';
import {GET_CUSTOMERS} from '../graphql/queries';
import CustomerCard from '../components/CustomerCard';
import { dataCustomer } from '../assets/dataCustomer';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList, 'Main'>
>;

const CustomersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>('');
  const {loading, error, data} = useQuery(GET_CUSTOMERS);
  
 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#59c1cc'}}>
      <Image
        source={{uri: 'https://links.papareact.com/3jc'}}
        containerStyle={tw('w-full h-64')}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Search by Customer"
        value={input}
        onChangeText={(text: string) => setInput(text)}
        containerStyle={tw('bg-white pt-5 pb-0 px-10')}
      />
      {dataCustomer.getCustomers.map(
        ({name: ID, value: {email, name}}: CustomerResponse) => (
          <CustomerCard key={ID} email={email} name={name} userId={ID} />
        ),
      )}
    </ScrollView>
  );
};

export default CustomersScreen;

const styles = StyleSheet.create({});
