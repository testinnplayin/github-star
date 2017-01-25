import React from 'react';

import Repository from './repository';

expert default class RepositoryList extends React.Component {
	constructor(props) {
		super(props);

		this.addRepository = this.addRepository.bind(this);
	}

	addRepository() {
		const repositoryName = this.repositoryNameInput.value;
	}

	render() {
		<div className="repository-list">
			{repositories}
			<input type="text" ref={ref => this.repositoryNameInput = ref} />
			<button type="button" onClick={this.addRepository}>
				Add repository
			</button>
		</div>
	};
};
