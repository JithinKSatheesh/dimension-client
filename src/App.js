
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Notfound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="*" element={ <Notfound/> } />
      </Routes>
    </div>
  );
}

export default App;

