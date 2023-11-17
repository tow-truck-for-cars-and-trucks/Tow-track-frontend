import React, { useState } from 'react';
import './questions-info.scss';
import IcPlusIcon from '../../shared/ui/icons/ic-plus-icon';
import IcMinusIcon from '../../shared/ui/icons/ic-minus-icon';
/**
 * @param {string} label - frequently asked question
 * @param {string} primary - answer to the question
 */
function QuestionInfo({ label, primary }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`question ${isOpen ? 'open' : ''}`}>
			<button
				type="button"
				className="question__button"
				onClick={toggleAccordion}
			>
				{label}
				<span className="question__icon" aria-hidden="true">
					{isOpen ? (
						<IcMinusIcon width="40px" height="40px" />
					) : (
						<IcPlusIcon width="40px" height="40px" />
					)}
				</span>
			</button>

			{isOpen && <div className="question__answer">{primary}</div>}
		</div>
	);
}

export default QuestionInfo;
