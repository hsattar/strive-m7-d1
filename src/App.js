import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CompanyJobs from './components/CompanyJobs'
import Home from './components/Home'
import JobDetails from './components/JobDetails'
import JobResults from './components/JobResults'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/jobs" element={ <JobResults /> } />
        <Route path="/jobs/:jobId" element={ <JobDetails /> } />
        <Route path="/company/:companyName" element={ <CompanyJobs /> } />
      </Routes>
    </Router>
  )
}