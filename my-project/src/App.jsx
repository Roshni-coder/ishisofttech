import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Provide_services from './pages/Provide_services'
import Contact from './pages/Contact'
import Products from './pages/Products'
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/services' element={<Provide_services />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
