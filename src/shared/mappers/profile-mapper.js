function mapProfileDataFromBackend(data) {
  return {
    id: data.id,
    phoneNumber: data.phone,
    firstName: data.first_name,
    consent: data.consent,
    fieldErrors: data?.non_field_errors,
  };
}

export default mapProfileDataFromBackend;
