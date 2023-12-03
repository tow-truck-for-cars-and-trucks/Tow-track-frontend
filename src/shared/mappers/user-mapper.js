export function mapUserDataToBackend(data) {
  return {
    email: data.email,
    phone: data.phoneNumber,
    first_name: data.firstName,
    password: data.password,
    re_password: data.confirmPassword,
    last_name: data?.lastName,
  };
}

export function mapUserDataFromBackend(data) {
  return {
    email: data.email,
    phoneNumber: data.phone,
    firstName: data.first_name,
    password: data.password,
    confirmPassword: data.re_password,
    lastName: data?.last_name,
  };
}
