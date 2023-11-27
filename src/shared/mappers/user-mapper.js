export default function mapUserDataToBackend(data) {
  return {
    username: data.username,
    password: data.password,
    email: data.email,
    first_name: data.firstName,
    last_name: data.lastName,
  };
}
