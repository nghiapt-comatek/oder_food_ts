import {View, Text} from 'react-native';
import React from 'react';
import {Card} from '@rneui/themed';
import {useTailwind} from 'tailwind-rn/dist';
import Entypo from 'react-native-vector-icons/Entypo';
import {Divider} from '@rneui/base';

type Props = {
  order: Order;
  fullWidth?: Boolean;
};

const DeliveryCard = ({order, fullWidth}: Props) => {
  const tw = useTailwind();

  return (
    <Card
      containerStyle={[
        tw(`${fullWidth ? 'rounded-none m-0' : 'rounded-lg'} my-2 `),
        {
          backgroundColor: fullWidth ? '#eb6a7c' : '#59c1cc',
          padding: 0,
          paddingTop: 16,
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 4,
        },
      ]}>
      <View>
        <View style={[{alignItems: 'center'}]}>
          <Entypo name="box" size={50} color="white" />
          <View>
            <Text
              style={tw('text-xs text-center uppercase text-white font-bold')}>
              {order.carrier} - {order.trackingId}
            </Text>
            <Text style={tw('text-lg  text-center text-white font-bold')}>
              Expected Delivery: {new Date().toLocaleDateString()}
            </Text>
            <Divider color="white" />
          </View>
          <View style={tw('mx-auto')}>
            <Text style={tw('text-base text-center text-white font-bold mt-5')}>
              Address
            </Text>
            <Text style={tw('text-sm text-center text-white')}>
              {order.Address}, {order.City}
            </Text>
            <Text style={tw('text-sm text-center text-white italic')}>
              Shipping Cost: ${order.shippingCost}
            </Text>
          </View>
        </View>
      </View>
      <Divider color="white" />
      <View style={tw('p-5')}>
        {order.trackingItems.items.map(item => (
          <View
            style={tw('flex-row justify-between items-center')}
            key={item.item_id}>
            <Text style={tw('text-sm italic text-white')}>{item.name}</Text>
            <Text style={tw('text-xl text-white')}>x {item.quantity}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
};

export default DeliveryCard;
