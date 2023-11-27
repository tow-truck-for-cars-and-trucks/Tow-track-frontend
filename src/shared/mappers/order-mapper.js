export default function mapOrderDataToBackend(data) {
  return {
    adress_from: data.adressFrom,
    adress_to: data.adressTo,
    car_type: data.CarType,
  };
}
