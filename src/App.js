import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Home/>
      <Footer/>
    </BrowserRouter>
  )
}
