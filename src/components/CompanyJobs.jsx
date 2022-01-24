import { Container, Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import SingleJob from './SingleJob'

export default function CompanyJobs() {


    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const { companyName } = useParams()

    const { data: companyData, loading: companyLoading, error: companyError } = useFetch(`company=${companyName}&limit=24`)

    useEffect(() => {
        setData(companyData)
        setLoading(companyLoading)
        setError(companyError)
    }, [companyData, companyLoading, companyError])

    return (
        <Container maxWidth="xl" style={{ margin: '3rem 0'}}>
      <h2>{companyName}</h2>
      <Grid container spacing={2} style={{ marginTop: '0.5rem'}}>
      {
        data && data.map(job => (
          <Grid item  key={job._id} xs={12} md={6}>
            <SingleJob job={job} />
          </Grid>
        ))
      }
      </Grid>
    </Container>
    )
}
