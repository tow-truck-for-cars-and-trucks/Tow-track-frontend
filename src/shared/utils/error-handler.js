export default function errorHandler(error, setError) {
  Object.entries(error).forEach(([key, value]) => {
    if (value) {
      setError(key, { message: value.join(', ') });
    }
  });
}
