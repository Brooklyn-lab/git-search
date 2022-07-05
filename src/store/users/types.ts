import {DataUser, Repo, User} from '../../types/user';

export type UsersInitialState = {
	users: DataUser[] | null,
	user: User | null,
	repos: Repo[],
	search: string,
	isLoading: boolean,
}
