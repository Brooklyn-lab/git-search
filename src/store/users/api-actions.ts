import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, AppState} from '../store';
import {AxiosInstance} from 'axios';
import {getUsers, getUser, getRepos, loading} from './usersSlice';
import {Data, Repo, User} from '../../types/user';

export const fetchUsers = createAsyncThunk<void,
	string,
	{
		dispatch: AppDispatch
		state: AppState
		extra: AxiosInstance
	}>('users/fetchUsers',
	async (name, {dispatch, extra: api}) => {
		try {
			const {data} = await api.get<Data>(`/search/users?q=${name} in:login type:user`)
			dispatch(getUsers(data))
		} catch (error) {
			console.error(error)
		}
	},
);

export const fetchUser = createAsyncThunk<void,
	string,
	{
		dispatch: AppDispatch
		state: AppState
		extra: AxiosInstance
	}>('users/fetchUser',
	async (name, {dispatch, extra: api}) => {
		try {
			dispatch(loading(true))
			const [{data: user}, {data: repos}] = await Promise.all([
				api.get<User>(`/users/${name}`),
				api.get<Repo[]>(`/users/${name}/repos`),
			]);
			dispatch(getUser(user));
			dispatch(getRepos(repos));
			dispatch(loading(false))
		} catch (error) {
			console.error(error)
		}
	},
);
