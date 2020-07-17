import { SUCCESS_TOP_GIPHY, SUCCESS_FIND_RESULT } from '../actions/fetchTopGiphy';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
	switch (type) {
		case SUCCESS_TOP_GIPHY: {
			return Object.assign({}, state, payload);
		}
		case SUCCESS_FIND_RESULT: {
			if (!payload.data.length) {
				return [];
			}
			return Object.assign({}, state, payload);
		}
		default:
			return state;
	}
}

export default reducer;
