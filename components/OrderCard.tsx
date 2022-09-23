import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Card} from '@rneui/themed';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTailwind} from 'tailwind-rn/dist';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {OrdersScreenNavigationProp} from '../screens/OrdersScreen';

type Props = {
  item: Order;
};

const OrderCard = ({item}: Props) => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  return (
    <Card containerStyle={tw('px-5 rounded-lg')}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Order', {order: item})}>
        <View style={tw('flex-row justify-between items-center')}>
          <View style={tw('items-center')}>
            <Material name="truck-delivery" color={'#eb6a7c'} size={20} />
            <Text style={{fontSize: 10}}>{new Date().toDateString()}</Text>
          </View>
          <View>
            <Text style={[tw('text-gray-400'), {fontSize: 10}]}>
              {item.carrier}-{item.trackingId}{' '}
            </Text>
            <Text style={tw('text-gray-500 text-xl')}>
              {item.trackingItems.customer.name}
            </Text>
          </View>
          <View style={tw('flex-row items-center')}>
            <Text style={[tw('text-sm'), {color: '#eb6a7c'}]}>
              {item.trackingItems.items.length} x
            </Text>
            <Feather name="box" size={20} style={tw('ml-2')} />
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default OrderCard;
