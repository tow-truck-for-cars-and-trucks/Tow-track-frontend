export function mapOrderDataToBackend(data) {
  return {
    address_from: data.addressFrom,
    address_to: data.addressTo,
    delay: data.delay,
    car_type: data.carType,
    order_date: data.orderDate || null,
    addition: data.comment,
    tariff: data.tariff,
    price: {
      id: data.id,
      towin: data.towin,
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
    carType: data.car_type,
    tariff: data.tariff,
    wheelLock: data.wheel_lock,
    towin: data.towin,
    comment: data.addition,
    id: data.id,
    total: data.price,
  };
}

export function mapOrderDataPriceToBackend(data) {
  return {
    address_from: data.addressFrom,
    address_to: data.addressTo,
    car_type: data.carType,
    addition: data.comment,
    tariff: data.tariff,
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
