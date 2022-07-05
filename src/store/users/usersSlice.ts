import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UsersInitialState} from './types';
import {Data, Repo, User} from '../../types/user';

const initialState: UsersInitialState = {
	users: [],
	user: null,
	repos: [],
	search: '',
	isLoading: false,
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getUsers: (state, action: PayloadAction<Data | null>) => {
			state.users = (action.payload) ? action.payload.items : null;
		},
		searchNameValue: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		getUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
		getRepos: (state, action: PayloadAction<Repo[]>) => {
			state.repos = action.payload;
		},
		loading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	}
})

export const {
	getUsers,
	searchNameValue,
	getUser,
	getRepos,
	loading,
} = usersSlice.actions;
