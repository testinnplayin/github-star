require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import RepositoryList from './components/repository-list';

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<RepositoryList />, document.getElementById('app'));
);