import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './pages/Main';
import './styles/App.css';
import './styles/Responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Main} />
			</Switch>
		</Router>
	);
};
