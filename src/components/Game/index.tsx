import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header';
import Cell from '../Cell';
import { startNewGame, startSetup, openCell } from '../../redux/setup/actions';
import { getLevel, getMap, getIsUserAlive, getIsUserAWinner } from '../../redux/setup/selectors';
import smile from '../../smile.png';
import { useStyles } from './styles';

const Game = () => {
	const dispatch = useDispatch();
	const level = useSelector(getLevel);
	const gameMap = useSelector(getMap);
	const isUserAlive = useSelector(getIsUserAlive);
	const isUserAWinner = useSelector(getIsUserAWinner);
	const styles = useStyles();

	useEffect(() => {
		dispatch(startSetup());
	}, [dispatch]);

	const handleStartNewGameClick = () => {
		if (level) {
			dispatch(startNewGame());
		}
	}

	return (
		<div className="App">
			<Header />
			{
				gameMap && (
					<div className={styles.outerContainer}>
						<div className={styles.headerContainer}>
							<div className={styles.smileButton}>
								<img
									onClick={handleStartNewGameClick}
									className={isUserAWinner ? styles.winnerImage : isUserAlive ? styles.smileImage : styles.deadSmileImage}
									src={smile}
									alt=""
								/>
							</div>
						</div>
						<div className={styles.innerContainer}>
							{
								gameMap.trim().split('\n').map((row: string, rowIndex: number) => (
									<div key={`row-${rowIndex}`} className={styles.row}>
										{
											row.split('').map((cell: string, cellIndex: number) => (
												<div key={`cell-${cellIndex}`} onClick={() => dispatch(openCell({cellIndex, rowIndex}))}>
													<Cell data={cell}/>
												</div>
											))
										}
									</div>
								))
							}
						</div>
					</div>
				)
			}
		</div>
	);
}

export default Game;