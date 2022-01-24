import { Container, Grid, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import SearchBar from './SearchBar'
import SingleJob from './SingleJob'
import SkeletonJobResult from './SkeleteonJobResult'

export default function CompanyJobs({ searchQuery, handleChange }) {


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
            <Grid container>
                <Grid item xs={12}>
                    <SearchBar searchQuery={searchQuery} handleChange={handleChange} />
                </Grid>
            </Grid>
            <Typography variant="h4" style={{ marginTop: '1rem' }}>{companyName}</Typography>
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
        </Container>
    )
}
