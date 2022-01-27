import { Container, Grid, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SingleJob from './SingleJob'
import SkeletonJobResult from './SkeleteonJobResult'
import SearchBar from './SearchBar'
import JobFilters from './JobFilters'
import { connect } from 'react-redux'
import { fetchJobsAction, startLoadingAction, updateSearchQueryAction } from '../redux/actions'

const mapStateToProps = state => ({
  searchQuery: state.jobs.searchQuery,
  favouriteJobs: state.favourites.jobs,
  categories: state.jobs.categories[0],
  jobsData: state.jobs.data,
  fetchLoading: state.jobs.fetchLoading,
  fetchError: state.jobs.fetchError
})

const mapDispatchToProps = dispatch => ({
  fetchData: params => dispatch(fetchJobsAction(params)),
  startLoading: () => dispatch(startLoadingAction)
})

function JobResults({ searchQuery, categories, fetchData, jobsData, fetchLoading, fetchError, startLoading }) {

  const [skip, setSkip] = useState(0)
  const [page, setPage] = useState(1)

  const limit = 24
  const navigate = useNavigate()

  const params = `search=${searchQuery}&category=${categories || ''}&limit=${limit}&skip=${skip}`

  useEffect(() => {
    startLoading()
    fetchData(params)
  }, [])

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
      { (!fetchLoading && (jobsData && jobsData.length > 0)) && <Typography variant="h4" style={{ marginTop: "1rem" }} >Showing results for {searchQuery}</Typography> }
      { (!fetchLoading && (jobsData && jobsData.length === 0)) && <Typography variant="h4" style={{ marginTop: "1rem" }}>No Jobs Found</Typography> }
      <Grid container spacing={2} style={{ marginTop: '0.5rem'}}>
        {
          fetchLoading && [1, 2, 3, 4, 5, 6].map(num => (
            <Grid item  key={num} xs={12} md={6}>
              <SkeletonJobResult />
            </Grid>
          ))
        }
        {
          jobsData && jobsData.map(job => (
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


export default connect(mapStateToProps, mapDispatchToProps)(JobResults)