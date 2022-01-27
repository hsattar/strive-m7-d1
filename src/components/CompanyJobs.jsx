import { Container, Grid, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDataAction, startLoadingAction } from '../redux/actions'
import SearchBar from './SearchBar'
import SingleJob from './SingleJob'
import SkeletonJobResult from './SkeleteonJobResult'

const mapStateToProps = state => ({
    companies: state.jobs.data,
    fetchLoading: state.jobs.fetchLoading,
    fetchError: state.jobs.fetchError
})

const mapDispatchToProps = dispatch => ({
    startLoading: () => dispatch(startLoadingAction()),
    fetchData: params => dispatch(fetchDataAction(params))
})

function CompanyJobs({ startLoading, fetchData, companies, fetchLoading, fetchError }) {

    const { companyName } = useParams()
    const params = `company=${companyName}&limit=24`

    useEffect(() => {
        startLoading()
        fetchData(params)
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyJobs)