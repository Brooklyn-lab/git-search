import {useAppSelector} from '../../store/store';
import {ChangeEvent, useEffect, useState} from 'react';
import {Repo} from '../../types/user';
import './repositories.scss';

function Repositories(): JSX.Element {
	const {repos} = useAppSelector(({users}) => users);
	const [searchRepo, setSearchRepo] = useState<Repo[]>([]);
	const [searchValue, setSearchValue] = useState<string>('');

	function findAll(arr: Repo[], query: string) {
		const result: Repo[] = [];
		
		arr.forEach((el) => {
			if (el.name.toLowerCase().includes(query.toLowerCase())) {
				result.push(el);
			}
		})
		return result
	}
	
	useEffect(() => {
		if (searchValue.length > 0) {
			setSearchRepo([])
			setSearchRepo(findAll(repos, searchValue))
		} else {
			setSearchRepo(repos)
		}
	}, [searchValue]);
	
	const searchHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(evt.target.value);
	}
	
	return (
		<>
			<input
				type='text'
				name='search'
				className='search__input'
				onChange={searchHandler}
				value={searchValue}
				placeholder='Search for User`s Repositories'
			/>
			<div className='repos'>
				{searchRepo.map((repo) => (
					<a href={repo.html_url} target='_blank' key={repo.id} className='repos__link'>
						<div className='repos__item'>
							<h3 className='repos__name'>{repo.name}</h3>
							<div className='repos__about'>
								<p className='repos__text'>{repo.forks} Forks</p>
								<p className='repos__text'>{repo.stargazers_count} Stars</p>
							</div>
						</div>
					</a>
				))}
			</div>
		</>
	)
}

export default Repositories;
