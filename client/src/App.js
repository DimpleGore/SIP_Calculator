import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import DoughnutChart from './Components/DoughnutChart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path="/chart" element = {<DoughnutChart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
