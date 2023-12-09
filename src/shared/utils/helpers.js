function handlePhoneCall(phoneNumber, actionType) {
  console.log(`Выполняется вызов ${actionType}: ${phoneNumber}`);
  window.location.href = `tel:${phoneNumber}`;
}

export default handlePhoneCall;
