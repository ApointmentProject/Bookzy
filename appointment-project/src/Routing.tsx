import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AuthTabs from './pages/AuthTabs'
import UserProfile from './pages/UserProfile'
import TermsAndPolitics from './pages/TermsAndPolitics'
import PrivacyPolicy from './pages/PrivacyPolicy'
import DataDeletion from './pages/DataDeletion'
import About from './pages/About'
import AditionalInformation from './components/forms/AditionalInformation'
import AdminDashboard from './pages/AdminDashboard'

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<AuthTabs />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/terms" element={<TermsAndPolitics />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
        <Route path="/register" element={<AditionalInformation />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}
