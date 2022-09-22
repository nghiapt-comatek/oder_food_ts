import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useCustomerOrders from '../hooks/useCustomerOrders';
import {useTailwind} from 'tailwind-rn/dist';
import {useNavigation} from '@react-navigation/native';
import {CustomerScreenNavigationProp} from '../screens/CustomersScreen';
import { Card } from '@rneui/themed';

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
    <TouchableOpacity>
      <Card containerStyle={tw("p-5 rounded-lg")}>
        <View>
            <View>
              <Text>{name}</Text>
              <Text>ID: {userId}</Text>
            </View>
            <View>
              <Text>{loading ? "loading..." : `${orders.length} x`}</Text>
            </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
