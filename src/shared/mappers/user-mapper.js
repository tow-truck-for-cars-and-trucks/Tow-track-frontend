export function mapUserDataToBackend(data) {
  return {
    phone: data.phoneNumber,
    first_name: data.firstName,
    password: data.password,
    re_password: data.confirmPassword,
    consent: data.consent,
    non_field_errors: data?.fieldErrors,
  };
}

export function mapUserDataFromBackend(data) {
  return {
    phoneNumber: data.phone,
    firstName: data.first_name,
    password: data.password,
    confirmPassword: data.re_password,
    consent: data.consent,
    fieldErrors: data?.non_field_errors,
  };
}

export function mapAuthDataToBackend(data) {
  return {
    phone: data.phoneNumber,
    password: data.password,
    non_field_errors: data?.fieldErrors,
  };
}

export function mapAuthDataFromBackend(data) {
  return {
    phoneNumber: data.phone,
    password: data.password,
    fieldErrors: data?.non_field_errors,
  };
}
