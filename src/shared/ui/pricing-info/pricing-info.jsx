import React from 'react';
import InfoIcon from '../icons/info-icon';
import './pricing-info.scss';
// import getInfoForPricing from "../../utils/price-info";

function PricingInfo({ info, isActive }) {
  // const selectedPricingInfo  = getInfoForPricing(selectedPricingId);

  return isActive ? (
    <div className="pricing-info">
      <div className="pricing-info__image">
        <InfoIcon min-width="16px" height="16px" />
      </div>
      <p className="pricing-info__text">{info}</p>
    </div>
  ) : null;
}

export default PricingInfo;
