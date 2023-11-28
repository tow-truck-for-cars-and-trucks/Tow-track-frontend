export function mapOrderDataToBackend(data) {
  return {
    address_from: data.addressFrom,
    address_to: data.addressTo,
    delay: data.delay,
    towin: data.towin,
    order_date: data.orderDate,
    addition: data.comment,
    price: {
      car_type: [data.carType],
      tariff: [data.tariff],
      wheel_lock: data.wheelLock,
    },
  };
}

export function mapOrderDataFromBackend(data) {
  return {
    addressFrom: data.address_from,
    addressTo: data.address_to,
    delay: data.delay,
    orderDate: data.order_date,
    carType: data.price.car_type?.[0],
    tariff: data.tariff?.[0],
    wheelLock: data.wheelLock,
    towin: data.towin,
    comment: data.addition,
  };
}

export function mapOrderDataPriceToBackend(data) {
  return {
    address_from: data.addressFrom,
    address_to: data.addressTo,
    car_type: [1],
    addition: data.addition,
    tariff: [data.tariff],
    delay: data.delay,
    order_date: data.orderDate,
    price: {
      wheel_lock: data.wheelLock,
      towin: data.towin,
    },
  };
}

export function mapOrderPriceFromBackend(data) {
  return data.price;
}
