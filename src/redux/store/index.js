import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import results from '../reducers/results';
import getData from '../reducers/getData';

const reducer = combineReducers({
	// results,
	getData,
});

export default () => {
	return {
		...createStore(reducer, applyMiddleware(thunk)),
	};
};
