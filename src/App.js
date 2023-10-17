import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import RoomBooking from './components/RoomBooking.jsx'
// import Menu from './components/Menu.jsx';
import Events from './components/Events.jsx';
import Scholarships from './components/Scholarships.jsx';
import Scholarship from './components/Scholarship.jsx';

const App = () => {
  return (


    <>
    
      <Routes>
        <Route exact path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/study-rooms" element={<RoomBooking/>} />
        <Route path="/events" element={<Events />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/scholarship" element={<Scholarship/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App