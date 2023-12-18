import { useCallback } from 'react';
import Pricing from '../../../shared/ui/pricing/pricing';

/**
 * @param {Array} pricings - Chip component array
 * @param {function} onActivate - callback-function
 * @param {string} value - value of the Chip component
 * @param {function} onChange - (e: string) => void - tracks id changes
 */
function getInfoForPricing(pricingId) {
  switch (pricingId) {
    case 1:
      return 'Предоставляется стандартный эвакуатор, способный перевозить легковые и некрупные автомобили.';
    case 2:
      return 'Используется специальный эвакуатор, обеспечивающий быструю перевозку с минимальными задержками.';
    case 3:
      return 'Предназначен для перевозки крупногабаритных и специальных автомобилей, требующих особых условий и оборудования.';
    default:
      return '';
  }
}

function PricingList({ pricings, onActivate, value, onChange }) {
  const onPricingActivation = useCallback(
    (id) => {
      onChange(id);
    },
    [onActivate]
  );

  const pricingsWithInfo = pricings.map((pricing) => ({
    ...pricing,
    info: getInfoForPricing(pricing.id),
  }));

  return (
    <>
      {pricingsWithInfo.map((pricing) => (
        <Pricing
          key={pricing.id}
          title={pricing.title}
          description={pricing.description}
          price={pricing.price}
          info={pricing.info}
          isActive={value === pricing.id}
          setActive={() => onPricingActivation(pricing.id)}
        />
      ))}
    </>
  );
}

export default PricingList;
