import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Service from './components/Service.jsx'
import Menu from './components/Menu.jsx';
import Events from './components/Events.jsx';
import Scholarships from './components/Scholarships.jsx';
import Scholarship from './components/Scholarship.jsx';

const App = () => {
  return (


    <>
    <Menu/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service" element={<Service />} />
        <Route path="/events" element={<Events />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/scholarship" element={<Scholarship/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App