import React, { useState } from 'react';
import PopupReviews from '../../entities/ui/popup-reviews/popup-reviews';

function Popups() {
  const [isActiveRewies, setIsActiveRewies] = useState(true);

  const closeAllPopups = () => {
    setIsActiveRewies(false);
  };

  return <PopupReviews isOpen={isActiveRewies} onClose={closeAllPopups} />;
}
export default Popups;
