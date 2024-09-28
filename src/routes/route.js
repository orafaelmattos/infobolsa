import { Routes, Route } from 'react-router-dom';

import Main from '../pages/Main/index'

function RoutesApp(){
	return(
		<Routes>
			<Route path='/' element = { <Main/> } />
		</Routes>
	)
}

export default RoutesApp;