import {useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {GET_ORDERS} from '../graphql/queries';
import {dataOrder} from '../assets/dataOrder';

function useCustomerOrders(userId: string) {
  const {loading, error, data} = useQuery(GET_ORDERS);

  const [orders, setOrders] = useState<Order[]>([]);

  const datas = dataOrder.getOrders;

  useEffect(() => {
    if (!dataOrder) return;

    const orders = datas.map(function (item) {
      return item;
    });

    const customerOrders = orders.filter(
      order => order.trackingItems.customer_id === userId,
    );
    setOrders(customerOrders);
  }, [data, userId]);

  return {loading, error, orders};
}

export default useCustomerOrders;
