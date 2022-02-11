import { createSelector } from 'reselect';
import { RootState } from './reducer';

const getSetup = ({setup}: { setup: RootState }) => setup;

export const getLevel = createSelector(
	getSetup,
	setup => setup.level
);

export const getMap = createSelector(
	getSetup,
	setup => setup.map
);

export const getIsUserAlive = createSelector(
	getSetup,
	setup => setup.isUserAlive
);

export const getIsUserAWinner = createSelector(
	getSetup,
	setup => setup.isUserAWinner
);
