import { Container, Grid, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import SingleJob from './SingleJob'
import SkeletonJobResult from './SkeleteonJobResult'
import SearchBar from './SearchBar'
import JobFilters from './JobFilters'
import { connect } from 'react-redux'
import { updateSearchQueryAction } from '../redux/actions'

const mapStateToProps = state => ({
  searchQuery: state.jobs.searchQuery,
  favouriteJobs: state.jobs.favourites,
  categories: state.jobs.categories[0]
})

function JobResults({ searchQuery, categories }) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [limit, setLimit] = useState(24)
  const [skip, setSkip] = useState(0)
  const [page, setPage] = useState(1)

  const navigate = useNavigate()

  const params = `search=${searchQuery}&category=${categories || ''}&limit=${limit}&skip=${skip}`

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
              <Stack spacing={3}>
                <SearchBar />
                <JobFilters />
              </Stack>
          </Grid>
      </Grid>
      { (!loading && (data && data.length > 0)) && <Typography variant="h4" style={{ marginTop: "1rem" }} >Showing results for {searchQuery}</Typography> }
      { (!loading && (data && data.length === 0)) && <Typography variant="h4" style={{ marginTop: "1rem" }}>No Jobs Found</Typography> }
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
        </Grid>
        {/* TODO: ADD INFINITE SCROLL */}
    </Container>
  )
}


export default connect(mapStateToProps)(JobResults)