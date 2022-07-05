import { format } from 'date-fns';
import {useAppSelector} from '../../store/store';
import Repositories from '../repos-list/repositories';

import './user.scss';
import Loader from '../loader/loader';

function User(): JSX.Element {
	const {user, isLoading} = useAppSelector(({users}) => users);
	
	return (
		<>
			{isLoading ?
				<Loader />
				:
				<>
					{(user) ?
						(<div className='user'>
							<div className='user__header'>
								<div className='user__wrapper'>
									<div className='user__avatar'>
										<img src={user.avatar_url} alt=''/>
									</div>
									<div className='user__about'>
										<p className='user__about-text'>UserName: {user.name}</p>
										<p className='user__about-text'>Email: {user.email}</p>
										<p className='user__about-text'>Location: {user.location}</p>
										<p className='user__about-text'>Join Date: {format(new Date(user.created_at), 'MM/dd/yyyy')}</p>
										<p className='user__about-text'>Followers: {user.followers}</p>
										<p className='user__about-text'>Following: {user.following}</p>
									</div>
								</div>
								{(user.bio) ?
									(<p className='user__about-text user__about-text_description'>{user.bio}</p>)
									: ''
								}
							</div>
							<Repositories />
						</div>)
						: ''}
				</>
			}
		</>
	)
}

export default User;
