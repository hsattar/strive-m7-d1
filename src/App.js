import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CompanyJobs from './components/CompanyJobs'
import Home from './components/Home'
import JobDetails from './components/JobDetails'
import JobResults from './components/JobResults'
import Navbar from './components/Navbar'

export default function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('')
  
  const handleChange = query => {
    setSearchQuery(query)
  }

  const handleCategory = category => {
    setCategory(category)
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home searchQuery={searchQuery} handleChange={handleChange} /> } />
        <Route path="/jobs" element={ <JobResults searchQuery={searchQuery} handleChange={handleChange} category={category} handleCategory={handleCategory} /> } />
        <Route path="/jobs/:jobId" element={ <JobDetails /> } />
        <Route path="/company/:companyName" element={ <CompanyJobs searchQuery={searchQuery} handleChange={handleChange} /> } />
      </Routes>
    </Router>
  )
}