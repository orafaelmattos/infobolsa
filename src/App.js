import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes/route';

function App() {
  return (
    <BrowserRouter>
			<RoutesApp/>
		</BrowserRouter>
  );
}

export default App;
