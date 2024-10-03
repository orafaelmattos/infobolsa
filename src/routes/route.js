import { Routes, Route } from 'react-router-dom';

import Main from '../pages/Main/index';
import Cotacao from '../pages/Cotações';
import Cripto from '../pages/Cripto';
import Bolsa from '../pages/Bolsa';

function RoutesApp(){
	return(
		<Routes>
			<Route path='/' element = { <Main/> } />
			<Route path='/cotacao' element = { <Cotacao/> } />
			<Route path='/bolsa' element = { <Bolsa/> } />
			<Route path='/cripto' element = { <Cripto/> } />
		</Routes>
	)
}

export default RoutesApp;