import './create-order.scss';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef, useState } from 'react';
import { addressFormSchema } from '../../shared/schema/schema';
import carTypeApi from '../../shared/api/car-type-api';
import tariffApi from '../../shared/api/tariff-api';
import Input from '../../shared/ui/input/input';
import NavigationArrowIcon from '../../shared/ui/icons/navigation-arrow-icon';
import Description from '../../shared/ui/description/description';
import ButtonToggle from '../../shared/ui/button-toggle/buttonToggle';
import PricingList from '../../entities/ui/pricing-list/pricing-list';
import ChipsList from '../../entities/ui/chips-list/chips-list';
import Comment from '../../shared/ui/comment/comment';
import PopupDeferredOrder from '../popup-deferred-order/popup-deferred-order';
import TotalPrice from '../../shared/ui/total-price/total-price';
import ButtonCounterController from '../../entities/ui/button-counter-controller/button-counter-controller';

function CreateOrder() {
  const [allCars, setAllCars] = useState([]);
  const [allPricing, setAllPricing] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (value) => {
    console.log(value);
  };
  const timerRef = useRef(null);

  useEffect(() => {
    carTypeApi
      .getCarType()
      .then((carType) => setAllCars(carType))
      .catch((error) => {
        console.log(error);
      });

    tariffApi
      .getTariffType()
      .then((tariff) => setAllPricing(tariff))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const {
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      addressFrom: '',
      addressTo: '',
      activeTab: 'Легковой',
      activePrice: 2,
      buttonCounter: 0,
      deferredOrderCheckbox: false,
      towinCheckbox: false,
      comment: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(addressFormSchema),
  });

  const isButtonActive = !(errors.addressFrom || errors.addressTo);

  useEffect(() => {
    const subscription = watch(() => {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        handleSubmit(onSubmit).apply(this);
      }, 1000);
    });
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <div className="create-order">
      <h2 className="create-order__title">Адреса</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="create-order__input">
          <Controller
            name="addressFrom"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                invalid={errors.addressFrom?.message}
                placeholder="Откуда забрать"
                icon={<NavigationArrowIcon width="16px" height="16px" />}
                value={value}
                onChange={onChange}
                id="addressFrom"
              />
            )}
          />
          <Controller
            name="addressTo"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder="Куда доставить"
                invalid={errors.addressTo?.message}
                icon={<NavigationArrowIcon width="16px" height="16px" />}
                value={value}
                onChange={onChange}
                id="addressTo"
              />
            )}
          />
        </div>
        <h2 className="create-order__title">Что перевозим?</h2>
        <div className="create-order__views">
          <Controller
            name="activeTab"
            control={control}
            render={({ field: { value, onChange } }) => (
              <ChipsList
                chips={allCars.map((carType) => ({
                  label: carType.car_type,
                  id: carType.car_type,
                }))}
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div className="create-order__ditch">
          <Description title="Кюветные работы" subtitle="Сложность доступа" />
          <div className="create-order__toggle">
            <Controller
              name="towinCheckbox"
              control={control}
              render={({ field: { value, onChange } }) => (
                <ButtonToggle
                  id="towinCheckbox"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
        </div>
        <h2 className="create-order__title">Выберите тариф</h2>
        {allPricing && (
          <div className="create-order__views">
            <Controller
              name="activePrice"
              control={control}
              render={({ field: { value, onChange } }) => (
                <PricingList
                  pricings={allPricing.map((tariff) => ({
                    title: tariff.name,
                    description: tariff.description,
                    price: tariff.price,
                    id: tariff.id,
                  }))}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
        )}
        <Controller
          name="buttonCounter"
          control={control}
          render={({ field: { value, onChange } }) => (
            <ButtonCounterController value={value} onChange={onChange} />
          )}
        />
        <div className="create-order__ditch">
          <Description
            title="Отложенный заказ"
            subtitle="Выберите день и время"
          />
          <Controller
            name="deferredOrderCheckbox"
            control={control}
            render={({ field: { value } }) => (
              <ButtonToggle
                id="deferredOrderCheckbox"
                value={value}
                onChange={(toggle) => {
                  if (toggle) {
                    setIsPopupOpen(true);
                  } else {
                    setValue('deferredOrderCheckbox', false);
                  }
                }}
              />
            )}
          />
        </div>
        <PopupDeferredOrder
          isOpen={isPopupOpen}
          onSave={(date) => {
            setValue('deferredOrderCheckbox', date);
            setIsPopupOpen(false);
          }}
          onClose={() => {
            setIsPopupOpen(false);
            setValue('deferredOrderCheckbox', false);
          }}
        />
        <div className="create-order__comment">
          <h2 className="create-order__title">Дополнительно</h2>
          <Controller
            name="comment"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Comment value={value} onChange={onChange} />
            )}
          />
        </div>
        <div className="create-order__price">
          <TotalPrice
            onClick={handleSubmit(() =>
              navigate('/register', { replace: true })
            )}
            total={1820}
            isButtonActive={isButtonActive}
          />
        </div>
      </form>
    </div>
  );
}
export default CreateOrder;
