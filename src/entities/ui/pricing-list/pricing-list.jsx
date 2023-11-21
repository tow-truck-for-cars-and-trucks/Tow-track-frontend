import { useCallback } from 'react';
import Pricing from '../../../shared/ui/pricing/pricing';

/**
 * @param {Array} pricings - Chip component array
 * @param {function} onActivate - callback-function
 * @param {string} value - value of the Chip component
 * @param {function} onChange - (e: string) => void - tracks id changes
 */
function PricingList({ pricings, onActivate, value, onChange }) {
  const onPricingActivation = useCallback(
    (id) => {
      onChange(id);
    },
    [onActivate]
  );

  return (
    <>
      {pricings.map((pricing) => (
        <Pricing
          title={pricing.title}
          description={pricing.description}
          price={pricing.price}
          isActive={value === pricing.id}
          setActive={() => onPricingActivation(pricing.id)}
        />
      ))}
    </>
  );
}

export default PricingList;
