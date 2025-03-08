import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import UserProfile from './pages/UserProfile'

export default function Routing() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/profile" element={<UserProfile />} />
        </Routes>
    </Router>
  )
}
