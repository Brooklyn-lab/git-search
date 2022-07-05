import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {ROUTES} from './constants';
import MainPage from './pages/main-page/main-page';
import ErrorPage from './pages/error-page/error-page';
import Layout from './components/layout/layout';
import UserPage from './pages/user-page/user-page';
import './App.scss';

function App() {
	return (
		<Routes>
			<Route path={ROUTES.Main} element={<Layout/>}>
				<Route index element={<MainPage/>}/>
				<Route path={ROUTES.User} element={<UserPage />}/>
			</Route>
			<Route path='*' element={<ErrorPage/>}/>
		</Routes>
	);
}

export default App;
