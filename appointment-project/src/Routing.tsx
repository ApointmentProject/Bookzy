import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AuthTabs from './pages/AuthTabs'
import UserProfile from './pages/UserProfile'

export default function Routing() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthTabs />} />
            <Route path="/profile" element={<UserProfile />} />
        </Routes>
    </Router>
  )
}
