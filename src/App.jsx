import { useState } from 'react'
import './App.css'
import { AuthProvider } from './contexts/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Signup from './Pages/Singup/Signup'
import Dashboard from './Pages/Dashboard/Dashboard'
import { PrivateOutlet } from './Components/PrivateOutlet/PrivateOutlet'
import Errorpage from './Components/NotFound/NotFound'



function App() {


  return (
    <>
      <AuthProvider>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="*" element={<Errorpage/>}/>
    
    <Route path="/" element={<PrivateOutlet/>}>
    
     <Route path="/dashboard" element={<Dashboard/>}/>
    </Route>
   
   </Routes>
   </AuthProvider>
    </>
  )
}

export default App
