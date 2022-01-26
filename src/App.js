import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CompanyJobs from './components/CompanyJobs'
import Favourites from './components/Favourites'
import Home from './components/Home'
import JobDetails from './components/JobDetails'
import JobResults from './components/JobResults'
import Navbar from './components/Navbar'

export default function App() {

  const [category, setCategory] = useState('')
  
  const handleCategoryChange = newCategory => {
    setCategory(newCategory)
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/jobs" element={ <JobResults category={category} handleCategoryChange={handleCategoryChange} /> } />
        <Route path="/jobs/:jobId" element={ <JobDetails /> } />
        <Route path="/company/:companyName" element={ <CompanyJobs /> } />
        <Route path="/favourites" element={ <Favourites /> } />
      </Routes>
    </Router>
  )
}