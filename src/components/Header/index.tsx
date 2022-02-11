import { useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Check from '@mui/icons-material/Check';

import { setLevel, startNewGame } from '../../redux/setup/actions';
import { getLevel } from '../../redux/setup/selectors';

const menus = [
	{text: 'Beginner', level: 1},
	{text: 'Intermediate', level: 2},
	{text: 'Expert', level: 3},
	{text: 'Senior', level: 4},
];

const Header = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const level = useSelector(getLevel);
	const open = Boolean(anchorEl);
	const dispatch = useDispatch();

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleNewGameClick = () => {
		dispatch(startNewGame());
		handleClose();
	}

	return (
		<div>
			<Button
				onClick={handleClick}
				variant="contained"
			>
				Game
			</Button>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuList dense>
					<MenuItem disabled={!level} onClick={handleNewGameClick}>
						<ListItemText inset>New</ListItemText>
					</MenuItem>
					<Divider/>
					{
						menus.map(menu => (
							<MenuItem key={menu.text} onClick={() => dispatch(setLevel(menu.level))}>
								{
									level === menu.level && <ListItemIcon>
										<Check/>
									</ListItemIcon>
								}
								<ListItemText inset={level !== menu.level}>{menu.text}</ListItemText>
							</MenuItem>
						))
					}
				</MenuList>
			</Menu>
		</div>
	)
}

export default Header;