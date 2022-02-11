import { all } from 'redux-saga/effects';

import watchSetup from './setup/saga';

export default function* rootSaga() {
	yield all([
		watchSetup(),
	]);
}
