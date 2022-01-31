import { useRef, useCallback } from 'react'
import { Container, Grid, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SingleJob from './SingleJob'
import SkeletonJobResult from './SkeleteonJobResult'
import SearchBar from './SearchBar'
import JobFilters from './JobFilters'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataAction, startLoadingAction, updateSearchQueryAction } from '../redux/actions'

export default function JobResults() {

  const dispatch = useDispatch()
  const searchQuery = useSelector(state => state.jobs.searchQuery)
  const favouriteJobs = useSelector(state => state.favourites.jobs)
  const categories = useSelector(state => state.jobs.categories[0])
  const jobsData = useSelector(state => state.jobs.data)
  const fetchLoading = useSelector(state => state.jobs.fetchLoading)
  const fetchError = useSelector(state => state.jobs.fetchError)
  const hasMoredata = useSelector(state => state.jobs.moreDataToFetch)

  const [skipQty, setSkipQty] = useState(0)
  const [page, setPage] = useState(1)

  const limit = 24
  const navigate = useNavigate()

  const observer = useRef()
  const jobNearEndRef = useCallback(node => {
    if (fetchLoading) return 
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMoredata) {
        setPage(page => page + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [fetchLoading, hasMoredata])

  const params = `search=${searchQuery}&category=${categories || ''}&limit=${limit}&skip=${skipQty}`

  useEffect(() => {
    dispatch(startLoadingAction())
    dispatch(fetchDataAction(params))
  }, [searchQuery, categories, skipQty])

  useEffect(() => {
    setSkipQty(limit * (page - 1))
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
          (fetchLoading && page === 1) && [1, 2, 3, 4, 5, 6].map(num => (
            <Grid item  key={num} xs={12} md={6}>
              <SkeletonJobResult />
            </Grid>
          ))
        }
        {
          jobsData && jobsData.map((job, idx) => {
            if (idx === 16) {
              return (
                <Grid item ref={jobNearEndRef}  key={job._id} xs={12} md={6}>
                  <SingleJob job={job} />
                </Grid>
            )
            } else {
              return (
                <Grid item  key={job._id} xs={12} md={6}>
                 <SingleJob job={job} />
                </Grid>
            )
          }
          })
        }
        </Grid>
    </Container>
  )
}