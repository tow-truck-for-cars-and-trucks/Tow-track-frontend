import { useCallback, useState } from 'react';
import Pricing from '../../../shared/ui/pricing/pricing';
import PricingInfo from '../../../shared/ui/pricing-info/pricing-info';
import './pricing-list.scss';
import getInfoForPricing from '../../../shared/utils/price-info';

/**
 * @param {Array} pricings - Chip component array
 * @param {function} onActivate - callback-function
 * @param {string} value - value of the Chip component
 * @param {function} onChange - (e: string) => void - tracks id changes
 */
function PricingList({ pricings, onChange }) {
  const [activePricing, setActivePricing] = useState(1);

  const onPricingActivation = useCallback(
    (id) => {
      onChange(id);
      setActivePricing(id);
    },
    [onChange]
  );

  const pricingsWithInfo = pricings.map((pricing) => ({
    ...pricing,
    info: getInfoForPricing(pricing.id),
  }));

  return (
    <div className="pricing-list">
      <div className="pricing-list__container">
        {pricingsWithInfo.map((pricing) => (
          <Pricing
            key={pricing.id}
            title={pricing.title}
            description={pricing.description}
            price={pricing.price}
            info={pricing.info}
            isActive={activePricing === pricing.id}
            setActive={() => onPricingActivation(pricing.id)}
          />
        ))}
      </div>
      {activePricing !== null && (
        <PricingInfo info={getInfoForPricing(activePricing)} />
      )}
    </div>
  );
}

export default PricingList;
