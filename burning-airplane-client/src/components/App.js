import {Routes, Route} from 'react-router-dom';
import Airplane from './Airplane';
import Flights from './Flights';
import Search from './Search';
import Flight from './Flight';
import {Link} from 'react-router-dom';
import '../App.css';

function App() {
  return (
    <div className="App">
      <div className='Nav'>
        <Link to="/airplanes">Planes</Link>
        <Link to="/flights">Flights</Link>
        <Link to="/search">Search</Link>
      </div>
      <Routes>
        <Route path="/search" element={<Search/>}/>
        <Route path="/airplanes" element={<Airplane/>}/>
        <Route path="/flights" element={<Flights/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/flights/:id" element={<Flight/>}/>
      </Routes>

    </div>
  );
}


export default App;
