import './create-order.scss';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect, useRef, useState } from 'react';
import { addressFormSchema } from '../../shared/schema/schema';
import {
  getLocalStorageToken,
  setTariffStorage,
  setCarTypeStorage,
  setOrderCreationStorage,
} from '../../shared/api/storage-api';
import carTypeApi from '../../shared/api/car-type-api';
import tariffApi from '../../shared/api/tariff-api';
import orderApi from '../../shared/api/order-api';
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
  const [total, setTotal] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const timerRef = useRef(null);

  function calculatePrice(order) {
    return orderApi.getOrderPrice(order).then((orderPrice) => {
      setTotal(orderPrice);
    });
  }

  const createOrder = useCallback(
    (order) => {
      if (getLocalStorageToken()) {
        orderApi.createOrder(order).then((data) => {
          navigate(`/order/${data.id}`, { replace: true });
          setOrderCreationStorage(undefined);
        });
      } else {
        setOrderCreationStorage(order);
        navigate('/register?mode=login', {
          replace: true,
          state: { from: '/order' },
        });
      }
    },
    [location, navigate]
  );

  useEffect(() => {
    Promise.all([carTypeApi.getCarType(), tariffApi.getTariffType()])
      .then(([carType, tariff]) => {
        setAllCars(carType);
        setAllPricing(tariff);
        setTariffStorage(tariff);
        setCarTypeStorage(carType);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const defaultValues = {
    addressFrom: '',
    addressTo: '',
    carType: 2,
    orderDate: '',
    tariff: 2,
    wheelLock: 0,
    delay: false,
    towin: false,
    comment: '',
  };

  const {
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(addressFormSchema),
  });

  const isButtonActive = !(errors.addressFrom || errors.addressTo);

  useEffect(() => {
    const subscription = watch(() => {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        handleSubmit(calculatePrice).apply(this);
      }, 1000);
    });
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <div className="create-order">
      <h2 className="create-order__title">Адреса</h2>
      <form>
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
            name="carType"
            control={control}
            render={({ field: { value, onChange } }) => (
              <ChipsList
                chips={allCars.map((carType) => ({
                  label: carType.car_type,
                  id: carType.id,
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
              name="towin"
              control={control}
              render={({ field: { value, onChange } }) => (
                <ButtonToggle id="towin" value={value} onChange={onChange} />
              )}
            />
          </div>
        </div>
        <h2 className="create-order__title">Выберите тариф</h2>
        {allPricing && (
          <div className="create-order__views">
            <Controller
              name="tariff"
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
          name="wheelLock"
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
            name="delay"
            control={control}
            render={({ field: { value } }) => (
              <ButtonToggle
                id="delay"
                value={value}
                onChange={(toggle) => {
                  if (toggle) {
                    setIsPopupOpen(true);
                  } else {
                    setValue('delay', false);
                  }
                }}
              />
            )}
          />
        </div>
        <PopupDeferredOrder
          isOpen={isPopupOpen}
          onSave={(date) => {
            setValue('orderDate', date);
            setValue('delay', true);
            setIsPopupOpen(false);
          }}
          onClose={() => {
            setIsPopupOpen(false);
            setValue('delay', false);
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
            onClick={handleSubmit((order) => createOrder(order))}
            total={total}
            isButtonActive={isButtonActive}
            scrollOffset={1070}
          />
        </div>
      </form>
    </div>
  );
}
export default CreateOrder;
