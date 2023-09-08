import React from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Package from './Pages/package'
import Hotels from './Pages/Hotels'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TravelForm from './Form'
import './TravelForm.css';
import Login from './Pages/Login'//Import the Login component
import Signup from './Pages/Signup'
import Hotelbooking from './Hotelbooking'
import Chat from './Components/Chat'

// function App(){
//   return(
//     <chat/>
//   );
// }



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              
              <>
                
              <Navbar />
              <Home />
              <Main />
              <TravelForm/>
              <Hotelbooking/>
              <Footer/>
              <Chat/>
              </>
            }
          />
          <Route
            path="/package"
            element={
              <Package />
            }
          />
           <Route
            path="/hotels"
            element={
              <>
              <Navbar />
              <Hotels />
              <Footer />
              </>
            }
          />
          <Route
            path="/Signup"
            element={
              
              <>
                
              <Navbar />
              <Signup/>
              <Footer />
              </>
            }
          />
          <Route
            path="/Login"
            element={
              
              <>
                
              <Navbar />
              <Login/>
              <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;