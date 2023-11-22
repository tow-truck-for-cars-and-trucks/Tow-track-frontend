import './transports.scss';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  setLocalStorageOrder,
  getLocalStorageOrder,
} from '../../shared/api/storage-api';
import Input from '../../shared/ui/input/input';
import NavigationArrowIcon from '../../shared/ui/icons/navigation-arrow-icon';
import Description from '../../shared/ui/description/description';
import ButtonToggle from '../../shared/ui/button-toggle/buttonToggle';
import PricingList from '../ui/pricing-list/pricing-list';
import ChipsList from '../ui/chips-list/chips-list';
import Comment from '../../shared/ui/comment/comment';
import TotalPrice from '../../shared/ui/total-price/total-price';
import ButtonCounterController from '../ui/button-counter-controller/button-counter-controller';

function Transports() {
  const navigate = useNavigate();
  const orderData = setLocalStorageOrder();
  const onSubmit = () => {
    console.log(orderData);
  };

  const { control, watch, handleSubmit } = useForm({
    defaultValues: orderData
      ? JSON.parse(orderData)
      : {
          addressFrom: '',
          addressTo: '',
          activeTab: '',
          activePrice: '',
          buttonCounter: '0',
          deferredOrderCheckbox: '',
          towinCheckbox: '',
          comment: '',
        },
  });

  useEffect(() => {
    const subscription = watch((value) => {
      getLocalStorageOrder(value);
      handleSubmit(onSubmit);
    });
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <div className="transports">
      <h2 className="transports__title">Адреса</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="transports__input">
          <Controller
            name="addressFrom"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                errorText=""
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
                icon={<NavigationArrowIcon width="16px" height="16px" />}
                value={value}
                onChange={onChange}
                id="addressTo"
              />
            )}
          />
        </div>
        <h2 className="transports__title">Что перевозим?</h2>
        <div className="transports__views">
          <Controller
            name="activeTab"
            control={control}
            render={({ field: { value, onChange } }) => (
              <ChipsList
                chips={[
                  { label: 'Легковой', id: 'passenger-car' },
                  { label: 'Грузовой', id: 'cargo' },
                  { label: 'Мото', id: 'moto' },
                  { label: 'Спецтехника', id: 'special-equipment' },
                ]}
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div className="transports__ditch">
          <Description title="Кюветные работы" subtitle="Сложность доступа" />
          <div className="transports__toggle">
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
        <h2 className="transports__title">Выберите тариф</h2>
        <div className="transports__views">
          <Controller
            name="activeTab"
            control={control}
            render={({ field: { value, onChange } }) => (
              <PricingList
                pricings={[
                  {
                    title: 'Эконом',
                    price: '1500',
                    description: 'Оптимальный',
                    id: 'optimal',
                  },
                  {
                    title: 'Экспресс',
                    price: '1800',
                    description: 'Самый быстрый',
                    id: 'express',
                  },
                  {
                    title: 'Манипулятор',
                    price: '1800',
                    description: 'Спецвариант',
                    id: 'manipulator',
                  },
                ]}
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
        <Controller
          name="buttonCounter"
          control={control}
          render={({ field: { value, onChange } }) => (
            <ButtonCounterController value={value} onChange={onChange} />
          )}
        />
        <div className="transports__ditch">
          <Description
            title="Отложенный заказ"
            subtitle="Выберите день и время"
          />
          <Controller
            name="deferredOrderCheckbox"
            control={control}
            render={({ field: { value, onChange } }) => (
              <ButtonToggle
                id="deferredOrderCheckbox"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div className="transports__comment">
          <h2 className="transports__title">Дополнительно</h2>
          <Controller
            name="comment"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Comment value={value} onChange={onChange} />
            )}
          />
        </div>
        <div className="transports__price">
          <TotalPrice
            onClick={() => navigate('/register', { replace: true })}
            total={1820}
          />
        </div>
      </form>
    </div>
  );
}
export default Transports;
