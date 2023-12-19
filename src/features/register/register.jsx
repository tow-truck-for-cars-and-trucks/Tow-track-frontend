import './register.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../shared/ui/input/input';
import { registerFormSchema } from '../../shared/schema/schema';
import PasswordInput from '../../shared/ui/password-input/password-input';
import Button from '../../shared/ui/button/button';
import Checkbox from '../../shared/ui/checkbox/checkbox';
import CheckboxAuthDescription from '../../shared/ui/checkbox-auth-description/checkbox-auth-description';
import registerApi from '../../shared/api/register-api';
import errorHandler from '../../shared/utils/error-handler';

function Register() {
  const location = useLocation();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    defaultValues: {
      firstName: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      checkbox: false,
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(registerFormSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (inputData) => {
    registerApi
      .postRegister(inputData)
      .then(() => {
        navigate('/register?mode=login', { state: location.state });
      })
      .catch(({ error }) => {
        errorHandler(error, setError);
      });
  };

  return (
    <main className="register">
      <form>
        <div className="register__input">
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                invalid={errors.firstName?.message}
                value={value}
                onChange={onChange}
                placeholder="Имя"
                id="firstName"
              />
            )}
          />
        </div>
        <div className="register__input">
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChange={onChange}
                invalid={errors.phoneNumber?.message}
                mask="+7 (999) 999 99 99"
                placeholder="Телефон"
                id="phoneNumber"
              />
            )}
          />
        </div>
        <div className="register__input">
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <PasswordInput
                invalid={errors.password?.message}
                value={value}
                onChange={onChange}
                placeholder="Введите пароль"
                id="password"
              />
            )}
          />
          <p className="register__input-caption">
            Пароль должен содержать минимум 8 символов, максимум 20
          </p>
        </div>
        <div className="register__input">
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <PasswordInput
                value={value}
                invalid={errors.confirmPassword?.message}
                onChange={onChange}
                placeholder="Подтвердите пароль"
                id="confirmPassword"
              />
            )}
          />
        </div>
        <div className="register__checkbox">
          <Controller
            name="checkbox"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Checkbox
                height="16px"
                width="16px"
                value={value}
                onChange={onChange}
              >
                <CheckboxAuthDescription />
              </Checkbox>
            )}
          />
        </div>
        <p className="register__field-error">
          {!isValid ? errors.fieldErrors?.message : ''}
        </p>
      </form>
      <div className="register__button">
        <Button
          label="Зарегистрироваться"
          onClick={handleSubmit(onSubmit)}
          primary
          disabled={!isValid}
        />
      </div>
    </main>
  );
}

export default Register;
