import React from "react";
import Login from "./page/Login"
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./page/Signup";
import Home from "./page/Home"
import Product from "./page/Product";
import Pin from "./page/Pin";
import Sample from "./page/Sample";
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Product" element={<Product/>}/> 
      <Route path="/Pin" element={<Pin/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Sample" element={<Sample/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;