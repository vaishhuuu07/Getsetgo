import React from 'react'
import './app.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Package from './Pages/package'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TravelForm from './Form'
import './TravelForm.css';

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
                <Footer />
              </>
            }
          />
          <Route
            path="/package"
            element={
              <Package />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;