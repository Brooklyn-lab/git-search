import {Link} from 'react-router-dom';
import {ROUTES} from '../../constants';
import './header.scss';

function Header(): JSX.Element {
	return (
		<header className='header'>
			<Link to={ROUTES.Main} className='header__title'>
				GitHub Searcher
			</Link>
		</header>
	)
}

export default Header;
