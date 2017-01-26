import React from 'react';
import {connect} from 'react-redux';

import StarRater from './star-rater';
import * as actions from '../actions/index';

export class Repository extends React.Component {
	constructor(props) {
		super(props);
		this.changeRating = this.changeRating.bind(this);
	}

	changeRating(rating) {
		this.props.dispatch(
			actions.rateRepository(this.props.repository.name, rating);
		);
	}
};

function StarRater(props) {
	const stars = [];

	for (let i = 0; i < 5; i++) {
		let className;

		if (i < props.rating) {
			className = 'fa fa-star';
		} else {
			className = 'fa fa-star-o';
		}

		const star = (
			<i className={className} key={i}
				onClick={props.onChange.bind(null, i + 1)}>
				</i>
		);

		stars.push(star);
	}

	return (
		<span className="star-rater">
			{stars}
		</span>
	);
}

StarRater.defaultProps = {
	rating: 0
};

export default StarRater;