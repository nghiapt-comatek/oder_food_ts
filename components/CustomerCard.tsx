import {View, Text} from 'react-native';
import React from 'react';
import useCustomerOrders from '../hooks/useCustomerOrders';
import {useTailwind} from 'tailwind-rn/dist';
import {useNavigation} from '@react-navigation/native';
import {CustomerScreenNavigationProp} from '../screens/CustomersScreen';

type Props = {
  email: string;
  name: string;
  userId: string;
};

const CustomerCard = ({email, name, userId}: Props) => {
  const {loading, error, orders} = useCustomerOrders(userId);

  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  return (
    <View>
      <Text>CustomsczserCard</Text>
    </View>
  );
};

export default CustomerCard;
