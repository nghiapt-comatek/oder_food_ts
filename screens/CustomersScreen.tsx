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
import {GET_ORDERS} from '../graphql/queries';
import CustomerCard from '../components/CustomerCard';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList, 'Main'>
>;

const CustomersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>('');
  const {loading, error, data} = useQuery(GET_ORDERS);

  const datas = {
    getCustomers: [
      {
        name: '-N6rOmxa7vOOTpZZSllL',
        value: {
          email: 'lucas.bill@example.com',
          name: 'Lucas Bill',
        },
      },
      {
        name: '-N6rQgCkbLPB1xElUchT',
        value: {
          email: 'mandy.jones@example.com',
          name: 'Mandy Jones',
        },
      },
      {
        name: '-N6rSJ4xI3_Cq7u58Wh_',
        value: {
          email: 'salim.ali@example.com',
          name: 'Salim Ali',
        },
      },
      {
        name: '-N6rSZB4AoMAwrDnm2jF',
        value: {
          email: 'jane.xiu@example.com',
          name: 'Jane Xiu',
        },
      },
      {
        name: '-N6rTRzW_JrkHQMdt5QA',
        value: {
          email: 'john.doe@example.com',
          name: 'John Doe',
        },
      },
    ],
  };

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
      {datas?.getCustomers.map(
        ({name: ID, value: {email, name}}: CustomerResponse) => (
          <CustomerCard key={ID} email={email} name={name} userId={ID} />
        ),
      )}
    </ScrollView>
  );
};

export default CustomersScreen;

const styles = StyleSheet.create({});
