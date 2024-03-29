import './create-order.scss';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useYMaps } from '@pbe/react-yandex-maps';
import { useCallback, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addressFormSchema } from '../../../shared/schema/schema';
import { getLocalStorageToken } from '../../../shared/api/storage-api';
import { getOrderPrice } from '../model/total-price-slice';
import { togglePreloader } from '../model/price-preloader-slice';
import { placeAnOrder, saveTemporaryOrder } from '../model/create-order-slice';
import {
  setPopupsOpen,
  setPopupsClose,
} from '../../../shared/ui/popup/model/popup-slice';
import { getAddressHints } from '../model/address-hints-slice';
import useWindowSize from '../../../entities/hooks/useWindowSize';
import Input from '../../../shared/ui/input/input';
import NavigationArrowIcon from '../../../shared/ui/icons/navigation-arrow-icon';
import Description from '../../../shared/ui/description/description';
import ButtonToggle from '../../../shared/ui/button-toggle/buttonToggle';
import PricingList from '../../../entities/ui/pricing-list/pricing-list';
import ChipsList from '../../../entities/ui/chips-list/chips-list';
import Comment from '../../../shared/ui/comment/comment';
import PopupDeferredOrder from '../../popup-deferred-order/popup-deferred-order';
import TotalPrice from '../../../shared/ui/total-price/total-price';
import ButtonCounterController from '../../../entities/ui/button-counter-controller/button-counter-controller';
import MainMap from '../../../entities/ui/main-map/main-map';
import AddressDropdown from '../../address-dropdown/address-dropdown';
import MarkerIcon from '../../../shared/ui/icons/marker-icon';
import PopupMap from '../../../entities/ui/popup-map/popup-map';
import mapPointA from '../../../assets/images/pin_point-A.svg';
import mapPointB from '../../../assets/images/pin_point-B.svg';

