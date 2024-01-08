import * as yup from 'yup';

export const authFormSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required('Введите номер телефона')
    .test('testFullNember', 'Телефонный номер введен не полностью.', (val) => {
      const valLengthWithoutDashes = val.replace(/-|_/g, '').length;
      if (valLengthWithoutDashes === 18) {
        return true;
      }
      return false;
    }),
  password: yup
    .string()
    .min(8, 'Пароль слишком короткий.Нужно миминум 8 символов')
    .max(20, 'Пароль слишком длинный. Максимум - 20 символов')
    .required('Введите пароль'),
});

export const registerFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(50, 'Введенное имя слишком длинное')
    .matches(
      /^[a-zA-Zа-яёА-ЯЁ]+ ?(-?[a-zA-Zа-яёА-ЯЁ]{1,})?$/,
      'Используйте буквы и символы'
    )
    .required('Введите имя'),
  phoneNumber: yup
    .string()
    .required('Введите номер телефона')
    .test('testFullNember', 'Телефонный номер введен не полностью.', (val) => {
      const valLengthWithoutDashes = val.replace(/-|_/g, '').length;
      if (valLengthWithoutDashes === 18) {
        return true;
      }
      return false;
    }),
  password: yup
    .string()
    .min(8, 'Пароль слишком короткий.Нужно миминум 8 символов')
    .max(20, 'Пароль слишком длинный. Максимум - 20 символов')
    .required('Введите пароль'),
  confirmPassword: yup
    .string()
    .min(8, 'Пароль слишком короткий.Нужно миминум 8 символов')
    .max(20, 'Пароль слишком длинный. Максимум - 20 символов')
    .required('Введите пароль')
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
  consent: yup.boolean().oneOf([true]).required(),
});

export const addressFormSchema = yup.object().shape({
  addressFrom: yup.string().required('Заполните адрес подачи'),
  addressTo: yup
    .string()
    .required('Заполните адрес доставки')
    .notOneOf([yup.ref('addressFrom'), null], 'Адреса не должны совпадать'),
});
