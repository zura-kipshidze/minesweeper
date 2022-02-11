import { actionTypes } from './actions';

export interface RootState {
	map: string,
	level: number,
	isUserAlive: boolean,
	isUserAWinner: boolean
}

const INITIAL_STATE = {
	map: '',
	level: NaN,
	isUserAlive: true,
	isUserAWinner: false
};

export default (state: RootState = INITIAL_STATE, action: { type: string, payload: string | boolean | number }) => {
	switch (action.type) {
		case actionTypes.SET_LEVEL:
			return {
				...state,
				level: action.payload,
			};
		case actionTypes.SET_MAP:
			return {
				...state,
				map: action.payload,
			};
		case actionTypes.SET_IS_USER_ALIVE:
			return {
				...state,
				isUserAlive: action.payload,
			};
		case actionTypes.SET_IS_USER_A_WINNER:
			return {
				...state,
				isUserAWinner: action.payload,
			};
		default:
			return state;
	}
}
