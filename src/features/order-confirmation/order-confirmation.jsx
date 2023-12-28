import './order-confirmation.scss';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getMinutes, getHours } from 'date-fns';
import { getCarTypeTitle } from '../create-order/model/car-type-slice';
import { getPlanTitle } from '../create-order/model/plan-slice';
import {
  getOrder,
  updateOrder,
} from '../create-order/model/create-order-slice';
import PagesTitle from '../../shared/ui/pages-title/pages-title';
import Input from '../../shared/ui/input/input';
import ChipsList from '../../entities/ui/chips-list/chips-list';
import OrderDetails from '../../shared/ui/order-details/order-details';
import BackButton from '../../shared/ui/back-button/back-button';
import TotalPrice from '../../shared/ui/total-price/total-price';

function OrderConfirmation() {
  const [activeTab, setActiveTab] = useState('cash');
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrder(id));
  }, [dispatch, id]);

  const newOrder = useSelector((store) => store.createOrder.order);
  const carType = useSelector((state) => getCarTypeTitle(state, newOrder));
  const tariff = useSelector((state) => getPlanTitle(state, newOrder));

  const updateOrderStatus = useCallback(() => {
    setIsLoading(true);
    try {
      dispatch(updateOrder({ id, status: 'Активный' })).unwrap();
      navigate(`/success-order/${id}`, { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, id, navigate]);

  return (
    <main className="order-confirmation">
      <div className="order-confirmation__back-button">
        <BackButton />
      </div>
      <PagesTitle title="Подтверждение заказа" />
      <form className="order-confirmation__form">
        <div className="order-confirmation__adress">
          <Input
            placeholder="Откуда забрать"
            readonly
            value={newOrder.addressFrom}
            id="referencePoint"
          />
        </div>
        <div className="order-confirmation__adress">
          <Input
            placeholder="Куда доставить"
            readonly
            value={newOrder.addressTo}
            id="arrivalPoint"
          />
        </div>
        <div className="order-confirmation__submission-time">
          <p className="order-confirmation__description">
            Примерное время <span>подачи эвакуатора</span>
          </p>
          <p
            className="order-confirmation__description"
            data-testid="timeOfArrival"
          >
            {' '}
            {String(getHours(new Date(newOrder.orderDate))).padStart(2, '0')}:
            {String(getMinutes(new Date(newOrder.orderDate))).padEnd(2, '0')}
          </p>
        </div>
        <div className="order-confirmation__payment">
          <h2 className="order-confirmation__payment-title">Способ оплаты</h2>
          <div className="order-confirmation__payment-container">
            <ChipsList
              chips={[
                { label: 'Наличные', id: 'cash' },
                { label: 'Оплата по СБП', disabled: true, id: 'byCard' },
              ]}
              value={activeTab}
              onChange={(chips) => setActiveTab(chips)}
            />
          </div>
        </div>
        <OrderDetails
          tariff={tariff}
          carType={carType}
          wheelLock={newOrder.wheelLock}
          towin={newOrder.towin ? 'Да' : 'Нет'}
          delay={newOrder.delay ? 'Да' : 'Нет'}
          comment={newOrder.comment}
        />
        <div className="order-confirmation__price">
          <TotalPrice
            total={newOrder.total}
            isButtonActive
            onClick={() => updateOrderStatus()}
            isLoading={isLoading}
          />
        </div>
      </form>
    </main>
  );
}

export default OrderConfirmation;