function CreateOrder() {
  const ymaps = useYMaps([
    'Map',
    'route',
    'GeoObject',
    'geolocation',
    'geocode',
    'multiRouter.MultiRoute',
  ]);

  const [coordinates, setCoordinates] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isAddressFromDropdown, setIsAddressFromDropdown] = useState(false);
  const [isAddressToDropdown, setIsAddressToDropdown] = useState(false);

  const allPricing = useSelector((store) => store.allPricing.tariff);
  const allCars = useSelector((store) => store.allCars.carType);
  const totalPrice = useSelector((store) => store.totalPrice.price);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const timerRef = useRef(null);

  const addressFromRef = useRef();
  const addressToRef = useRef();

  function calculatePrice(order) {
    dispatch(togglePreloader());
    dispatch(getOrderPrice(order));
  }

  const handleAddressHints = useCallback(
    (address) => {
      dispatch(getAddressHints(address));
    },
    [dispatch]
  );

  const createOrder = useCallback(
    async (order) => {
      setIsLoading(true);
      if (getLocalStorageToken()) {
        try {
          const data = await dispatch(placeAnOrder(order)).unwrap();
          navigate(`/order/${data.id}`);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      } else {
        dispatch(saveTemporaryOrder(order));
        navigate('/register?mode=login');
      }
    },
    [location, navigate]
  );

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

  const isButtonValid = !(errors.addressFrom || errors.addressTo);

  useEffect(() => {
    const subscription = watch(({ addressFrom, addressTo }) => {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        handleSubmit(calculatePrice).apply(this);

        const multiRoute = new ymaps.multiRouter.MultiRoute(
          {
            referencePoints: [addressFrom, addressTo],
          },
          {
            wayPointStartIconLayout: 'default#image',
            wayPointStartIconImageHref: mapPointA,
            wayPointStartIconImageSize: [44, 52],
            wayPointFinishIconLayout: 'default#image',
            wayPointFinishIconImageHref: mapPointB,
            wayPointFinishIconImageSize: [44, 52],
            routeActiveStrokeWidth: 4,
            routeActiveStrokeColor: '#BEBEBF',
            boundsAutoApply: true,
            zoomMargin: 10,
          }
        );

        setCoordinates(multiRoute);
      }, 1000);
    });
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch, ymaps]);

  useEffect(() => {
    const handleFocus = (e) => {
      if (
        addressFromRef.current &&
        !addressFromRef.current.contains(e.relatedTarget)
      )
        setIsAddressFromDropdown(false);
      if (
        addressToRef.current &&
        !addressToRef.current.contains(e.relatedTarget)
      )
        setIsAddressToDropdown(false);
    };

    document.addEventListener('focusout', handleFocus);
    return () => document.removeEventListener('focusout', handleFocus);
  }, [setIsAddressFromDropdown, addressFromRef, addressToRef]);

  const { width } = useWindowSize();

  return (
    <div className="create-order" data-testid="createOrder">
      <div className="create-order__content">
        <div>
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
                    onChange={(e) => {
                      onChange(e);
                      handleAddressHints(e);
                      if (e !== '') setIsAddressFromDropdown(true);
                    }}
                    id="addressFrom"
                    autoComplete="off"
                    inputСontainerRef={addressFromRef}
                  />
                )}
              />
              <AddressDropdown
                isActive={isAddressFromDropdown}
                setIsActive={setIsAddressFromDropdown}
                onChange={({ label: address }) => {
                  setValue('addressFrom', address);
                }}
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
                    onChange={(e) => {
                      onChange(e);
                      handleAddressHints(e);
                      if (e !== '') setIsAddressToDropdown(true);
                    }}
                    id="addressTo"
                    autoComplete="off"
                    inputСontainerRef={addressToRef}
                  />
                )}
              />
              <AddressDropdown
                isActive={isAddressToDropdown}
                setIsActive={setIsAddressToDropdown}
                onChange={({ label: address }) => {
                  setValue('addressTo', address);
                }}
              />
            </div>
            <div className="create-order__check-map">
              <button
                type="button"
                className="create-order__map-button"
                onClick={() => {
                  dispatch(setPopupsOpen('popup-map'));
                }}
              >
                <div className="create-order__icon">
                  <MarkerIcon width="20px" height="20px" />
                </div>
                <span className="create-order__text">Проверить на карте</span>
              </button>
            </div>
            {width < 768 ? (
              <PopupMap
                coordinates={coordinates}
                onFromChange={(v) => {
                  setValue('addressFrom', v);
                }}
                onToChange={(v) => {
                  setValue('addressTo', v);
                }}
              />
            ) : null}
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
            <div className="create-order__container">
              <div className="create-order__ditch">
                <Controller
                  name="wheelLock"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <ButtonCounterController
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="create-order__ditch">
                <Description
                  title="Кюветные работы"
                  subtitle="Сложность доступа"
                />
                <div className="create-order__button">
                  <Controller
                    name="towin"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <ButtonToggle
                        id="towin"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </div>
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
            <div className="create-order__ditch create-order__ditch_container">
              <Description
                title="Отложенный заказ"
                subtitle="Выберите день и время"
              />
              <div className="create-order__button">
                <Controller
                  name="delay"
                  control={control}
                  render={({ field: { value } }) => (
                    <ButtonToggle
                      id="delay"
                      value={value}
                      onChange={(toggle) => {
                        if (toggle) {
                          dispatch(setPopupsOpen('popup-deffered-order'));
                        } else {
                          setValue('delay', false);
                        }
                      }}
                    />
                  )}
                />
              </div>
            </div>
            <PopupDeferredOrder
              onClose={() => {
                setValue('delay', false);
              }}
              onSave={(date) => {
                setValue('orderDate', date);
                setValue('delay', true);
                dispatch(setPopupsClose('popup-deffered-order'));
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
                total={totalPrice || 0}
                isButtonActive={isButtonValid}
                isLoading={isLoading}
              />
            </div>
          </form>
        </div>
        {width > 768 ? (
          <div className="create-order__map">
            <MainMap
              coordinates={coordinates}
              onFromChange={(v) => {
                setValue('addressFrom', v);
              }}
              onToChange={(v) => {
                setValue('addressTo', v);
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default CreateOrder;
