import { useState } from 'react'
import './App.css'
import Navbar from './Header/Navbar'
import ContactInfo from './Header/ContactInfo'
import Footer from './Footer/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Gallery from './Body/Gallery/Gallery'
import Home from './Home/Home'
import AboutUs from './Body/AboutUS/AboutUs'
import Contact from './Body/Contact/Contact'
import Blog from './Body/Blog/Blog'
import BlogDisplays from './Body/Blog/BlogDisplays'
import BlogDetails from './Body/Blog/BlogDetails'

function App() {

  return (
    < >
      <ContactInfo/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogdetails' element={<BlogDetails/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
