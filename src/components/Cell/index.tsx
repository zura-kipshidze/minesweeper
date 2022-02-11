import { memo } from 'react';

import { useStyles } from './styles';
import bomb from '../../bomb.png';

const Cell = ({data}: { data: string }) => {
	const styles = useStyles();

	switch (data) {
		case '□':
			return <div className={styles.untouchedCell}/>;
		case '*':
			return <div className={styles.bombCell}><img className={styles.bombImage} src={bomb} alt=""/></div>;
		case '0':
			return <div className={styles.cell0}/>;
		case '1':
			return <div className={styles.cell1}>{data}</div>;
		case '2':
			return <div className={styles.cell2}>{data}</div>;
		case '3':
			return <div className={styles.cell3}>{data}</div>;
		case '4':
			return <div className={styles.cell4}>{data}</div>;
		case '5':
			return <div className={styles.cell5}>{data}</div>;
		case '6':
			return <div className={styles.cell6}>{data}</div>;
		case '7':
			return <div className={styles.cell7}>{data}</div>;
		case '8':
			return <div className={styles.cell8}>{data}</div>;
		default:
			return <div className={styles.touchedCell}>{data}</div>;
	}
}

export default memo(Cell);