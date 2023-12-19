export function mapOrderDataToBackend(data) {
  return {
    address_from: data.addressFrom,
    address_to: data.addressTo,
    delay: data.delay,
    car_type: data.carType,
    delivery_time: data.orderDate || new Date().toISOString,
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
    id: data.id,
    addressFrom: data.address_from,
    addressTo: data.address_to,
    delay: data.delay,
    orderDate: data.delivery_time,
    carType: data.car_type,
    tariff: data.tariff,
    wheelLock: data.wheel_lock,
    towin: data.towin,
    comment: data.addition,
    total: data.price,
    isHavingFeedback: data.is_having_feedback,
    driver: data.tow_truck?.driver,
    modelCar: data.tow_truck?.model_car,
    licensePlates: data.tow_truck?.license_plates,
    avarageScore: data.tow_truck?.avarage_score || 0,
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
