import {useParams} from 'react-router';
import {useEffect} from 'react';
import User from '../../components/user/user';
import {useAppDispatch} from '../../store/store';
import {searchNameValue} from '../../store/users/usersSlice';
import {fetchUser} from '../../store/users/api-actions';

function UserPage(): JSX.Element {
	const {id} = useParams();
	const dispatch = useAppDispatch();
	
	useEffect(() => {
		dispatch(searchNameValue(''));
	})
	
	useEffect(() => {
		dispatch(fetchUser(String(id)))
	}, [id])
	
	return (<User/>)
}

export default UserPage;
