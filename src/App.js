import "bootstrap/dist/css/bootstrap.min.css"
import SignUp from "./SignUp";
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import Login from "./Login";
import Home from "./Home";
import './App.css';
import Credential from "./Credential";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
      <Route path='/credential' element={<Credential/>}></Route>
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
