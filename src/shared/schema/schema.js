import * as yup from 'yup';

export const authFormSchema = yup.object().shape({
  email: yup
    .string()
    .min(4, 'Введите почту')
    .matches(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,}$/,
      'Почта должна соответствовать формату example@example.com. Попробуйте изменить раскладку'
    )
    .required('Введите почту'),
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
    .matches(/([А-ЯЁ][а-яё]+[-\s]?)/, 'Используйте буквы и символы')
    .required('Введите имя'),
  lastName: yup
    .string()
    .max(50, 'Введенная фамилия слишком длинная')
    .matches(/([А-ЯЁ][а-яё]+[-\s]?)/, 'Используйте буквы и символы')
    .required('Введите фамилию'),
  email: yup
    .string()
    .min(1, 'Введите почту')
    .matches(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,}$/,
      'Почта должна соответствовать формату example@example.com. Попробуйте изменить раскладку'
    )
    .required('Введите почту'),
  phoneNumber: yup.string().required('Введите номер телефона'),
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
  checkbox: yup.boolean().oneOf([true]).required(),
});

export const addressFormSchema = yup.object().shape({
  addressFrom: yup
    .string()
    .max(100, 'Адрес слишком длинный. Максимальная длина - 100 символов')
    .required('Заполните адрес подачи'),
  addressTo: yup
    .string()
    .max(100, 'Адрес слишком длинный. Максимальная длина - 100 символов')
    .required('Заполните адрес доставки')
    .notOneOf([yup.ref('addressFrom'), null], 'Адреса не должны совпадать'),
});
