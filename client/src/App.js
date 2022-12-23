import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import DoughnutChart from './Components/DoughnutChart';
import SignUp from './Components/Signup';
import Signin from './Components/Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sip' element = {<Home/>} />
        <Route path="/chart" element = {<DoughnutChart/>} />
        <Route path='/' element = {<SignUp/>} />
        <Route path="/login" element= {<Signin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
