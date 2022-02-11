import { combineReducers } from '@reduxjs/toolkit';

import setupReducer from './setup/reducer';

const reducers = {
	setup: setupReducer,
};

export const reducer = combineReducers(reducers);
