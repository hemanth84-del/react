import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'primeicons/primeicons.css';
import Footer from './Components/Footer/Footer';
import Home  from './Components/Home/Home';
import Tools from './Components/Tools/Tools';
import Pricing from './Components/Pricing/Pricing';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
     {/* <Footer/> */}
     {/* <Home/> */}
    
    {/* <Tools/>   */}
    {/* <Footer/> */}
    {/* <Pricing/> */}
    {/* <Login/> */}
    <BrowserRouter>
      <Routes>
        <Route >
          <Route index element={<Home/>} />
          {/* <Route path='/home' element={<Home/>} /> */}
          <Route path="/tools" element={<Tools/>} />
          <Route path="/pricing" element={<Pricing/>} /> 
          <Route path="/log" element={<Login/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
