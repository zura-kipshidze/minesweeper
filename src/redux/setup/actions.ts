export const actionTypes = {
	SETUP_START: 'SETUP_START',
	SETUP_ERROR: 'SETUP_ERROR',
	START_NEW_GAME: 'START_NEW_GAME',
	SET_LEVEL: 'SET_LEVEL',
	SET_MAP: 'SET_MAP',
	SET_IS_USER_ALIVE: 'SET_IS_USER_ALIVE',
	SET_IS_USER_A_WINNER: 'SET_IS_USER_A_WINNER',
	OPEN_CELL: 'OPEN_CELL',
};

export const startSetup = () => {
	return {
		type: actionTypes.SETUP_START,
	}
};

export const startNewGame = () => {
	return {
		type: actionTypes.START_NEW_GAME,
	}
};

export const setIsUserAlive = (payload: boolean) => {
	return {
		type: actionTypes.SET_IS_USER_ALIVE,
		payload,
	}
};

export const setIsUserAWinner = (payload: boolean) => {
	return {
		type: actionTypes.SET_IS_USER_A_WINNER,
		payload,
	}
};

export const setLevel = (payload: number) => {
	return {
		type: actionTypes.SET_LEVEL,
		payload,
	}
};

export const setMap = (payload: string) => {
	return {
		type: actionTypes.SET_MAP,
		payload,
	}
};

export const openCell = (payload: {cellIndex: number, rowIndex: number}) => {
	return {
		type: actionTypes.OPEN_CELL,
		payload,
	}
};
