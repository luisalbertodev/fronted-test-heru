import { API_KEY } from '../../constants/Constans';

export const START_TOP_GIPHY = 'START_TOP_GIPHY';
export const SUCCESS_TOP_GIPHY = 'SUCCESS_TOP_GIPHY';
export const START_FIND_RESULT = 'START_FIND_RESULT';
export const SUCCESS_FIND_RESULT = 'SUCCESS_FIND_RESULT';

const startGetTopGiphy = (payload) => ({
	type: START_TOP_GIPHY,
	...payload,
});

const succesGetTopGiphy = (payload) => ({
	type: SUCCESS_TOP_GIPHY,
	payload,
});

export const fetchTopGiphy = (payload) => {
	return (dispatch) => {
		dispatch(startGetTopGiphy());

		fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=125&rating=g`)
			.then((res) => res.json())
			.then((result) => dispatch(succesGetTopGiphy(result)));
	};
};

const startFindResults = (payload) => ({
	type: START_FIND_RESULT,
	...payload,
});

const succesFindResults = (payload) => ({
	type: SUCCESS_FIND_RESULT,
	payload,
});

export const fetchFindGiphy = ({ payload }) => {
	return (dispatch) => {
		dispatch(startFindResults());

		fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${payload}&limit=25&offset=0&rating=g&lang=en`)
			.then((res) => res.json())
			.then((result) => dispatch(succesFindResults(result)));
	};
};
