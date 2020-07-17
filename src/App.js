import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
	return (
		<Provider store={store()}>
			<Router>
				<Switch>
					<Route exact path="/" component={Main} />
				</Switch>
			</Router>
		</Provider>
	);
};
