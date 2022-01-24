import { Container, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import SingleJob from './SingleJob'
import SkeletonJobResult from './SkeleteonJobResult'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import SearchBar from './SearchBar'

export default function JobResults({ searchQuery, handleChange }) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [limit, setLimit] = useState(24)
  const [skip, setSkip] = useState(0)
  const [page, setPage] = useState(1)

  const params = searchQuery ? `query=${searchQuery}&limit=${limit}&skip=${skip}` : `limit=${limit}&skip=${skip}`

  const { data: jobData, loading: jobLoading, error: jobError, fetchData } = useFetch(params)

  useEffect(() => {
    setData(jobData)
    setLoading(jobLoading)
    setError(jobError)
  }, [jobData, jobLoading, jobError])

  useEffect(() => {
    const skipQty = limit * (page - 1)
    setSkip(skipQty)
  }, [page])

  return (
    <Container maxWidth="xl" style={{ margin: '3rem 0'}}>
      <Grid container>
          <Grid item xs={12}>
            <SearchBar searchQuery={searchQuery} handleChange={handleChange} />
          </Grid>
      </Grid>
      <Typography variant="h4" style={{ marginTop: "1rem" }} >Showing results for {searchQuery}</Typography>
      <Grid container spacing={2} style={{ marginTop: '0.5rem'}}>
      {
        loading && [1, 2, 3, 4, 5, 6].map(num => (
          <Grid item  key={num} xs={12} md={6}>
            <SkeletonJobResult />
          </Grid>
        ))
      }
      {
        data && data.map(job => (
          <Grid item  key={job._id} xs={12} md={6}>
            <SingleJob job={job} />
          </Grid>
        ))
      }
      {
        data && (
          <div style={{ margin: '1rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ButtonGroup disableElevation variant="contained">
              { page === 1 ? <Button disabled>Prev</Button> : <Button onClick={() => setPage(page => page - 1)}>Prev</Button> }
              { data?.length === limit ? <Button onClick={() => setPage(page => page + 1)}>Next</Button> : <Button disabled>Next</Button> }
            </ButtonGroup>
          </div>
        )
      }
      </Grid>
    </Container>
  )
}
