import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'
import Signin from './Signin'
import Sliderone from './Sliderone'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Sliderone/>}></Route>
          <Route exact path="/Home" element={<Home/>}></Route>
          <Route exact path="/Signup" element={<Signup/>}></Route>
          <Route exact path="/Signin" element={<Signin/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
