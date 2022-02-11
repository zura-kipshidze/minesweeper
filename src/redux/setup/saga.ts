import { eventChannel } from 'redux-saga';
import { takeLatest, put, call, take, select } from 'redux-saga/effects';

import { actionTypes, setMap, setIsUserAlive, setIsUserAWinner } from './actions';
import { getLevel } from './selectors';

const SOCKET_ENDPOINT = 'wss://hometask.eg1236.com/game1/';

let wsConnection: WebSocket | null = null;

function initWebsocket() {
	return eventChannel(emitter => {
		let ws = new WebSocket(SOCKET_ENDPOINT);
		ws.onopen = () => {
			console.log('opening...')
		}
		ws.onerror = (error) => {
			console.log('WebSocket error ' + error)
			console.dir(error)
		}
		ws.onmessage = (event) => {
			const [type, data] = event.data.split(':');

			switch (type) {
				case 'map':
					return emitter(setMap(data));
				case 'open':
					if (data === ' You lose') {
						emitter(setIsUserAlive(false));
					} else if (data === ' You win. The password for this level is') {
						emitter(setIsUserAWinner(true));
					}
					return null;
				default:
					return null;
			}
		}

		wsConnection = ws;

		return () => {
			console.log('Socket off')
		}
	})
}

export function* startSetupWorker() {
	try {
		let channel = yield call(initWebsocket);

		while (true) {
			const action = yield take(channel);
			yield put(action);
		}
	} catch (e) {
		console.log('---------e', e);
	}
}

export function* newGameWorker() {
	const level = yield select(getLevel);

	if (wsConnection) {
		yield wsConnection.send(`new ${level}`);
		yield wsConnection.send('map');

		yield put(setIsUserAlive(true));
		yield put(setIsUserAWinner(false));
	}
}

export function* openCellWorker(action: { type: string, payload: { cellIndex: number, rowIndex: number } }) {
	if (wsConnection) {
		yield wsConnection.send(`open ${action.payload.cellIndex} ${action.payload.rowIndex}`);
		yield wsConnection.send('map');
	}
}

export default function* watchSetup() {
	yield takeLatest(actionTypes.SETUP_START, startSetupWorker);
	yield takeLatest(actionTypes.START_NEW_GAME, newGameWorker);
	yield takeLatest(actionTypes.OPEN_CELL, openCellWorker);
}
