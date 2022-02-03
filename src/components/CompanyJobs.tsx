import { Container, Grid, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDataAction, startLoadingAction } from '../redux/actions'
import { IReduxStore } from '../types/ReduxStore'
import SearchBar from './SearchBar'
import SingleJob from './SingleJob'
import SkeletonJobResult from './SkeleteonJobResult'

function CompanyJobs() {

    const dispatch = useDispatch()
    const companies = useSelector((state: IReduxStore) => state.jobs.data)
    const fetchLoading = useSelector((state: IReduxStore) => state.jobs.fetchLoading)
    const fetchError = useSelector((state: IReduxStore) => state.jobs.fetchError)

    const { companyName } = useParams()
    const params = `company=${companyName}&limit=24`

    useEffect(() => {
        dispatch(startLoadingAction())
        dispatch(fetchDataAction(params, 24))
    }, [params])

    return (
        <Container maxWidth="xl" style={{ margin: '3rem 0'}}>
            <Grid container>
                <Grid item xs={12}>
                    <SearchBar />
                </Grid>
            </Grid>
            <Typography variant="h4" style={{ marginTop: '1rem' }}>{companyName}</Typography>
            <Grid container spacing={2} style={{ marginTop: '0.5rem'}}>
            {
                fetchLoading && [1, 2, 3, 4, 5, 6].map(num => (
                <Grid item  key={num} xs={12} md={6}>
                    <SkeletonJobResult />
                </Grid>
                ))
            }
            {
                companies && companies.map(job => (
                <Grid item  key={job._id} xs={12} md={6}>
                    <SingleJob job={job} />
                </Grid>
                ))
            }
            </Grid>
        </Container>
    )
}

export default CompanyJobs