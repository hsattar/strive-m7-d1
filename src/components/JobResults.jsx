import { Container, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import SingleJob from './SingleJob'

export default function JobResults() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [limit, setLimit] = useState(25)
  const [page, setPage] = useState(1)

  const [searchParams, setSearchParams] = useSearchParams()

  const { data: jobData, loading: jobLoading, error: jobError, fetchData } = useFetch(`query=${searchParams.get('query')}&limit=${limit}`)

  useEffect(() => {
    setData(jobData)
    setLoading(jobLoading)
    setError(jobError)
  }, [jobData, jobLoading, jobError])

  return (
    <Container maxWidth="xl" style={{ marginTop: '3rem'}}>
      <h2>Showing results for {searchParams.get('query')}</h2>
      <Grid container spacing={2} style={{ marginTop: '0.5rem'}}>
      {
        data && data.map(job => (
          <Grid item  key={job._id} xs={12} md={6}>
            <SingleJob />
          </Grid>
        ))
      }
      </Grid>
    </Container>
  )
}
