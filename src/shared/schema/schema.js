import * as yup from 'yup';

export const authFormSchema = yup.object().shape({
  email: yup
    .string()
    .min(4, 'Введите почту')
    .matches(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,}$/,
      'Введите почту'
    )
    .required('Введите почту'),
  password: yup
    .string()
    .min(5, 'Пароль слишком короткий')
    .max(128, 'Пароль слишком длинный')
    .required('Введите пароль'),
});

export const registerFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Введите имя')
    .max(150, 'Введенное имя слишком длинное')
    .matches(/[A-Za-zА-Яа-яЁё\s-]+/, 'Введите буквенное значение')
    .required('Введите имя'),
  lastName: yup
    .string()
    .min(2, 'Введите имя')
    .max(150, 'Введенная фамилия слишком длинная')
    .matches(/[A-Za-zА-Яа-яЁё\s-]+/, 'Введите буквенное значение')
    .required('Введите имя'),
  email: yup
    .string()
    .min(1, 'Введите почту')
    .matches(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,}$/,
      'Введите почту'
    )
    .required('Введите почту'),
  password: yup
    .string()
    .min(5, 'Пароль слишком короткий')
    .max(128, 'Пароль слишком длинный')
    .required('Введите пароль'),
  confirmPassword: yup
    .string()
    .min(5, 'Пароль слишком короткий')
    .max(128, 'Пароль слишком длинный')
    .required('Введите пароль')
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
  checkbox: yup.boolean().required(),
});

export const addressFormSchema = yup.object().shape({
  addressFrom: yup.string().min(10, 'Введите адрес').required('Введите адрес'),
  addressTo: yup.string().min(10, 'Введите адрес').required('Введите адрес'),
});
