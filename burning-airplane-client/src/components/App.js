import {Routes, Route} from 'react-router-dom';
import Airplane from './Airplane';
import CreateFlights from './CreateFlights';
import Search from './Search';
import SearchForm from './SearchForm';
import Flight from './Flight';
import {Link} from 'react-router-dom';
import '../App.css';

function App() {
  return (
    <div className="App">
      <div className='Nav'>
        <Link to="/airplanes">Planes</Link>
        ||||||
        <Link to="/createflights">Create Flights</Link>
        ||||||
        <Link to="/search">Search</Link>
      </div>
      <Routes>
        <Route path="/search" element={<Search/>}/>
        <Route path="/airplanes" element={<Airplane/>}/>
        <Route path="/createflights" element={<CreateFlights/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/flight/:id" element={<Flight/>}/>
      </Routes>

    </div>
  );
}


export default App;
