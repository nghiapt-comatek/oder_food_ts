import {useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {GET_ORDERS} from '../graphql/queries';

function useCustomerOrders(userId: string) {
  const {loading, error, data} = useQuery(GET_ORDERS);
  console.log(data);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({value}: OrderResponse) => ({
      carrier: value.carrier,
      createdAt: value.createdAt,
      trackingId: value.trackingId,
      shippingCost: value.shippingCost,
      Address: value.Address,
      City: value.City,
      Lng: value.Lng,
      Lat: value.Lat,
    }));
    const customerOrders = orders.filter(
      order => order.trackingItems.customer_id === userId,
    );
    setOrders(customerOrders);
  }, [data, userId]);

  return {loading, error, orders};
}

export default useCustomerOrders;
