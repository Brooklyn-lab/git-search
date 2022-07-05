import {ChangeEvent, useEffect} from 'react';
import {generatePath, Link} from 'react-router-dom';
import {ROUTES} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {fetchUsers} from '../../store/users/api-actions';
import {searchNameValue, getUsers} from '../../store/users/usersSlice';
import './users-list.scss';

function UsersList(): JSX.Element {
	const dispatch = useAppDispatch();
	const {users, search} = useAppSelector(({users}) => users);
	
	useEffect(() => {
		if (search.length > 0) {
			dispatch(fetchUsers(search))
		}
	}, [search])
	
	const searchHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		if (evt.target.value.length !== 0) {
			dispatch(searchNameValue(evt.target.value));
		} else {
			dispatch(getUsers(null))
			dispatch(searchNameValue(''))
		}
	};
	
	return (
		<>
			<input
				type='text'
				name='search'
				className='search__input'
				onChange={searchHandler}
				value={search}
				placeholder='Search for Users'
			/>
			<div className='users'>
				{(users) ?
					users.map((user) => (
						<Link
							className='users__link'
							to={generatePath(ROUTES.User, {id: user.login})}
							key={user.id}
						>
							<div className='users__item'>
								<div className='users__item-content'>
									<div className='users__item-avatar'>
										<img src={user.avatar_url} alt=''/>
									</div>
									<h2 className='users__item-name'>{user.login}</h2>
								</div>
								<p className='users__item-repo'>Repo: </p>
							</div>
						</Link>
					))
					: ''
				}
			</div>
		</>
	)
}

export default UsersList;
