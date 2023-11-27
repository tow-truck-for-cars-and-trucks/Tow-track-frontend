export default function mapUserDataToBackend(data) {
  return {
    email: data.email,
    phone: data.phoneNumber,
    first_name: data.firstName,
    password: data.password,
    re_password: data.confirmPassword,
  };
}
