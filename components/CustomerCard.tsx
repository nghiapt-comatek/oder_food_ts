import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useCustomerOrders from '../hooks/useCustomerOrders';
import {useTailwind} from 'tailwind-rn/dist';
import {useNavigation} from '@react-navigation/native';
import {CustomerScreenNavigationProp} from '../screens/CustomersScreen';
import {Card} from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';

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
    <Card containerStyle={tw('p-5 rounded-lg')}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MyModal', {userId: userId, name: name})
        }>
        <View>
          <View style={tw('flex-row  justify-between')}>
            <View>
              <Text style={tw('text-2xl font-bold')}>{name}</Text>
              <Text style={[tw('text-sm'), {color: '#59c1cc'}]}>
                ID: {userId}
              </Text>
            </View>
            <View style={tw('flex-row items-center justify-end')}>
              <Text style={{color: '#59c1cc'}}>
                {loading ? 'loading...' : `${orders.length} x`}
              </Text>
              <Entypo
                name="box"
                size={50}
                style={tw('mb-5 ml-auto')}
                color="#59c1cc"
              />
            </View>
          </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </TouchableOpacity>
    </Card>
  );
};

export default CustomerCard;
